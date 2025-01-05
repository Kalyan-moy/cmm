import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createUser, findUserByEmail } from "../queries/user.query";

export const signup = async (
  username: string,
  email: string,
  password: string
) => {
  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    throw new Error("Email already in use");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await createUser(username, email, hashedPassword);

  const token = jwt.sign(
    { id: user.id, email: user.email, username: user.username },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "1h",
    }
  );

  return { token, user };
};

export const login = async (email: string, password: string) => {
  const user = await findUserByEmail(email);
  if (!user) {
    throw new Error("Invalid email or password");
  }

  const { password: userPassword, ...rest } = user;

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, username: user.username },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "30d",
    }
  );

  return { token, user: rest };
};
