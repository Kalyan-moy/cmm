import { Request, Response } from "express";
import {
  createFieldService,
  getAllFieldsService,
} from "../services/fields.service";

export const createFieldController = async (req: Request, res: Response) => {
  const { title, data_type } = req.body;
  const { user } = req as any;

  try {
    const field = await createFieldService(title, data_type, user.id);
    res.status(201).json({ message: "Field created successfully", field });
  } catch (error: any) {
    console.error("Create Field error:", error);
    res.status(400).json({ error: error.message });
  }
};

export const getAllFieldsController = async (req: Request, res: Response) => {
  const { user } = req as any;

  try {
    const fields = await getAllFieldsService(user.id);
    res.status(200).json({ message: "Fields fetched successfully", fields });
  } catch (error: any) {
    console.error("Fetch Fields error:", error);
    res.status(400).json({ error: error.message });
  }
};
