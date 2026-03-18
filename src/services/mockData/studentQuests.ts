import { StudentQuest } from "../../types";
export const mockStudentQuests: StudentQuest[] = [
  {
    id: "SQ001",
    email: "john.doe@auy.edu.mm",
    questId: "Q001",
    status: "submitted",
    score: 85,
    submissionLink: "https://drive.google.com/file/d/...",
    submittedAt: "2024-02-14",
    gradedAt: "2024-02-16",
    feedback: "Good work, but missing edge cases."
  },
  {
    id: "SQ002",
    email: "jane.smith@auy.edu.mm",
    questId: "Q002",
    status: "pending",
    score: 0,
    submissionLink: "",
    submittedAt: "",
    gradedAt: "",
    feedback: ""
  }
];


