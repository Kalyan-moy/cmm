import { db } from "../config/postgres";

// Insert a new user into the database
export const createUser = async (
  username: string,
  email: string,
  password: string
) => {
  const result = await db.query(
    `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email`,
    [username, email, password]
  );
  return result.rows[0];
};

// Find a user by email
export const findUserByEmail = async (email: string) => {
  const result = await db.query(`SELECT * FROM users WHERE email = $1`, [
    email,
  ]);
  return result.rows[0];
};
