import LayoutAside from "../../General/LayoutAside/pages/LayoutAside";
import { HeaderTitulo } from "../../General";
import PersonalInfo from "../components/PersonalInfo";
import Services from "../components/Services";

function AboutMe({ user }) {
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

        <PersonalInfo user={user} />

        <Services />
      </section>
    </>
  );
}

export default AboutMe;
