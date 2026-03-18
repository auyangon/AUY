import React from 'react';
import { Card } from './Card';
import { Quest } from '../types';
import { motion } from 'framer-motion';

interface QuestCardProps {
  quest: Quest;
  status?: 'pending' | 'submitted' | 'graded';
  onClick?: () => void;
}

export const QuestCard: React.FC<QuestCardProps> = ({ quest, status = 'pending', onClick }) => {
  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    submitted: 'bg-blue-100 text-blue-800',
    graded: 'bg-green-100 text-green-800'
  };

  return (
    <motion.div whileHover={{ scale: 1.02 }} onClick={onClick}>
      <Card className="cursor-pointer">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg">{quest.title}</h3>
          <span className={\	ext-xs px-2 py-1 rounded-full \\}>
            {status}
          </span>
        </div>
        <p className="text-sm text-gray-600 mt-2">{quest.description}</p>
        <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
          <span>Due {new Date(quest.dueDate).toLocaleDateString()}</span>
          <span>{quest.type}</span>
        </div>
      </Card>
    </motion.div>
  );
};
