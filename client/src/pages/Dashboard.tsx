import React, { useRef } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import Form from "../components/Form";
import FormTitle from "../components/FormTitle";
import InputComponent from "../components/InputComponent";
import JobCard from "../components/JobCard";
import NoJobs from "../components/NoJobs";
import SpinnerLoader from "../components/SpinnerLoader";
import SubmitButton from "../components/SubmitButton";
import { getJobs } from "../fetch/getJobs";
import { postJob } from "../fetch/postJob";
import { redirectToLoginPage } from "../utils/redirectToLoginPage";

const Dashboard = () => {
  const { data, isLoading } = useQuery(["getJobs"], () => getJobs(true));
  const queryClient = useQueryClient();
  const { mutate: mutateJobs } = useMutation(postJob, {
    onSuccess: () => {
      queryClient.invalidateQueries("getJobs");
    },
  });

  const companyInputRef = useRef<HTMLInputElement>(null);
  const positionInputRef = useRef<HTMLInputElement>(null);

  const handleCreateJob = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!companyInputRef.current || !positionInputRef.current) return;
    if (!data?.name) return;

    const newJob = {
      name: data?.name!,
      data: {
        company: companyInputRef.current.value,
        position: positionInputRef.current.value,
      },
    };
    mutateJobs({ newJob, redirectCallback: redirectToLoginPage });
  };
  return (
    <>
      <Form onSubmit={handleCreateJob}>
        <FormTitle titleText="New Job" />

        <InputComponent
          type={"text"}
          labelName="Company"
          ref={companyInputRef}
        />
        <InputComponent
          type={"text"}
          labelName="Position"
          ref={positionInputRef}
        />
        <SubmitButton />
      </Form>

      <section className="grid grid-cols-[repeat(auto-fill,350px)] justify-center gap-4 mt-12 pb-4">
        {(data?.jobs?.length! > 0 &&
          data?.jobs.map((job, index) => (
            <JobCard {...job} userID={data?.userID} key={index} />
          ))) ||
          ""}
      </section>
      {isLoading ? <SpinnerLoader /> : data?.jobs?.length === 0 && <NoJobs />}
    </>
  );
};

export default Dashboard;
