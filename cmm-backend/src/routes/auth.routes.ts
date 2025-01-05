import express from "express";
import {
  signupController,
  loginController,
} from "../controllers/auth.controller";
// import { verifyToken } from "../middleware/auth.middleware";

const router = express.Router();

// Signup and Login Routes
router.post("/signup", signupController);
router.post("/login", loginController);

// router.get("/protected", verifyToken, (req, res) => {
//   res.send("Protected route");
// });

export default router;
