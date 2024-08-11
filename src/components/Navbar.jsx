// components/Navbar.js
import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import { RiCloseLine, RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navItems = ["Home", "Service", "Contact", "Help"];

  const isActive = (item) => 
    location.pathname === (item === "Home" ? "/" : `/${item}`);

  return (
    <nav>
      <div className="px-4 pt-4 md:px-10 xl:w-[70vw] md:w-full h-[60px] flex items-center justify-between mx-auto">
        <img
          src={logo}
          alt="logo"
          className="w-[120px] md:w-[200px] h-auto transition-all duration-300 hover:scale-105"
        />
        {/* Navigation Links */}
        <div className="hidden md:flex gap-5 font-semibold">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item}`}
              className={`text-black hover:text-active transition-all duration-300 transform hover:translate-y-[-2px] relative ${
                isActive(item)
                  ? "text-[#007E85] after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-[#007E85]"
                  : ""
              }`}
            >
              {item}
            </Link>
          ))}
        </div>
        {/* Buttons */}
        <div className="hidden md:flex gap-4">
          <Button
            white
            text={"Sign Up"}
            className="transition-all duration-300 transform hover:scale-105"
          />
          <Button
            text={"Log In"}
            className="transition-all duration-300 transform hover:scale-105"
          />
        </div>
        <div className="md:hidden">
          <button
            className="text-white transition-all duration-300 ease-in-out transform hover:rotate-180"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <RiCloseLine color="black" size={30} />
            ) : (
              <RiMenu3Fill color="black" size={28} />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Navigation Links */}
      <div
        className={`md:hidden fixed top-[60px] left-0 right-0 bottom-0 bg-[#ECECEC] bg-opacity-95 z-50 flex flex-col items-center justify-center gap-8 font-semibold transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navItems.map((item, index) => (
          <Link
            key={item}
            to={item === "Home" ? "/" : `/${item}`}
            className={`text-2xl text-black hover:text-active transition-all duration-300 transform hover:scale-110 relative ${
              isActive(item)
                ? "text-[#007E85] after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-[#007E85]"
                : ""
            }`}
            onClick={toggleMenu}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {item}
          </Link>
        ))}
        <div className="flex gap-6 mt-8">
          <Button
            text={"Sign Up"}
            className="text-lg px-6 py-2 transition-all duration-300 transform hover:scale-105"
          />
          <Button
            white
            text={"Log In"}
            className="text-lg px-6 py-2 transition-all duration-300 transform hover:scale-105"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;