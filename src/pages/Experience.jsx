import React from "react";
import atomcamp from "../assets/images/atomcamp.png"
import ptv from "../assets/images/ptv.png"
import codesoft from "../assets/images/codesoft.png"
import AwsomeProject from "../components/AwsomeProject";

const Experience = () => {
  return (
    <div>
      <div className=" ml-16 mt-10">
        <h2 className="text-[#E2E8F0] text-2xl">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className=" my-10 flex">
            <div className="  w-24 h-24 rounded-full">
              <img src={atomcamp} alt="atomcamp image" className=" rounded-full" />
            </div>
            <div className=" mx-4 text-[#E2E8F0]">
              <h3 className=" text-xl font-bold">AtomCamp</h3>
              <p className="opacity-75">Full Stack Developer</p>
              <p className="opacity-75">2024</p>
            </div>
          </div>
          <div className=" my-10 flex">
            <div className="  w-24 h-24 rounded-full">
              <img src={ptv} alt="" className=" rounded-full" />
            </div>
            <div className=" mx-4 text-[#E2E8F0]">
              <h3 className=" text-xl font-bold">
                Pakistan Television Corporation(ptv)
              </h3>
              <p className="opacity-75">Full Stack Developer</p>
              <p className="opacity-75">2023</p>
            </div>
          </div>
          <div className=" my-10 flex">
            <div className="  w-24 h-24 rounded-full">
              <img src={codesoft} alt="" className=" rounded-full"/>
            </div>
            <div className=" mx-4 text-[#E2E8F0]">
              <h3 className=" text-xl font-bold">CodeSoft</h3>
              <p className="opacity-75">Full Stack Developer</p>
              <p className="opacity-75">2024</p>
            </div>
          </div>
          <div className=" my-10 flex">
            <div className="  w-24 h-24 rounded-full">
              
            </div>
            <div className=" mx-4 text-[#E2E8F0]">
              <h3 className=" text-xl font-bold">Private Companies</h3>
              <p className="opacity-75">Full Stack Developer</p>
              <p className="opacity-75">2024</p>
            </div>
          </div>
        </div>
      </div>

      <AwsomeProject/>
    </div>
  );
};

export default Experience;
