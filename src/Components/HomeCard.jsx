import React from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const HomeCard = () => {
  const navigate = useNavigate();

  // Function to handle button click
  const handleButtonClick = () => {
    navigate("/new-feature");
  };

  return (
    <section className="py-8 bg-gray-50 overflow-auto">
      <div className="container mx-auto lg:container p-4">
        {/* Grid layout for cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-lg">
          {/* Card for Developer */}
          <Card>
            <h2 className="font-semibold text-3xl m-2">For Developer</h2>
            <p className="mx-2 mb-6 text-gray-700">
              List your job to find the perfect developer
            </p>
            <Link
              to="/job"
              className="bg-blue-700 text-white mx-2 px-4 py-2 rounded-lg"
            >
              Browse Jobs
            </Link>
          </Card>

          {/* Card for Employer */}
          <div className="rounded-[12px] bg-blue-200 shadow-2xl p-7 
          hover:transform hover:scale-105 hover:shadow-3xl transition-transform duration-300">
            {/* Applying hover effect */}
            <h2 className="font-semibold text-3xl m-2">For Employer</h2>
            <p className="mx-1 mb-4 text-gray-700">
              List your job to find the perfect developer
            </p>
            <Link
              to="/add-job"
              className="bg-blue-700 text-white mx-1 px-4 py-2 rounded-lg"
            >
              Add Job
            </Link>
          </div>

          {/* Card for Experiment */}
          {/* <Card bg="bg-green-100">
            <h2 className="font-semibold text-3xl m-2">New Feature Showcase</h2>
            <p className="mx-2 text-gray-700">
              Explore our latest feature that enhances user interaction.
            </p>
            <button
              className="bg-blue-700 text-white mx-2 my-4 px-4 py-2 rounded-lg"
              onClick={handleButtonClick}
            >
              Learn More
            </button>
          </Card> */}
        </div>
      </div>
    </section>
  );
};

export default HomeCard;
