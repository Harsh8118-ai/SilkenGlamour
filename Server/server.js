require("dotenv").config();
const express = require("express");
const cors = require("cors");
const compression = require('compression');

const app = express();
const authRoute = require("./routes/auth-route");
const contactRoute = require("./routes/contact-route"); // This includes both /contact and /review routes
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

const corsOptions = {
  origin: [
    "https://silken-glamour.vercel.app",
    "https://silkenglamour.netlify.app",
    "http://localhost:5173",
    "https://silkenglamour.com"
  ],
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(compression());
app.use(cors(corsOptions));
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.status(200).send("Welcome to SilkenGlamour's Backend!");
});

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute); // Now handles both contact and review routes

// Error handling middleware
app.use((error, req, res, next) => {
  const statusCode = error.status || 500;
  res.status(statusCode).json({
    message: error.message || 'Internal Server Error',
    extraDetails: error.extraDetails || 'No additional information',
  });
});

connectDb().then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
});
