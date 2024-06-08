import { mixed, object, string,ref } from "yup";

let userSchema = object({
  nombre: string("Nombre debe contener solo letras").required("Nombre es requerido"),
  apellido: string("Apellido debe contener solo letras").required("Apellido es requerido"),
  telefono: mixed().required("Telefono es requerido"),
  email: string().email("Email no tiene el formato correcto").required("Email es requerido"),
  confirmEmail: string()
  .oneOf([ref('email'), null], 'Los emails deben coincidir')
  .required("Confirmar email es requerido")
});

const validateForm = async(dataForm) => {
  try {
    await userSchema.validate(dataForm) 
    return { status: "success" }

  } catch (error) {
    return { status: "error", message: error.message }
  }
}

export default validateForm