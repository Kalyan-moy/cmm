import { useMutation, UseMutationResult } from "react-query";
import { SIGNUP_URL } from "@/constants/endpoints.constants";
import { ISignupInput } from "@/pages/Signup/schema";
import { ISignupResponse } from "@/types/global.types";
import { invokeApi } from "@/utils/axios.utils";

export const useSignup = (): UseMutationResult<
  ISignupResponse,
  Error,
  { data: ISignupInput }
> => {
  return useMutation(({ data }: { data: ISignupInput }) =>
    invokeApi<ISignupResponse>({ url: SIGNUP_URL, method: "POST", data })
  );
};
