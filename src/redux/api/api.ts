// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const baseApi = createApi({
//   reducerPath: "baseApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
//   endpoints: (builder) => ({
//     getTodo: builder.query({
//       query: () => ({
//         url: "/tasks",
//         method: "GET",
//       }),
//     }),
//   }),
// });

// export const { useGetTodoQuery } = baseApi;

// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodo: builder.query({
      query: (priority) => {
        const params = new URLSearchParams();
        if (priority) params.append("priority", priority);
        return {
          url: "/tasks",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["todo"],
    }),
    addTodo: builder.mutation({
      query: (data) => ({
        url: "/task",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const { useGetTodoQuery, useAddTodoMutation } = baseApi;
