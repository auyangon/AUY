import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className={\g-white/70 backdrop-blur-md rounded-3xl shadow-lg p-6 \\}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};


