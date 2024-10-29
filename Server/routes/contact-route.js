const express = require("express");
const router = express.Router();
const contactForm = require("../controllers/contact-controller");
const reviewForm = require("../controllers/review-controllers");
const Review = require("../models/review-model"); // Import the Review model

// POST route to add a new review
router.route("/review").post(reviewForm);

// GET route to fetch all reviews
router.get("/review", async (req, res) => {
  try {
    const reviews = await Review.find(); // Fetch all reviews from the database
    console.log("Fetched reviews:", reviews); // Log to see if data is fetched
    res.status(200).json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching reviews", error });
  }
});

module.exports = router;
