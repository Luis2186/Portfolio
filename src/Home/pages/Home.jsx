import LayoutContent from "../components/LayoutContent";

function Home({ user }) {
  return (
    // <!-- Layaout Principal -->
    <>
      {/* <!-- Contenido Principal --> */}
      <LayoutContent user={user} />
    </>
  );
}

export default Home;
