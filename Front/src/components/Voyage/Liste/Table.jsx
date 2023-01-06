import { useGetAllClientsQuery } from "../../../Services/clients";
import { statusVoyage } from "./detectionStatusVoyage";
import { maxDateInArray, minDateInArray } from "./searchDateClient";
import Details from "./Details";

import styles from "./Table.module.scss";

const Tables = () => {

  const { data, isLoading, isError } = useGetAllClientsQuery();

  console.log(data)
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
        {!isError && !isLoading &&
          data.map((client) => {
            const debutSejour = minDateInArray(client.prendre)
            const finSejour = maxDateInArray(client.prendre)
            const status = statusVoyage(debutSejour,finSejour)

            return <tr key={client.code_cli}>
              <td>{client.name}</td>
              <td>{debutSejour}</td>
              <td>{finSejour}</td>
              <td>{status}</td>
              <td>
                <Details/>
                {/* <button onClick={handleClickDetails}>Détails</button> */}
              </td>
              
            </tr>
})}
      </tbody>
    </table>
  );
};

export default Tables;
