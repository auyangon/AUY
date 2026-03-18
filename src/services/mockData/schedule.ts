import { Schedule } from "../../types";
export const mockSchedule: Schedule[] = [
  {
    scheduleId: "SCH001",
    courseCode: "CS101",
    dayOfWeek: "Monday",
    startTime: "09:00",
    endTime: "10:30",
    room: "Room 101",
    instructor: "Prof. John",
    zoomLink: "https://zoom.us/j/123"
  },
  {
    scheduleId: "SCH002",
    courseCode: "BA201",
    dayOfWeek: "Wednesday",
    startTime: "11:00",
    endTime: "12:30",
    room: "Room 202",
    instructor: "Ms. Zwali",
    zoomLink: "https://zoom.us/j/456"
  },
  {
    scheduleId: "SCH003",
    courseCode: "STAT100",
    dayOfWeek: "Tuesday",
    startTime: "14:00",
    endTime: "15:30",
    room: "Room 305",
    instructor: "Dr. Smith",
    zoomLink: ""
  }
];
