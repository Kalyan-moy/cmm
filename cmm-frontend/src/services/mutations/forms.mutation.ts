import { CREATE_FORM, SUBMIT_RESPONSE } from "@/constants/endpoints.constants";
import { ICreateFormModel } from "@/pages/FormsPage/components/CreateFormModal/schema";
import { ICreateFormResponse } from "@/types/global.types";
import { invokeApi } from "@/utils/axios.utils";
import { useMutation, UseMutationResult } from "react-query";

export interface ICreateFormWithFields extends ICreateFormModel {
  fieldIds?: number[];
}

export const useCreateForm = (): UseMutationResult<
  ICreateFormResponse,
  Error,
  { data: ICreateFormWithFields }
> => {
  return useMutation(({ data }: { data: ICreateFormWithFields }) =>
    invokeApi<ICreateFormResponse>({ url: CREATE_FORM, method: "POST", data })
  );
};

export const useSubmitResponse = (): UseMutationResult<
  any,
  Error,
  { data: any }
> => {
  return useMutation(({ data }: { data: any }) =>
    invokeApi<any>({ url: SUBMIT_RESPONSE, method: "POST", data })
  );
};
