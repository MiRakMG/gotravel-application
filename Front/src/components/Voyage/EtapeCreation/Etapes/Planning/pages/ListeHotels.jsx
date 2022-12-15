import React, { useState } from "react";
import { useGetAllHotelsQuery } from "../../../../../../Services/hotels";
import styles from "./ListeHotels.module.scss";

function ListeHotels() {
  const { data, isSuccess } = useGetAllHotelsQuery();
  const [] = useState({})

  return (
    <div>
      <h2>Hôtel</h2>
      <table className={styles.table_container}>
        <thead>
          <tr>
            <th>Nom de l'hôtel</th>
            <th>Saison</th>
            <th>Catégorie</th>
            <th>Type de logement</th>
            <th>Ville</th>
          </tr>
        </thead>
        <tbody>
          {isSuccess &&
            data?.map((hotel) => {
              const { city, name, content, code_hotel } = hotel;
              let listSeason = [];
              let listType = [];
              // List all season exist in this current hotel
              content?.forEach((contentItem) => {
                if (listSeason.indexOf(contentItem.season.code_saison) === -1)
                  listSeason.push(contentItem.season.code_saison);
              });

              // list all type exist in this current hotel
              content?.forEach((contentItem) => {
                if (listType.includes(contentItem.type) === false)
                  listType.push(contentItem.type);
              });

              return (
                <tr key={code_hotel}>
                  <td>{name}</td>
                  <td>
                    {listSeason.length > 0 ? <select name="Saison" defaultValue={listSeason[0]}>
                      {listSeason?.map((season, id) => (
                        <option key={id} value={season}>{season}</option>
                      )) }
                    </select> : <p>Aucun saison</p>}
                  </td>
                  <td>
                    <select name="Categorie" defaultValue="Simple">
                      <option value="Simple" selected>Simple</option>
                      <option value="Double">Double</option>
                      <option value="Triple">Triple</option>
                      <option value="Quadruple">Quadruple</option>
                    </select>
                  </td>
                  <td>
                    {listType.length > 0 ? <select name="Categorie" defaultValue={listType[0].code_type}>
                      {listType?.map((type,id) => <option key={id} value={type.code_type}>{type.wording_type}</option>)}
                    </select> : <p>Aucun type</p>}
                  </td>
                  <td>{city}</td>
                  {/* <td>90$</td> */}
                  <td>
                    <button>Ajouter</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default ListeHotels;
