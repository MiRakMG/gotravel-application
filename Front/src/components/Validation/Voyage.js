import * as Yup from "yup";

export const voyageSchema = Yup.object().shape({
  dateStart: Yup.string().required("Date de début du voyage obligatoire"),
  dateFin: Yup.string().required("Date fin de voyage obligatoire"),
});
