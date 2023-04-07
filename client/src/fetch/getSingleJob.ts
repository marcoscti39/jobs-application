import { Job } from "./postLogin";

interface GetSingleJobResponse {
  status: "success" | "error";
  _doc: {
    email: string;
    jobs: Job[];
    name: string;
    password: string;
    _v: number;
    _id: string;
  };
}

interface FetchSigleJobProps {
  userID: string | undefined;
  addDataOnInput: (
    companyData: string,
    positionData: string,
    jobState: string
  ) => void;
  jobID: string | undefined;
  redirectToLoginPage: () => void;
}

export const fetchSingleJob = async ({
  addDataOnInput,
  userID,
  jobID,
  redirectToLoginPage,
}: FetchSigleJobProps) => {
  const response = await fetch(
    `http://localhost:3000/get-single-job/${userID || ""}`,
    {
      method: "GET",
      credentials: "include",
    }
  );
  const data: GetSingleJobResponse = await response.json();
  if (data.status === "error" && redirectToLoginPage) {
    redirectToLoginPage();
    return;
  }
  console.log(data);
  const job = data._doc.jobs.find((job) => job._id === jobID);
  addDataOnInput(job?.company || "", job?.position || "", job?.jobState || "");
  return data;
};
