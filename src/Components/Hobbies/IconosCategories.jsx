function IconosCategories({ setcategoriePhoto }) {
  return (
    <>
      <button
        type="button"
        className="container__icono"
        onClick={() => setcategoriePhoto("cars")}
      >
        <i className="fa-solid fa-car fa-2xl icono"></i>
      </button>
      <button type="button" className="container__icono">
        <i
          className="fa-solid fa-plane-departure fa-2xl icono"
          onClick={() => setcategoriePhoto("trips")}
        ></i>
      </button>
      <button
        type="button"
        className="container__icono"
        onClick={() => setcategoriePhoto("animals")}
      >
        <i className="fa-solid fa-paw fa-2xl icono"></i>
      </button>
    </>
  );
}

export default IconosCategories;
