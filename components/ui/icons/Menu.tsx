'use client';

import { motion } from 'framer-motion';
import { forwardRef } from 'react';

interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

const Menu = forwardRef<SVGSVGElement, IconProps>(
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
        initial={{ scale: 1 }}
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.line
          x1="4"
          x2="20"
          y1="6"
          y2="6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        />
        <motion.line
          x1="4"
          x2="20"
          y1="12"
          y2="12"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        />
        <motion.line
          x1="4"
          x2="20"
          y1="18"
          y2="18"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        />
      </motion.svg>
    );
  }
);

Menu.displayName = 'Menu';

export default Menu;