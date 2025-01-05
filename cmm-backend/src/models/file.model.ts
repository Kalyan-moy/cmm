// models/FileModel.ts

import mongoose, { Schema, Document } from "mongoose";

interface IFile extends Document {
  filename: string;
  mimetype: string;
  data: Buffer | string; // Store the file data in binary format (Buffer) or Base64 string
}

const fileSchema = new Schema<IFile>({
  filename: { type: String, required: true },
  mimetype: { type: String, required: true },
  data: { type: Buffer, required: true }, // Store file as binary data (or use String for Base64)
});

const FileModel = mongoose.model<IFile>("File", fileSchema);

export default FileModel;
