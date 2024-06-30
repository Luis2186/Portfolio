import PersonalInfoBio from "./PersonalInfoBio";
import PersonalInfoOption from "./PersonalInfoOption";

function PersonalInfo({ user }) {
  const calcularEdad = (fechaDeNacimiento) => {
    const [day, month, year] = fechaDeNacimiento.split("/");
    const dateOfBorn = new Date(year, month - 1, day);
    const currentDate = new Date();
    const edad = currentDate.getFullYear() - dateOfBorn.getFullYear();
    return edad;
  };

  return (
    <section className="about__personal-info">
      <PersonalInfoBio bioDescription={user.submission} />

      <div className="personal-info__data">
        <ul className="personal-info__list">
          <PersonalInfoOption
            title={"Edad"}
            description={calcularEdad(user.dateOfBirth)}
          />

          <PersonalInfoOption title={"Pais"} description={user.country} />

          <PersonalInfoOption title={"Direccion"} description={user.adress} />

          <PersonalInfoOption title={"Correo"} description={user.mail} />

          <PersonalInfoOption title={"Telefono"} description={user.phone} />
        </ul>
      </div>
    </section>
  );
}

export default PersonalInfo;
