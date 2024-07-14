function TimeLine({ year, company, title, description }) {
  return (
    <article className="timelines__timeline">
      <header className="timeline__header">
        <h4 className="timeline__year">{year}</h4>
        <span className="timeline__company"> {company}</span>
      </header>
      <div className="timeline__divider"></div>
      <div className="timeline__description">
        <h3 className="timeline_title">{title}</h3>
        <p className="timeline__text">{description}</p>
      </div>
    </article>
  );
}

export default TimeLine;
