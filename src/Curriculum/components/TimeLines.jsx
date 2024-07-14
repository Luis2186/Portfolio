import TimeLine from "./TimeLine";

function TimeLines({ timelines }) {
  return (
    <>
      <div className="resume__timelines">
        {timelines.map((timeline) => (
          <TimeLine
            key={timeline.title}
            year={timeline.year}
            company={timeline.company}
            title={timeline.title}
            description={timeline.description}
          />
        ))}
      </div>
    </>
  );
}

export default TimeLines;
