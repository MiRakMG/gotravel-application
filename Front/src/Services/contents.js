import { baseRoute } from "./baseRoute";

const contenirApi = baseRoute.injectEndpoints({
    endpoints: (builder) => ({
      getPrestationByFaire: builder.query({
        query: ({id}) => `contenir/${id}`,
        providesTags: (result, error, id) => [
            { type: "Faire", id },
          ],
      }),
    postContent: builder.mutation({
        query(body) {
          return {
            url: "contenir",
            method: "POST",
            body,
          };
        },
      }),
    })
})

export const {
    useGetPrestationByFaireQuery,
    usePostContentMutation
} = contenirApi