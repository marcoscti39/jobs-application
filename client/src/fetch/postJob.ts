import { Job } from "./postLogin";

export interface INewJob {
  newJob: {
    name: string;
    data: {
      company: string;
      position: string;
    };
  };
  redirectCallback: () => void;
}

export const postJob = async ({ newJob, redirectCallback }: INewJob) => {
  try {
    const response = await fetch("http://localhost:3000/add-job", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
      credentials: "include",
    });
    const data = await response.json();
    if (data.status === "error" && redirectCallback) {
      redirectCallback();
      return;
    }
    return data;
  } catch (err) {
    console.log(err);
  }
};
