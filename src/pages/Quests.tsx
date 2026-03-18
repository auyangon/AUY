import React from 'react';
import { useData } from '../contexts/DataContext';
import { useAuth } from '../contexts/AuthContext';
import { QuestCard } from '../components/QuestCard';
import { Loader } from '../components/Loader';
import { motion } from 'framer-motion';

export const Quests: React.FC = () => {
  const { quests, studentQuests, loading } = useData();
  const { userEmail } = useAuth();

  if (loading) return <Loader />;

  const questsWithStatus = quests.map(quest => {
    const sq = studentQuests.find(sq => sq.questId === quest.questId);
    return { ...quest, status: sq?.status || 'pending' };
  });

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Quests</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {questsWithStatus.map(quest => (
          <QuestCard key={quest.questId} quest={quest} status={quest.status as any} />
        ))}
      </div>
    </motion.div>
  );
};
