import { useMutation, UseMutationResult } from "react-query";
import { LOGIN_URL, SIGNUP_URL } from "@/constants/endpoints.constants";
import { ISignupInput } from "@/pages/Signup/schema";
import { ISignupResponse } from "@/types/global.types";
import { invokeApi } from "@/utils/axios.utils";
import { ILoginInput } from "@/pages/Login/schema";

export const useSignup = (): UseMutationResult<
  ISignupResponse,
  Error,
  { data: ISignupInput }
> => {
  return useMutation(({ data }: { data: ISignupInput }) =>
    invokeApi<ISignupResponse>({ url: SIGNUP_URL, method: "POST", data })
  );
};

export const useLogin = (): UseMutationResult<
  ISignupResponse,
  Error,
  { data: ILoginInput }
> => {
  return useMutation(({ data }: { data: ILoginInput }) =>
    invokeApi<ISignupResponse>({ url: LOGIN_URL, method: "POST", data })
  );
};
