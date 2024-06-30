import LayoutAside from "../General/LayoutAside/LayoutAside";
import HeaderTitulo from "../General/HeaderTitulo";
import PersonalInfo from "./PersonalInfo";
import Services from "./Services";

function AboutMe({ user, layoutVisible }) {
  return (
    <>
      <LayoutAside user={user} layoutVisible={layoutVisible} />
      <main className="layout__content">
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
      </main>
    </>
  );
}

export default AboutMe;
