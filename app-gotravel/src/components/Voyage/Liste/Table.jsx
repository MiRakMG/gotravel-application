import React from "react";
import styles from "./Table.module.scss";


const Tables = () => {
    return (
        <table className={styles.table_container}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Types de voyageurs</th>
                    <th>Nom</th>
                    <th>Début</th>
                    <th>Fin</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Group</td>
                    <td>Visites</td>
                    <td>16/11/2022</td>
                    <td>26/11/2022</td>
                    <td>En route</td>
                    <button>Modifier</button>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Single</td>
                    <td>Touristes</td>
                    <td>16/11/2022</td>
                    <td>26/11/2022</td>
                    <td>En attente</td>
                    <button>Modifier</button>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Double</td>
                    <td>Voyages d'études</td>
                    <td>16/11/2022</td>
                    <td>26/11/2022</td>
                    <td>En attente</td>
                    <button>Modifier</button>
                </tr>
            </tbody>
        </table>
            );
}

export default Tables;