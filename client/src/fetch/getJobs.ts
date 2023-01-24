import { Job } from "./postLogin";

interface IJobsResponse {
  userID: string;
  status: "success" | "error";
  name: string;
  jobs: Job[];
}

export const getJobs = async () => {
  const response = await fetch("http://localhost:3000/get-jobs", {
    method: "GET",
    credentials: "include",
  });
  const data: IJobsResponse = await response.json();
  return data;
};
