import React, { useState } from "react";
import { Link } from "react-router-dom";

const JobListingCard = ({ job }) => {
  // State to toggle full job description
  const [jobDescription, setJobDescription] = useState(false);

  // Truncate description if not expanded
  let description = job.description;
  if (!jobDescription) {
    description = description.substring(0, 90) + "..";
  }

  return (
    <div
      key={job.id}
      className="bg-white rounded-xl shadow-md relative flex flex-col overflow-hidden font-sans
      hover:transform hover:scale-105 hover:shadow-3xl transition-transform duration-300"
    >
      {/* Job details section */}
      <div className="p-4 flex-grow">
        <div className="text-gray-600 my-2">{job.type}</div>
        <h3 className="text-xl font-bold">{job.title}</h3>
        <div className="mb-5">
          {description} <br />
          {/* Toggle button for expanding job description */}
          <button
            onClick={() => {
              setJobDescription((prevState) => !prevState);
            }}
            className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
          >
            {jobDescription ? "less" : "more"}
          </button>
        </div>

        <h3 className="text-blue-500 mb-2">{job.salary}/year</h3>
        <div className="border border-gray-100 mb-1"></div>
      </div>

      {/* Footer section with location and read more link */}
      <div className="p-4 flex flex-col lg:flex-row justify-between">
        <div>{job.location}</div>
        {/* Link to job details page */}
        <Link
          to={`/job/${job.id}`}
          className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 
          rounded-lg text-center text-sm transition-colors duration-300"
        >
          Read More {/* Link text */}
        </Link>
      </div>
    </div>
  );
};

export default JobListingCard;
