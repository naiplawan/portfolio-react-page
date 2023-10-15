import React from 'react';
import SkillBox from './Skill-Box';
import "./SkillSection.css";

function SkillSection() { 
  return (
    <div className="skillContainer">
      {/* Skill 1 */}
      <SkillBox
        title="Creative"
        description=" bring innovative problem-solving, attention to detail,
         and a keen eye for design?"
        imageSrc="/Group 242.svg" 
      />

      {/* Skill 2 */}
      <SkillBox
        title="TeamWork"
        description="I am a collaborative team player who fosters a positive work environment, 
        encourages open communication, and brings out the best in every team member?"
        imageSrc="/teamwork-skill.svg"
      />

      <SkillBox
        title="Communicative"
        description="I excel in conveying complex ideas with clarity and building strong relationships with clients and stakeholders"
        imageSrc="/Group.svg"
      />

      <SkillBox
        title="Growth Mindset "
        description=" I embrace challenges as opportunities to learn and improve. With a positive attitude towards continuous growth"
        imageSrc="/growth-mindset.png"
      />  

    </div>
  );
}

export default SkillSection; 
