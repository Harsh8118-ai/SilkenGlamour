require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const authRoute = require("./routes/auth-route");
const contactRoute = require("./routes/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

// Use CORS with proper options
app.use(cors(corsOptions));

// Middleware for parsing JSON bodies
app.use(express.json());

// Mount the Router: To use the router in your main Express app
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

// Error middleware for handling all errors
app.use(errorMiddleware);

// Custom error handler
app.use((error, req, res, next) => {
  const statusCode = error.status || 500;
  res.status(statusCode).json({
      message: error.message || 'Internal Server Error',
      extraDetails: error.extraDetails || 'No additional information',
  });
});

// Connect to DB and start the server
connectDb().then(() => {
  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
});
