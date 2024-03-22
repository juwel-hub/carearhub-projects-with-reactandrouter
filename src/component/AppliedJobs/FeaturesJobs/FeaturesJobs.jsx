import { useEffect, useState } from "react";
import Job from "../../Job/Job";

const FeaturesJobs = () => {
  const [dataLength, setdataLength] = useState(4);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("Jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-6xl text-center font-bold mb-3">
          Featured Jobs : {jobs.length}
        </h2>
        <p className="text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={dataLength === jobs.length && "hidden"}>
        <button
          onClick={() => setdataLength(jobs.length)}
          className="btn btn-primary"
        >
          See all jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturesJobs;
