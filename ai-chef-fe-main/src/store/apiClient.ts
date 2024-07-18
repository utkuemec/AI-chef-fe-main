// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks

import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";

// initialize an empty api service that we'll inject endpoints into later as needed
export const baseApiClient = createApi({
  baseQuery: axiosBaseQuery(),
  endpoints: () => ({}),
  refetchOnMountOrArgChange: 120, // Values In seconds,
  refetchOnFocus: true, //Refetchs on window focus
  refetchOnReconnect: true, //Refetchs on network reconnect
});
