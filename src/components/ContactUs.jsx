import React from 'react';

const InputField = ({ label, type, name, id, placeholder }) => (
  <div className="w-full sm:w-1/2">
    <label>{label} <span className="text-red-500">*</span></label>
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className="px-5 py-4 mt-2 rounded-md w-full border-2 border-active"
      required
    />
  </div>
);

const ContactUs = () => (
  <div className="px-4 py-10 sm:px-20 md:px-[335px] sm:mt-36 mt-10">
    <div className="flex flex-col gap-4 text-black justify-center items-center py-10">
      <span className="text-sm font-semibold">Get In Touch</span>
      <h1 className="font-bold text-4xl sm:text-6xl">Contact Us</h1>
      <p className="text-[17px] text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid.</p>
    </div>
    <form className="flex flex-col gap-8 sm:gap-12">
      <div className="flex flex-col sm:flex-row gap-8">
        <InputField label="First name" type="text" name="FName" id="Fname" placeholder="Enter your first name" />
        <InputField label="Last name" type="text" name="LName" id="Lname" placeholder="Enter your last name" />
      </div>
      <div className="flex flex-col sm:flex-row gap-8">
        <InputField label="Email" type="email" name="Email" id="email" placeholder="Enter your email" />
        <InputField label="Phone number" type="tel" name="num" id="num" placeholder="Enter your phone number" />
      </div>
      <div className="flex flex-col">
        <label>Choose a topic <span className="text-red-500">*</span></label>
        <select className="px-5 py-4 mt-2 rounded-md w-full border-2 border-active" required>
          <option value="">Select one...</option>
          <option value="1">General Information</option>
          <option value="2">Doctors</option>
          <option value="3">Departments</option>
          <option value="4">Appointments</option>
          <option value="5">Emergency</option>
          <option value="6">Billing</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label>Message <span className="text-red-500">*</span></label>
        <textarea
          name="message"
          id="message"
          placeholder="Type your message..."
          className="p-5 rounded-md border-2 border-active w-full h-[240px]"
          required
        ></textarea>
      </div>
      <div className="flex items-center gap-2">
        <input type="checkbox" id="checkbox" className="w-5 h-5 rounded-md border-2 border-active" required />
        <label htmlFor="checkbox" className="text-gray-600 text-sm">
          I agree to the terms and conditions <span className="text-red-500">*</span>
        </label>
      </div>
      <div className="text-center">
        <button className="px-20 sm:px-28 py-5 rounded-md font-bold bg-active text-white hover:bg-transparent hover:border-2 hover:border-active cursor-pointer hover:text-active">
          Submit
        </button>
      </div>
    </form>
  </div>
);

export default ContactUs;
