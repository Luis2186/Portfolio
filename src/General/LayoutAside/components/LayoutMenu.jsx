import MenuOption from "./MenuOption";
import { menuItems } from "../data/dataMenuItems";

function LayoutMenu() {
  return (
    <nav className="layout__menu">
      <ul className="menu__list">
        {menuItems.map(({ dirHref, description, id, iconoClassName }) => (
          <MenuOption
            key={id}
            href={dirHref}
            description={description}
            iconoClassName={iconoClassName}
          />
        ))}
      </ul>
    </nav>
  );
}

export default LayoutMenu;
