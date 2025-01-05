import { Request, Response } from "express";
import {
  createFormService,
  getAllFormsService,
  getFormByIdService,
  getResponseByEmailAndFormIdService,
  submitResponseService,
} from "../services/forms.service";
import FileModel from "../models/file.model";

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

export const getFormByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const form = await getFormByIdService(+id);
    res.status(200).json({ message: "Form fetched successfully", form });
  } catch (error: any) {
    console.error("Fetch form error:", error);
    res.status(400).json({ error: error.message });
  }
};

export const submitResponseController = async (req: Request, res: Response) => {
  const { email, form_id, data } = req.body;
  const file = req.file;

  try {
    const existingResponses = await getResponseByEmailAndFormIdService(
      email,
      form_id
    );
    if (existingResponses.length === 0) {
      let fileData = null;
      if (file) {
        fileData = {
          filename: file.originalname,
          mimetype: file.mimetype,
          data: file.buffer,
        };
      }
      const savedFile: any = await FileModel.create(fileData);
      const fileId = savedFile._id.toString();

      const updatedData = JSON.parse(data).map((item: any) =>
        item.fieldName === "file" ? { ...item, value: fileId } : item
      );

      const response = await submitResponseService(
        email,
        +form_id,
        updatedData
      );
      res
        .status(201)
        .json({ message: "Response submitted successfully", response });
    } else {
      res.status(201).json({ message: "Already Exist" });
    }
  } catch (error: any) {
    console.error("submit response error:", error);
    res.status(400).json({ error: error.message });
  }
};
