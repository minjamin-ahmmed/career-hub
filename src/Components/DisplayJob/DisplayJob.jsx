import { NavLink } from "react-router-dom";

const DisplayJob = ({ job }) => {
  const {
    id,
    job_title,
    salary,
    location,
    job_type,
    remote_or_onsite,
    company_name,
  } = job;
  return (
    <div className="border border-indigo-500 p-4 rounded-xl space-y-5">
      <h1 className="font-bold text-xl"> {job_title} </h1>
      <p> {company_name} </p>

      <div className="flex items-center gap-5">
        <p className="border border-purple-600 py-1 px-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent font-bold">
          {remote_or_onsite}
        </p>
        <p className="border border-purple-600 py-1 px-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent font-bold">
          {job_type}
        </p>
      </div>

      <div className="flex justify-between items-center ">
        <p> {location} </p>
        <p> Salary: {salary} </p>
      </div>

      <NavLink to={`/featuredJobs/${id}`}>
        <button className="btn btn-primary bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-none">
          View Details
        </button>
      </NavLink>
    </div>
  );
};

export default DisplayJob;
