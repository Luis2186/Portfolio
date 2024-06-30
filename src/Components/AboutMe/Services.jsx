import HeaderSubtitle from "../General/HeaderSubtitle";
import Service from "./Service";
import { dataServices } from "../../Data/dataServices";

function Services() {
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
        {dataServices.map((service) => (
          <Service
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
