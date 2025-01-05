import { GET_FORMS } from "@/constants/endpoints.constants";
import { FETCH_FORM_BY_ID, FETCH_FORMS } from "@/constants/queryKeys.constants";
import { IFormResponse, IFormsResponse } from "@/types/global.types";
import { invokeApi } from "@/utils/axios.utils";
import { useQuery, UseQueryResult } from "react-query";

export const useGetForms = (): UseQueryResult<IFormsResponse, Error> => {
  return useQuery<IFormsResponse, Error>(
    FETCH_FORMS,
    () => invokeApi<IFormsResponse>({ url: GET_FORMS, method: "GET" }),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      cacheTime: 0,
      staleTime: 0,
    }
  );
};

export const useGetFormById = (
  id: number | undefined
): UseQueryResult<IFormResponse, Error> => {
  if (id) {
    return useQuery<IFormResponse, Error>(
      FETCH_FORM_BY_ID,
      () =>
        invokeApi<IFormResponse>({ url: `${GET_FORMS}/${id}`, method: "GET" }),
      {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        cacheTime: 0,
        staleTime: 0,
      }
    );
  } else {
    throw new Error("Invalid Id");
  }
};
