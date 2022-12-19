import { baseRoute } from "./baseRoute";

const contenirApi = baseRoute.injectEndpoints({
    endpoints: (builder) => ({
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
    usePostContentMutation
} = contenirApi