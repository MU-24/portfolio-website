import React from "react";
import dp from "../assets/images/dp.jpg";
import AwsomeProject from "../components/AwsomeProject";
const Home = () => {
  return (
    <div>
      <div className="flex mt-10 pb-14">
        <div className=" ml-8 md:ml-12">
          <img src={dp} alt="" className=" rounded-full w-36 h-26" />
        </div>
        <div className="mb-6 ml-3 mr-6 md:mx-5">
          <h2 className=" text-white text-4xl">Muhammad Umair</h2>
          <h4 className=" text-white text-2xl">Full Stack Developer</h4>
          <p className=" text-[#F1F5F9] mt-4">
            I am a web developer with 3+ years of experience in React. I have a
            strong foundation in front-end & <br /> back-end development and am
            skilled in creating user-friendly and responsive web applications
            using
            <br /> React and its ecosystem.
          </p>
        </div>
      </div>

      <AwsomeProject />
    </div>
  );
};

export default Home;
