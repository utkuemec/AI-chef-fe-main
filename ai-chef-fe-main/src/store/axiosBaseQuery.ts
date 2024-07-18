import { chefApi } from "../api/chef/chefApi";
import { BaseQueryFunctionParams } from "../providers/ApiRequestProvider.interface";
import { ApiError } from "../providers/AxiosProvider.interface";

const axiosBaseQuery = () => async (params: BaseQueryFunctionParams) => {
  try {
    const result = await chefApi.requester(params);

    return { data: result?.data };
  } catch (axiosError) {
    const err = axiosError as ApiError;

    return {
      error: {
        status: err.statusCode,
        data: { label: err?.errorLabel, title: err?.errorTitle },
        message: err?.errorLabel,
      },
    };
  }
};

export default axiosBaseQuery;
