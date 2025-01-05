import { db } from "../config/postgres";

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

export const getAllFields = async (user_id: number) => {
  const result = await db.query(`SELECT * FROM fields WHERE created_by = $1`, [
    user_id,
  ]);
  return result.rows;
};
