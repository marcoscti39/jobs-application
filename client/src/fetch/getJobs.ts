import { redirectToLoginPage } from "../utils/redirectToLoginPage";
import { Job } from "./postLogin";

interface IJobsResponse {
  userID: string;
  status: "success" | "error";
  name: string;
  jobs: Job[];
}

export const getJobs = async (isToRedirect = false) => {
  console.log("getting jobs");
  const response = await fetch("http://localhost:3000/get-jobs", {
    method: "GET",
    credentials: "include",
  });
  const data: IJobsResponse = await response.json();
  console.log(data);
  if (data.status === "error" && isToRedirect) {
    console.log("refresh");
    redirectToLoginPage();
  }

  return data;
};
