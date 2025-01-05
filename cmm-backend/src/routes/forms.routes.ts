import express from "express";
import { verifyToken } from "../middleware/auth.middleware";
import {
  createFormController,
  getAllFormsController,
} from "../controllers/forms.controller";

const router = express.Router();

// Signup and Login Routes
router.get("/", verifyToken, getAllFormsController);
router.post("/", verifyToken, createFormController);

export default router;
