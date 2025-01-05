import { Request, Response } from "express";
import { signup, login } from "../services/auth.service";

export const signupController = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    const { token, user } = await signup(username, email, password);
    res.status(201).json({ message: "User created successfully", token, user });
  } catch (error: any) {
    console.error("Signup error:", error);
    res.status(400).json({ error: error.message });
  }
};

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const { token, user } = await login(email, password);
    res.status(200).json({ message: "Login successful", token, user });
  } catch (error: any) {
    console.error("Login error:", error);
    res.status(400).json({ error: error.message });
  }
};
