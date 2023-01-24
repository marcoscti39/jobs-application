interface IJobData {
  name: string;
  jobID: string;
}

export const deleteJob = async (jobData: IJobData) => {
  const response = await fetch(`http://localhost:3000/delete-job`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jobData),
    credentials: "include",
  });
  const data = await response.json();
  return data;
};
