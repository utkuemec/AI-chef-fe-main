import { Method } from "axios";
import { AxiosProvider } from "./AxiosProvider";
import { ApiError } from "./AxiosProvider.interface";
import { BaseQueryFunctionParams } from "./ApiRequestProvider.interface";

export class ApiRequestProvider {
  api;
  prefix;

  constructor({
    baseURL,
    prefix,
    headers,
    authToken,
    additionalSuffixParams,
  }: {
    baseURL: string;
    prefix?: string;
    headers?: Record<string, string | number | boolean>;
    authToken?: string;
    additionalSuffixParams?: Record<string, unknown>;
  }) {
    this.api = new AxiosProvider({
      baseURL,
      headers,
      authToken,
      additionalSuffixParams,
    });
    this.prefix = prefix;
  }

  private exceptionHandler = (error: ApiError) => {
    if (error) {
      // Exception logic
    }
  };

  public requester = async ({
    url,
    method,
    headers,
    data = {},
  }: BaseQueryFunctionParams) => {
    try {
      const result = await this.api.start({
        method: method as Method,
        url,
        prefix: this.prefix,
        body: data?.body,
        params: data?.params,
        headers,
      });

      return { data: result?.data || result };
    } catch (error) {
      const apiError = error as ApiError;

      this.exceptionHandler(apiError);

      return {
        error: apiError,
      };
    }
  };
}
