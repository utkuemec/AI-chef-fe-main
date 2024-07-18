import { ApiServiceMethod } from "../../enum/apiServiceMethods.enum";
import { RecommendRes } from "../../pages/Recommendation";
import { baseApiClient } from "../apiClient";

const recommendApi = baseApiClient.injectEndpoints({
  endpoints: (builder) => ({
    recommend: builder.mutation<RecommendRes, { food: string; drink: string }>({
      query: ({ food, drink }) => ({
        url: `/recommend`,
        method: ApiServiceMethod.POST,
        data: {
          body: {
            food,
            drink,
          },
        },
      }),
    }),
  }),
});

export const { useRecommendMutation } = recommendApi;
