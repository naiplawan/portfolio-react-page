
const SkillBox = ({ title, description, imageSrc }) => {
  return (
    <div className="flex flex-col justify-between text-center items-center h-4 p-4">
      <img src={imageSrc} alt="" />
      <div className="skillTitle">{title}</div>
      <div className="skillDescription">{description}</div>
    </div>
  );
};

export default SkillBox;
