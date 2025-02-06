import React from "react";
import image from "@/public/images/6.png";
import Image from "next/image";
const Feature4 = () => {
  return (
    <div className="w-full min-w-screen min-h-fit lg:h-fit lg:max-h-screen flex flex-col bg-[#fdfdfd] text-[#000000]">
      <div className=" md:px-8 py-6 flex flex-col min-w-screen  ">
        <div className="px-6 lg:grid lg:grid-cols-[58%,42%] grid-rows-1 lg:gap-0 gap-8  grid grid-cols-1 ">
          <div className=" font-supply-medium flex flex-col lg:space-y-12 space-y-2">
            <h2 className=" lg:text-5xl text-2xl">
              <p className=" lg:text-6xl text-2xl lg:pb-4">04/</p>
              StudizeGPT
            </h2>
            <p className="font-supply-light md:text-xl text-sm">
              Our in-house AI chatbot for JEE-specific data, provides instant
              solutions to student queries, ensuring a seamless learning
              experience.
            </p>
          </div>
          <div>
            <div className="mr-12 relative lg:w-[65vh] w-[45vh] lg:h-[65vh] h-[50vh] ">
              <Image src={image} alt="Example image" fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature4;
