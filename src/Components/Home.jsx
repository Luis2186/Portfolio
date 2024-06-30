import LayoutAside from "./General/LayoutAside/LayoutAside";
import { useState } from "react";
import LayoutMenuToogle from "./General/LayoutAside/LayoutMenuToogle";
import LayoutContent from "./General/LayoutAside/LayoutContent";

function Home({ user, layoutVisible }) {
  const onLayoutVisible = () => {
    setLayoutVisible(!layoutVisible);
  };

  return (
    // <!-- Layaout Principal -->
    <>
      {/* <!-- Barra Lateral(Info usuario) --> */}
      <LayoutAside user={user} layoutVisible={layoutVisible} />

      {/* <!-- Menu responsive --> */}
      <LayoutMenuToogle
        onLayoutVisible={onLayoutVisible}
        layoutVisible={layoutVisible}
      />

      {/* <!-- Contenido Principal --> */}
      <LayoutContent user={user} layoutVisible={layoutVisible} />
    </>
  );
}

export default Home;
