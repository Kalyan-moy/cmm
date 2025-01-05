export enum DataTypeEnum {
  String = "STRING",
  Number = "NUMBER",
  File = "FILE",
}

export interface ITokenData {
  id: number;
  username: string;
  email: string;
}

export interface ISignupResponse {
  message: string;
  token: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
}

export interface IUser {
  id: number;
  username: string;
  email: string;
}

export interface IField {
  id: string;
  title: string;
  data_type: string;
}

export interface IFieldResponse {
  message: string;
  fields: IField[];
}

export interface ICreateFieldResponse {
  message: string;
  field: IField;
}

export interface IForm {
  id: string;
  title: string;
  fields: IField[];
}

export interface ICreateFormResponse {
  message: string;
  field: IForm;
}

export interface IFormsResponse {
  message: string;
  forms: IForm[];
}

export interface IFormResponse {
  message: string;
  form: IForm;
}
