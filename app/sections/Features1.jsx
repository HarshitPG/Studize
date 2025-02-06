import React from "react";
import image from "@/public/images/4.png";
import Image from "next/image";
const Feature1 = () => {
  return (
    <div className="w-full min-w-screen min-h-fit lg:h-fit lg:max-h-screen flex flex-col bg-[#fdfdfd] text-[#000000]">
      <div className="md:px-8 py-6 flex flex-col min-w-screen">
        <div className="px-6 lg:grid lg:grid-cols-[58%,42%] grid-rows-1 lg:gap-0 gap-8 grid grid-cols-1">
          <div className=" z-10 font-supply-medium flex flex-col lg:space-y-12 space-y-2">
            <h2 className=" lg:text-5xl text-2xl">
              <p className=" lg:text-6xl text-2xl lg:pb-4"> 01/</p>
              Personalized Learning Roadmap
            </h2>
            <p className="  font-supply-light md:text-xl text-sm">
              AI-powered roadmaps tailored to each student’s academic needs,
              helping them focus on what matters most for their JEE preparation.
            </p>
          </div>
          <div className=" mr-12 relative lg:w-[60vh] w-[50vh] lg:h-[65vh] h-[50vh] ">
            <Image src={image} alt="Example image" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature1;
