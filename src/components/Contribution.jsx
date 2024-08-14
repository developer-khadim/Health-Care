import dots from "../assets/Dot navigation.png";
import logo from "../assets/Logos Container.png";
import Button from "./Button";

const Contribution = () => {
  return (
    <div className="w-full py-8 px-4 sm:px-6 md:px-10 bg-[#ECECEC] pt-10">
      <div className="w-full max-w-[1240px] mx-auto p-4 sm:p-6 md:p-8">
        <div className="text-center flex items-center flex-col gap-5">
          <p className="text-xl sm:text-2xl font-bold text-active py-5 px-4">
            Trusted by 10,000+ companies around the world
          </p>
          <img src={logo} alt="logo" className="pb-2 max-w-full h-auto" />
          <img src={dots} alt="" className="max-w-full h-auto" />
        </div>
        <div className="mt-16 sm:mt-28 mx-auto flex flex-col items-center justify-center">
          <h1 className="text-black font-semibold text-xl sm:text-2xl mb-4 text-center">
            Subscribe to our newsletter
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full sm:w-2/3 px-4 py-2 text-sm font-medium text-black bg-white border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="w-full sm:w-1/3 flex justify-center sm:justify-start">
              <button
                className="px-4 py-3 bg-active text-white font-bold
               rounded-full hover:text-active hover:bg-white  cursor-pointer "
              > 
                Subscribe{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contribution;
