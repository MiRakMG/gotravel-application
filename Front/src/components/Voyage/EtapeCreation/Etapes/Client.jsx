import React, { useState } from "react";
import { useAddClientMutation } from "../../../../Services/clients";

export default function Client({ register }) {
  const [nom, setNom] = useState("");
  const [nombre, setNombre] = useState(0);
  const [addClient,] = useAddClientMutation();

  const ajoutClient = () => {
    addClient({
      name: "John Doe",
      number: 5,
    });
  };

  return (
    <div className="flex flex-col ">
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-sm font-bold uppercase leading-8 text-gray-500">
          Nom du client
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            name="type_client"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-sm font-bold uppercase leading-8 text-gray-500">
          Nombre de client
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            name="nombre_client"
            type="number"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>
      <button onClick={ajoutClient}></button>
    </div>
  );
}
