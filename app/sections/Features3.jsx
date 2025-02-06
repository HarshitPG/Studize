import React from "react";
import image from "@/public/images/3.png";
import Image from "next/image";
const Feature3 = () => {
  return (
    <div className=" z-10   bg-[#fdfdfd] text-[#000000]">
      <div className=" md:px-8 py-6 flex flex-col min-w-screen ">
        <div className="px-6 lg:grid lg:grid-cols-[58%,42%] grid-rows-1 lg:gap-0 gap-8 grid grid-cols-1">
          <div className=" font-supply-medium flex flex-col lg:space-y-12 space-y-2">
            <h2 className=" lg:text-5xl text-2xl">
              <p className=" lg:text-6xl text-2xl lg:pb-4">03/</p>
              Coaching Center Dashboard & Progress Tracking
            </h2>
            <p className="  font-supply-light md:text-xl text-sm">
              Get real-time data and analytics on student performance. Monitor
              progress, review results, and make informed decisions to improve
              coaching strategies.
            </p>
          </div>
          <div>
            <div className=" mr-12 relative lg:w-[50vh] w-[50vh] lg:h-[60vh] h-[50vh] ">
              <Image src={image} alt="Example image" fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature3;
