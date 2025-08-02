const User = require("../models/user-model");
const Order = require("../models/order-model");

// GET /admin/dashboard
const getAdminDashboardStats = async (req, res) => {
  try {
    console.log("Fetching dashboard for admin:", req.user?.username);

    // Total Users (excluding Admins)
    const totalUsers = await User.countDocuments({ isAdmin: false });

    // Total Orders
    const totalOrders = await Order.countDocuments();

    // Revenue Calculation
    const revenueStats = await Order.aggregate([
      { $unwind: "$services" },
      {
        $group: {
          _id: null,
          totalRevenue: {
            $sum: {
              $multiply: ["$services.price", "$services.quantity"]
            }
          }
        }
      }
    ]);
    const totalRevenue = revenueStats.length > 0 ? revenueStats[0].totalRevenue : 0;

    // Order Growth (Dummy Static %)
    const orderGrowth = 7.8;

    // Revenue Growth (Dummy Static %)
    const revenueGrowth = 12.5;

    // Orders by Status
    const orderStatusStats = await Order.aggregate([
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 }
        }
      }
    ]);

    // Specific Order Status Counts
    const pendingOrders = await Order.countDocuments({ status: "pending" });
    const inProgress = await Order.countDocuments({ status: "confirmed" });

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const completedToday = await Order.countDocuments({
      status: "completed",
      appointmentDate: { $gte: today, $lt: tomorrow }
    });

    // Popular Services (most booked)
    const popularServices = await Order.aggregate([
      { $unwind: "$services" },
      {
        $group: {
          _id: "$services.name",
          totalBooked: { $sum: "$services.quantity" },
          totalRevenue: {
            $sum: {
              $multiply: ["$services.price", "$services.quantity"]
            }
          }
        }
      },
      { $sort: { totalBooked: -1 } },
      { $limit: 5 }
    ]);

    // Recent Orders (limit 5)
    const recentOrdersRaw = await Order.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .populate("userId", "username"); 

    const recentOrders = recentOrdersRaw.map((order) => ({
      id: order.orderId,
      status: order.status,
      customer: order.userId?.username || "Unknown",
      service: order.services[0]?.name || "Multiple",
      time: (order.appointmentSlot),
      amount: order.services.reduce(
        (sum, s) => sum + s.price * s.quantity,
        0
      )
    }));

    // Dummy average rating
    const avgRating = 4.7;

    // Final Response
    res.status(200).json({
      totalRevenue,
      revenueGrowth,
      totalOrders,
      orderGrowth,
      totalUsers,
      avgRating,
      pendingOrders,
      completedToday,
      inProgress,
      orderStatusStats,
      popularServices,
      recentOrders
    });
  } catch (error) {
    console.error("Admin Dashboard Error:", error);
    res.status(500).json({ message: "Failed to fetch admin stats", error });
  }
};

const getAllUserAnalytics = async (req, res) => {
  try {
    console.log("Fetching user analytics for admin:", req.user?.username);

    const users = await User.find({ isAdmin: false });

    const analytics = await Promise.all(
      users.map(async (user) => {

        if (!user || !user._id) {
          throw new Error("User object is invalid or missing _id");
        }

        const orders = await Order.find({ userId: user._id }).sort({ appointmentDate: -1 });

        const totalOrders = orders.length;

        const totalSpent = orders.reduce((sum, order) => {
          const orderAmount = order.services.reduce(
            (s, srv) => s + (srv.price * srv.quantity),
            0
          );
          return sum + orderAmount;
        }, 0);

        const lastOrderDate = orders[0]?.appointmentDate || null;

        const status =
          lastOrderDate &&
            new Date(lastOrderDate) > new Date(new Date().setMonth(new Date().getMonth() - 3))
            ? "active"
            : "inactive";

        return {
          id: user._id,
          name: user.username,
          email: user.email,
          phone: user.mobileNumber,
          address: [user.apartmentNumber, user.street, user.town, user.pincode].filter(Boolean).join(", "),
          joinDate: user.createdAt ? user.createdAt.toISOString().split("T")[0] : "N/A",  
          totalOrders,
          totalSpent,
          avgRating: 4.8,
          status,
          lastOrder: lastOrderDate ? lastOrderDate.toISOString().split("T")[0] : "N/A"
        };
      })
    );

    res.status(200).json({ success: true, users: analytics });
  } catch (error) {
    console.error("Error in getAllUserAnalytics:", error?.message || error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch user analytics",
      error: error?.message || "Unknown server error",
    });
  }
};


module.exports = { getAdminDashboardStats, getAllUserAnalytics };
