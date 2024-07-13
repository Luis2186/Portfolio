import { Routes, Route } from "react-router-dom";
import LayoutAside from "../General/LayoutAside/pages/LayoutAside";
import AboutMe from "../AboutMe/pages/AboutMe";
import usuario from "../General/LayoutAside/data/dataUsuario";
import { useState } from "react";
import Home from "../Home/pages/Home";
import Hobbies from "../Hobbies/pages/Hobbies";

export const PortafolioRouter = () => {
  const [layoutVisible, setLayoutVisible] = useState(false);
  return (
    <>
      <LayoutAside user={usuario} layoutVisible={layoutVisible} />
      <Routes>
        <Route
          path="/aboutMe"
          element={<AboutMe user={usuario} layoutVisible={layoutVisible} />}
        ></Route>
        <Route
          path="/home"
          element={<Home user={usuario} layoutVisible={layoutVisible} />}
        ></Route>
        <Route
          path="/hobbies"
          element={<Hobbies user={usuario} layoutVisible={layoutVisible} />}
        ></Route>
      </Routes>
    </>
  );
};
