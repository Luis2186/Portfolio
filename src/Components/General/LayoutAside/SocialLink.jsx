function SocialLink({ socialIconClass, href }) {
  return (
    <li className="social__option">
      <a href={href} className="social__link">
        <i className={socialIconClass}></i>
      </a>
    </li>
  );
}

export default SocialLink;
