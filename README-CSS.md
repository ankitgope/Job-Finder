 <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to jobs
          </Link>
        </div>
      </section>
      <section className="bg-indigo-500">
        <div className="conatiner m-auto max-w-2xl py-24">
          <h1>here is a forn</h1>
          <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <form>
              <h2 className="text-3xl font-semibold text-center mb-4">
                Add Jobs
              </h2>

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
                  className="border  rounded w-full py-2 px-3 required value={type}"
                >
                  <option value="" disabled selected hidden>Select the type of Job</option>
                  <option value="Full-Time">Full Time</option>
                  <option value="Part-Time">Part Time</option>
                  <option value="Remote">Remote</option>
                  <option value="Internship">Internship</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="text"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Job Listing Name
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="eg: React Jobs in India"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="text"
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
                  placeholder="eg: Add job roles description here , what is expected from the candidate"
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Salary
                </label>
                <select
                  name="salary"
                  id="salary"
                  className="border  rounded w-full py-2 px-3 required "
                >
                  <option value="" disabled selected hidden>
                    Select your salary
                  </option>
                  <option value="Under $50K">Under $50K</option>
                  <option value="$50K - 60K">$50K - $60K</option>
                  <option value="$60K - 70K">$60K - $70K</option>
                  <option value="$70K - 80K">$70K - $80K</option>
                  <option value="$80K - 90K">$80K - $90K</option>
                  <option value="$90K - 100K">$90K - $100K</option>
                  <option value="$100K - 125K">$100K - $125K</option>
                  <option value="$125K - 150K">$125K - $150K</option>
                  <option value="$150K - 175K">$150K - $175K</option>
                  <option value="$175K - 200K">$175K - $200K</option>
                  <option value="Over $200K">Over $200K</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="eg: location of the job"
                />
              </div>

              <h3 className="text-2xl mb-5">Company Info</h3>

              <div className="mb-4">
                <label
                  htmlFor="Company"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Company Name"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="text"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Company Description
                </label>
                <textarea
                  id="company_description"
                  name="company_description"
                  rows="4"
                  required
                  className="border rounded h-24 w-full py-2 px-3 mb-2"
                  placeholder="eg: Add company description here , what is the comapny is about"
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="contact_phone"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Contact Phone
                </label>
                <input
                  type="tel"
                  id="contact_phone"
                  name="contact_phone"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Company Email"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="contact_email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Contact Phone
                </label>
                <input
                  type="text"
                  id="contact_email"
                  name="ontact_email"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Company Phone No"
                />
              </div>

              <div>
                <button
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font 
                bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                >
                  Add Job
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      ===============================================


      import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import ReactLogo from "./images/jobs.png";

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
              <img src={ReactLogo} alt="job logo" className="h-12 w-auto" />
              <span className="md:block text-white font-bold text-2xl ml-2">
                Job Finder
              </span>
            </NavLink>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white p-2 focus:outline-none"
            >
              <GiHamburgerMenu className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex md:ml-auto sm:ml-auto">
            <div className="space-x-2">
              <NavLink
                className={activeLink}
                to="/"
                activeClassName="bg-blue-900"
                exact
              >
                Home
              </NavLink>
              <NavLink
                className={activeLink}
                to="/job"
                activeClassName="bg-blue-900"
              >
                Jobs
              </NavLink>
              <NavLink
                className={activeLink}
                to="/add-job"
                activeClassName="bg-blue-900"
              >
                Add Jobs
              </NavLink>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Hamburger Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-600 mt-2">
            <NavLink
              to="/"
              className={`${activeLink({ isActive: true })} block`}
              activeClassName="bg-blue-900"
              exact
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/job"
              className={`${activeLink({ isActive: true })} block`}
              activeClassName="bg-blue-900"
              onClick={toggleMenu}
            >
              Jobs
            </NavLink>
            <NavLink
              to="/add-job"
              className={`${activeLink({ isActive: true })} block`}
              activeClassName="bg-blue-900"
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
