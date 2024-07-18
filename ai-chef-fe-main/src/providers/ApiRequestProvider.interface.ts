import { ApiServiceMethod } from "../enum/apiServiceMethods.enum";

export type RequestData = {
  body?: Record<string, unknown> | unknown;
  params?: Record<string, unknown> | unknown;
};

export type BaseQueryFunctionParams = {
  url: string;
  method: ApiServiceMethod;
  prefix?: string;
  headers?: Record<string, unknown>;
  data?: RequestData;
};
