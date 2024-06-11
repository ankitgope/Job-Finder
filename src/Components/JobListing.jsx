import React from "react";
import { useEffect,useState } from "react";
import JobListingCard from "./JobListingCard";
const JobListing = ({isHome=false}) => {

  const[jobs,setJobs] = useState([])
  const[loading,setLoading] = useState(true)
  useEffect(()=>{
    const fetchJobs = async()=>{
      try {
        // forlimit of 3 card ("http://localhost:8000/jobs?_limit=3")
        const res = await fetch('http://localhost:8000/jobs')
        const data= await res.json();
        setJobs(data)
        
      } catch (error) {
        console.log('No data found')
      }
      finally{
        setLoading(false)
      }
    }
    fetchJobs()
  },[])
  
  
  
  return (
    <section className="bg-blue-50 px-4 py-3 overflow-auto">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-center text-3xl font-bold text-indigo-700 mb-3">
        {isHome?'Browse Jobs' :'Recent Jobs'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading? (<h2>loading</h2>):(
            <>
              {jobs.map((job)=>(
                  <JobListingCard key={job.id} job={job}/>
                ))
              }
            </>)
          }
        </div>
      </div>
    </section>
  );
};

export default JobListing;
