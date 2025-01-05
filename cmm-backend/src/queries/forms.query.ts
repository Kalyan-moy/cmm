import { db } from "../config/postgres";

// Insert a new user into the database
export const createForm = async (title: string, created_by: number) => {
  const result = await db.query(
    `INSERT INTO forms (title, created_by) VALUES ($1, $2) RETURNING id, title`,
    [title, created_by]
  );
  return result.rows[0];
};

export const getAllForms = async (user_id: number) => {
  const result = await db.query(`SELECT * FROM forms WHERE created_by = $1`, [
    user_id,
  ]);
  return result.rows;
};
