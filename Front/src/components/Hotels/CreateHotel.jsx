import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAddHotelsMutation } from '../../Services/hotels'
import InputTarif from './InputTarif'


function CreateHotel() {
    const [nom, setNom] = useState("");
    const [ville, setVille] = useState("");
    const [addHotels] = useAddHotelsMutation();

    const navigate = useNavigate();

    const ajoutHotels = () => {
        addHotels({
            name: "Carlton",
	        city: "Antananarivo"
        })
    }
  return (
    <main>
        <div className="mx-auto rounded-xl bg-white p-10 md:w-4/5">
            <div className="flex flex-col ">
                <div className="mx-2 w-3/5 flex-1">
                    <div className="text-sm font-semibold">
                    A propos de l'hôtel
                    </div>
                        <div className="mt-3 h-6 text-sm font-normal leading-8 text-gray-500">
                            Nom de l'établissemnt
                        </div>
                        <div className="my-1 flex rounded border border-gray-200 bg-white p-1">
                            <input
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                            name="type_client"
                            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                            />
                        </div>
                </div>
                <div className="mx-2 w-3/5 flex-1 pt-5">
                    <div className="text-sm font-semibold">
                    Localisation
                    </div>
                        <div className="mt-3 h-6 text-sm font-normal leading-8 text-gray-500">
                            Ville
                        </div>
                        <div className="my-1 flex rounded border border-gray-200 bg-white p-1">
                            <input
                            value={ville}
                            onChange={(e) => setVille(e.target.value)}
                            name="ville"
                            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                            />
                        </div>
                </div>
                <div className="mx-2 w-3/5 flex-1 pt-5">
                    <div className="text-sm font-semibold">
                    Disposition et tarif
                    </div>
                      <InputTarif />
                </div>
            </div>
            <div className="mx-2">
                <button className="cursor-pointer mt-4 mr-4 rounded-md border-2 border-slate-300 bg-white py-2 px-4 font-normal text-slate-400 transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"onClick={() => navigate('/hotels') }>Annuler</button>
                <button className="cursor-pointer rounded-md bg-green-500 py-2 px-5 font-normal text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white" onClick={ajoutHotels}>Enregistrer</button>
            </div>
        </div>
    </main>
  )
}

export default CreateHotel;