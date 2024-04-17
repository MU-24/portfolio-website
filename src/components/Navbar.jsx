import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";
import { VscClose } from "react-icons/vsc";
import "../App.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="Navbar px-12 py-4 flex justify-between items-center min-w-full">
      <div className="flex items-center text-xl cursor-pointer">
        <Link to="/" className="font-Averia text-[#ffffff] font-bold ml-2 bg-white bg-opacity-35 px-7 rounded-full p-2 pb-3">
          logo
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex gap-10 px-4 items-center">
        <nav className="flex gap-10 font-Poppins font-semibold text-white">
          <Link to="/" className="hover:text-[#1B9C85]">
            Home
          </Link>
          <Link to="/about" className="hover:text-[#1B9C85]">
            About
          </Link>
          <Link to="/experience" className="hover:text-[#1B9C85]">
            Experience
          </Link>
          <Link to="/projects" className="hover:text-[#1B9C85]">
            Projects
          </Link>
          <Link to="/skills" className="hover:text-[#1B9C85] bg-white text-black rounded-2xl px-2">
            Skills
          </Link>
        </nav>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-3xl text-white cursor-pointer"
        >
          {open ? <VscClose /> : <RiMenu2Fill />}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`Navbar fixed top-0 ${
          open ? "left-0" : "-left-full"
        } h-full bg-[#113961] w-[60%] z-50 transition-all duration-500 md:hidden`}
      >
        <div className="flex justify-center my-8 items-center text-xl cursor-pointer">
         
          <Link to="/" className="font-Averia text-[#ffffff] font-bold ml-2">
            logo
          </Link>
        </div>
        <Link
          onClick={toggleMenu}
          to="/"
          className="block text-white p-4 hover:text-[#1B9C85]"
        >
          Home
        </Link>
        <Link
          onClick={toggleMenu}
          to="/about"
          className="block text-white p-4 hover:text-[#1B9C85]"
        >
          About
        </Link>
        <Link
          onClick={toggleMenu}
          to="/experience"
          className="block text-white p-4 hover:text-[#1B9C85]"
        >
          Experience
        </Link>
        <Link
          onClick={toggleMenu}
          to="/projects"
          className="block text-white p-4 hover:text-[#1B9C85]"
        >
          Projects
        </Link>
        <Link
          onClick={toggleMenu}
          to="/skills"
          className="block text-white p-4 hover:text-[#1B9C85]"
        >
          Skills
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
