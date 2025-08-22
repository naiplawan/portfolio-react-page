'use client';

import { motion } from 'framer-motion';
import { forwardRef } from 'react';

interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

const ExternalLink = forwardRef<SVGSVGElement, IconProps>(
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
          rotate: 15,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.path
          d="M15 3h6v6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.path
          d="M10 14 21 3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        <motion.path
          d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </motion.svg>
    );
  }
);

ExternalLink.displayName = 'ExternalLink';

export default ExternalLink;