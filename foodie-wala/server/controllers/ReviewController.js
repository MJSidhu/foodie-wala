// controllers/reviewController.js
import Review from "../models/Review.js";
import Restaurant from "../models/Restaurants.js";
import User from "../models/User.js";

export const postReview = async (req, res) => {
  try {
    const { clerkId, restaurantId, text, rating } = req.body;
    console.log("Received body:", req.body);

        // Find the MongoDB user using Clerk ID
    const user = await User.findOne({ clerkId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }


    // ✅ validation: must have @restaurantTag and #foodTag
    // if (!/@\w+/.test(text) || !/#\w+/.test(text)) {
    //   return res.status(400).json({
    //     message: "Review must include @restaurantTag and #foodTag.",
    //   });
    // }

    // ✅ check restaurant exists
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found." });
    }

    // ✅ create review
    const review = new Review({
      userId:user._id,
      restaurantId,
      text,
      rating,
    });

    console.log("Created review for saving : "+review);
    await review.save();

    res.status(201).json({
      message: "Review posted successfully!",
      review,
    });
  } catch (error) {
    console.error("Error posting review:", error);
    res.status(500).json({ message: "Server error while posting review." });
  }
};

export const getReviews=async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const reviews = await Review.find({ restaurantId })
      .populate("userId", "username"); // show username
    res.json({ reviews });
  } catch (err) {
    res.status(500).json({ message: "Error fetching reviews" });
  }
};
