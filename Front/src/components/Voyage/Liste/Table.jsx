import React from "react";
import styles from "./Table.module.scss";

const Tables = () => {
  return (
    <table className={styles.table_container}>
      <thead>
        <tr>
          <th>Clients</th>
          <th>Début</th>
          <th>Fin</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Visiteur</td>
          <td>16/11/2022</td>
          <td>26/11/2022</td>
          <td>En route</td>
          <td>
            <button>Modifier</button>
          </td>
        </tr>
        <tr>
          <td>Touristes</td>
          <td>16/11/2022</td>
          <td>26/11/2022</td>
          <td>En attente</td>
          <td>
            <button>Modifier</button>
          </td>
        </tr>
        <tr>
          <td>Voyages d'études</td>
          <td>16/11/2022</td>
          <td>26/11/2022</td>
          <td>En attente</td>
          <td>
            <button>Modifier</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Tables;
