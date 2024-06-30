import LayoutAside from "./General/LayoutAside/LayoutAside";
import usuario from "../Data/dataUsuario";
import { useState } from "react";
import LayoutMenuToogle from "./General/LayoutAside/LayoutMenuToogle";
import LayoutContent from "./General/LayoutAside/LayoutContent";

function Home({ layoutVisible }) {
  const onLayoutVisible = () => {
    setLayoutVisible(!layoutVisible);
  };

  return (
    // <!-- Layaout Principal -->
    <>
      {/* <!-- Barra Lateral(Info usuario) --> */}
      <LayoutAside user={usuario} layoutVisible={layoutVisible} />

      {/* <!-- Menu responsive --> */}
      <LayoutMenuToogle
        onLayoutVisible={onLayoutVisible}
        layoutVisible={layoutVisible}
      />

      {/* <!-- Contenido Principal --> */}
      <LayoutContent user={usuario} layoutVisible={layoutVisible} />
    </>
  );
}

export default Home;
