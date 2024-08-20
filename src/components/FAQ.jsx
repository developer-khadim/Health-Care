import React from "react";
import { RiArrowRightWideLine } from "react-icons/ri";

const FAQ = () => {
  return (
    <div className="w-full max-w-[1240px] mx-auto p-4 sm:p-6 md:p-8 mt-10">
      {/* Text Section */}
      <div className="text-center w-full md:w-[500px] mx-auto mb-8">
        <h2 className="font-bold text-2xl md:text-3xl text-black py-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600">
          Get answers to the most common questions about our hospital and
          healthcare services.
        </p>
      </div>
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {/* FAQ card 1 */}
        <div className="bg-gray-100 rounded-md px-6 py-10 shadow-lg flex items-start gap-4 transform transition-transform duration-300 hover:scale-105">
          <RiArrowRightWideLine color="lightblue" size={50} />
          <div>
            <h3 className="font-bold text-gray-800 text-xl py-2">
              What are your visiting hours?
            </h3>
            <p className="font-medium text-[15px] sm:text-base text-gray-700">
              Our visiting hours are from 8am to 8pm daily. We encourage visitors
              to respect these hours to ensure the comfort and privacy of our
              patients.
            </p>
          </div>
        </div>
        {/* FAQ card 2 */}
        <div className="bg-gray-100 rounded-md px-6 py-10 shadow-lg flex items-start gap-4 transform transition-transform duration-300 hover:scale-105">
          <RiArrowRightWideLine color="lightblue" size={50} />
          <div>
            <h3 className="font-bold text-gray-800 text-xl py-2">
              Do you accept insurance?
            </h3>
            <p className="font-medium text-[15px] sm:text-base text-gray-700">
              Yes, we accept a wide range of insurance plans. Please check with
              your insurance provider to confirm your coverage and any
              out-of-pocket costs.
            </p>
          </div>
        </div>
        {/* FAQ card 3 */}
        <div className="bg-gray-100 rounded-md px-6 py-10 shadow-lg flex items-start gap-4 transform transition-transform duration-300 hover:scale-105">
          <RiArrowRightWideLine color="lightblue" size={50} />
          <div>
            <h3 className="font-bold text-gray-800 text-xl py-2">
              How do I schedule an appointment?
            </h3>
            <p className="font-medium text-[15px] sm:text-base text-gray-700">
              You can schedule an appointment by calling our main number or
              visiting our website. Our friendly staff will be happy to assist
              you in finding a convenient time.
            </p>
          </div>
        </div>
        {/* FAQ card 4 */}
        <div className="bg-gray-100 rounded-md px-6 py-10 shadow-lg flex items-start gap-4 transform transition-transform duration-300 hover:scale-105">
          <RiArrowRightWideLine color="lightblue" size={50} />
          <div>
            <h3 className="font-bold text-gray-800 text-xl py-2">
              What services do you offer?
            </h3>
            <p className="font-medium text-[15px] sm:text-base text-gray-700">
              We offer a wide range of healthcare services, including general
              medicine, surgery, pediatrics, obstetrics, and more. Our team of
              experienced physicians and specialists are dedicated to providing
              exceptional care.
            </p>
          </div>
        </div>
        {/* FAQ card 5 */}
        <div className="bg-gray-100 rounded-md px-6 py-10 shadow-lg flex items-start gap-4 transform transition-transform duration-300 hover:scale-105">
          <RiArrowRightWideLine color="lightblue" size={50} />
          <div>
            <h3 className="font-bold text-gray-800 text-xl py-2">
              How do I pay my hospital bill?
            </h3>
            <p className="font-medium text-[15px] sm:text-base text-gray-700">
              You can pay your hospital bill by cash, check, or credit/debit
              card. We also offer payment plans and financial assistance
              programs for those who qualify.
            </p>
          </div>
        </div>
        {/* FAQ card 6 */}
        <div className="bg-gray-100 rounded-md px-6 py-10 shadow-lg flex items-start gap-4 transform transition-transform duration-300 hover:scale-105">
          <RiArrowRightWideLine color="lightblue" size={50} />
          <div>
            <h3 className="font-bold text-gray-800 text-xl py-2">
              What should I bring to my appointment?
            </h3>
            <p className="font-medium text-[15px] sm:text-base text-gray-700">
              Please bring your insurance card, a valid form of ID, and any
              relevant medical records or test results. This will help us
              provide you with the best possible care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;