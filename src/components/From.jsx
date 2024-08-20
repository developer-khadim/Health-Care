import React from "react";
import Button from "../components/Button";

const From = () => {
  return (
    <form className="flex flex-col gap-4">
      <div>
        <label className="text-black font-semibold block mb-1">Name *</label>
        <input
        required
          type="text"
          placeholder="Full Name *"
          className="text-gray-600 w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div>
        <label className="text-black font-semibold block mb-1">
          Email address *
        </label>
        <input
        required
          type="email"
          placeholder="example@gmail.com"
          className="text-gray-600 w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div>
        <label className="text-black font-semibold block mb-1">
          Department *
        </label>
        <select className="text-gray-600 w-full px-4 py-2 border border-gray-300 rounded-lg">
          <option value="0">Please Select</option>
          <option value="1">Cardiology</option>
          <option value="2">Dermatology</option>
          <option value="3">Endocrinology</option>
          <option value="4">Gastroenterology</option>
          <option value="5">Hematology</option>
          <option value="6">Infectious Disease</option>
          <option value="7">Nephrology</option>
          <option value="8">Neurology</option>
          <option value="9">Oncology</option>
          <option value="10">Pulmonology</option>
          <option value="11">Rheumatology</option>
          {/* ... other options ... */}
        </select>
      </div>
      <div>
        <label className="text-black font-semibold block mb-1">Time *</label>
        <select className="text-gray-600 w-full px-4 py-2 border border-gray-300 rounded-lg">
          <option value="0">4:00 Available</option>
          <option value="1">3:00 Available</option>
          <option value="2">2:00 Available</option>
          <option value="3">1:00 Available</option>
          <option value="4">12:00 Available</option>
          <option value="5">11:00 Available</option>
          <option value="6">10:00 Available</option>
          <option value="7">9:00 Available</option>
        </select>
      </div>
      <div className="flex justify-center mt-4">
        <Button text={"Book Appointment"} />
      </div>
    </form>
  );
};

export default From;
