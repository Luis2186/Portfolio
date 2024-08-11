import { useState } from "react";
import { HeaderSubtitle, HeaderTitulo } from "../../General";
import { useForm } from "../../hooks/useForm";
import { InputForm } from "../components/InputForm";
import { TextAreaForm } from "../components/TextAreaForm";
import { setDatosPersonales } from "../../store/portfolio/data/dataSlice"; 
import { useDispatch } from "react-redux";

const DatosPersonales={
    firstName: "",
    firstSurname: "",
    job: "",
    dateOfBirth: "",
    secondName: "",
    secondSurname: "",
    cellPhone: "",
    email: "",
    presentation: "",
    location:{
        country:"",
        state:"",
        city:"",
        adress:"",
        zipCode:""
    } 
}

const formData ={
    firstName: "",
    firstSurname: "",
    job: "",
    dateOfBirth: "",
    secondName: "",
    secondSurname: "",
    cellPhone: "",
    email: "",
    presentation: "",
    country:"",
    state:"",
    city:"",
    adress:"",
    zipCode:""
  };

const formValidations = {
  firstName: [(value) => value.length >= 3, "El nombre es requerido"],
  firstSurname: [(value) => value.length >= 1, "El Apellido es requerido"],
  dateOfBirth: [(value) => value.length >= 1,"La fecha de nacimiento es requerida", ],
  cellPhone: [(value) => value.length >= 1 , "El telefono celular es requerido"],
  email: [(value) => value.length >= 6, "El correo electronico es requerido"],
  presentation: [(value) => value.length >= 60,"La presentacion debe tener al menos 60 caracteres",],
  country: [(value) => value.length >= 1,"El pais es requerido",],
  state: [(value) => value.length >= 1,"El departamento es requerido",],
  city: [(value) => value.length >= 1,"La localidad es requerida",],
  adress: [(value) => value.length >= 1,"La direccion es requerida",],
};

export const FormPortfolio = () => {
const dispatch = useDispatch();
  const [formSubmited, setFormSubmited] = useState(false);
  const {formState, onInputChange,
         firstName, firstSurname,secondName,secondSurname,job,dateOfBirth,cellPhone,email,presentation,country,state,city,adress,zipCode,
         firstNameValid,firstSurnameValid,dateOfBirthValid,cellPhoneValid,emailValid,presentationValid,countryValid,stateValid,adressValid,cityValid,
         isFormValid,} = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmited(true);


    if (isFormValid) {
        DatosPersonales.firstName = firstName,
        DatosPersonales.firstSurname = firstSurname,
        DatosPersonales.job = job,
        DatosPersonales.dateOfBirth = dateOfBirth,
        DatosPersonales.secondName = secondName,
        DatosPersonales.secondSurname = secondSurname,
        DatosPersonales.cellPhone = cellPhone,
        DatosPersonales.email = email,
        DatosPersonales.presentation = presentation,
        DatosPersonales.location = {
            country: country,
            state:state,
            city:city,
            adress:adress,
            zipCode:zipCode
        } 
        dispatch(setDatosPersonales(DatosPersonales));
    }
  };

  return (
    <div className="form__page">
        <form action="" onSubmit={onSubmit} className="animate__animated animate__fadeIn animated__faster overflow">
            <div className="form_title">
                <HeaderTitulo title={<>Creacion de Portafolio</>} />
            </div>
            <div className="form_content">

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

                <div className="fullGrid">
                    <HeaderSubtitle subtitle="Ubicacion" className="form__subtitle"/>
                    <hr className="divider" />
                </div>

                <div className="form__col3">
                    <InputForm
                        type="text"
                        name="country"
                        value={country}
                        onChange={onInputChange}
                        required={true}
                        placeholder="Pais"
                        error={!!countryValid && formSubmited}
                        helperText={countryValid}
                    />

                    <InputForm
                        type="text"
                        name="state"
                        value={state}
                        onChange={onInputChange}
                        placeholder="Departamento"
                        error={!!stateValid && formSubmited}
                        helperText={stateValid}
                    />

                    <InputForm
                        type="text"
                        name="city"
                        value={city}
                        onChange={onInputChange}
                        placeholder="Ciudad"
                        error={!!cityValid && formSubmited}
                        helperText={cityValid}
                    />
                </div>

                <div className="form__col4">
                    <InputForm
                        type="text"
                        name="adress"
                        value={adress}
                        onChange={onInputChange}
                        required={true}
                        placeholder="Dirección"
                        error={!!adressValid && formSubmited}
                        helperText={adressValid}
                    />

                    <InputForm
                        type="text"
                        name="zipCode"
                        value={zipCode}
                        onChange={onInputChange}
                        placeholder="Codigo Postal"
                    />
                </div>

                <div className="fullGrid form_button_container">
                    <button className="form_button__btn"> Siguiente </button>
                </div>
            </div>
      </form>
    </div>
  );
};
