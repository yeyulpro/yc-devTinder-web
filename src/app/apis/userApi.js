// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "./baseUrl";

// Define a service using a base URL and expected endpoints
export const accountApi = createApi({
  reducerPath: "accountApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL ,credentials: "include",}),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (creds) => ({
        url: "login",
        method: "POST",
        body: creds,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(accountApi.util.invalidateTags(['profile']))
        } catch (err) {
          console.log(err.message)
        }
      }
    }),

    profile: builder.query({
      query: ()=>"profile/view",
      providesTags:["profile"]
    })
    
  }),
});


export const { useLoginMutation, useProfileQuery} = accountApi;
