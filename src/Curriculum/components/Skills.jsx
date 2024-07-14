import Skill from "./Skill";

function Skills({ skills }) {
  return (
    <div className="resume__skills">
      {skills.map((skill) => (
        <Skill
          key={skill.skill}
          skill={skill.skill}
          percentage={skill.percentage}
        />
      ))}
    </div>
  );
}

export default Skills;
