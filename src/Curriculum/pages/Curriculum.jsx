import { HeaderTitulo, HeaderSubtitle } from "../../General";
import TimeLines from "../components/TimeLines";
import Skills from "../components/Skills";
import Knowledges from "../components/Knowledges";
import Certificates from "../components/Certificates";
import { useSelector } from "react-redux";

function Curriculum() {
  const curriculumUser = useSelector((state) => state.curriculum);
  const { certificates, experiences, formations, knowledges, skills } =
    curriculumUser;

  const skillsDiseño = skills.filter((skill) => skill.category === "Diseño");
  const skillsCodigo = skills.filter((skill) => skill.category === "Codigo");

  return (
    <>
      <section className="content__page content__resume">
        <HeaderTitulo title={"Curriculum"} />

        <div className="resume__container">
          <section className="resume__left">
            <HeaderSubtitle subtitle={"Formacion"} />
            <TimeLines timelines={formations} />

            <HeaderSubtitle subtitle={"Experiencia"} />
            <TimeLines timelines={experiences} />
          </section>

          <section className="resume__right">
            <HeaderSubtitle
              subtitle={
                <>
                  Habilidades de <span className="title__color"> diseño</span>
                </>
              }
            />
            <Skills skills={skillsDiseño} />

            <HeaderSubtitle
              subtitle={
                <>
                  Habilidades de <span className="title__color"> codigo</span>
                </>
              }
            />
            <Skills skills={skillsCodigo} />

            <HeaderSubtitle subtitle={"Areas de Conocimientos"} />
            <Knowledges knowledges={knowledges} />
          </section>
        </div>

        <div className="resume__certificates">
          <HeaderTitulo title={"Certificados"} />
          <Certificates certificates={certificates} />
        </div>
      </section>
    </>
  );
}

export default Curriculum;
