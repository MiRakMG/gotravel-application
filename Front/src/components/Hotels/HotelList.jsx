import React, { useState } from "react";
import styles from "./HotelList.module.scss";

function HotelList({ data }) {
  const [typeChoice, setTypeChoice] = useState("");
  const [seasonChoice, setSeasonChoice] = useState("");
  const [categoryChoice,  setCategoryChoice] = useState("");

  return (
    <div>
      <table className={styles.table_container}>
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
          {data?.map((hotel) => {
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
                  {listSeason.length > 0 ? (
                    <select
                      name="Saison"
                      value={seasonChoice}
                      onChange={(e) => setSeasonChoice(e.target.value)}
                    >
                      <option value="">Selectionnnez la saison ...</option>
                      {listSeason?.map((season, id) => (
                        <option key={id} value={season}>
                          {season}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <p>Aucun saison</p>
                  )}
                </td>
                <td>
                  <select
                    name="Categorie"
                    value={categoryChoice}
                    onChange={(e) => setCategoryChoice(e.target.value)}
                  >
                    <option value="">Selectionnnez la catégorie ...</option>
                    <option value="Simple">Simple</option>
                    <option value="Double">Double</option>
                    <option value="Triple">Triple</option>
                    <option value="Quadruple">Quadruple</option>
                  </select>
                </td>
                <td>
                  {listType.length > 0 ? (
                    <select
                      name="Type"
                      value={typeChoice}
                      onChange={(e) => setTypeChoice(e.target.value)}
                    >
                      <option value="">Selectionnnez le type ...</option>
                      {listType?.map((type, id) => (
                        <option key={id} value={type?.code_type}>
                          {type?.wording_type}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <p>Aucun type</p>
                  )}
                </td>
                <td>{city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default HotelList;
