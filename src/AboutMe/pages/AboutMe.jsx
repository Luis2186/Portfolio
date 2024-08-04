import { HeaderTitulo } from "../../General";
import PersonalInfo from "../components/PersonalInfo";
import Services from "../components/Services";

function AboutMe() {
  return (
    <>
      <section className="content__page content__about">
        <HeaderTitulo
          title={
            <>
              Sobre <span className="title__color"> Mi</span>
            </>
          }
        />

        <PersonalInfo />

        <Services />
      </section>
    </>
  );
}

export default AboutMe;
