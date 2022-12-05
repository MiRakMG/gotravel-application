import React from "react";
import { useGetAllPrestationsQuery, useGetPrestationQuery } from "../../Services/prestations";

const HotelList = () => {
    const {data : prestations,error,isLoading} = useGetAllPrestationsQuery('prestations')
    const {data: prestation} = useGetPrestationQuery(18695)
    console.log(prestation)
    return (
        
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-blue-700 text-xl mb-2">
            Rak Hôtels avec SPA
          </div>
          <ul>
            <li>
              <strong>Tarif à partir de 45$</strong>

            </li>
            <li>
              Wifi, billard, piscine
    
            </li>
          </ul>
        </div>
        <div className="px-6 py-4">
            <button  className="cursor-pointer rounded-lg bg-blue-500 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white">Voir plus</button>
        </div>
      </div>
      
    )
  }

export default HotelList; 