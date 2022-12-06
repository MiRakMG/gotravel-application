import { baseRoute } from "./baseRoute";

const clientApi = baseRoute.injectEndpoints({
    endpoints: (builder) => ({
        addClient: builder.mutation({
            query(body) {
                return {
                    url : "clients",
                    method: "POST",
                    body,
                }
            }
        }),
        deleteClient: builder.mutation({
            query(id) {
                return {
                    url: `clients/${id}`,
                    method: "DELETE",
                }
            }
        })
    }),
    overrideExisting: false
})

export const {useAddClientMutation,useDeleteClientMutation} = clientApi