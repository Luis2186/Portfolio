function MenuOption({ href, description, iconoClassName }) {
  return (
    <li className="menu__option">
      <a href={href} className="menu__link">
        <i className={iconoClassName}></i>
        <span className="menu__overlay">{description}</span>
      </a>
    </li>
  );
}

export default MenuOption;
