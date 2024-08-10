import React from "react";
import Button from "./Button";
import patient from '../assets/patient.png';

const Choose = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 max-w-7xl mx-auto">
      <section className="text-black body-font">
        <div className="container mx-auto flex px-5 py-12 md:py-24 flex-col md:flex-row items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font text-2xl sm:text-3xl md:text-4xl mb-4 text-active font-bold">
              You have lots of reasons to choose us
            </h1>
            <p className="mb-8 leading-relaxed text-sm sm:text-base max-w-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia accusamus temporibus deserunt, nihil nisi cum dolores.
              Dicta nihil numquam soluta tempora.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto">
              <Button text="Get started" full className="w-full sm:w-auto py-3 sm:py-2 px-8 sm:px-6 text-base sm:text-sm" />
              <Button text="Talk to sales" fullwhite className="w-full sm:w-auto py-3 sm:py-2 px-8 sm:px-6 text-base sm:text-sm" />
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mt-10 md:mt-0">
            <img
              className="object-cover object-center rounded w-full h-auto transform transition-transform duration-300 hover:scale-105"
              alt="hero"
              src={patient}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Choose;
