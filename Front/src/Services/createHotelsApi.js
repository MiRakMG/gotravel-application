import { baseRoute } from "./baseRoute";

const createHotelsApi = baseRoute.injectEndpoints({
    endpoints: (builder) => ({
        addSaisons: builder.mutation({
            query(body) {
                return {
                    url: "saisons",
                    method: "POST", 
                    body,
                }
            }
        }),

        addTypeslogements: builder.mutation({
            query(body) {
                return {
                    url: "types",
                    method: "POST",
                    body,
                }
            }
        }),

        addContaints: builder.mutation({
            query(body) {
                return {
                    url: "contenir",
                    method: "POST",
                    body,
                }
            }
        }),
    })
});

export const {
    useAddSaisonsMutation,
    useAddTypeslogementsMutation,
    useAddContaintsMutation
} = createHotelsApi
