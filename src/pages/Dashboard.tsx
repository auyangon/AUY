// src/pages/Dashboard.tsx
import React from 'react';
import { FiTrendingUp, FiBook, FiCheckCircle, FiClock } from 'react-icons/fi';
import StatCard from '../components/StatCard';
import { useStudentData } from '../hooks/useStudentData';

const Dashboard: React.FC = () => {
  // Custom hook to fetch all student-related data
  const { gpa, coursesCount, attendanceRate, pendingQuests } = useStudentData();

  return (
    <div className="p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {/* GPA Card */}
      <StatCard
        title="Current GPA"
        value={gpa.toFixed(2)}
        icon={FiTrendingUp}
        change="+0.1 from last sem"
      />

      {/* Courses Card */}
      <StatCard
        title="Enrolled Courses"
        value={coursesCount}
        icon={FiBook}
      />

      {/* Attendance Card */}
      <StatCard
        title="Attendance"
        value={`${attendanceRate.toFixed(0)}%`} // ? Fixed syntax
        icon={FiCheckCircle}
      />

      {/* Pending Quests Card */}
      <StatCard
        title="Pending Quests"
        value={pendingQuests}
        icon={FiClock}
      />
    </div>
  );
};

export default Dashboard;


