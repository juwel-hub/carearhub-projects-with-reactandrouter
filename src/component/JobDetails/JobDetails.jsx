import { useLoaderData, useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { saveJbeApplication } from "../../Utility/LocalStoraje";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id == idInt);
  console.log(job);
  const {
    job_description,
    job_responsiblity,
    experiences,
    educational_requirements,
    salary,
    job_title,
    phone,
    email,
    address,
  } = job;
  const handleApplyBtn = () => {
    saveJbeApplication(idInt);
    toast("your applied compleated");
  };
  return (
    <div>
      <h1>job details</h1>
      <div className="grid md:grid-cols-4 gap-4">
        <div className="grid md:col-span-3">
          <p>
            <span className="text-xl">Job Description:</span> {job_description}
          </p>
          <p className="my-3">
            <span className="text-xl">Job Responsibility:</span>{" "}
            {job_responsiblity}
          </p>
          <p>
            <span className="text-xl">Educational Requirements:</span>{" "}
            {educational_requirements}
          </p>
          <p className="mt-3 ">
            <span className="text-xl">Experiences:</span> {experiences}
          </p>
        </div>
        <div className="">
          <h2 className="text-3xl border-b mb-3">Job Details</h2>
          <p>Salary: {salary}</p>
          <p className="my-3">Job Title: {job_title}</p>
          <h1 className="text-3xl border-b mb-3">Contact Information</h1>
          <p className="my-3">Phone: {phone}</p>
          <p>Email: {email}</p>
          <p className="my-3">Address: {address}</p>
          <button onClick={handleApplyBtn} className="btn btn-primary w-full">
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default JobDetails;
