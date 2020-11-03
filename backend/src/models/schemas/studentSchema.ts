import * as Yup from 'yup';

const studentSchema = Yup.object().shape({
    email: Yup
        .string()
        .email()
        .required(),
    name: Yup
        .string()
        .required(),
    id: Yup
        .number()
        .required()
        .positive()
        .integer(),
    ra: Yup
        .string()
        .required(),
    cpf: Yup
        .string()
        .required(),

     });


  export default studentSchema;