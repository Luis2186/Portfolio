import { HeaderSubtitle } from "../../General";
import Service from "./Service";
import { useSelector } from "react-redux";

function Services() {
  const dataUser = useSelector((state) => state.data);
  const { services } = dataUser;

  return (
    <section className="about__services">
      <HeaderSubtitle
        subtitle={
          <>
            Lo que <span className="title__color">hago</span>{" "}
          </>
        }
      />
      <div className="services__container">
        {services.map((service) => (
          <Service
            key={service.id}
            icon={<i className={service.iconClassName}></i>}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
