function Service({ title, description, icon, onClick }) {
  return (
    <article className="services__service" onClick={onClick}>
      <div className="services_icon service_myicon">{icon}</div>

      <div className="services__content">
        <h3 className="services__title">{title}</h3>
        <p className="services__description">{description}</p>
      </div>
    </article>
  );
}

export default Service;
