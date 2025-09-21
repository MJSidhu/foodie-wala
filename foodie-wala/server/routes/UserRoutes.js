// routes/userRoutes.js
import express from "express";

import { saveUser, updateUser } from "../controllers/UserController.js";

const userRouter = express.Router();

// Save or update user
// routes/userRoutes.js
userRouter.post("/create", saveUser);

userRouter.put("/update/:clerkId", updateUser);

export default userRouter;
