import { HeaderTitulo, HeaderSubtitle } from "../../General";
import TimeLines from "../components/TimeLines";
import Skills from "../components/Skills";
import Knowledges from "../components/Knowledges";
import Certificates from "../components/Certificates";
import {
  dataTimelineExperiencia,
  dataTimelineFormacion,
  dataSkillsCodigo,
  dataSkillsDiseño,
  dataKnowledges,
  dataCertificates,
} from "../data";

function Curriculum() {
  return (
    <>
      <section className="content__page content__resume">
        <HeaderTitulo title={"Curriculum"} />

        <div className="resume__container">
          <section className="resume__left">
            <HeaderSubtitle subtitle={"Formacion"} />
            <TimeLines timelines={dataTimelineFormacion} />

            <HeaderSubtitle subtitle={"Experiencia"} />
            <TimeLines timelines={dataTimelineExperiencia} />
          </section>

          <section className="resume__right">
            <HeaderSubtitle
              subtitle={
                <>
                  Habilidades de <span className="title__color"> diseño</span>
                </>
              }
            />
            <Skills skills={dataSkillsDiseño} />

            <HeaderSubtitle
              subtitle={
                <>
                  Habilidades de <span className="title__color"> codigo</span>
                </>
              }
            />
            <Skills skills={dataSkillsCodigo} />

            <HeaderSubtitle subtitle={"Areas de Conocimientos"} />
            <Knowledges knowledges={dataKnowledges} />
          </section>
        </div>

        <div className="resume__certificates">
          <HeaderTitulo title={"Certificados"} />
          <Certificates certificates={dataCertificates} />
        </div>
      </section>
    </>
  );
}

export default Curriculum;
