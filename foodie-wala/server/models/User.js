import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  clerkId: { type: String, required: true, unique: true }, // from Clerk
  email: { type: String, required: true },
  username: { type: String, default: "" },
  profileImage: { type: String, default: "" },

  role: { type: String, enum: ["user", "admin"], default: "user" },
  reviewsCount: { type: Number, default: 0 },
  likesReceived: { type: Number, default: 0 },
  streak: { type: Number, default: 0 },
  score: { type: Number, default: 0 },

  bio: { type: String, default: "" },
  location: { type: String, default: "" },
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" }],

  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("User", userSchema);
