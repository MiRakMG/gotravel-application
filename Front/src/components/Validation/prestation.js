import * as Yup from "yup";

export const prestationSchema = Yup.object().shape({
    wording: Yup.string().required("Libellé obligatoire!"),
    price: Yup.string().required("Prix obligatoire!"),
    value: Yup.string(),
    type: Yup.string()
})