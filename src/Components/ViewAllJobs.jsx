import React from "react";
import { Link } from "react-router-dom";
const ViewAllJobs = () => {
  return (
    <section className=" m-auto max-w-lg my-10 p-4 ">
      <Link
        to="job"
        className="bg-black text-white text-center block py-4 px-6 rounded-lg hover:bg-gray-900"
      >
        View all jobs
      </Link>
    </section>
  );
};

export default ViewAllJobs;
