import { baseRoute } from "./baseRoute";

const hotelsApi = baseRoute.injectEndpoints({
    endpoints: (builder) => ({
        getAllHotels: builder.query({
            query: () => "hotels",
            keepUnusedDataFor: 5,
        }),
        addHotels: builder.mutation({
            query(body) {
              return {
                url: "hotels",
                method: "POST",
                body,
              };
            },
          }),
        getHotelsByCity: builder.query({
          query: (city) => `hotels/${city}`
        })
    })
});

export const {
    useGetAllHotelsQuery,
    useGetHotelsByCityQuery,
    useAddHotelsMutation
} = hotelsApi