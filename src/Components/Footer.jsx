import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="flex items-center mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-white">JobPortal</h2>
        </div>
        <nav className="mb-4 md:mb-0">
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="/jobs" className="hover:text-gray-200">
                Jobs
              </a>
            </li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <FaFacebook />

          <FaTwitter />

          <FaLinkedin />
        </div>
      </div>
      <div className="mt-4 border-t border-gray-600 pt-4 text-center">
        <p>&copy; 2024 JobPortal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
