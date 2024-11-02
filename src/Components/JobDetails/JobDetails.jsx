import { useLoaderData, useParams } from "react-router-dom";
import { addStoredReadList } from "../../Utility/AddtoDb";

const JobDetails = () => {
  const { id } = useParams();
  const jobDetailsData = useLoaderData();

  const JobDetailsId = parseInt(id);

  const jobDetails = jobDetailsData.find(
    (jobDetail) => jobDetail.id === JobDetailsId
  );

  console.log(jobDetails);

  const {
    id: id2,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = jobDetails;

  const handleApplyNow = (id) => {
    addStoredReadList(id);
  };

  return (
    <div className="container mx-auto px-12">
      <div>
        <h1 className="text-center font-bold text-4xl my-20">Job Details </h1>
      </div>

      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-2">
          <h2>
            <span>Job Description: </span>
            {job_description}
          </h2>

          <h2>
            <span>Job Responsibilities: </span>
            {job_responsibility}
          </h2>

          <h2>
            <span>Educational Requirements:</span>
            {educational_requirements}
          </h2>

          <h2>
            <span>Experiences: </span> {experiences}
          </h2>
        </div>

        <div>
          <h2>Job Details</h2>
          <div className="divider"></div>
          <h3>
            <span>Salary: </span>
            {salary}
          </h3>
          <h3 className="mb-5">
            <span>Job Title: </span> {job_title}
          </h3>

          <h1>Contact Information</h1>
          <div className="divider"></div>
          <p>
            <span>Phone: </span> {contact_information.phone}
          </p>
          <p>
            <span>Email: </span> {contact_information.email}
          </p>
          <p>
            <span>Address: </span> {contact_information.address}
          </p>

          <button
            onClick={() => handleApplyNow(id2)}
            className="btn w-full btn-primary bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-none"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
