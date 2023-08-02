import React from 'react';
import SkillBox from './Skill-Box';
import "./SkillSection.css";

function SkillSection() { // Updated to use uppercase letter
  return (
    <div className="skillContainer">
      {/* Skill 1 */}
      <SkillBox
        title="Creative"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, in?"
        imageSrc="/Group 242.svg" // Corrected image path
      />

      {/* Skill 2 */}
      <SkillBox
        title="TeamWork"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, in?"
        imageSrc="/Group 243.svg"
      />

      <SkillBox
        title="Communicative"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, in?"
        imageSrc="/Group.svg"
      />

    </div>
  );
}

export default SkillSection; 
