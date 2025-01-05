import express from "express";

import {
  createFieldController,
  getAllFieldsController,
} from "../controllers/fields.controller";
import { verifyToken } from "../middleware/auth.middleware";

const router = express.Router();

router.get("/", verifyToken, getAllFieldsController);
router.post("/", verifyToken, createFieldController);

export default router;
