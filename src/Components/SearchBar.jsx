import React from "react";

const SearchBar = ({ search, handleSearchChange }) => {
  return (
    <div className="flex items-center overflow-hidden">
      <form className="ml-auto md:block">
        {/* onSubmit={handleSearchSubmit} */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-full sm:w-48 md:w-64 px-3 py-2 mr-2 rounded-md focus:outline-none  "
            value={search}
            onChange={(e) => handleSearchChange(e)}
          />

        </div>
      </form>
    </div>
  );
};

export default SearchBar;
