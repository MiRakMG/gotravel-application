import * as Yup from "yup";

export const schemaClient = Yup.object().shape({
  name: Yup.string().required("Nom du client obligatoire"),
  number: Yup.number()
    .required("Nombre de client obligatoire") // Sets it as a compulsory field
    .positive("Valeur positif s'il vous plaît!") // Validates against negative values
    .min(1, "Le nombre de personne doit être supérieur à 0"), // Sets a minimum value});
});
