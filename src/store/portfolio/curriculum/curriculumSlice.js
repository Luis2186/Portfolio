import { createSlice } from "@reduxjs/toolkit";

export const curriculumSlice = createSlice({
  name: "curriculum",
  initialState: {
    certificates: [
      {
        id: "25522",
        institution: "",
        date: "2023-06-10",
        title:
          "Master en PHP, SQL, POO MVC, Laravel, Symfony, Wordpress y mas.",
        description: "",
      },
      {
        id: "12234",
        institution: "",
        date: "2024-05-10",
        title: "Master en Pruebas Tecnicas: +70 nuevos ejercicios de codigo.",
        description: "",
      },
    ],
    knowledges: [
      {
        id: 1,
        name: "Programacion",
      },
      {
        id: 2,
        name: "Desarrollo web",
      },
      {
        id: 3,
        name: "Diseño Web",
      },
      {
        id: 4,
        name: "Redes Sociales",
      },
      {
        id: 5,
        name: "Comunicación",
      },
      {
        id: 6,
        name: "Edición de videos",
      },
      {
        id: 7,
        name: "Formación",
      },
    ],
    skills: [
      {
        id: 1,
        name: "Diseño Web",
        percentage: 90,
        category: "Diseño",
      },
      {
        id: 2,
        name: "Diseño Mockups",
        percentage: 70,
        category: "Diseño",
      },
      {
        id: 3,
        name: "Diseño Logos",
        percentage: 60,
        category: "Diseño",
      },
      {
        id: 4,
        name: "Diseño Banners",
        percentage: 80,
        category: "Diseño",
      },
      {
        id: 5,
        name: "Javascript",
        percentage: 85,
        category: "Codigo",
      },
      {
        id: 6,
        name: "HTML/CSS",
        percentage: 85,
        category: "Codigo",
      },
      {
        id: 7,
        name: "React",
        percentage: 75,
        category: "Codigo",
      },
      {
        id: 8,
        name: ".NET",
        percentage: 85,
        category: "Codigo",
      },
    ],
    experiences: [
      {
        id: 1,
        year: "2015-2024",
        company: "Google",
        title: "Desarrollador web Senior",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eos voluptatibus nam tempore id repudiandae quaerat",
      },
      {
        id: 2,
        year: "2016-2022",
        company: "Youtube",
        title: "Edicion de video",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eos voluptatibus nam tempore id repudiandae quaerat",
      },
      {
        id: 3,
        year: "2013-2014",
        company: "Google",
        title: "Desarrollador PHP",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eos voluptatibus nam tempore id repudiandae quaerat",
      },
    ],
    formations: [
      {
        id: 1,
        year: "2010",
        company: "Universidad ORT",
        title: "Analista Programador",
        description: "Finalice correctamente la carrera",
      },
    ],
  },
  reducers: {},
});
export const { increment } = curriculumSlice.actions;
