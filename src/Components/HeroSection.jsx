import React from "react";

// Passing props by destructuring
const HeroSection = ({
  title = "Welcome to Our Platform",
  subTitle = "Explore opportunities and grow with us",
}) => {
  return (
    <section className="bg-blue-700 py-20 mb-6 overflow-auto">
      {/* Container for centering content */}
      <div className="text-center max-w-7xl mx-auto sm:px-8 lg:px-10 flex flex-col items-center">
        {/* Title with responsive text size and new font style */}
        <h1 className="py-6 text-5xl font-semibold text-white sm:text-6xl md:text-7xl">
          {title}
        </h1>
        {/* Subtitle with margin adjustments and new font style */}
        <p className="my-6 text-2xl text-white font-light">{subTitle}</p>
      </div>
    </section>
  );
};

export default HeroSection;
