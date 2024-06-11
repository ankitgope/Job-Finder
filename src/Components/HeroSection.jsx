import React from "react";
// passing props by destructuring
const HeroSection = ({
  title = "Become a Frontend developer",
  subTitle = "Find the best jobs thet fits you ",
}) => {
  return (
    <section className="bg-indigo-700 py-20 mb-4 overflow-auto">
      <div className="text-center max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-col items-center">
        <h1 className="py-5 text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="my-4 text-xl text-white">{subTitle}</p>
      </div>
    </section>
  );
};

export default HeroSection;
