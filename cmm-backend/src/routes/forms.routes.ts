import express from "express";
import { verifyToken } from "../middleware/auth.middleware";
import {
  createFormController,
  getAllFormsController,
  getFormByIdController,
  submitResponseController,
} from "../controllers/forms.controller";

const router = express.Router();

// Signup and Login Routes
router.get("/", verifyToken, getAllFormsController);
router.post("/", verifyToken, createFormController);
router.get("/:id", getFormByIdController);
router.post("/response", submitResponseController);

export default router;
