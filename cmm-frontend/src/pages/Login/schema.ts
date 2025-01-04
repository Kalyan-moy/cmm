import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
      message: "Enter a valid email address.",
    }),
  password: z
    .string()
    .min(1, { message: "Password is required." })
    .max(8, { message: "Password must not exceed 8 characters." }),
});

export type ILoginInput = z.infer<typeof loginSchema>;
