import React from 'react';
import { motion } from 'framer-motion';

export const Card = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-white/70 backdrop-blur-md rounded-3xl shadow-lg p-6"
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};