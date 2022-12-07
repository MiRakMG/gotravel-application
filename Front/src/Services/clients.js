import { baseRoute } from "./baseRoute";

const clientApi = baseRoute.injectEndpoints({
  endpoints: (builder) => ({
    getAllClients: builder.query({
      query: () => "clients",
      keepUnusedDataFor: 5,
    }),
    addClient: builder.mutation({
      query(body) {
        return {
          url: "clients",
          method: "POST",
          body,
        };
      },
    }),
    deleteClient: builder.mutation({
      query(id) {
        return {
          url: `clients/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAllClientsQuery,
  useAddClientMutation,
  useDeleteClientMutation,
} = clientApi;
