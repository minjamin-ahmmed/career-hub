import { useEffect, useState } from "react";
import DisplayJob from "../DisplayJob/DisplayJob";

const FeaturedJobs = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);

  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => setFeaturedJobs(data));
  }, []);

  return (
    <div className="my-10">
      <h1 className="text-4xl font-bold text-white text-center">
        Featured Jobs: {featuredJobs.length}{" "}
      </h1>
      <p className="text-center">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
        id nisi.
      </p>

      <div className="grid grid-cols-2 gap-10 mt-10">
        {featuredJobs.map((job) => (
          <DisplayJob key={job.id} job={job}></DisplayJob>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
