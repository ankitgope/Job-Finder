import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ReactLogo from "./images/jobs.png";
import { GiHamburgerMenu } from "react-icons/gi";

//import '../../Style.css';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const activeLink = ({ isActive }) =>
    isActive
      ? "bg-blue-900 text-white hover:bg-blue-700 rounded-md px-3 py-2"
      : "text-white hover:bg-blue-700 hover:text-white px-3 rounded-md py-2";

  return (
    <nav
      className={`bg-blue-600 border-white border-b shadow-xl overflow-auto ${
        location.pathname === "/" ? "fixed top-0 w-full z-50" : ""
      }`}
    >
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex flex-1 md:items-stretch md:justify-start">
            <NavLink to="/" className="flex items-center">
              <img src={ReactLogo} alt="job logo" className="h-12 w-auto " />
              <span className=" hide-on-small md:block text-white font-bold text-2xl ml-2">
                Job Finder
              </span>
            </NavLink>
          </div>

          

          {/* Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white p-2 focus:outline-none"
            >
              <GiHamburgerMenu className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Links - Desktop*/}
          <div className="hidden md:flex md:ml-auto sm:ml-auto">
            <div className="space-x-2">
              {/* Home Link */}
              <NavLink className={activeLink} to="/">
                Home
              </NavLink>
              {/* Jobs Link */}
              <NavLink className={activeLink} to="/job">
                Jobs
              </NavLink>
              {/* Add Jobs Link */}
              <NavLink className={activeLink} to="/add-job">
                Add Jobs
              </NavLink>
            </div>
          </div>
        </div>

        {/* Navigation Links - Mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-600 mt-2 ">
            <NavLink
              to="/"
              className={`${activeLink({ isActive: true })} block mb-1`}
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/job"
              className={`${activeLink({ isActive: true })} block mb-1`}
              onClick={toggleMenu}
            >
              Jobs
            </NavLink>
            {/* NavLink for Add Jobs */}
            <NavLink
              to="/add-job"
              className={`${activeLink({ isActive: true })} block mb-1`}
              onClick={toggleMenu}
            >
              Add Jobs
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
