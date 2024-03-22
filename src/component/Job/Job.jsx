import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
    job_responsiblity,
  } = job;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {job_title} </h2>
        <p>{company_name}</p>
        <div>
          <button className="px-5 py-2 font-bold border rounded border-indigo-400 mr-4 text-[#7E90FE">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-bold border rounded border-indigo-400 mr-4 text-[#7E90FE">
            {job_type}
          </button>
        </div>
        <div className="flex items-center gap-4 my-3">
          <div>
            <p className="flex items-center mr-2">
              <CiLocationOn className="text-2xl" />
              {location}
            </p>
          </div>
          <div>
            <p className="flex items-center">
              <CiDollar className="text-2xl mr-2 " />
              {salary}
            </p>
          </div>
        </div>
        <div className="card-actions ">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Job;
