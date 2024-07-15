import { Routes, Route, Navigate } from "react-router-dom";
import LayoutAside from "../General/LayoutAside/pages/LayoutAside";
import AboutMe from "../AboutMe/pages/AboutMe";
import usuario from "../General/LayoutAside/data/dataUsuario";
import { useState } from "react";
import Home from "../Home/pages/Home";
import Hobbies from "../Hobbies/pages/Hobbies";
import LayoutMenuToogle from "../Home/components/LayoutMenuToogle";
import Curriculum from "../Curriculum/pages/Curriculum";
import Contact from "../Contact/pages/Contact";

export const PortafolioRouter = () => {
  const [layoutVisible, setLayoutVisible] = useState(false);

  const onLayoutVisible = () => {
    setLayoutVisible(!layoutVisible);
  };

  return (
    <>
      <LayoutAside user={usuario} layoutVisible={layoutVisible} />
      <main className="layout__content">
        <Routes>
          <Route path="/aboutMe" element={<AboutMe user={usuario} />}></Route>
          <Route path="/home" element={<Home user={usuario} />}></Route>
          <Route path="/hobbies" element={<Hobbies />}></Route>
          <Route path="/curriculum" element={<Curriculum />}></Route>
          <Route path="/contact" element={<Contact user={usuario} />}></Route>

          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </main>
      {/* <!-- Menu responsive --> */}
      <LayoutMenuToogle
        onLayoutVisible={onLayoutVisible}
        layoutVisible={layoutVisible}
      />
    </>
  );
};
