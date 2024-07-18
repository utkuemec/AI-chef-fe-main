import { appConfig } from "../../config/appConfig";
import { ApiRequestProvider } from "../../providers/ApiRequestProvider";

export const chefApi = new ApiRequestProvider({
  baseURL: appConfig.chefApiBaseUrl,
  prefix: "/api",
});
