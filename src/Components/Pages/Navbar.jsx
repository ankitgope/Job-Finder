import React from "react";
import { NavLink } from "react-router-dom";
import ReactLogo from "./images/jobs.png";

const Navbar = () => {
  const activeLink = ({ isActive }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-900 rounded-md px-3 py-2 "
      : "text-white hover:bg-gray-900 hover:text-white px-3 rounded-md py-2";
//fixed z-50 w-full top-0 left-0
  return (
    <nav className="bg-indigo-600 border-white border-b  shadow-xl overflow-auto">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          <div className="flex flex-1 md:items-stretch md:justify-start">
            <NavLink
              className="flex flex-shrink-0 items-center justify-center mr-4 "
              to="/"
            >
              
              <img src={ReactLogo} alt="job logo" className="h-12 w-auto" />
              <NavLink to="/" className="hidden md:block text-white font-bold text-2xl ml-2 ">
                Job Finder
              </NavLink>
            </NavLink>
          </div>
          <div className="md:ml-auto sm:ml-auto">
            <div className="space-x-2">
              <NavLink className={activeLink} to="/">
                Home
              </NavLink>
              <NavLink className={activeLink} to="/job">
                Job
              </NavLink>
              <NavLink className={activeLink} to="/add-job">
                Add Jobs
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
