const Order = require("../models/order-model");

// Create a new order
exports.createOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all orders (admin)
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single order by ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// controllers/orderController.js
exports.getOrdersByUserId = async (req, res) => {
  try {
    const orders = await Order.find({
      userId: req.params.userId,
      status: { $nin: ["completed", "cancelled"] },
    }).sort({ createdAt: -1 });

    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOrdersHistoryByUserId = async (req, res) => {
  try {
    const orders = await Order.find({
      userId: req.params.userId,
      status: { $in: ["completed", "cancelled"] },
    }).sort({ createdAt: -1 });

    res.status(200).json(orders); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};




// Get single order by userId + orderId
exports.getOrderByUserIdAndOrderId = async (req, res) => {
  const { userId, orderId } = req.params;

  try {
    const order = await Order.findOne({
      userId,
      orderId: orderId.toString().trim(),
    });

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Admin: update order status & append to trackingHistory
exports.updateOrderStatus = async (req, res) => {
  const { status, message } = req.body;
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });

    // Append to trackingHistory
    order.trackingHistory.push({
      status,
      message,
      timestamp: new Date(),
    });

    // Update status + updatedAt
    order.status = status;
    order.updatedAt = new Date();

    const updated = await order.save();
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.updateOrderTracking = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status, message } = req.body;

    if (!status || !message) {
      return res.status(400).json({ message: "Status and message are required." });
    }

    const order = await Order.findOne({ orderId });

    if (!order) {
      return res.status(404).json({ message: "Order not found." });
    }

    // Add new tracking history entry
    const trackingEntry = {
      status,
      message,
      timestamp: new Date(),
    };

    order.status = status;
    order.trackingHistory.push(trackingEntry);

    const updatedOrder = await order.save();
    res.status(200).json(updatedOrder);
  } catch (error) {
    console.error("Error updating tracking:", error);
    res.status(500).json({ message: "Failed to update tracking" });
  }
};
