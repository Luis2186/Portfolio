function PersonalInfoBio({ bioDescription = "" }) {
  return (
    <article className="personal-info__bio">
      <p className="personal-info__description">{bioDescription}</p>
    </article>
  );
}

export default PersonalInfoBio;
