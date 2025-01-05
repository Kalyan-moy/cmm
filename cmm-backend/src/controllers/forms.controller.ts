import { Request, Response } from "express";
import {
  createFormService,
  getAllFormsService,
} from "../services/forms.service";

export const createFormController = async (req: Request, res: Response) => {
  const { title, fieldIds } = req.body;
  const { user } = req as any;

  try {
    const form = await createFormService(title, fieldIds, user.id);
    res.status(201).json({ message: "Form created successfully", form });
  } catch (error: any) {
    console.error("Create form error:", error);
    res.status(400).json({ error: error.message });
  }
};

export const getAllFormsController = async (req: Request, res: Response) => {
  const { user } = req as any;

  try {
    const forms = await getAllFormsService(user.id);
    res.status(200).json({ message: "Forms fetched successfully", forms });
  } catch (error: any) {
    console.error("Fetch forms error:", error);
    res.status(400).json({ error: error.message });
  }
};
