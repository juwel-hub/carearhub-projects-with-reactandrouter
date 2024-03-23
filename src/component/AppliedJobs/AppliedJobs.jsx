import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStordJobeApplication } from "../../Utility/LocalStoraje";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "Remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "Onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };
  useEffect(() => {
    const storedJobsIds = getStordJobeApplication();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobsIds.includes(job.id));
      console.log(jobs, storedJobsIds, jobsApplied);
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);
  return (
    <div>
      <details className="dropdown">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleJobsFilter("all")}>
            <a>All</a>
          </li>
          <li onClick={() => handleJobsFilter("Remote")}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleJobsFilter("Onsite")}>
            <a>Onsite</a>
          </li>
        </ul>
      </details>
      <h1>Jobs i applied {appliedJobs.length}</h1>
      <ul>
        {displayJobs.map((job) => (
          <li key={job.id}>
            <span>
              {job.job_title} {job.company_name}
              {job.remote_or_onsite}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
