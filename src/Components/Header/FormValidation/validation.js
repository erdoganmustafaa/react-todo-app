import * as Yup from "yup";

const validations = Yup.object().shape({
    todoText:Yup.string().required("Text is a required field!")
})
export default validations;