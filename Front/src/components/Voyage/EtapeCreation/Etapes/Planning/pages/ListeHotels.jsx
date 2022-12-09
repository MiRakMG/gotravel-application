import React from 'react'
import styles from './ListeHotels.module.scss'

function ListeHotels() {
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
          <th>Tarifs</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ibis Hôtel</td>
            <td><select name="Saison">
                    <option selected>Uni</option>
                    <option selected>Haute</option>
                    <option selected>Basse</option>
                    <option selected>Moyenne</option>
                </select>
            </td>
            <td><select name="Categorie">
                    <option selected>Simple</option>
                    <option selected>Double</option>
                    <option selected>Triple</option>
                </select>
            </td>
          <td><select name="Categorie">
                    <option selected>Suite</option>
                    <option selected>Villa</option>
                    <option selected>Villa avec piscine</option>
                </select></td>
          <td>90$</td>
          <td>
            <button>Ajouter</button>
          </td>
        </tr>
        <tr>
        <td>Radison Blue</td>
            <td><select name="Saison">
                    <option selected>Uni</option>
                    <option selected>Haute</option>
                    <option selected>Basse</option>
                    <option selected>Moyenne</option>
                </select>
            </td>
            <td><select name="Categorie">
                    <option selected>Simple</option>
                    <option selected>Double</option>
                    <option selected>Triple</option>
                </select>
            </td>
          <td><select name="Categorie">
                    <option selected>Suite</option>
                    <option selected>Villa</option>
                    <option selected>Villa avec piscine</option>
                </select></td>
          <td>120$</td>
          <td>
            <button>Ajouter</button>
          </td>
        </tr>
        <tr>
        <td>Carlton</td>
            <td><select name="Saison">
                    <option selected>Uni</option>
                    <option selected>Haute</option>
                    <option selected>Basse</option>
                    <option selected>Moyenne</option>
                </select>
            </td>
            <td><select name="Categorie">
                    <option selected>Simple</option>
                    <option selected>Double</option>
                    <option selected>Triple</option>
                </select>
            </td>
          <td><select name="Categorie">
                    <option selected>Suite</option>
                    <option selected>Villa</option>
                    <option selected>Villa avec piscine</option>
                </select></td>
          <td>100$</td>
          <td>
            <button>Ajouter</button>
          </td>
        </tr>
      </tbody>
    </table>          
    </div>
  )
}

export default ListeHotels