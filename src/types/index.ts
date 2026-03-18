export interface Student {
  email: string;
  studentId: string;
  studentName: string;
  major: string;
  studyMode: string;
  intake: string;
  status: string;
  gpa: number;
  profileImage: string;
  createdAt: string;
}

export interface Course {
  courseCode: string;
  courseName: string;
  credits: number;
  department: string;
  instructor: string;
  instructorEmail: string;
  googleClassroomLink: string;
  status: string;
}

export interface Enrollment {
  id: string;
  email: string;
  courseCode: string;
  semester: string;
  enrollmentStatus: string;
  grade: string;
  gpaPoints: number;
}

export interface Schedule {
  scheduleId: string;
  courseCode: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  room: string;
  instructor: string;
  zoomLink: string;
}

export interface Material {
  materialId: string;
  courseCode: string;
  title: string;
  type: string;
  fileUrl: string;
  week: number;
  uploadedBy: string;
  uploadDate: string;
}

export interface Announcement {
  announcementId: string;
  title: string;
  content: string;
  audience: string;
  courseCode: string;
  createdAt: string;
  createdBy: string;
}

export interface Attendance {
  id: string;
  email: string;
  courseCode: string;
  date: string;
  status: string;
}

export interface Quest {
  questId: string;
  courseCode: string;
  title: string;
  description: string;
  type: string;
  dueDate: string;
  maxScore: number;
  status: string;
  createdAt: string;
}

export interface StudentQuest {
  id: string;
  email: string;
  questId: string;
  status: string;
  score: number;
  submissionLink: string;
  submittedAt: string;
  gradedAt: string;
  feedback: string;
}

export interface Request {
  requestId: string;
  email: string;
  type: string;
  status: string;
  submittedAt: string;
  resolvedAt: string;
  adminNote: string;
}