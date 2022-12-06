import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseRoute = createApi({
  reducerPath: "goTravelApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),
  keepUnusedDataFor: 30,
  refetchOnMountOrArgChange: 30,
  refetchOnReconnect: true,
  tagTypes: ["Prestations"],
  endpoints: () => ({}),
});
