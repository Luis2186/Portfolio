import { Link, NavLink, useNavigate } from "react-router-dom";

function MenuOption({ href, description, iconoClassName }) {
  return (
    <li className="menu__option">
      <NavLink to={href}>
        <a href={href} className="menu__link">
          <i className={iconoClassName}></i>
          <span className="menu__overlay">{description}</span>
        </a>
      </NavLink>
    </li>
  );
}

export default MenuOption;
