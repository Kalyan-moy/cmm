import { GET_FORMS } from "@/constants/endpoints.constants";
import { FETCH_FORMS } from "@/constants/queryKeys.constants";
import { IFormsResponse } from "@/types/global.types";
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
