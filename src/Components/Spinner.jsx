import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
};

const Spinner = ({ loading }) => {
  return (
    // <div className="flex items-center justify-center h-auto overflow-hidden">
      <ClipLoader
        
        color='#4338ca'
        loading={loading}
        cssOverride={override}
        size={150}
      />
   // </div>
  );
};

export default Spinner;
