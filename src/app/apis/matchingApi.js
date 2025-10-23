// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "./baseUrl";

// Define a service using a base URL and expected endpoints
export const matchingApi = createApi({
  reducerPath: "matchingApi",  
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: "include" }),
 tagTypes: ["connectionRequest"],
  endpoints: (builder) => ({
    connections: builder.query({
      query: () => "user/connections",
    }),

    connectionRequest: builder.query({
      query: () => "user/requests/received",
      providesTags: ["connectionRequest"],
    }),

    
    
    reviewRequests: builder.mutation({
      query: ( {state, id} ) => ({
        url: `request/review/${state}/${id}`,
        method: "POST",
         
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(matchingApi.util.invalidateTags(["connectionRequest"]));
        } catch (err) {
          console.log(err.message);
        }
      },
    }),
    
    getAllFeed: builder.query({
      query: () => "feed",
    }),
  }),
});

export const {
  useConnectionsQuery,
  useConnectionRequestQuery,
  useReviewRequestsMutation,
  useGetAllFeedQuery,
} = matchingApi;
