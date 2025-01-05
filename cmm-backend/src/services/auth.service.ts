import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createUser, findUserByEmail } from "../models/user.model";

// Signup logic
export const signup = async (
  username: string,
  email: string,
  password: string
) => {
  // Check if the user already exists
  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    throw new Error("Email already in use");
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user
  const user = await createUser(username, email, hashedPassword);

  // Generate a JWT token
  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "1h",
    }
  );

  return { token, user };
};

// Login logic
export const login = async (email: string, password: string) => {
  // Find the user by email
  const user = await findUserByEmail(email);
  if (!user) {
    throw new Error("Invalid email or password");
  }

  // Compare the password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  }

  // Generate a JWT token
  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "1h",
    }
  );

  return { token, user };
};
