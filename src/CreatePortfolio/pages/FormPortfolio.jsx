import { useState } from "react";
import { HeaderTitulo } from "../../General";
import { setDatosPersonales } from "../../store/portfolio/data/dataSlice"; 
import { useDispatch, useSelector } from "react-redux";
import { DataUser } from "../components/DataUser";
import { DataLocation } from "../components/DataLocation";


export const FormPortfolio = () => {
    const dispatch = useDispatch();

    var estado = useSelector(status => status.data)
    const [dataUserValid, setDataUserValid] = useState(false)
    const [dataLocationValid, setDataLocationValid] = useState(false)
    const [dataUser, setDataUser] = useState({...estado})
    const [formSubmited, setFormSubmited] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();
        setFormSubmited(true);
        
        if (dataLocationValid && dataUserValid) { 
            dispatch( setDatosPersonales(dataUser) );
        }
    };

    const onHandleDataUser= (data, isFormValid) => {
        if(!isFormValid) return

        setDataUserValid(isFormValid);
        setDataUser(prevData=> ({...prevData,...data}));
    }

    const onHandleDataLocation= (data, isFormValid) => {
        if(!isFormValid) return
    
        setDataLocationValid(isFormValid)
        setDataUser(prevData=> ({...prevData,location:[{...data}]}));
    }

  return (
    <div className="form__page">
        <form action="" onSubmit={onSubmit} className="animate__animated animate__fadeIn animated__faster overflow">
            <div className="form_title">
                <HeaderTitulo title={<>Creacion de Portafolio</>} />
            </div>

            <div className="form_content">
                <DataUser formSubmited={formSubmited} onHandleDataUser={onHandleDataUser} data={dataUser}/>

                <DataLocation formSubmited={formSubmited} onHandleDataLocation={onHandleDataLocation} data={dataUser.location[0]}/>

                <div className="fullGrid form_button_container">
                    <button className="form_button__btn"> Siguiente </button>
                </div>
            </div>
      </form>
    </div>
  );
};
