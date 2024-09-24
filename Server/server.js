require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const authRoute = require("./routes/auth-route");
const contactRoute = require("./routes/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

const corsOptions = {
  origin: [
    "https://silken-glamour.vercel.app",
    "http://192.168.173.15:5173"
  
  ], 
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Root route to display a message
app.get('/', (req, res) => {
  res.status(200).send('Welcome to Silken Glamour Backend!');
});

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use(errorMiddleware);

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
