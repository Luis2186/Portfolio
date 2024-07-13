function PersonalInfoOption({ title, description }) {
  return (
    <li className="personal-info__option">
      <span className="personal-info__title">{title}</span>
      <span className="personal-info__value">{description}</span>
    </li>
  );
}

export default PersonalInfoOption;
