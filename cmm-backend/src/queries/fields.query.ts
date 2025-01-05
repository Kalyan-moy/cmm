import { db } from "../config/postgres";

// Insert a new user into the database
export const createField = async (
  title: string,
  data_type: string,
  created_by: number
) => {
  const result = await db.query(
    `INSERT INTO fields (title, data_type, created_by) VALUES ($1, $2, $3) RETURNING id, title, data_type`,
    [title, data_type, created_by]
  );
  return result.rows[0];
};
