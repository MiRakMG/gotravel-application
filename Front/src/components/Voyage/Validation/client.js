import * as Yup from "yup"

export const schemaClient = Yup.object().shape({
    name: Yup.string().required("Nom du client obligatoire"),
    number: Yup.number().required("Nombre de client obligatoire")
})