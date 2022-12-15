import React, { useEffect } from 'react'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Services
import { useAddHotelsMutation } from '../../Services/hotels'
import { useAddTypeslogementsMutation } from '../../Services/createHotelsApi'
import { usePostContentMutation } from '../../Services/contents'

// Components
import InputTarif from './InputTarif'

// Validation
import { validationHotel } from '../Validation/validationHotel'
import { validationDispositionTarifs } from '../Validation/validationDispositionTarifs'

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"


function CreateHotel() {

    const [DispositionTarif, setDispositionTarif] = useState({});

    // Mutations
    const [addHotels, {data: dataHotel, isSuccess: SuccessHotel}] = useAddHotelsMutation();
    const [addTypeslogements, {data: dataTypes, isSuccess: SuccessType}] = useAddTypeslogementsMutation();
    const [postContent] = usePostContentMutation();


    // Condition
    useEffect(()=> {
        if (dataHotel!== undefined && dataTypes!== undefined){
        const Disposition = {
            hotel: dataHotel.code_hotel,
            type: dataTypes.code_type,
            season: DispositionTarif.code_saison,
            category: DispositionTarif.category,
            price: DispositionTarif.price
        }

        postContent(Disposition)
        console.log(dataHotel,dataTypes, DispositionTarif)
    }}, [SuccessHotel,SuccessType]
    )
    

    // Validation
    const {
        handleSubmit: submitHotel,
        register: registerHotel,
        formState: { errors: errorsHotel},
      } = useForm({
        mode: "onTouched",
        resolver: yupResolver(
            validationHotel
        ),
      });

    
    const {
        handleSubmit,
        register,
        formState: { errors},
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(
        validationDispositionTarifs
    ),
  });

    //Boutton saves all
    const saves = () =>{
    submitHotel(ajoutHotels)();
    handleSubmit(ajoutsDispositionTarif)();

  }

    // Hotels only (Nom,Localisation)
    const ajoutHotels = (aboutHotel) => {
        addHotels(aboutHotel)
    }

    // Disposition et tarifs
    const ajoutsDispositionTarif =  (aboutDispositionTarif) => {
    const {wording_type} = aboutDispositionTarif
    setDispositionTarif(aboutDispositionTarif)
        addTypeslogements({wording_type})
        
    }

    const PostContenir = () => {
    }


    const navigate = useNavigate();
    
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
                            {...registerHotel("name")}
                            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                            />
                        </div>
                        <p className='text-red-500'>{errorsHotel.name?.message}</p>
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
                            {...registerHotel("city")}
                            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                            />
                        </div>
                        <p className='text-red-500'>{errorsHotel.city?.message}</p>
                </div>
                <div className="mx-2 w-3/5 flex-1 pt-5">
                    <div className="text-sm font-semibold">
                    Disposition et tarif
                    </div>
                      <InputTarif errors={errors} register={register}/>
                </div>
            </div>
            <div className="mx-2">
                <button className="cursor-pointer mt-4 mr-4 rounded-md border-2 border-slate-300 bg-white py-2 px-4 font-normal text-slate-400 transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"onClick={() => navigate('/hotels') }>Annuler</button>
                <button 
                className="cursor-pointer rounded-md bg-green-500 py-2 px-5 font-normal text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white" 
                onClick={saves}>Enregistrer</button>
            </div>
        </div>
    </main>
  )
}

export default CreateHotel;