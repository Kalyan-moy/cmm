import { CREATE_FIELD } from "@/constants/endpoints.constants";
import { IAddFieldModel } from "@/pages/FieldsPage/components/AddFieldModal/schema";
import { ICreateFieldResponse } from "@/types/global.types";
import { invokeApi } from "@/utils/axios.utils";
import { useMutation, UseMutationResult } from "react-query";

export const useCreateField = (): UseMutationResult<
  ICreateFieldResponse,
  Error,
  { data: IAddFieldModel }
> => {
  return useMutation(({ data }: { data: IAddFieldModel }) =>
    invokeApi<ICreateFieldResponse>({ url: CREATE_FIELD, method: "POST", data })
  );
};
