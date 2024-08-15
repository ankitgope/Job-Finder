import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
// using params for optimization and a react router data loader previously we are doing it
//using useEffect and we can export the data Loader so that we use it to else where like in
//edit page in there we have to use fetch jobs
import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const JobPage = ({ deleteJob }) => {
  // Destructuring params and loader data
  const { id } = useParams();
  const job = useLoaderData();
  const navigate = useNavigate();

  // Function to handle job deletion
  const onDeleteClick = (jobId) => {
    const confirm = window.confirm("Are you sure you want to delete");
    if (!confirm) return;
    deleteJob(jobId);
    toast.success("Job deleted successfully");
    navigate("/job");
  };

  return (
    <>
      {/* Go back button */}
      <section>
        <div className="container mx-auto py-6 px-6">
          <Link
            to="/job"
            className="text-black hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to jobs
          </Link>
        </div>
      </section>

      <section className="bg-blue-50">
        <div className="container mx-auto py-10 px-6">
          {/* Job details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{job.type}</div>
                <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
                <div className="text-gray-500 mb-4 flex items-center justify-center md:justify-start">
                  <FaMapMarker className="text-orange-700 mr-1" />
                  <p className="text-orange-700">{job.location}</p>
                </div>
              </div>

              {/* Job description */}
              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="blue-800 text-lg font-bold mb-6">
                  Job Description
                </h3>
                <p className="mb-4">{job.description}</p>
                <h3 className="text-blue-800 text-lg font-bold mb-2">Salary</h3>
                <p className="mb-4">{job.salary} / (Year)</p>
              </div>
            </main>

            {/* Side cards */}
            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-blue-800 text-lg font-bold mb-6">
                  Company Info
                </h3>
                <h2 className="text-2xl font-bold">{job.company.name}</h2>
                <p className="my-2">{job.company.description}</p>
                <hr className="my-4" />

                <div>
                  <h3 className="text-lg font-bold">Contact Email:</h3>
                  <p className="my-2 bg-blue-100 p-2">
                    {job.company.contactEmail}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold">Contact Phone:</h3>
                  <p className="my-2 bg-blue-100 p-2">
                    {job.company.contactPhone}
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-lg font-bold mb-6">Manage Job</h3>
                <Link
                  to={`/edit-job/${job.id}`}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full block text-center mb-4"
                >
                  Edit Job
                </Link>
                <button
                  onClick={() => onDeleteClick(job.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full block text-center"
                >
                  Delete
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

// Function to fetch job data using react-router's loader
const jobLoader = async ({ params }) => {
  try {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching job data:", error);
    throw new Error("Failed to load job data");
  }
};

export { JobPage as default, jobLoader };
