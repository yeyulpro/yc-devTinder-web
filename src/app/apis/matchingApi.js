// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "./baseUrl";

// Define a service using a base URL and expected endpoints
export const matchingApi = createApi({
  reducerPath: "matchingApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: "include" }),
  endpoints: (builder) => ({
    connections: builder.query({
      query: () => "user/connections",
    }),
  }),
});
export const {
 useConnectionsQuery
} = matchingApi;
