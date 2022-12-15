import React from "react";
import { useGetAllHotelsQuery } from "../../Services/hotels";
import styles from "./HotelList.module.scss";

function HotelList() {
  const { data, isLoading, isError } = useGetAllHotelsQuery();
  
  const { hotelsSearch } = useGetAllHotelsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      hotelsSearch: data?.find(
        (hotelsSearch) => hotelsSearch.name === "Le By Pass"
      ),
    }),
  });
  
  console.log(hotelsSearch);
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
          {!isError &&
            !isLoading &&
            data.map((hotel) => {
              const { code_hotel, name, content } = hotel;
              return (
                <tr key={hotel.code_hotel}>
                  <td>{hotel.name}</td>
                  <td>
                    <select name="Saison">
                      <option selected>Uni</option>
                      <option selected>Haute</option>
                      <option selected>Basse</option>
                      <option selected>Moyenne</option>
                    </select>
                  </td>
                  <td>
                    <select name="Categorie">
                      <option selected>Simple</option>
                      <option>Double</option>
                      <option>Triple</option>
                      <option>Quadruple</option>
                    </select>
                  </td>
                  <td>
                    <select name="Type">
                      <option selected>Suite</option>
                      <option>Villa</option>
                      <option>Villa avec piscine</option>
                    </select>
                  </td>
                  <td>90$</td>
                  <td></td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default HotelList;
