
import RechercheHotels from "./RechercheHotels";
import HotelList from "./HotelList";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useGetAllHotelsQuery, useGetHotelsByCityQuery } from "../../Services/hotels";

const Hotels = () => {
    const [SearchInput, setSearchInput] = useState("");
    const { data: hotels } = useGetAllHotelsQuery();
    const { data: city } = useGetHotelsByCityQuery(SearchInput );

    const navigate = useNavigate();

    const dataFilter = () => {
        if (city?.length > 0) return city
        return hotels
    }

    return (
        <main>
            <div className="justify-center">
                <div className="flex mx-24">
                    <RechercheHotels value={SearchInput} setValue={setSearchInput}/>
                    <button className="cursor-pointer rounded-md bg-blue-900 py-2 px-11 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white" onClick={()=> navigate('/createHotel')}>Ajouter un hôtel</button>
                </div>
                    <HotelList data={dataFilter()}/>
            </div>
        
        </main>
    )
}

export default Hotels;

