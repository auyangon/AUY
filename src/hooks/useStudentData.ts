import { useData } from '../contexts/DataContext';

export const useStudentData = () => {
  const { students, enrollments, attendance, studentQuests, quests } = useData();
  const student = students[0];
  const gpa = student?.gpa || 0;
  const coursesCount = enrollments.length;
  const attendanceRate = attendance.length > 0
    ? (attendance.filter(a => a.status === 'present').length / attendance.length) * 100
    : 0;
  const pendingQuests = studentQuests.filter(sq => sq.status === 'pending').length;

  return {
    student,
    gpa,
    coursesCount,
    attendanceRate,
    pendingQuests,
    enrollments,
    attendance,
    studentQuests,
    quests
  };
};
