import { Request, Response } from "express";
import { createFieldService } from "../services/fields.service";

export const createFieldController = async (req: Request, res: Response) => {
  const { title, data_type, created_by } = req.body;

  try {
    const field = await createFieldService(title, data_type, created_by);
    res.status(201).json({ message: "Field created successfully", field });
  } catch (error: any) {
    console.error("Create Field error:", error);
    res.status(400).json({ error: error.message });
  }
};
