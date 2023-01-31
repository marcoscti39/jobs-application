interface IJobData {
  jobData: {
    name: string;
    jobID: string;
  };
  redirectCallback: () => void;
}

interface DeleteJobResponse {
  status: "error" | "success";
  msg?: string;
  error?: string;
}

export const deleteJob = async ({ jobData, redirectCallback }: IJobData) => {
  const response = await fetch(`http://localhost:3000/delete-job`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jobData),
    credentials: "include",
  });
  const data: DeleteJobResponse = await response.json();
  if (data.status === "error" && redirectCallback) {
    redirectCallback();
  }
  return data;
};
