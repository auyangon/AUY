import { motion } from 'framer-motion';
import React from 'react';

type CardProps = {
  title: string;
  value: string | number;
  onClick?: () => void;
};

const Card: React.FC<CardProps> = ({ title, value, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-white/70 backdrop-blur-md rounded-3xl shadow-lg p-6"
      onClick={onClick}
    >
      <h2 className="text-sm font-medium text-gray-500">{title}</h2>
      <p className="mt-2 text-xl font-bold text-gray-900">{value}</p>
    </motion.div>
  );
};

export default Card;