import React from "react";

const Customer = () => {
  const stats = [
    { value: 99, unit: "%", label: "Customer satisfaction" },
    { value: 15, unit: "K", label: "Online Patients" },
    { value: 12, unit: "K", label: "Patients Recovered" },
    { value: 240, unit: "%", label: "Company growth" },
  ];

  return (
    <div className="w-full max-w-[1400px] mx-auto p-4 sm:p-6 md:p-8">
      <h1 className="text-active text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-6 sm:mb-10">
        Our results in numbers
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-active font-bold mb-2">
              {stat.value}
              <span className="text-litegreen">{stat.unit}</span>
            </h2>
            <p className="text-gray-600 font-semibold text-sm sm:text-base">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customer;