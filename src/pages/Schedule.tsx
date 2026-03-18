import React from 'react';
import { useData } from '../contexts/DataContext';
import { Card } from '../components/Card';
import { Loader } from '../components/Loader';
import { motion } from 'framer-motion';

export const Schedule: React.FC = () => {
  const { schedule, courses, loading } = useData();

  if (loading) return <Loader />;

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Weekly Schedule</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {days.map(day => {
          const daySchedule = schedule.filter(s => s.dayOfWeek === day);
          return (
            <Card key={day}>
              <h2 className="font-semibold text-lg mb-3">{day}</h2>
              {daySchedule.length === 0 ? (
                <p className="text-gray-500 text-sm">No classes</p>
              ) : (
                daySchedule.map(s => {
                  const course = courses.find(c => c.courseCode === s.courseCode);
                  return (
                    <div key={s.scheduleId} className="mb-3 border-b pb-2 last:border-0">
                      <p className="font-medium">{course?.courseName || s.courseCode}</p>
                      <p className="text-sm text-gray-600">{s.startTime} – {s.endTime}</p>
                      <p className="text-xs text-gray-500">{s.room} • {s.instructor}</p>
                      {s.zoomLink && (
                        <a href={s.zoomLink} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 mt-1 inline-block">
                          Join Zoom
                        </a>
                      )}
                    </div>
                  );
                })
              )}
            </Card>
          );
        })}
      </div>
    </motion.div>
  );
};
