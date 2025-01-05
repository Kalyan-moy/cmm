import { createForm, getAllForms } from "../queries/forms.query";

export const createFormService = async (title: string, created_by: number) => {
  const form = await createForm(title, created_by);

  return form;
};

export const getAllFormsService = async (user_id: number) => {
  const forms = await getAllForms(user_id);

  return forms;
};
