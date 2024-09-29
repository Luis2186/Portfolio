import { useDispatch, useSelector } from "react-redux"
import Service from "../../AboutMe/components/Service"
import { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { InputForm } from "../components/InputForm";
import { TextAreaForm } from "../components/TextAreaForm";
import { HeaderTitulo } from "../../General";
import { addNewService, deleteService, onUpdateService, setActiveService } from "../../store/portfolio/data/dataSlice";
import { IconSelector } from "../components/IconSelector";
import { FabAddNew } from "../components/FabAddNew";
import { FabDelete } from "../components/FabDelete";


const formValidations = {
    title: [(value) => value.length >= 3, "El titulo es requerido"],
    description: [(value) => value.length >= 20, "La descripcion es requerida"],
  };

export const FormServices = () => {
    
    const dispatch= useDispatch();
    const {services,activeService} = useSelector(state =>state.data)
    const [formSubmited, setFormSubmited] = useState(false);
    const [selectedIconClassName, setSelectedIconClassName] = useState(null);
    const [selectedService, setSelectedService] = useState(activeService);
    const [isPopoverOpen, setPopoverOpen] = useState(false);

    const {formState, onInputChange,
        title, description,iconClassName,
        titleValid,descriptionValid,iconClassNameValid,
        isFormValid,} = useForm(activeService,formValidations);
        
    const onHandleAddNewService=(service) =>{
        const lastId=services.length > 0 ? services[services.length-1].id : 1
        service.id= lastId + 1;

        dispatch(addNewService(service))
    }


    const startSavingService = (service) =>{
        
        if(service.id){
            onHandleUpdateService(service)
        } else {
            onHandleAddNewService(service)
        }
    }

    const onHandleUpdateService=(service) =>{

      
        dispatch(onUpdateService(service))

        // dispatch(addNewService(newDataService))
    }


    const onSubmit = (event) => {
        event.preventDefault();

        if(isFormValid){

            const newDataService= {
                ...formState,
                iconClassName:  selectedIconClassName,        
            }

            startSavingService(newDataService);
            // onHandleAddNewService();
            //onHandleUpdateService();
        }
    };

    const onSelectIcon = (icon) => {
        setSelectedIconClassName("fa-solid " + "fa-" + icon.iconName,)
        setPopoverOpen(false)
    }


    const onSelectService = (service) => {
        // setSelectedService(service)
        setActiveService(service)
        setSelectedIconClassName(service.iconClassName)
        dispatch(setActiveService(service))
    }

    const onDeleteService = (service) => {
        dispatch(deleteService(service))
        setSelectedIconClassName("");
    }

  return (
    <>
        <div className="form__page">
            <form action="" onSubmit={onSubmit} className="animate__animated animate__fadeIn animated__faster overflow">
                <div className="form_title">
                    <HeaderTitulo title={'Servicios'} />
                </div>
                
                <div className="form_content">
                    <div className="form__col1">
                        <InputForm
                            type="text"
                            name="title"
                            value={title}
                            onChange={onInputChange}
                            required={true}
                            placeholder="Titulo"
                            error={!!titleValid && formSubmited}
                            helperText={titleValid}
                        />
                    </div>

                    <div className="form__col2">
                        {/* <InputForm
                            type="text"
                            name="iconClassName"
                            value={iconClassName}
                            onChange={onInputChange}
                            placeholder="Icono"
                            error={!!iconClassNameValid && formSubmited}
                            helperText={iconClassNameValid}
                        /> */}
                        
                        <div style={{display:"flex", gap:10}}>
                            <h4>Selecciona un ícono</h4>

                            <i
                                className="fa-solid fa-magnifying-glass fa-2xl icon"
                                onClick={() => setPopoverOpen(!isPopoverOpen)}
                                style={{ cursor: 'pointer', marginRight: '10px', marginTop:"10px", color:"var(--color-secondary)" }}
                            />
                        </div>
                        
                        {selectedIconClassName && (
                            <div style={{display:"flex", gap:10, marginTop:"20px" ,color:"var(--color-secondary)"}}>
                                <h4>Ícono seleccionado :</h4>
                                <i className={`${selectedIconClassName} fa-2xl icon`} />
                            </div>
                        )}


                        {isPopoverOpen && (
                            <div className="popover-container popover__services">
                                <div className="popover__header">
                                    <button className="popover__close" onClick={() => setPopoverOpen(false)} >
                                        &times;
                                    </button>
                                </div>
                                <div className="popover__body">
                                    <IconSelector
                                        onSelect={onSelectIcon}
                                        onClose={() => setPopoverOpen(false)}
                                    />
                                </div>          
                            </div>
                        )}
                    </div>

                    <div className="fullGrid">
                        <TextAreaForm
                            name="description"
                            value={description}
                            onChange={onInputChange}
                            required
                            placeholder="Descripcion"
                            error={ !!descriptionValid && formSubmited}
                            helperText={descriptionValid}
                        />       
                    </div> 

                    <div className="fullGrid form_button_container">
                        {/* <button className="form_button__btn" type="button" onClick={onDeleteService}> Borrar </button> */}
                        <button className="form_button__btn" type="submit"> Guardar </button>
                    </div>
                </div> 

                <hr className="divider divider__services" />

                <div className="services__icons">
                    <FabAddNew setSelectedIconClassName={setSelectedIconClassName} />
                    <FabDelete hasEventSelected={activeService.id} onDeleteService={onDeleteService} />
                </div>

                <div className="services__container form__services">
                    {services.map((service) => (
                    <Service
                        key={service?.id}
                        icon={<i className={service?.iconClassName}></i>}
                        title={service?.title}
                        description={service?.description}
                        onClick={() => onSelectService(service)}
                    />
                    ))}
                </div>
            </form>         


        </div>
    </>
  )
}
