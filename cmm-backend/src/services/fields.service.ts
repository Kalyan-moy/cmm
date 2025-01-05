import { createField, getAllFields } from "../queries/fields.query";

export const createFieldService = async (
  title: string,
  data_type: string,
  created_by: number
) => {
  const field = await createField(title, data_type, created_by);

  return field;
};

export const getAllFieldsService = async (user_id: number) => {
  const fields = await getAllFields(user_id);

  return fields;
};
