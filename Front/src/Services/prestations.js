import {baseRoute} from "./baseRoute"
const prestationApi = baseRoute.injectEndpoints({
  endpoints: (builder) => ({
    getAllPrestations: builder.query({
      query: () => "prestations",
      keepUnusedDataFor: 5,
      providesTags: (result) =>
        result
          ? [
              ...result.prestations.map(({ code_cli }) => ({
                type: "Prestations",
                code_cli,
              })),
              { type: "Prestations", code_cli: "LIST" },
            ]
          : [{ type: "Prestations", code_cli: "LIST" }],
    }),
    addPrestation: builder.mutation({
      query(body) {
        return {
          url: "prestations",
          method: "POST",
          body,
        };
      },
      invalidatesTags: [{ type: "Prestations", code_cli: "LIST" }],
    }),
    getPrestation: builder.query({
      query: ({code_cli}) => `prestations/${code_cli}`,
      providesTags: (result, error, code_cli) => [
        { type: "Prestations", code_cli },
      ],
    }),
  }),
});

export const {
  useGetAllPrestationsQuery,
  useAddPrestationMutation,
  useGetPrestationQuery,
} = prestationApi;
