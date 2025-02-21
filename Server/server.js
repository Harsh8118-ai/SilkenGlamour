require("dotenv").config();
const express = require("express");
const cors = require("cors");
const compression = require("compression");

const app = express();
const authRoute = require("./routes/auth-route");
const contactRoute = require("./routes/contact-route");
const connectDb = require("./utils/db");

// ✅ Dynamically set CORS based on environment
const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://silkenglamour.com", "https://www.silkenglamour.com", "https://silken-glamour.vercel.app", "https://silkenglamour.netlify.app"]
    : ["http://localhost:5173"];

const corsOptions = {
  origin: allowedOrigins,
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(compression());
app.use(cors(corsOptions));
app.use(express.json());

// ✅ Root route
app.get("/", (req, res) => {
  res.status(200).send("Welcome to SilkenGlamour's Backend!");
});

// ✅ API Routes
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

// ✅ Error handling middleware
app.use((error, req, res, next) => {
  const statusCode = error.status || 500;
  res.status(statusCode).json({
    message: error.message || "Internal Server Error",
    extraDetails: error.extraDetails || "No additional information",
  });
});

// ✅ Connect to Database & Start Server
connectDb().then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server is running at port: ${PORT}`);
  });
});
