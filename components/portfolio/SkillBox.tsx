'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';

interface SkillBoxProps {
  title: string;
  description: string;
  imageSrc: string;
}

const SkillBox = ({ title, description, imageSrc }: SkillBoxProps) => {
  return (
    <motion.div
      className="flex flex-col justify-between text-center items-center h-full p-10 w-full hover:shadow-lg rounded-lg bg-white dark:bg-gray-800 dark:text-white"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)" }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-16 h-16 mb-4">
        <Image 
          src={imageSrc} 
          alt={`${title} skill icon`}
          fill
          className="object-contain"
          sizes="64px"
        />
      </div>
      <div className="skillTitle font-semibold text-lg">{title}</div>
      <div className="skillDescription text-sm text-gray-600 dark:text-gray-300">{description}</div>
    </motion.div>
  );
};

export default SkillBox;
