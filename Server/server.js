require("dotenv").config();
const express = require("express");
const cors = require("cors");
const compression = require("compression");

const app = express();
const authRoute = require("./routes/auth-route");
const reviewRoute = require("./routes/review-route");
const blogRoute = require("./routes/blog-route")
const connectDb = require("./utils/db");

//Dynamically set CORS based on environment
const prodOrigins = process.env.PROD_ORIGINS?.split(",") || [];
const devOrigins = process.env.DEV_ORIGINS?.split(",") || [];

const allowedOrigins =
  process.env.NODE_ENV === "production" ? prodOrigins : devOrigins;

const corsOptions = {
  origin: allowedOrigins,
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(compression());
app.use(cors(corsOptions));
app.use(express.json());

//Root route
app.get("/", (req, res) => {
  res.status(200).send("Welcome to SilkenGlamour's Backend!");
});

//API Routes
app.use("/api/auth", authRoute);
app.use("/api/form", reviewRoute);
app.use("/api/blog", blogRoute)

//Error handling middleware
app.use((error, req, res, next) => {
  const statusCode = error.status || 500;
  res.status(statusCode).json({
    message: error.message || "Internal Server Error",
    extraDetails: error.extraDetails || "No additional information",
  });
});

//Connect to Database & Start Server
connectDb().then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server is running at port: ${PORT}`);
  });
});
