import {
  createForm,
  getAllForms,
  InsertFormFieldMap,
} from "../queries/forms.query";

export const createFormService = async (
  title: string,
  fieldIds: number[],
  created_by: number
) => {
  const form = await createForm(title, created_by);

  if (fieldIds.length > 0) {
    const values = fieldIds
      .map((field_id) => `(${form.id}, ${field_id})`)
      .join(", ");

    await InsertFormFieldMap(values);
  }

  return form;
};

export const getAllFormsService = async (user_id: number) => {
  const forms = await getAllForms(user_id);

  return forms;
};
