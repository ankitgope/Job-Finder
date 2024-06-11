import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
const NotFound = () => {
  return (
    <div>
      <Link to="/">Not found </Link>
      <FaExclamationTriangle className="size-16"/>
    </div>
  );
};

export default NotFound;
