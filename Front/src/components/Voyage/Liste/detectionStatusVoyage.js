import { dateEgal, dateMin,dateMax } from "./calculDate";

export const statusVoyage = (debutSejour, finSejour) => {
  let status;
  const dateAujourdHui = Date.now();
  if (dateMin(dateAujourdHui, debutSejour)) {
    status = "En attente";
  } else if (
    dateEgal(dateAujourdHui, debutSejour) ||
    dateMin(dateAujourdHui, finSejour)
  ) {
    status = "En route";
  } else{
    status = "Fin voyage"
  }

  return status
};
