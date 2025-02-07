import { baseApi } from "./baseApi";

const booksApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
    getSingleBook: builder.query({
      query: () => ({
        url: "/products/:id",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllBooksQuery, useGetSingleBookQuery } = booksApi;
