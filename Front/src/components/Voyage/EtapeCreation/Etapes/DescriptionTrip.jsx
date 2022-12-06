import React from "react";

export default function DescriptionTrip({register}) {
  
    return (
      <div className="flex flex-col ">
        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-base font-bold uppercase leading-8 text-gray-500">
            Nom du voyage
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              
              name="nom_voyage"
              placeholder="Nom du voyage"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>
        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-base font-bold uppercase leading-8 text-gray-500">
            Date du début
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              name="date_debut"
              type="date"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
              {...register("dateStart")}
            />
          </div>
        </div>
        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-base font-bold uppercase leading-8 text-gray-500">
            Date du retour
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              name="date_retour"
              type="date"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
              {...register("dateFin")}
            />
          </div>
        </div>
      </div>
    );
  }
  