import React, { useState } from "react";
import { Link } from "react-router-dom";
Link
const JobListingCard = ({job}) => {
  const[jobDescription, setJobDescription]=useState(false)
  let description = job.description

  if(!jobDescription){
    description=description.substring(0,90)+".."
  }
  return (
    <div
      key={job.id}
      className="bg-white rounded-xl shadow-md relative flex flex-col overflow-auto"
    >
      <div className="p-4 flex-grow">
        <div className="text-gray-600 my-2">{job.type}</div>
        <h3 className="text-xl font-bold">{job.title}</h3>
        <div className="mb-5 ">{description} <br />
        <button onClick={()=> {setJobDescription((prevState)=> !prevState)}} className="text-indigo-500
         hover:text-indigo-700">{jobDescription ? 'less' :'more'} </button>
        </div>
        
        <h3 className="text-indigo-500 mb-2">{job.salary}/year</h3>
        <div className="border border-gray-100 mb-1"></div>
      </div>
      <div className="p-4 flex flex-col lg:flex-row justify-between">
        <div>{job.location}</div>
        <Link
          to={`/job/${job.id}`}
          className="h-[36px]  bg-indigo-500 hover:bg-indigo-600 text-white px-3 
                py-2 rounded-lg text-center text-sm"
        >
          Read me
        </Link>
      </div>
    </div>
  );
};

export default JobListingCard;
