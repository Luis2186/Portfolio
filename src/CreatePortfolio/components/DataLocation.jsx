import { useEffect } from "react";
import { HeaderSubtitle } from "../../General";
import { useForm } from "../../hooks/useForm";
import { InputForm } from "./InputForm";

const formValidations = {
    country: [(value) =>  value?.length >= 3,"El pais es requerido",],
    state: [(value) => value?.length >= 1,"El departamento es requerido",],
    city: [(value) => value?.length >= 1,"La localidad es requerida",],
    adress: [(value) => value?.length >= 1,"La direccion es requerida",],
  };
  
export const DataLocation = ({formSubmited,onHandleDataLocation,data }) => {
  
    const {formState, onInputChange,country,state, city ,adress, zipCode,countryValid,stateValid,adressValid,cityValid,isFormValid,} = useForm(data,formValidations);

    useEffect(() => {
        onHandleDataLocation(formState,isFormValid)
    }, [isFormValid])

  return (
    <>
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
    </>
  )
}
