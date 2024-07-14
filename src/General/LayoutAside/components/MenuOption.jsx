import { Link, NavLink, useNavigate } from "react-router-dom";

function MenuOption({ href, description, iconoClassName }) {
  return (
    <li className="menu__option">
      <NavLink to={href} className="menu__link">
        <i className={iconoClassName}></i>
        <span className="menu__overlay">{description}</span>
      </NavLink>
    </li>
  );
}

export default MenuOption;
