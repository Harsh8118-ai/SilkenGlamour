const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth-middleware");
const authorizeAdmin = require("../middlewares/admin-middleware");
const { getAdminDashboardStats, getAllUserAnalytics } = require("../controllers/admin-conrollers");

router.get("/dashboard", authMiddleware, authorizeAdmin, getAdminDashboardStats);

router.get("/dashboard/user", authMiddleware, authorizeAdmin, getAllUserAnalytics);

module.exports = router;
