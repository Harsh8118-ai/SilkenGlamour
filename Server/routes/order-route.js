const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order-controllers");

// Create order
router.post("/", orderController.createOrder);

// Get all orders (admin)
router.get("/", orderController.getAllOrders);

// Get order by UserID
router.get("/my-order/:userId", orderController.getOrdersByUserId);

// Get order history by UserID
router.get("/order-history/:userId", orderController.getOrdersHistoryByUserId);

// Get orders by User ID and Order ID
router.get("/:userId/:orderId", orderController.getOrderByUserIdAndOrderId);

// Update order status (admin panel)
router.patch("/:id/status", orderController.updateOrderStatus);

// Update order tracking history (admin use)
router.put("/:orderId/track", orderController.updateOrderTracking);

module.exports = router;
