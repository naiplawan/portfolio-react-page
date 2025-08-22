'use client';

import { motion } from 'framer-motion';
import { forwardRef } from 'react';

interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

const ArrowRight = forwardRef<SVGSVGElement, IconProps>(
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
        initial={{ x: 0 }}
        whileHover={{ 
          x: 2,
          transition: { duration: 0.2 }
        }}
        whileTap={{ x: 4 }}
      >
        <motion.path
          d="M5 12h14"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.path
          d="m12 5 7 7-7 7"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
      </motion.svg>
    );
  }
);

ArrowRight.displayName = 'ArrowRight';

export default ArrowRight;