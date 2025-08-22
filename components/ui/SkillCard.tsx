'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  skills: string[];
  delay?: number;
}

export default function SkillCard({ icon, title, description, skills, delay = 0 }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      
      <div className="relative z-10">
        <motion.div 
          className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          {icon}
        </motion.div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: delay + (index * 0.1) }}
              className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-medium rounded-full"
            >
              {skill}
            </motion.span>
          ))}
        </div>
        
        {/* Hover effect line */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-2xl"
          initial={{ width: 0 }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}