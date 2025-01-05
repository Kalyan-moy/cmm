import {
  createForm,
  getAllForms,
  getFormById,
  InsertFormFieldMap,
  submitResponse,
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

export const getFormByIdService = async (id: number) => {
  const form = await getFormById(id);

  return form;
};

export const submitResponseService = async (
  email: string,
  form_id: number,
  data: { fieldId: number; value: any }[]
) => {
  const form = await submitResponse(email, form_id, data);

  return form;
};
