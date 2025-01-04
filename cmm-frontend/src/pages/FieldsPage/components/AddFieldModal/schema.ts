import { z } from "zod";

export const addFieldSchema = z.object({
  title: z.string().min(1, { message: "Title is required." }),
  data_type: z.string().min(1, {
    message: "At least one data type is required.",
  }),
});

export type IAddFieldModel = z.infer<typeof addFieldSchema>;
