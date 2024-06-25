import LayoutAside from "./General/LayoutAside/LayoutAside";
import usuario from "../Data/dataUsuario";
import { useState } from "react";
import LayoutMenuToogle from "./General/LayoutAside/LayoutMenuToogle";
import LayoutContent from "./General/LayoutAside/LayoutContent";

function Home() {
  const [layoutVisible, setLayoutVisible] = useState(false);

  const onLayoutVisible = () => {
    setLayoutVisible(!layoutVisible);
  };

  return (
    // <!-- Layaout Principal -->
    <div className="layout">
      {/* <!-- Barra Lateral(Info usuario) --> */}
      <LayoutAside user={usuario} layoutVisible={layoutVisible} />

      {/* <!-- Menu responsive --> */}
      <LayoutMenuToogle
        onLayoutVisible={onLayoutVisible}
        layoutVisible={layoutVisible}
      />

      {/* <!-- Contenido Principal --> */}
      <LayoutContent user={usuario} layoutVisible={layoutVisible} />
    </div>
  );
}

export default Home;
