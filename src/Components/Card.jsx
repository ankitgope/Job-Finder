import React from 'react';

// Making the color dynamic using bg prop
const Card = ({ children, bg = 'bg-blue-100' }) => {
  return (
    // Container div with dynamic background color, rounded corners, padding, shadow, and updated styles
    <div className={`${bg} rounded-xl p-8 shadow-xl overflow-hidden transform transition-transform duration-500 hover:scale-105`}>
      {/* Adding text styles */}
      <div className="font-sans text-gray-800">
        {children}
      </div>
    </div>
  );
}

export default Card;
