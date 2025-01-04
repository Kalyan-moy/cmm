import { z } from "zod";

export const signinSchema = z.object({
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

export type ISigninInput = z.infer<typeof signinSchema>;
