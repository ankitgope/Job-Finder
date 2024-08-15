import React from "react";
import { Link } from "react-router-dom";

const ViewAllJobs = () => {
  return (
    <section className="mx-auto max-w-lg my-10 p-4">
      <Link
        to="/job"
        className="bg-blue-500 hover:bg-blue-600 text-white text-center 
        block py-4 px-6 rounded-lg transition-colors duration-300 font-sans"
      >
        View All Jobs
      </Link>
    </section>
  );
};

export default ViewAllJobs;
