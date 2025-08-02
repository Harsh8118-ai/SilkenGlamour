const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        orderId: {
            type: String,
            unique: true,
            required: true
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
        userPhone: {
            type: String,
            required: true,
        },
        services: [
            {
                serviceId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Service",
                },
                name: String,
                price: Number,
                duration: Number,
                quantity: {
                    type: Number,
                    default: 1,
                    min: 1,
                },
            },
        ],
        appointmentDate: {
            type: Date,
            required: true,
        },
        appointmentSlot: {
            type: String, // e.g., "10:00 AM - 11:00 AM"
            required: true,
        },
        address: {
            street: String,
            city: String,
            state: String,
            pincode: String,
            latitude: Number,
            longitude: Number,
        },
        status: {
            type: String,
            enum: [
                "pending",
                "confirmed",
                "completed",
                "cancelled",
            ],
            default: "pending",
        },
        beautician: {
            type: String,
            // ref: "User",
        },
        trackingHistory: [
            {
                status: String,
                message: String,
                timestamp: {
                    type: Date,
                    default: Date.now,
                },
            },
        ],
    },
    { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
