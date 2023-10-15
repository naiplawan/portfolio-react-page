import React from 'react';
import "./SkillSection.css";

const SkillBox = ({ title, description, imageSrc }) => {
  return (
    <div className="skillBox">
      <img src={imageSrc} alt="" />
      <div className="skillTitle">{title}</div>
      <div className="skillDescription">{description}</div>
    </div>
  );
};

export default SkillBox;
