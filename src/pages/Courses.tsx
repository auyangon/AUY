import React from 'react';
import { useStudentData } from '../hooks/useStudentData';
import StatCard from '../components/StatCard';

const Courses: React.FC = () => {
  const { courses } = useStudentData();
  return (
    <div className='p-6'>
      <h1 className='text-2xl font-semibold mb-4'>My Courses</h1>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {courses.map(course => (
          <StatCard
            key={course.courseCode}
            title={course.courseName}
            value={${course.credits} Credits}
            icon={null}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
