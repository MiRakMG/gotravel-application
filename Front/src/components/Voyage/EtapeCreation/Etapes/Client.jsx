import React from "react";

export default function Client({register}) {
  
  return (
    <div className="flex flex-col ">
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-base font-bold uppercase leading-8 text-gray-500">
          Nom du client
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            name="type_client"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            {...register("name")}
          />
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-base font-bold uppercase leading-8 text-gray-500">
          Nombre de client
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            name="nombre_client"
            type="number"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            {...register("number")}
          />
        </div>
      </div>
    </div>
  );
}
