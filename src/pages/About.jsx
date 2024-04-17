import React from "react";
import "../App.css";
import AwsomeProject from "../components/AwsomeProject";

const About = () => {
  return (
    <div>
      <div className=" text-[#E2E8F0] flex flex-col ml-16 items-start mt-16">
        <h2 className=" text-2xl">About me</h2>
        <p className="mt-3 w-4/5">
          I am a web developer with 4+ years of experience in React. I have a
          strong foundation in front-end & back-end development and am skilled
          in creating user-friendly and responsive web applications using React
          and its ecosystem. I have experience working on a variety of projects,
          including building and maintaining single page applications,
          integrating with REST APIs, and implementing responsive design
          principles. I am also proficient in using tools such as Webpack, npm,
          and Git for development and deployment. In addition to my technical
          skills, I am a strong communicator and team player. I am able to work
          effectively with cross-functional teams and am comfortable taking on
          new challenges and learning new technologies as needed.
        </p>
      </div>

      <AwsomeProject/>
    </div>
  );
};

export default About;
