import React, { useState } from "react";
import { useAddClientMutation } from "../../../../Services/clients";

export default function Client({ register, errors }) {
  
  return (
    <div className="flex flex-col ">
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-sm font-bold uppercase leading-8 text-gray-500">
          Nom du client
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            {...register("name")}
          />
        </div>
        <p className="text-red-500">{errors?.name?.message}</p>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-sm font-bold uppercase leading-8 text-gray-500">
          Nombre de client
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            type="number"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            {...register("number")}
          />
        </div>
        <p className="text-red-500">{errors?.number?.message}</p>
      </div>
    </div>
  );
}
