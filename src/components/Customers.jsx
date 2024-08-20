import React from "react";
import stars from "../assets/stars.png";
import pro1 from "../assets/1.png";
import pro2 from "../assets/2.png";

const Customers = () => {
  return (
    <div className="w-full max-w-[1240px] mx-auto p-4 sm:p-6 md:p-8">
      {/* text */}
      <div className="text-center w-full md:w-[500px] mx-auto mb-8">
        <h2 className="font-bold text-2xl md:text-3xl text-active py-4">
          What our Customers say
        </h2>
        <p className="text-gray-600">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      {/* responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
        <div className="bg-white rounded-md p-4 sm:p-6 shadow-lg flex flex-col items-start gap-3 sm:gap-4 transform transition-transform duration-300 hover:scale-105">
          <img src={stars} alt="Stars" className="w-20 sm:w-24" />
          <p className="font-semibold text-sm sm:text-base text-gray-500">
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </p>
          <img
            src={pro1}
            alt="Profile 1"
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
          />
        </div>
        <div className="bg-white rounded-md p-4 sm:p-6 shadow-lg flex flex-col items-start gap-3 sm:gap-4 transform transition-transform duration-300 hover:scale-105">
          <img src={stars} alt="Stars" className="w-20 sm:w-24" />
          <p className="font-semibold text-sm sm:text-base text-gray-500">
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </p>
          <img
            src={pro2}
            alt="Profile 2"
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
          />
        </div>
        <div className="bg-white rounded-md p-4 sm:p-6 shadow-lg flex flex-col items-start gap-3 sm:gap-4 transform transition-transform duration-300 hover:scale-105">
          <img src={stars} alt="Stars" className="w-20 sm:w-24" />
          <p className="font-semibold text-sm sm:text-base text-gray-500">
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </p>
          <img
            src={pro1}
            alt="Profile 1"
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Customers;
