import logo from "../assets/logo2.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/Twitter.png";
import instagram from "../assets/Instagram.png";
import linkedin from "../assets/LinkedIn.png";
import youtube from "../assets/YouTube.png";

const Footer = () => {
  return (
    <div className="w-full bg-active py-8">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10">
        <footer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 pt-[50px] text-white">
          <div className="flex flex-col gap-5 col-span-2 sm:col-span-3 lg:col-span-1">
            <img src={logo} alt="logo" className="w-[220px] max-w-full" />
            <p className="text-sm">
              {" "}
              Copyright © 2024 BRIX Templates <br /> | All Rights Reserved{" "}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-lg sm:text-xl pb-2 sm:pb-4">
              Product
            </h1>
            <p className="text-sm">Features</p>
            <p className="text-sm">Pricing</p>
            <p className="text-sm">Case studies</p>
            <p className="text-sm">Reviews</p>
            <p className="text-sm">Updates</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-lg sm:text-xl pb-2 sm:pb-4">
              Company
            </h1>
            <p className="text-sm">About</p>
            <p className="text-sm">Contact us</p>
            <p className="text-sm">Careers</p>
            <p className="text-sm">Culture</p>
            <p className="text-sm">Blog</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-lg sm:text-xl pb-2 sm:pb-4">
              Support
            </h1>
            <p className="text-sm">Getting started</p>
            <p className="text-sm">Help center</p>
            <p className="text-sm">Server status</p>
            <p className="text-sm">Report a bug</p>
            <p className="text-sm">Chat Support</p>
          </div>
          <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
            <h1 className="font-bold text-lg sm:text-xl pb-2 sm:pb-4">
              Follow us
            </h1>
            <div className="flex flex-row flex-wrap sm:flex-col justify-start items-center sm:items-start gap-4">
              <img
                src={facebook}
                alt="Facebook"
                className="w-24 h-auto sm:w-24 sm:h-auto"
              />
              <img
                src={instagram}
                alt="Instagram"
                className="w-24 h-auto sm:w-24 sm:h-auto"
              />
              <img
                src={twitter}
                alt="Twitter"
                className="w-24 h-auto sm:w-24 sm:h-auto"
              />
              <img
                src={linkedin}
                alt="LinkedIn"
                className="w-24 h-auto sm:w-24 sm:h-auto"
              />
              <img
                src={youtube}
                alt="YouTube"
                className="w-24 h-auto sm:w-24 sm:h-auto"
              />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
