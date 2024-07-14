function SocialLink({ socialIconClass, href }) {
  return (
    <li className="social__option">
      <a href={href} className="social__link" target="_blank">
        <i className={socialIconClass}></i>
      </a>
    </li>
  );
}

export default SocialLink;
