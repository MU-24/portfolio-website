import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-black bg-opacity-40 w-auto">
      <div className=" border-t border-b border-[#E2E8F0] py-6 ">
        <h3 className="flex items-center justify-center  text-white text-xl">
          Contact Me
        </h3>
        <div className="flex flex-wrap items-center justify-center text-[#CBD5E1] gap-8 mt-8">
          <a
            href="https://github.com/meumair47"
            target="_blank"
            className="flex justify-center items-center gap-2"
          >
            <h5>Github</h5>
            <MdArrowOutward className=" bg-[#CBD5E1] text-[#124C81]" />
          </a>
          <a
            href="https://www.linkedin.com/in/-muhammad-umair/"
            target="_blank"
            className="flex justify-center items-center gap-2"
          >
            <h5>Linkedin</h5>
            <MdArrowOutward className=" bg-[#CBD5E1] text-[#124C81]" />
          </a>
          <a
            href="https://www.facebook.com/me.muhammadumair24/"
            target="_blank"
            className="flex justify-center items-center gap-2"
          >
            <h5>Facebook</h5>
            <MdArrowOutward className=" bg-[#CBD5E1] text-[#124C81]" />
          </a>
          <a
            href="https://www.instagram.com/me.muhammadumair24/?hl=en"
            target="_blank"
            className="flex justify-center items-center gap-2"
          >
            <h5>Instagram</h5>
            <MdArrowOutward className=" bg-[#CBD5E1] text-[#124C81]" />
          </a>
          <a target="_blank" className="flex justify-center items-center gap-2">
            <h5>Youtube</h5>
            <MdArrowOutward className=" bg-[#CBD5E1] text-[#124C81]" />
          </a>
        </div>
      </div>
      <div className=" ml-12 mt-3 pb-3">
        <p className="text-[#E2E8F0]">
          © 2024 Muhammad Umair All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
