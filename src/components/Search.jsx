const Search = () => (
  <div className="w-full pb-8 px-4 sm:px-6 md:px-10 bg-[#ECECEC] ">
    <div className="mt-16 sm:mt-28 mx-auto flex flex-col items-center justify-center">
      <h1 className="text-black font-semibold text-xl sm:text-3xl mb-4 text-center">
        Subscribe to our newsletter
      </h1>
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">
        <input
          type="email"
          placeholder="Your email address"
          className="w-full sm:w-[1000px] px-4 py-3 text-sm font-medium text-black bg-white border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="w-full sm:w-1/3 flex justify-center sm:justify-start">
          <button className="px-4 py-3 bg-active text-white font-bold rounded-full hover:text-active hover:bg-white cursor-pointer">
            Subscribe{" "}
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Search;