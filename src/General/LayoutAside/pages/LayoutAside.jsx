import LayoutMenu from "../components/LayoutMenu";
import perfil from "../../../../assets/img/Perfil.jpg";
import UserInfoLinks from "../components/UserInfoLinks";
import { UserInfo } from "../components/UserInfo";
import UserInfoButton from "../components/UserInfoButton";
import UserInfoFooter from "../components/UserInfoFooter";
import { useSelector } from "react-redux";

function LayoutAside({ layoutVisible }) {
  const dataUser = useSelector((state) => state.data);
  const { firstName, firstSurname, job } = dataUser;
  const name = firstName + " " + firstSurname;

  return (
    <aside
      className={
        layoutVisible ? "layout__aside layout__aside--visible" : "layout__aside"
      }
    >
      <section className="aside__user-info">
        {/* <!-- Informacion General usuario --> */}
        <UserInfo img={perfil} />

        {/* <!-- Menu navegacion --> */}
        <LayoutMenu />

        {/* <!-- Links a redes sociales --> */}
        <UserInfoLinks />

        {/* <!-- Boton del curriculum --> */}
        <UserInfoButton />

        {/* <!-- Pie de pagina --> */}
        <UserInfoFooter copyDescription={`2024 ${name} WEB`} />
      </section>
    </aside>
  );
}

export default LayoutAside;
