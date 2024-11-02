import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadList } from "../../Utility/AddtoDb";

const AppliedJobs = () => {
  const [jobList, setJobList] = useState([]);
  const appliedJobs = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));

    const appliedList = appliedJobs.filter((job) =>
      storedReadListInt.includes(job.id)
    );

    setJobList(appliedList);
  }, []);

  return (
    <div>
      <h1> Applied Jobs: {jobList.length} </h1>
    </div>
  );
};

export default AppliedJobs;
