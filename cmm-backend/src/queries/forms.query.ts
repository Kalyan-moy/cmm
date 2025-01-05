import { db } from "../config/postgres";

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

export const InsertFormFieldMap = async (values: string) => {
  const result = await db.query(
    `INSERT INTO form_field_map (form_id, field_id)
    VALUES ${values};`
  );
  return result.rows;
};

export const getFormById = async (id: number) => {
  const result = await db.query(
    `SELECT 
    f.id AS form_id,
    f.title,
    json_agg(
        json_build_object(
            'id', fi.id,
            'title', fi.title,
            'data_type', fi.data_type
        )
    ) AS fields
    FROM 
        forms f
    JOIN 
        form_field_map ffm ON f.id = ffm.form_id
    JOIN 
        fields fi ON ffm.field_id = fi.id
    WHERE 
        f.id = $1
    GROUP BY 
        f.id, f.title;`,
    [id]
  );
  return result.rows[0];
};

export const submitResponse = async (
  email: string,
  form_id: number,
  data: { fieldName: string; value: any }[]
) => {
  const result = await db.query(
    `INSERT INTO responses (email, form_id, data)
    VALUES ($1, $2, $3::jsonb)
    RETURNING id`,
    [email, form_id, JSON.stringify(data)]
  );
  return result.rows[0];
};

export const getResponseByEmailAndFormId = async (
  email: string,
  form_id: number
) => {
  const result = await db.query(
    `SELECT * FROM responses WHERE email = $1 AND form_id = $2`,
    [email, form_id]
  );
  return result.rows;
};
