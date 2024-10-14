import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  reducerPath: "api",
  tagTypes: [], // You can define tag types here later if needed
  endpoints: () => ({}), // No endpoints defined yet
});

// Remove the empty export for now since there are no endpoints to export
