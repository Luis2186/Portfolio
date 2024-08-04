import Skill from "./Skill";

function Skills({ skills }) {
  return (
    <div className="resume__skills">
      {skills.map((skill) => (
        <Skill
          key={skill.id}
          skill={skill.name}
          percentage={skill.percentage}
        />
      ))}
    </div>
  );
}

export default Skills;
