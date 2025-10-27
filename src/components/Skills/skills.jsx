import React from 'react';
import './skills.css';

export default function Skills() {
  const skills = [
    { name: "React", percentage: 90, color: "#61DAFB" },
    { name: "Angular", percentage: 85, color: "#DD0031" },
    { name: "JavaScript", percentage: 88, color: "#F7DF1E" },
    { name: "TypeScript", percentage: 85, color: "#3178C6" },
    { name: "HTML5", percentage: 95, color: "#E34F26" },
    { name: "CSS3", percentage: 90, color: "#1572B6" },
    { name: "Bootstrap", percentage: 85, color: "#7952B3" },
    { name: "Git", percentage: 80, color: "#F05032" }
  ];

  return (
    <div className="skills-page">
      <div className="skills-header">
        <p className="skills-subtitle">MY SPECIALTY</p>
        <h1 className="skills-title">MY SKILLS</h1>
      </div>

      <div className="skills-content">
        <p className="skills-description">
          The Big Oxmox advised her not to do so, because there were thousands of bad Commas,
          wild Question Marks and devious Semikoli, but the Little Blind Text didn't listen.
          She packed her seven versalia, put her initial into the belt and made herself on the way.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.percentage}%</span>
              </div>
              <div className="skill-bar-bg">
                <div 
                  className="skill-bar-fill" 
                  style={{
                    width: `${skill.percentage}%`,
                    backgroundColor: skill.color
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}