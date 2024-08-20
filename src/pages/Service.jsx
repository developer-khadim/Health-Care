import From from "../components/From";
import Navbar from "../components/Navbar";
import Find from '../components/Find'
import Ser from '../components/Services'
import Customers from "../components/Customers";
import Button from "../components/Button";

const Service = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#ECECEC] ">
      <Navbar />
      <div className="bg-img flex-grow flex flex-col lg:flex-row justify-center items-center p-4 lg:p-8 mt-2 overflow-y-auto">
        {/* text div */}
        <div className="  w-full lg:w-1/2 xl:w-[35vw] mb-8 lg:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-extrabold text-white text-center lg:text-left">
            Meet the Best Hospital
          </h1>
          <p className="text-white text-base md:text-lg xl:text-[20px] py-4 lg:py-7 text-center lg:text-left">
            We know how large objects will act,{" "}
            <br className="hidden md:inline" /> but things on a small scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 py-5 items-center xl:justify-start sm:justify-center">
            <Button full text={"Get Quote Now"} className="w-full sm:w-auto" />
            <Button
              fullwhite
              text={"Learn More"}
              className="w-full sm:w-auto"
            />
          </div>
        </div>
        {/* From */}
        <div className="w-full lg:w-1/2 xl:w-[40vw] flex justify-center items-center">
          <div className="w-full max-w-md bg-white rounded-2xl py-8 px-6 lg:py-10 lg:px-14">
            <h1 className="text-black font-bold text-xl lg:text-2xl mb-4">
              Book Appointment
            </h1>
            <From/>
          </div>
        </div>
      </div>
        <div className=" px-4 md:px-10 py-8 md:py-16 md:max-w-[80vw] sm:max-w-[70vw] xl:w-[90vw] mx-auto flex flex-col justify-center  min-h-[25vh] " >
            <Find/>
           <Ser/>
           <Customers/>
        </div>
    </div>
  );
};

export default Service;
