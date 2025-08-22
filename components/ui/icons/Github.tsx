'use client';

import { motion } from 'framer-motion';
import { forwardRef } from 'react';

interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

const Github = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, className = '', color = 'currentColor' }, ref) => {
    return (
      <motion.svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        initial={{ scale: 1, rotate: 0 }}
        whileHover={{ 
          scale: 1.1,
          rotate: 5,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.path
          d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2 }}
        />
        <motion.path
          d="M9 18c-4.51 2-5-2-7-2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        />
      </motion.svg>
    );
  }
);

Github.displayName = 'Github';

export default Github;