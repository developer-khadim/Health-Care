import React from "react";
import { RiArrowRightWideLine } from "react-icons/ri";

const FAQ = () => {
  return (
    <div className="w-full max-w-[1240px] mx-auto p-4 sm:p-6 md:p-8 mt-10 ">
      {/* Text Section */}
      <div className="text-center w-full md:w-[500px] mx-auto mb-8">
        <h2 className="font-bold text-2xl md:text-3xl text-black py-4">FAQ</h2>
        <p className="text-gray-600">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {/* FAQ Item 1 */}
        <div className="bg-white rounded-md px-6 py-10 shadow-lg flex items-start gap-4 transform transition-transform duration-300 hover:scale-105">
          <RiArrowRightWideLine color="lightblue" size={50} />
          <div>
            <h3 className="font-bold text-gray-600 text-2xl py-2">
              The quick fox jumps over the lazy dog
            </h3>
            <p className="font-semibold text-xl sm:text-base text-gray-500">
              Things on a very small scale behave like nothing
            </p>
          </div>
        </div>
        {/* FAQ Item 2 */}
        <div className="bg-white rounded-md px-6 py-10 shadow-lg flex items-start gap-4 transform transition-transform duration-300 hover:scale-105">
          <RiArrowRightWideLine color="lightblue" size={50} />
          <div>
            <h3 className="font-bold text-gray-600 text-2xl py-2">
              The quick fox jumps over the lazy dog
            </h3>
            <p className="font-semibold text-xl sm:text-base text-gray-500">
              Things on a very small scale behave like
            </p>
          </div>
        </div>
        {/* FAQ Item 3 */}
        <div className="bg-white rounded-md px-6 py-10 shadow-lg flex items-start gap-4 transform transition-transform duration-300 hover:scale-105">
          <RiArrowRightWideLine color="lightblue" size={50} />
          <div>
            <h3 className="font-bold text-gray-600 text-2xl py-2">
              The quick fox jumps over the lazy dog
            </h3>
            <p className="font-semibold text-xl sm:text-base text-gray-500">
              Things on a very small scale behave
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
