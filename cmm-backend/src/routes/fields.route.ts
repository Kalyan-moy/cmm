import express from "express";

import { createFieldController } from "../controllers/fields.controller";
import { verifyToken } from "../middleware/auth.middleware";

const router = express.Router();

// Signup and Login Routes
router.post("/", verifyToken, createFieldController);

export default router;
