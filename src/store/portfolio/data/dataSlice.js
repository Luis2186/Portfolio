import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    firstName: "Luis",
    secondName: "Ignacio",
    firstSurname: "López",
    secondSurname: "Perdomo",
    fullName: "Luis Ignacio López Perdomo",
    job: "Desarrollador Web",
    dateOfBirth: "1990-08-14",
    location: [
      {
        id: 1,
        country: "Uruguay",
        state: "Canelones",
        city: "Lagomar",
        adress: "Becu M42S28",
        zipCode: "15500",
      },
    ],
    cellPhone: "099798465",
    email: "l.lopezperdomo.e@gmail.com",
    presentation:
      "Soy Analista Programador con un año y medio de experiencia, enfocado en Desarrollo Ágil y especializado en tecnologías como .NET, React, JavaScript y CSS3.Desde el inicio de mi carrera, me he dedicado a buscar soluciones efectivas y a aprender continuamente en cada proyecto.Durante este tiempo, he participado activamente en el desarrollo y mantenimiento de sistemas, contribuyendo con ideas innovadoras para mejorar procesos y asegurar la calidad del software.Mis habilidades clave incluyen la escucha activa, la autocrítica constructiva, la empatía y un sólido trabajo en equipo, aspectos que me han permitido colaborar eficazmente y alcanzar metas profesionales significativas en cada proyecto.Estoy entusiasmado por seguir creciendo profesionalmente y explorar nuevas oportunidades para aplicar mis habilidades y conocimientos en futuros desafíos tecnológicos.",
    digitalPlataforms: [
      {
        id: 1,
        name: "Linkedin",
        url: "https://www.linkedin.com/in/luis-lopez-perdomo/",
        iconClassName: "fa-brands fa-linkedin social__icon",
      },
      {
        id: 2,
        name: "Instragram",
        url: "https://www.instagram.com/lucho_2186",
        iconClassName: "fa-brands fa-instagram social__icon",
      },
    ],
    services: [
      {
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
      },
    ],
  },
  reducers: {
    setDatosPersonales: (state , action) => {
        const { firstName, secondName, firstSurname, secondSurname, job, dateOfBirth, cellPhone, email, presentation,location } = action.payload;
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
        state.location[0] = location
    },
  },
});
export const { setDatosPersonales } = dataSlice.actions;
