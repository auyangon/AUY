// src/pages/Announcements.tsx
import React from 'react';
import { useStudentData } from '../hooks/useStudentData';
import StatCard from '../components/StatCard';

const Announcements: React.FC = () => {
  const { announcements } = useStudentData();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Announcements</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {announcements.map(announcement => (
          <StatCard
            key={announcement.announcementId}
            title={announcement.title}
            value={announcement.content}
            icon={null}
          />
        ))}
      </div>
    </div>
  );
};

export default Announcements;

