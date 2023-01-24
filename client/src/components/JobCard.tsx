import moment from "moment";
import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import { deleteJob } from "../fetch/deleteJob";
import { getJobs } from "../fetch/getJobs";
import { Job } from "../fetch/postLogin";

type JobCardProps = Job & { userID: string };

const JobCard: React.FC<JobCardProps> = ({
  userID,
  company,
  createdAt,
  jobState,
  position,
  _id: jobID,
}) => {
  const { data, isLoading } = useQuery(["getJobs"], getJobs);

  const queryClient = useQueryClient();
  const { mutate: mutateDeleteJob } = useMutation(deleteJob, {
    onSuccess: () => {
      queryClient.invalidateQueries("getJobs");
    },
  });
  const handleDeleteJob = (jobID: string) => {
    const jobData = {
      name: data?.name!,
      jobID,
    };
    mutateDeleteJob(jobData);
  };
  return (
    <article className="flex flex-col gap-4 justify-center rounded h-[150px] relative bg-white shadow pl-3">
      <div className="bg-purple-300 rounded-bl rounded-br text-purple-800 font-semibold absolute top-0 right-0 w-[max-content] px-2">
        {moment(createdAt).format("MMMM Do YYYY")}
      </div>

      <h2 className="font-semibold text-lg ">{position}</h2>
      <span className="p-1 rounded bg-gray-100 text-gray-600 font-semibold w-[max-content]">
        {company}
      </span>
      <div className="flex gap-4 ">
        <Link
          to={`/jobs/edit/${position}/${userID}/${jobID}`}
          className="text-green-600 font-semibold"
        >
          Edit
        </Link>
        <button
          className="text-red-600 font-semibold"
          onClick={() => handleDeleteJob(jobID)}
        >
          Delete
        </button>
        <span className="text-purple-800 font-semibold ml-auto pr-3 ">
          {jobState}
        </span>
      </div>
    </article>
  );
};

export default JobCard;
