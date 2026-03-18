import axios from 'axios';

const API_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

type SheetName =
  | 'Students'
  | 'Courses'
  | 'Enrollments'
  | 'Schedule'
  | 'Materials'
  | 'Announcements'
  | 'Attendance'
  | 'Quests'
  | 'StudentQuests'
  | 'Requests';

export const fetchSheet = async (sheet: SheetName, email?: string) => {
  try {
    const params: Record<string, string> = { sheet };
    if (email) params.email = email;
    const response = await axios.get(API_URL, { params });
    return response.data;
  } catch (err) {
    console.error('Fetch Sheet Error:', err);
    return [];
  }
};

export const addRow = async (sheet: SheetName, data: Record<string, any>) => {
  try {
    const response = await axios.post(API_URL, { sheet, data });
    return response.data;
  } catch (err) {
    console.error('Add Row Error:', err);
    return { error: err };
  }
};

