import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
import { fetchSheet } from '../services/api';
import { 
  Student, Course, Enrollment, Schedule, Material, Announcement, 
  Attendance, Quest, StudentQuest, Request 
} from '../types';

interface DataContextType {
  students: Student[];
  courses: Course[];
  enrollments: Enrollment[];
  schedule: Schedule[];
  materials: Material[];
  announcements: Announcement[];
  attendance: Attendance[];
  quests: Quest[];
  studentQuests: StudentQuest[];
  requests: Request[];
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const { userEmail } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [students, setStudents] = useState<Student[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [schedule, setSchedule] = useState<Schedule[]>([]);
  const [materials, setMaterials] = useState<Material[]>([]);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [attendance, setAttendance] = useState<Attendance[]>([]);
  const [quests, setQuests] = useState<Quest[]>([]);
  const [studentQuests, setStudentQuests] = useState<StudentQuest[]>([]);
  const [requests, setRequests] = useState<Request[]>([]);

  const fetchAll = async () => {
    if (!userEmail) return;
    setLoading(true);
    setError(null);
    try {
      const [
        studentsData,
        coursesData,
        enrollmentsData,
        scheduleData,
        materialsData,
        announcementsData,
        attendanceData,
        questsData,
        studentQuestsData,
        requestsData
      ] = await Promise.all([
        fetchSheet('Students'),
        fetchSheet('Courses'),
        fetchSheet('Enrollments', userEmail),
        fetchSheet('Schedule'),
        fetchSheet('Materials'),
        fetchSheet('Announcements'),
        fetchSheet('Attendance', userEmail),
        fetchSheet('Quests'),
        fetchSheet('StudentQuests', userEmail),
        fetchSheet('Requests', userEmail)
      ]);

      setStudents(studentsData);
      setCourses(coursesData);
      setEnrollments(enrollmentsData);
      setSchedule(scheduleData);
      setMaterials(materialsData);
      setAnnouncements(announcementsData);
      setAttendance(attendanceData);
      setQuests(questsData);
      setStudentQuests(studentQuestsData);
      setRequests(requestsData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
    const interval = setInterval(fetchAll, 60000);
    return () => clearInterval(interval);
  }, [userEmail]);

  return (
    <DataContext.Provider value={{
      students, courses, enrollments, schedule, materials, announcements,
      attendance, quests, studentQuests, requests,
      loading, error, refresh: fetchAll
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData must be used within DataProvider');
  return context;
};
