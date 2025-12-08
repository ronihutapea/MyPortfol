import React from "react";
import "./SkillStyles.css";

const Skills = () => {
  const skills = [
    { name: "HTML", percentage: 85 },
    { name: "CSS", percentage: 85 },
    { name: "PHP", percentage: 80 },
    { name: "Laravel", percentage: 80 },
    { name: "JavaScript", percentage: 50 },
    { name: "React", percentage: 30 },
  ];

  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} className="skill-item">
          <div className="skill-name">{skill.name}</div>
          <div className="skill-bar">
            <div
              className="skill-fill"
              style={{ width: `${skill.percentage}%` }}
            ></div>
          </div>
          <div className="skill-percentage">{skill.percentage}%</div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
