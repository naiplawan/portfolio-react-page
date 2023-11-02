import { motion } from 'framer-motion';

const SkillBox = ({ title, description, imageSrc }) => {
  return (
    <motion.div
      className="flex flex-col justify-between text-center items-center h-full p-5 w-full"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)" }}
      transition={{ duration: 0.5 }}
    >
      <img src={imageSrc} alt="" />
      <div className="skillTitle">{title}</div>
      <div className="skillDescription">{description}</div>
    </motion.div>
  );
};

export default SkillBox;
