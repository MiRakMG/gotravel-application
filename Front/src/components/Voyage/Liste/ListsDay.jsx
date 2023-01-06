import React from "react";
import { useGetPrestationQuery } from "../../../Services/prestations";
import { useGetPrendreByIdQuery } from "../../../Services/createHotelsApi";
import AboutHotel from "./AboutHotel";
import AboutPrestation from "./AboutPrestation";
import stylesTable from './ListsDay.module.scss'

export default function ListsDay({ code_cli,setPax }) {
  const { data, isSuccess } = useGetPrestationQuery({ code_cli });
  console.log(data)
  return (
    <div  className={stylesTable.container}>
      {data && Object.keys(data).length > 0 && data["prendre"].map((item) => 
        <div key={item.id}>
          <h1>{item?.date_number}</h1>
          <p>Voyage: {item?.journey}</p>
          <div className={stylesTable.hotels}>
            <h1>Hotels</h1>
              <table  className={stylesTable.detailsHotels}>
                <thead>
                  <tr>
                    <th>Nom de l'hôtel</th>
                    <th>Saison</th>
                    <th>Catégorie</th>
                    <th>Type de logement</th>
                    <th>Tarifs</th>
                  </tr>
                </thead>
                <tbody>
                  <AboutHotel id={item.id} setPax={setPax} numberClient={data["number"]}/>
                </tbody>
              </table>
            </div>
            <div  className={stylesTable.prestations}>
            <h2> Listes des préstations</h2>
            <table>
              <thead>
                <tr>
                  <th>Nom de préstation</th>
                  <th>Tarifs de préstation</th>
                </tr>
              </thead>
              <tbody>
                {item.date.faire.map(itemFaire => {
                  console.log(itemFaire)
                  return <AboutPrestation id={itemFaire.id}  setPax={setPax} numberClient={data["number"]}/>
})}
              </tbody>
            </table>
            </div>
        </div>
      )}
    </div>
  );
}
