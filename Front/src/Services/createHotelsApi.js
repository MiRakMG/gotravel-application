import { baseRoute } from "./baseRoute";

const createHotelsApi = baseRoute.injectEndpoints({
    endpoints: (builder) => ({
        addPrendreHotel : builder.mutation({
            query(body) {
                return {
                    url: "prendre",
                    method: "POST",
                    body,
                }
            }
        }),
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
        addFairePrestation: builder.mutation({
            query(body) {
                return {
                    url: "faire",
                    method: "POST",
                    body
                }
            }
        })
    })
});

export const {
    useAddPrendreHotelMutation,
    useAddSaisonsMutation,
    useAddTypeslogementsMutation,
    useAddContaintsMutation,
    useAddFairePrestationMutation
} = createHotelsApi
