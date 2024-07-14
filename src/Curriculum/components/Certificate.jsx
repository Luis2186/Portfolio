function Certificate({ title, id, date }) {
  return (
    <article className="certificates__certificate">
      <div className="certificate__logo">
        <img
          src="assets/img/certificado-1.png"
          alt=""
          className="certificate__image"
        />
      </div>
      <div className="certificate__content">
        <h4 className="certificate__title">{title}</h4>
        <span className="certificate__id">ID Verificacion: {id}</span>
        <span className="certificate__date">{date}</span>
      </div>
    </article>
  );
}

export default Certificate;
