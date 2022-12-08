import { schemaClient } from "./client";
import { voyageSchema } from "./Voyage";
import * as Yup from "yup"


export const schemaCreateVoyage = Yup.object().shape({
    name: Yup.string().required("Nom du client obligatoire"),
    number: Yup.number().required("Nombre de client obligatoire")
})