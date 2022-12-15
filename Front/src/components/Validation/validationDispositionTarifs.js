import * as Yup from "yup";

export const validationDispositionTarifs = Yup.object().shape({
    code_saison: Yup.string().required("Veuillez choisir une saison"),
    wording_type: Yup.string().required("Entrer le type de logements"),
    category: Yup.string().required("Entrer le catégorie de logements"),
    price: Yup.number().required("Entrer le tarifs de logements")
});
