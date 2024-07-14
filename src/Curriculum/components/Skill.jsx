function Skill({ skill, percentage }) {
  return (
    <>
      <article className="skills__title">
        <h4 className="skills__text">{skill}</h4>
        <span className="skills__number">{percentage}%</span>
      </article>
      <div className="skills__progressbar">
        <div
          className="skills__percentage"
          style={{ width: percentage + "%" }}
        ></div>
      </div>
    </>
  );
}

export default Skill;
