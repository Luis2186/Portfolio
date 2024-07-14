import Knowledge from "./Knowledge";

function Knowledges({ knowledges }) {
  return (
    <div className="resume__knowledges">
      <ul className="knowledges__list">
        {knowledges.map((knowledge) => (
          <Knowledge key={knowledge.id} knowledge={knowledge.name} />
        ))}
      </ul>
    </div>
  );
}

export default Knowledges;
