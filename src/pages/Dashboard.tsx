import React from 'react';
import StatCard from '../components/StatCard';
import { FiTrendingUp, FiBook, FiCheckCircle, FiClock } from 'react-icons/fi';

type DashboardProps = {
  gpa: number;
  coursesCount: number;
  attendanceRate: number;
  pendingQuests: number;
};

const Dashboard: React.FC<DashboardProps> = ({
  gpa,
  coursesCount,
  attendanceRate,
  pendingQuests,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard title="Current GPA" value={gpa.toFixed(2)} icon={FiTrendingUp} change="+0.1 from last sem" />
      <StatCard title="Enrolled Courses" value={coursesCount} icon={FiBook} />
      <StatCard title="Attendance" value={`${attendanceRate.toFixed(0)}%`} icon={FiCheckCircle} />
      <StatCard title="Pending Quests" value={pendingQuests} icon={FiClock} />
    </div>
  );
};

export default Dashboard;