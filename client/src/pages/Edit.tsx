import React, { useRef, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import Form from "../components/Form";
import FormTitle from "../components/FormTitle";
import InputComponent from "../components/InputComponent";
import SubmitButton from "../components/SubmitButton";
import { fetchSingleJob } from "../fetch/getSingleJob";
import { patchJob } from "../fetch/patchJob";

const Edit = () => {
  const { userID, jobPosition, jobID } = useParams();

  const companyInputRef = useRef<HTMLInputElement>(null);
  const positionInputRef = useRef<HTMLInputElement>(null);
  const selectJobStatusRef = useRef<HTMLSelectElement>(null);

  const addDataOnInput = (
    companyData: string,
    positionData: string,
    jobState: string
  ) => {
    if (
      positionInputRef?.current &&
      companyInputRef?.current &&
      selectJobStatusRef?.current
    ) {
      positionInputRef!.current.value = positionData;
      companyInputRef!.current.value = companyData;
      selectJobStatusRef!.current.value = jobState;
    }
  };

  const { data: singleJobData, isLoading } = useQuery(["singleJob"], () =>
    fetchSingleJob({ userID, addDataOnInput, jobID })
  );

  const { mutate: mutateUpdateJob } = useMutation(patchJob);

  const handleUpdateJob = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const jobUpdated = {
      jobIDToBeUpdated: jobID,
      job: {
        company: companyInputRef?.current!.value,
        position: positionInputRef?.current!.value,
        jobState: selectJobStatusRef?.current!.value,
      },
    };
    mutateUpdateJob({ userID, updatedUser: jobUpdated });
  };

  return (
    <section>
      <Link
        to="/dashboard"
        className="p-2 rounded bg-purple-600 my-8 block w-[max-content] text-white mx-auto"
      >
        Dashboard
      </Link>
      <Form onSubmit={handleUpdateJob}>
        <FormTitle titleText="Update Job" />

        <InputComponent
          labelName="Company"
          type={"text"}
          ref={companyInputRef}
        />
        <InputComponent
          labelName="Position"
          type={"text"}
          ref={positionInputRef}
        />

        <div className="flex flex-col gap-2">
          Status
          <select
            aria-label="job status"
            className="p-2"
            ref={selectJobStatusRef}
          >
            <option value="pending">Pending</option>
            <option value="Interview">Interview</option>
            <option value="declined">Declined</option>
          </select>
        </div>
        <SubmitButton />
      </Form>
    </section>
  );
};

export default Edit;
