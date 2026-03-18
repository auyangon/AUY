import React from 'react';
import { useData } from '../contexts/DataContext';
import { useAuth } from '../contexts/AuthContext';
import { Card } from '../components/Card';
import { Loader } from '../components/Loader';
import { motion } from 'framer-motion';

export const Courses: React.FC = () => {
  const { courses, enrollments, loading } = useData();
  const { userEmail } = useAuth();

  if (loading) return <Loader />;

  const enrolledCourseCodes = enrollments.map(e => e.courseCode);
  const myCourses = courses.filter(c => enrolledCourseCodes.includes(c.courseCode));

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6">
      <h1 className="text-2xl font-semibold mb-6">My Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myCourses.map(course => (
          <Card key={course.courseCode}>
            <h2 className="text-xl font-semibold">{course.courseName}</h2>
            <p className="text-sm text-gray-600 mt-1">{course.courseCode}</p>
            <p className="text-sm mt-2">Instructor: {course.instructor}</p>
            <a href={course.googleClassroomLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm mt-3 inline-block">
              Go to Classroom →
            </a>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};
