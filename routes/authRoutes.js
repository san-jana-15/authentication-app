import express from "express";
import { registerUser, loginUser, getUserProfile } from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Register route
router.post("/register", registerUser);

// Login route
router.post("/login", loginUser);

// Get user profile (protected)
router.get("/me", authMiddleware, getUserProfile);

export default router;
