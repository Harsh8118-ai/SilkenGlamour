require("dotenv").config();
const express = require("express");
const cors = require("cors");
const compression = require("compression");
const passport = require("passport");
const app = express();
const authRoute = require("./routes/auth-route");
const oauthRoute = require("./routes/oauth-route");
const reviewRoute = require("./routes/review-route");
const blogRoute = require("./routes/blog-route")
const chatboxRoute = require("./routes/chatbox-route")                           
const orderRoute = require("./routes/order-route")
const adminRoute = require("./routes/admin-route")
const connectDb = require("./utils/db");
const session = require("express-session");
require("./utils/passport-config");


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
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET || "default_secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", authRoute);
app.use("/api/oauth", oauthRoute);
app.use("/api/form", reviewRoute);
app.use("/api/blog", blogRoute);
app.use("/api/chatbox", chatboxRoute);
app.use("/api/orders", orderRoute);
app.use("/api/admin", adminRoute);


app.get("/", (req, res) => {
  res.status(200).send("Welcome to SilkenGlamour's Backend!");
});

app.use((error, req, res, next) => {
  const statusCode = error.status || 500;
  res.status(statusCode).json({
    message: error.message || "Internal Server Error",
    extraDetails: error.extraDetails || "No additional information",
  });
});

connectDb().then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server is running at port: ${PORT}`);
  });
});
