
import User from "../models/User.js";
export const saveUser=async (req, res) => {
  try {
    const { clerkId, email, username, profileImage } = req.body;

    const existingUser = await User.findOne({ clerkId });
    if (existingUser) {
        console.log("user already existing");
      return res.status(200).json(existingUser); // already exists, no need to save again
    }

    const user = new User({
      clerkId,
      email,
      username,
      profileImage,
    });

    await user.save();
    console.log("user saved"+user);
    res.status(201).json(user);
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ error: "Error creating user" });
  }
}

export const updateUser=async (req, res) => {
  try {
    const { clerkId } = req.params;
    const { email, username, profileImage } = req.body;

    const updatedUser = await User.findOneAndUpdate(
      { clerkId },
      { $set: { email, username, profileImage } },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({ error: "Error updating user" });
  }
}