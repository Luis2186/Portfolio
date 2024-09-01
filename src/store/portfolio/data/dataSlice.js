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
    services: [],
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
    }
  },
});
export const { setDatosPersonales ,usuarioEncontrado} = dataSlice.actions;
