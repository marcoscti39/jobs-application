interface UpdatedUser {
  jobIDToBeUpdated: string | undefined;
  job: {
    company: string;
    position: string;
    jobState: string;
  };
}

interface PatchJobProps {
  updatedUser: UpdatedUser;
  userID: string | undefined;
}

export const patchJob = async ({ userID, updatedUser }: PatchJobProps) => {
  console.log(userID);
  console.log(updatedUser);
  const response = await fetch(`http://localhost:3000/update-job/${userID}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ updatedUser }),
  });
  const data = await response.json();
  return data;
};
