import LayoutMenu from "../components/LayoutMenu";
import perfil from "../../../../assets/img/Perfil.jpg";
import UserInfoLinks from "../components/UserInfoLinks";
import { UserInfo } from "../components/UserInfo";
import UserInfoButton from "../components/UserInfoButton";
import UserInfoFooter from "../components/UserInfoFooter";

function LayoutAside({ user, layoutVisible }) {
  const { name, job } = user;

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
        <UserInfoLinks user={user} />

        {/* <!-- Boton del curriculum --> */}
        <UserInfoButton />

        {/* <!-- Pie de pagina --> */}
        <UserInfoFooter copyDescription={`2024 ${name} WEB`} />
      </section>
    </aside>
  );
}

export default LayoutAside;
