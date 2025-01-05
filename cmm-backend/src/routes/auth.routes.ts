import express from "express";
import {
  signupController,
  loginController,
} from "../controllers/auth.controller";

const router = express.Router();

// Signup and Login Routes
router.post("/signup", signupController);
router.post("/login", loginController);

export default router;
