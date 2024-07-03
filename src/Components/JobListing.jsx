import React, { useEffect, useState } from "react";
import JobListingCard from "./JobListingCard";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const JobListing = ({ isHome = false }) => {
  // State to store jobs data and loading status
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch jobs data when component mounts or when isHome prop changes
  useEffect(() => {
    const fetchJobs = async () => {
      // Determine API URL based on isHome prop
      const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
      try {
        // Fetch data from API
        const res = await fetch(apiUrl);
        const data = await res.json();
        // Update jobs state with fetched data
        setJobs(data);
      } catch (error) {
        console.log('No data found');
      } finally {
        // Set loading to false after data fetching completes
        setLoading(false);
      }
    };

    // Call fetchJobs function when component mounts or isHome prop changes
    fetchJobs();
  }, [isHome]); // Dependency array to run effect when isHome prop changes

  return (
    
    <section className="bg-blue-50 px-4 py-3 overflow-hidden">
      <section>
        <div className="container m-auto  px-6">
          <Link
            to="/"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Home
          </Link>
        </div>
      </section>
      <div className="container mx-auto lg:container">
        {/* Section title based on isHome prop */}
        <h2 className="text-center text-3xl font-bold text-blue-700 mb-4">
          {isHome ? 'Browse Jobs' : 'Recent Jobs'}
        </h2>

        {/* Conditional rendering based on loading state */}
        {loading ? (
          <Spinner loading={loading} /> // Show spinner while loading
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Map through jobs array to render JobListingCard component */}
            {jobs.map((job) => (
              <JobListingCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListing;
