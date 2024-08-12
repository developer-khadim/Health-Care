import Button from "../components/Button";
import Navbar from "../components/Navbar";

const Service = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-img flex-grow flex flex-col lg:flex-row justify-center items-center p-4 lg:p-8 overflow-y-auto">
        {/* text div */}
        <div className="w-full lg:w-1/2 xl:w-[35vw] mb-8 lg:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-extrabold text-white text-center lg:text-left">
            Meet the Best Hospital
          </h1>
          <p className="text-white text-base md:text-lg xl:text-[20px] py-4 lg:py-7 text-center lg:text-left">
            We know how large objects will act,{" "}
            <br className="hidden md:inline" /> but things on a small scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 py-5 items-center justify-start">
            <Button full text={"Get Quote Now"} className="w-full sm:w-auto" />
            <Button fullwhite text={"Learn More"} className="w-full sm:w-auto" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 xl:w-[40vw] flex justify-center items-center">
          <div className="w-full max-w-md bg-white rounded-2xl py-8 px-6 lg:py-10 lg:px-14">
            <h1 className="text-black font-bold text-xl lg:text-2xl mb-4">
              Book Appointment
            </h1>
            <form className="flex flex-col gap-4">
              <div>
                <label className="text-black font-semibold block mb-1">
                  Name *
                </label>
                <input
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
                  {/* ... other options ... */}
                </select>
              </div>
              <div>
                <label className="text-black font-semibold block mb-1">
                  Time *
                </label>
                <select className="text-gray-600 w-full px-4 py-2 border border-gray-300 rounded-lg">
                  <option value="0">4:00 Available</option>
                  <option value="1">3:00 Available</option>
                </select>
              </div>
              <div className="flex justify-center mt-4">
                <Button text={"Book Appointment"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;