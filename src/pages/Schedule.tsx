// src/pages/Schedule.tsx
import React from 'react';
import { useStudentData } from '../hooks/useStudentData';
import StatCard from '../components/StatCard';

const Schedule: React.FC = () => {
  const { schedule } = useStudentData();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Schedule</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {schedule.map(item => (
          <StatCard
            key={item.scheduleId}
            title={item.courseCode}
            value={`${item.dayOfWeek} ${item.startTime}-${item.endTime}`}
            icon={null}
          />
        ))}
      </div>
    </div>
  );
};

export default Schedule;


