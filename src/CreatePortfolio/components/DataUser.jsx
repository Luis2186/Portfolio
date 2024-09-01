import { useEffect } from "react";
import { HeaderSubtitle } from "../../General";
import { useForm } from "../../hooks/useForm";
import { InputForm } from "./InputForm";
import { TextAreaForm } from "./TextAreaForm";


const formValidations = {
    firstName: [(value) => value.length >= 3, "El nombre es requerido"],
    firstSurname: [(value) => value.length >= 1, "El Apellido es requerido"],
    dateOfBirth: [(value) => value.length >= 1,"La fecha de nacimiento es requerida", ],
    cellPhone: [(value) => value.length >= 1 , "El telefono celular es requerido"],
    email: [(value) => value.length >= 6, "El correo electronico es requerido"],
    presentation: [(value) => value.length >= 60,"La presentacion debe tener al menos 60 caracteres",],
  };

export const DataUser = ({formSubmited,onHandleDataUser,data }) => {

    const {formState, onInputChange,
        firstName, firstSurname,secondName,secondSurname,job,dateOfBirth,cellPhone,email,presentation, 
        firstNameValid,firstSurnameValid,dateOfBirthValid,cellPhoneValid,emailValid,presentationValid,
        isFormValid,} = useForm(data,formValidations);


        useEffect(() => {
            onHandleDataUser(formState,isFormValid)
        }, [isFormValid])
        
  return (
    <>
        <div className="fullGrid">
            <HeaderSubtitle subtitle="Datos personales" className="form__subtitle"/>
            <hr className="divider" />
        </div>

        <div className="form__col1">
            <InputForm
                type="text"
                name="firstName"
                value={firstName}
                onChange={onInputChange}
                required={true}
                placeholder="Primer nombre"
                error={!!firstNameValid && formSubmited}
                helperText={firstNameValid}
            />

            <InputForm
                type="text"
                name="firstSurname"
                value={firstSurname}
                onChange={onInputChange}
                placeholder="Primer apellido"
                error={!!firstSurnameValid && formSubmited}
                helperText={firstSurnameValid}
            />

            <InputForm
                type="text"
                name="job"
                value={job}
                onChange={onInputChange}
                placeholder="Trabajo"
            />

            <InputForm
                type="date"
                name="dateOfBirth"
                value={dateOfBirth}
                onChange={onInputChange}
                placeholder="Fecha de nacimiento"
                error={!!dateOfBirthValid && formSubmited}
                helperText={dateOfBirthValid}
            />
        </div>

        <div className="form__col2">
            <InputForm
                type="text"
                name="secondName"
                value={secondName}
                onChange={onInputChange}
                placeholder="Segundo nombre"
            />

            <InputForm
                type="text"
                name="secondSurname"
                value={secondSurname}
                onChange={onInputChange}
                placeholder="Segundo apellido"
            />

            <InputForm
                type="text"
                name="cellPhone"
                value={cellPhone}
                onChange={onInputChange}
                placeholder="Telefono celular"
                error={!!cellPhoneValid && formSubmited}
                helperText={cellPhoneValid}
            />

            <InputForm
                type="text"
                name="email"
                value={email}
                onChange={onInputChange}
                placeholder="Correo electronico"
                error={!!emailValid && formSubmited}
                helperText={emailValid}
            />
        </div>
        
        <div className="fullGrid">
            <TextAreaForm
                name="presentation"
                value={presentation}
                onChange={onInputChange}
                required
                placeholder="Presentación"
                error={ !!presentationValid && formSubmited}
                helperText={presentationValid}
            />       
        </div> 
    </>
  )
}
