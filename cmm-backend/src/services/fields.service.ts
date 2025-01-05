import { createField } from "../queries/fields.query";

export const createFieldService = async (
  title: string,
  data_type: string,
  created_by: number
) => {
  const field = await createField(title, data_type, created_by);

  return field;
};
