import { Quest } from "../../types";
export const mockQuests: Quest[] = [
  {
    questId: "Q001",
    courseCode: "CS101",
    title: "Programming Assignment 1",
    description: "Write a Python program to calculate Fibonacci numbers.",
    type: "assignment",
    dueDate: "2024-02-15",
    maxScore: 100,
    status: "active",
    createdAt: "2024-01-20"
  },
  {
    questId: "Q002",
    courseCode: "BA201",
    title: "Marketing Plan",
    description: "Create a marketing plan for a local business.",
    type: "project",
    dueDate: "2024-02-28",
    maxScore: 100,
    status: "active",
    createdAt: "2024-01-21"
  }
];
