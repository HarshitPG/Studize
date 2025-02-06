import React from "react";
import image from "@/public/images/5.png";
import Image from "next/image";
const Feature2 = () => {
  return (
    <div className="bg-[#fdfdfd] text-[#000000]">
      <div className="md:px-8 py-6 flex flex-col min-w-screen">
        <div className="px-6 lg:grid lg:grid-cols-[58%,42%] grid-rows-1 lg:gap-0 gap-8 grid grid-cols-1">
          <div className=" font-supply-medium flex flex-col lg:space-y-12 space-y-2 z-10">
            <h2 className=" lg:text-5xl text-2xl">
              <p className=" lg:text-6xl text-2xl lg:pb-4">02/</p>
              Comprehensive Student Analysis
            </h2>
            <p className="  font-supply-light md:text-xl text-sm">
              Deep insights into students’ academic performance, cognitive
              abilities, and study patterns, ensuring personalized guidance for
              optimal learning outcomes.
            </p>
          </div>
          <div>
            <div className="mr-12 relative lg:w-[50vh] w-[45vh] lg:h-[60vh] h-[50vh] ">
              <Image src={image} alt="Example image" fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature2;
