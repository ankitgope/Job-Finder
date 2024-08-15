import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Link back to home page */}
      <Link to="/" className="text-blue-500 hover:text-blue-700 text-lg mb-2">
        Go back to Home
      </Link>

      {/* Icon for not found page */}
      <div className="text-yellow-600 text-6xl mb-2">
        <FaExclamationTriangle />
      </div>

      {/* Not found message */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Oops! Page Not Found
      </h1>

      {/* Explanation message */}
      <p className="text-gray-600 text-lg text-center">
        The page you are looking for might have been removed or does not exist.
      </p>
    </div>
  );
};

export default NotFound;
