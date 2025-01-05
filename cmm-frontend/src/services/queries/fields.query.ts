import { GET_FIELDS } from "@/constants/endpoints.constants";
import { FETCH_FIELDS } from "@/constants/queryKeys.constants";
import { IFieldResponse } from "@/types/global.types";
import { invokeApi } from "@/utils/axios.utils";
import { useQuery, UseQueryResult } from "react-query";

export const useGetFields = (): UseQueryResult<IFieldResponse, Error> => {
  return useQuery<IFieldResponse, Error>(
    FETCH_FIELDS,
    () => invokeApi<IFieldResponse>({ url: GET_FIELDS, method: "GET" }),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      cacheTime: 0,
      staleTime: 0,
    }
  );
};
