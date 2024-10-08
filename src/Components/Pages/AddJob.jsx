import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddJob = ({ addJobSubmit }) => {
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const navigate = useNavigate();

  // Function to handle form submission
  const submitForm = (e) => {
    e.preventDefault();

    // Construct new job object from form data
    const newJob = {
      title,
      type,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };

    // Call addJobSubmit function passed as prop to submit new job
    addJobSubmit(newJob);

    // Show success message using toast notification
    toast.success("Job Added Successfully");

    // Navigate user back to jobs page after successful submission
    return navigate("/job");
  };

  return (
    <>
      {/* Section for back to home link */}
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Home
          </Link>
        </div>
      </section>

      {/* Section for job form */}
      <section>
        <div className="container m-auto max-w-2xl py-5">
          <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <form onSubmit={submitForm}>
              <h2 className="text-3xl font-semibold text-center mb-4">
                Add Jobs
              </h2>

              {/* Select input for job type */}
              <div className="mb-4">
                <label
                  htmlFor="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Job type
                </label>
                <select
                  name="type"
                  id="type"
                  className="border rounded w-full py-2 px-3"
                  required
                  value={type}
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                >
                  <option value="" disabled hidden>
                    Select the type of Job
                  </option>
                  <option value="Full-Time">Full Time</option>
                  <option value="Part-Time">Part Time</option>
                  <option value="Remote">Remote</option>
                  <option value="Internship">Internship</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>

              {/* Input for job title */}
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Job Listing Name
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="e.g., React Jobs in India"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>

              {/* Textarea for job description */}
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  required
                  className="border rounded h-24 w-full py-2 px-3 mb-2"
                  placeholder="e.g., Add job roles description here, what is expected from the candidate"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                ></textarea>
              </div>

              {/* Select input for salary */}
              <div className="mb-4">
                <label
                  htmlFor="salary"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Salary
                </label>
                <select
                  name="salary"
                  id="salary"
                  className="border rounded w-full py-2 px-3 required"
                  value={salary}
                  onChange={(e) => {
                    setSalary(e.target.value);
                  }}
                >
                  <option value="" disabled hidden>
                    Select your salary
                  </option>
                  <option value="Under $50K">Under $50K</option>
                  <option value="$50K - $60K">$50K - $60K</option>
                  <option value="$60K - $70K">$60K - $70K</option>
                  <option value="$70K - $80K">$70K - $80K</option>
                  <option value="$80K - $90K">$80K - $90K</option>
                  <option value="$90K - $100K">$90K - $100K</option>
                  <option value="$100K - $125K">$100K - $125K</option>
                  <option value="$125K - $150K">$125K - $150K</option>
                  <option value="$150K - $175K">$150K - $175K</option>
                  <option value="$175K - $200K">$175K - $200K</option>
                  <option value="Over $200K">Over $200K</option>
                </select>
              </div>

              {/* Input for job location */}
              <div className="mb-4">
                <label
                  htmlFor="location"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="e.g., Location of the job"
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                />
              </div>

              {/* Section for company information */}
              <h3 className="text-2xl mb-5">Company Info</h3>

              {/* Input for company name */}
              <div className="mb-4">
                <label
                  htmlFor="companyName"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Company Name"
                  value={companyName}
                  onChange={(e) => {
                    setCompanyName(e.target.value);
                  }}
                />
              </div>

              {/* Textarea for company description */}
              <div className="mb-4">
                <label
                  htmlFor="companyDescription"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Company Description
                </label>
                <textarea
                  id="companyDescription"
                  name="companyDescription"
                  rows="4"
                  required
                  className="border rounded h-24 w-full py-2 px-3 mb-2"
                  placeholder="e.g., Add company description here, what is the company about"
                  value={companyDescription}
                  onChange={(e) => {
                    setCompanyDescription(e.target.value);
                  }}
                ></textarea>
              </div>

              {/* Input for company contact phone */}
              <div className="mb-4">
                <label
                  htmlFor="contactPhone"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Contact Phone
                </label>
                <input
                  type="tel"
                  id="contactPhone"
                  name="contactPhone"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Company Phone No"
                  value={contactPhone}
                  onChange={(e) => {
                    setContactPhone(e.target.value);
                  }}
                />
              </div>

              {/* Input for company contact email */}
              <div className="mb-4">
                <label
                  htmlFor="contactEmail"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Contact Email
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Company Email"
                  value={contactEmail}
                  onChange={(e) => {
                    setContactEmail(e.target.value);
                  }}
                />
              </div>

              {/* Submit button */}
              <div>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Add Job
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddJob;
