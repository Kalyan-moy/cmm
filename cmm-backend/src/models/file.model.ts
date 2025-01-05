import mongoose, { Schema, Document } from "mongoose";

interface IFile extends Document {
  filename: string;
  mimetype: string;
  data: Buffer | string;
}

const fileSchema = new Schema<IFile>({
  filename: { type: String, required: true },
  mimetype: { type: String, required: true },
  data: { type: Buffer, required: true },
});

const FileModel = mongoose.model<IFile>("File", fileSchema);

export default FileModel;
