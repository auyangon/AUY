import { Request } from "../../types";
export const mockRequests: Request[] = [
  {
    requestId: "R001",
    email: "john.doe@auy.edu.mm",
    type: "Transcript",
    status: "approved",
    submittedAt: "2024-01-25",
    resolvedAt: "2024-01-27",
    adminNote: "Sent via email."
  },
  {
    requestId: "R002",
    email: "jane.smith@auy.edu.mm",
    type: "Leave of Absence",
    status: "pending",
    submittedAt: "2024-01-28",
    resolvedAt: "",
    adminNote: ""
  }
];


