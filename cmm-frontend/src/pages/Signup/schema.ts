import { z } from "zod";

export const signupSchema = z.object({
  username: z
    .string()
    .min(1, { message: "Username is required." })
    .regex(/^[a-zA-Z]+$/, {
      message: "Username must contain only uppercase and lowercase letters.",
    }),
  password: z
    .string()
    .min(1, { message: "Password is required." })
    .max(8, { message: "Password must not exceed 8 characters." }),
});

export type ISignupInput = z.infer<typeof signupSchema>;
