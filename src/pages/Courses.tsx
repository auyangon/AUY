import React from 'react';
import StatCard from '../components/StatCard';

type Course = {
  courseCode: string;
  courseName: string;
  credits: number;
};

type CoursesProps = {
  courses: Course[];
};

const Courses: React.FC<CoursesProps> = ({ courses }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map((course) => (
        <StatCard
          key={course.courseCode}
          title={course.courseName}
          value={`${course.credits} Credits`}
          icon={null}
        />
      ))}
    </div>
  );
};

export default Courses;