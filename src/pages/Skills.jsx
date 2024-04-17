import React from 'react'
import AwsomeProject from '../components/AwsomeProject';

const Skills = () => {
  return (
    <div className=' w-auto '>
      <div className=" text-[#E2E8F0] mt-16 ml-16 mr-16 ">
        <h2 className=" text-2xl">Skills</h2>
        <div className=" mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="border px-6 rounded-md py-1">Adobe XD</div>
          <div className="border px-6 rounded-md py-1">Figma</div>
          <div className="border px-6 rounded-md py-1">Canva Pro</div>
          <div className="border px-6 rounded-md py-1">HTML</div>
          <div className="border px-6 rounded-md py-1">CSS</div>
          <div className="border px-6 md:px-6 rounded-md py-1">Bootstrap/Tailwind</div>
          <div className="border px-6 rounded-md py-1">JavaSCript</div>
          <div className="border px-6 rounded-md py-1">React JS</div>
          <div className="border px-6 rounded-md py-1">React Native</div>
          <div className="border px-6 rounded-md py-1">Next JS</div>
          <div className="border px-6 rounded-md py-1">Node JS</div>
          <div className="border px-6 rounded-md py-1">MongoDB</div>
          <div className="border px-6 rounded-md py-1">FireBase</div>
          <div className="border px-6 rounded-md py-1">Dot Net Core</div>
        </div>
      </div>
      <AwsomeProject/>
    </div>
  );
}

export default Skills