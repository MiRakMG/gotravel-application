import React, { useEffect } from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Services
import { useAddHotelsMutation } from "../../Services/hotels";
import { useAddTypeslogementsMutation } from "../../Services/createHotelsApi";
import { usePostContentMutation } from "../../Services/contents";

// Components
import InputTarif from "./InputTarif";

// Validation
import { validationHotel } from "../Validation/validationHotel";
import { validationDispositionTarifs } from "../Validation/validationDispositionTarifs";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function CreateHotel() {
  const [inputList, setinputList] = useState([
    { wording_type: "", category: "", price: "", code_saison: "",value:"Ariary" },
  ]);
  // Mutations
  const [addHotels] = useAddHotelsMutation();
  const [addTypeslogements] = useAddTypeslogementsMutation();
  const [postContent] = usePostContentMutation();

  // Validation
  const {
    handleSubmit,
    register,
    formState: { errors: errorsHotel },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(validationHotel),
  });

  const navigate = useNavigate();

  const handleSubmitAll = (data) => {
    addHotels(data).then((hotel) => {
      inputList?.forEach((inputItem) => {
        if (inputItem.wording_type !== "" && inputItem.code_saison !== "") {
          addTypeslogements({ wording_type: inputItem.wording_type }).then(
            (type) => {
              postContent({
                hotel: hotel.data.code_hotel,
                type: type.data.code_type || type.data[0].code_type,
                season: inputItem.code_saison,
                category: inputItem.category,
                price: inputItem.price + inputItem.value,
              });
            }
          );
        }
      });
    });
  };

  return (
    <main>
      <div className="mx-auto rounded-xl bg-white p-10 md:w-4/5">
        <div className="flex flex-col ">
          <div className="mx-2 w-3/5 flex-1">
            <div className="text-sm font-semibold">A propos de l'hôtel</div>
            <div className="mt-3 h-6 text-sm font-normal leading-8 text-gray-500">
              Nom de l'établissemnt
            </div>
            <div className="my-1 flex rounded border border-gray-200 bg-white p-1">
              <input
                {...register("name")}
                className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
              />
            </div>
            <p className="text-red-500">{errorsHotel.name?.message}</p>
          </div>
          <div className="mx-2 w-3/5 flex-1 pt-5">
            <div className="text-sm font-semibold">Localisation</div>
            <div className="mt-3 h-6 text-sm font-normal leading-8 text-gray-500">
              Ville
            </div>
            <div className="my-1 flex rounded border border-gray-200 bg-white p-1">
              <input
                {...register("city")}
                className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
              />
            </div>
            <p className="text-red-500">{errorsHotel.city?.message}</p>
          </div>
          <div className="mx-2 w-3/5 flex-1 pt-5">
            <div className="text-sm font-semibold">Disposition et tarif</div>
            <InputTarif setinputList={setinputList} inputList={inputList} />
          </div>
        </div>
        <div className="mx-2">
          <button
            className="cursor-pointer mt-4 mr-4 rounded-md border-2 border-slate-300 bg-white py-2 px-4 font-normal text-slate-400 transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
            onClick={() => navigate("/hotels")}
          >
            Annuler
          </button>
          <button
            className="cursor-pointer rounded-md bg-green-500 py-2 px-5 font-normal text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
            onClick={handleSubmit(handleSubmitAll)}
          >
            Enregistrer
          </button>
        </div>
      </div>
    </main>
  );
}

export default CreateHotel;
