import LayoutAside from "../../General/LayoutAside/pages/LayoutAside";
import LayoutMenuToogle from "../components/LayoutMenuToogle";
import LayoutContent from "../components/LayoutContent";

function Home({ user, layoutVisible }) {
  const onLayoutVisible = () => {
    setLayoutVisible(!layoutVisible);
  };

  return (
    // <!-- Layaout Principal -->
    <>
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
