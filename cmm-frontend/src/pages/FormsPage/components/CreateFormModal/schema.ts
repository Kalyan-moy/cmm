import { z } from "zod";

export const createFormSchema = z.object({
  title: z.string().min(1, { message: "Title is required." }),
});

export type ICreateFormModel = z.infer<typeof createFormSchema>;
