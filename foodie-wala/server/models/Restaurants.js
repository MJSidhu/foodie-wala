import mongoose from 'mongoose';

const foodItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  isVeg: Boolean,
  popularity: { type: Number, default: 0 }, // used to mark "popular", "must-try"
  description: String,
});

const menuSectionSchema = new mongoose.Schema({
  sectionName: String, // e.g., Starters, Biryani, Desserts
  vegItems: [foodItemSchema],
  nonVegItems: [foodItemSchema]
});

const reviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  username: String,
  text: String,
  rating: { type: Number, min: 1, max: 5 },
  thumbsUp: { type: Number, default: 0 },
  thumbsDown: { type: Number, default: 0 },
  datePosted: {
    type: Date,
    default: Date.now,
  },
});

const restaurantSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: String, // cover image
  cuisine: [String], // e.g., ["Indian", "Chinese"]
  tags: [String], // e.g., ["family-friendly", "rooftop", "budget"]
  location: String,
  contact: String,
  timings: String,

  avgRating: { type: Number, default: 0 },
  totalReviews: { type: Number, default: 0 },
  menu: [menuSectionSchema],
  reviews: [reviewSchema],

  restaurantTag: { type: String, unique: true },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


export default mongoose.model("Restaurant", restaurantSchema);
