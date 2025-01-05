import { jwtDecode } from "jwt-decode";
import { AUTH_TOKEN_NAME } from "@/constants/common.constants";
import { ITokenData } from "@/types/global.types";

export const _getToken = (): string | null => {
  return localStorage.getItem(AUTH_TOKEN_NAME);
};

export const _setToken = (token: string): void => {
  localStorage.setItem(AUTH_TOKEN_NAME, token);
};

export const _removeToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_NAME);
};

export const _getTokenData = (access_token?: string): ITokenData | null => {
  const token = access_token || _getToken();
  if (token) {
    const data: ITokenData = jwtDecode(token);
    return data;
  }
  _removeToken();
  return null;
};
