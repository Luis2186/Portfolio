import { useSelector } from "react-redux";
import PersonalInfoBio from "./PersonalInfoBio";
import PersonalInfoOption from "./PersonalInfoOption";

function PersonalInfo() {
  const userData = useSelector((state) => state.data);

  const { email, cellPhone, dateOfBirth, presentation, location } = userData;
  const locationUser = location[0];

  const calcularEdad = (fechaDeNacimiento) => {
    const [year, month, day] = fechaDeNacimiento.split("-");
    const dateOfBorn = new Date(year, month - 1, day);
    const currentDate = new Date();
    const edad = currentDate.getFullYear() - dateOfBorn.getFullYear();
    return edad;
  };

  return (
    <section className="about__personal-info">
      <PersonalInfoBio bioDescription={presentation} />

      <div className="personal-info__data">
        <ul className="personal-info__list">
          <PersonalInfoOption
            title={"Edad"}
            description={calcularEdad(dateOfBirth)}
          />

          <PersonalInfoOption
            title={"Pais"}
            description={locationUser.country}
          />

          <PersonalInfoOption
            title={"Direccion"}
            description={locationUser.adress}
          />

          <PersonalInfoOption title={"Correo"} description={email} />

          <PersonalInfoOption title={"Telefono"} description={cellPhone} />
        </ul>
      </div>
    </section>
  );
}

export default PersonalInfo;
