import React from 'react'
import Sliders from '../components/Sliders'
import AwsomeProject from '../components/AwsomeProject';

function Projects() {
  return (
    <div>
      <div className=" m-16 pb-12">
        <h2 className=" text-2xl text-[#E2E8F0] pb-5 ml-5">Projects</h2>
        <div className="mx-2 md:mx-0 mt-5">
          <Sliders />
        </div>
      </div>
      <AwsomeProject/>
    </div>
  );
}

export default Projects