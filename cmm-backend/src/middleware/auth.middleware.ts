import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

// Middleware to verify the token
export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    res.status(403).json({ message: "Access denied. No token provided." });
    return;
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    (req as any).user = decoded;
    next();
  } catch (error) {
    // Token verification failed
    console.error("Invalid token:", error);
    res.status(401).json({ message: "Invalid or expired token." });
  }
};
