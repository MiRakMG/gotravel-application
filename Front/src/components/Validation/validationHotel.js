import * as Yup from "yup"

export const validationHotel = Yup.object().shape({
    name: Yup.string().required("Nom de l'hôtel obligatoire"),
    city: Yup.string()
      .required("Nombre de la ville obligatoire") // Sets it as a compulsory field

  });
  