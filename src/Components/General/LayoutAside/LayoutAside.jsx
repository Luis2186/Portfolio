import LayoutMenu from "./LayoutMenu";
import perfil from "../../../assets/img/Perfil.jpg";
import UserInfoLinks from "./UserInfoLinks";
import { UserInfo } from "./UserInfo";
import UserInfoButton from "./UserInfoButton";
import UserInfoFooter from "./UserInfoFooter";

function LayoutAside({ user, layoutVisible }) {
  const { name, job } = user;
  console.log(layoutVisible);
  return (
    <aside
      className={
        layoutVisible ? "layout__aside layout__aside--visible" : "layout__aside"
      }
    >
      <section className="aside__user-info">
        {/* <!-- Informacion General usuario --> */}
        <UserInfo name={name} job={job} img={perfil} />

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
