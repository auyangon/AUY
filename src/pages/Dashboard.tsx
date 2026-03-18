import React from 'react';
import { motion } from 'framer-motion';
import { useStudentData } from '../hooks/useStudentData';
import { useData } from '../contexts/DataContext';
import { StatCard } from '../components/StatCard';
import { QuestCard } from '../components/QuestCard';
import { Card } from '../components/Card';
import { Loader } from '../components/Loader';
import { FiBook, FiCheckCircle, FiClock, FiTrendingUp } from 'react-icons/fi';

export const Dashboard: React.FC = () => {
  const { loading } = useData();
  const { student, gpa, coursesCount, attendanceRate, pendingQuests, quests, studentQuests } = useStudentData();

  if (loading) return <Loader />;

  const activeStudentQuests = studentQuests
    .filter(sq => sq.status === 'pending')
    .map(sq => quests.find(q => q.questId === sq.questId))
    .filter(Boolean);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6">
      <Card className="mb-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h1 className="text-2xl font-semibold">Welcome back, {student?.studentName}!</h1>
        <p className="text-white/80 mt-2">Here's your academic summary for today.</p>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Current GPA" value={gpa.toFixed(2)} icon={FiTrendingUp} change="+0.1 from last sem" />
        <StatCard title="Enrolled Courses" value={coursesCount} icon={FiBook} />
        <StatCard title="Attendance" value={${attendanceRate.toFixed(0)}%} icon={FiCheckCircle} />
        <StatCard title="Pending Quests" value={pendingQuests} icon={FiClock} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <h2 className="text-xl font-semibold mb-4">Today's Schedule</h2>
          <div className="space-y-4">
            <Card><p className="text-gray-500">No classes scheduled today.</p></Card>
          </div>
        </div>
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Active Quests</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeStudentQuests.map(quest => quest && (
                <QuestCard key={quest.questId} quest={quest} status="pending" />
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Announcements</h2>
            <Card>
              <h3 className="font-medium">Welcome to Spring Semester</h3>
              <p className="text-sm text-gray-600 mt-1">We are excited to start...</p>
            </Card>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
