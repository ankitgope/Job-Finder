import React from "react";
import data from "../jobs.json"
import JobListingCard from "./JobListingCard";
const JobListing = ({isHome=false}) => {
  
  const { jobs } = data;
  const jobsListings = isHome? jobs.slice(0,3): jobs
  return (
    <section className="bg-blue-50 px-4 py-3 overflow-auto">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-center text-3xl font-bold text-indigo-700 mb-3">
        {isHome?'Browse Jobs' :'Recent Jobs'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {
            jobsListings.map((job)=>(
              <JobListingCard key={job.id} job={job}/>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default JobListing;
