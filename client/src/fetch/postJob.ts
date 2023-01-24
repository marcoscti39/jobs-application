import { Job } from "./postLogin";

export interface INewJob {
  name: string;
  data: {
    company: string;
    position: string;
  };
}

export const postJob = async (newJob: INewJob) => {
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
    return data;
  } catch (err) {
    console.log(err);
  }
};
