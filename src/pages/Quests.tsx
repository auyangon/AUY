// src/pages/Quests.tsx
import React from 'react';
import { useStudentData } from '../hooks/useStudentData';
import StatCard from '../components/StatCard';

const Quests: React.FC = () => {
  const { studentQuests } = useStudentData();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Quests</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {studentQuests.map(quest => (
          <StatCard
            key={quest.questId}
            title={quest.title}
            value={quest.status}
            icon={null}
          />
        ))}
      </div>
    </div>
  );
};

export default Quests;


