import { Job } from "./postLogin";

interface GetSingleJobResponse {
  email: string;
  jobs: Job[];
  name: string;
  password: string;
  _v: number;
  _id: string;
}

interface FetchSigleJobProps {
  userID: string | undefined;
  addDataOnInput: (
    companyData: string,
    positionData: string,
    jobState: string
  ) => void;
  jobID: string | undefined;
}

export const fetchSingleJob = async ({
  addDataOnInput,
  userID,
  jobID,
}: FetchSigleJobProps) => {
  const response = await fetch(
    `http://localhost:3000/get-single-job/${userID || ""}`,
    {
      method: "GET",
      credentials: "include",
    }
  );
  const data: GetSingleJobResponse = await response.json();
  const job = data.jobs.find((job) => job._id === jobID);
  console.log(job);
  addDataOnInput(job?.company || "", job?.position || "", job?.jobState || "");
  return data;
};
