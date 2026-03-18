// src/pages/Courses.tsx
import React from 'react';

type Course = {
  courseCode: string;
  courseName: string;
  credits: number;
};

const Courses = () => {
  const courseList: Course[] = [
    { courseCode: 'CS101', courseName: 'Intro to CS', credits: 3 },
    { courseCode: 'CS102', courseName: 'Data Structures', credits: 4 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {courseList.map((course) => (
        <div
          key={course.courseCode}
          className="bg-white/70 backdrop-blur-md rounded-3xl shadow-lg p-6"
        >
          <h2 className="font-semibold text-lg">{course.courseName}</h2>
          <p className="text-md">{course.credits} Credits</p>
        </div>
      ))}
    </div>
  );
};

export default Courses; // ✅ default export