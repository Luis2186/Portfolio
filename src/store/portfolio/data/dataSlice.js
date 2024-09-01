import { createSlice } from "@reduxjs/toolkit";
import usuario from "../../../General/LayoutAside/data/dataUsuario";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    usuarioId:1,
    usuarioLog:false,
    firstName: "Luis",
    secondName: "Ignacio",
    firstSurname: "Lopez",
    secondSurname: "Perdomo",
    fullName: "",
    job: "Web Developer",
    dateOfBirth: "14/08/1990",
    location: [{
        country:"Uruguay",
        state:"Canelones",
        city:"Lagomar",
        adress:"Becu M42S28",
        zipCode:"15500"
      }],
    cellPhone: "099798465",
    email: "l.lopezperdomo.e@gmail.com",
    presentation:"Hola vengo a flotar asd Hola vengo a flotar asd Hola vengo a flotar asd Hola vengo a flotar asd Hola vengo a flotar asd",
    digitalPlataforms: [],
    services: [ {
        id: 1,
        title: "Programación",
        description:
          "Como programador, disfruto de la creación y optimización de código para resolver desafíos complejos. Mi enfoque se centra en diseñar soluciones eficientes y elegantes que mejoren la funcionalidad y la usabilidad de las aplicaciones.",
        iconClassName: "fa-solid fa-code",
      },
      {
        id: 2,
        title: "Formación",
        description:
          "Titulado como Analista Programador por la Facultad ORT, mi formación se distingue por su enfoque en programación avanzada y desarrollo de soluciones innovadoras. Este título representa mi compromiso con la excelencia técnica y la aplicación práctica de metodologías modernas en el desarrollo de software.",
        iconClassName: "fa-solid fa-chalkboard-user",
      },
      {
        id: 3,
        title: "Desarrollo Web",
        description:
          "Desarrollador web con experiencia en la creación y mantenimiento de aplicaciones web responsivas y funcionales. Utilizo herramientas y tecnologías modernas para construir interfaces de usuario intuitivas y atractivas, optimizando la experiencia del usuario y asegurando la máxima eficiencia.",
        iconClassName: "fa-solid fa-computer",
      },],
      activeService: {
        id: 0,
        title: "",
        description:"",
        iconClassName: "",
      },
  },
  reducers: {
    setDatosPersonales: (state , action) => {
        const { firstName, secondName, firstSurname, secondSurname, job, dateOfBirth, cellPhone, email, presentation,location,services, digitalPlataforms } = action.payload;
        state.firstName =  firstName,
        state.secondName = secondName,
        state.firstSurname = firstSurname ,
        state.secondSurname =secondSurname ,
        state.fullName = firstName + secondName +  firstSurname + secondSurname,
        state.job = job ,
        state.dateOfBirth = dateOfBirth 
        state.cellPhone = cellPhone,
        state.email = email,
        state.presentation = presentation
        state.location = location       
        state.services = services 
        state.digitalPlataforms= digitalPlataforms    
    },
    usuarioEncontrado: (state,action) =>{
        const { usuarioId } = action.payload;
        state.usuarioLog = state.usuarioId == usuarioId
    },
    setActiveService: (state,{payload}) =>{
        state.activeService = payload;
    },
    addNewService: (state,{payload}) =>{
        console.log(payload)
        state.services.push(payload)
    },
    deleteService: (state,{payload}) =>{
        if ( state.activeService ) {
            state.services = state.services.filter( service => service.id !== state.activeService.id );
            state.activeService = {
                id: 0,
                title: "",
                description:"",
                iconClassName: "",
              };
        }
    },
  },
});
export const { setDatosPersonales ,usuarioEncontrado,addNewService,setActiveService,deleteService} = dataSlice.actions;
