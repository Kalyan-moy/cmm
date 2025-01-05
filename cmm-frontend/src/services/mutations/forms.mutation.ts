import { CREATE_FORM } from "@/constants/endpoints.constants";
import { ICreateFormModel } from "@/pages/FormsPage/components/CreateFormModal/schema";
import { ICreateFormResponse } from "@/types/global.types";
import { invokeApi } from "@/utils/axios.utils";
import { useMutation, UseMutationResult } from "react-query";

export const useCreateForm = (): UseMutationResult<
  ICreateFormResponse,
  Error,
  { data: ICreateFormModel }
> => {
  return useMutation(({ data }: { data: ICreateFormModel }) =>
    invokeApi<ICreateFormResponse>({ url: CREATE_FORM, method: "POST", data })
  );
};
