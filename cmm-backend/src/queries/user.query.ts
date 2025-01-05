import { db } from "../config/postgres";

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

export const findUserByEmail = async (email: string) => {
  const result = await db.query(`SELECT * FROM users WHERE email = $1`, [
    email,
  ]);
  return result.rows[0];
};
