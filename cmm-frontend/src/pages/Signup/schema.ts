import { z } from "zod";

export const signupSchema = z.object({
  username: z
    .string()
    .min(1, { message: "Username is required." })
    .regex(/^[a-zA-Z]+$/, {
      message: "Username must contain only uppercase and lowercase letters.",
    }),
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

export type ISignupInput = z.infer<typeof signupSchema>;
