"use client";

import Image from "next/image";
import Navbar from "../components/navbar";
import image from "@/public/images/2.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  return (
    <div className="gradient-bg max-h-[100vh]">
      <div className="g1"></div>
      <div className="g2"></div>
      <div className="g3"></div>
      <div className="g4"></div>
      <div className="g5"></div>

      <Navbar />

      <div className="bg-[#fdfdfd] text-[#000000]">
        <div className="md:px-16 sm:px-8 px-4 w-screen min-h-[95vh] h-fit lg:grid lg:grid-cols-[55%,45%] lg:grid-rows-1 lg:gap-4 flex flex-col">
          <div className="flex flex-col justify-center mb-28">
            <div className="mt-8 flex flex-col md:space-y-4 space-y-8">
              <h1 className="font-supply-bold lg:text-7xl md:text-6xl text-3xl">
                Revolutionising JEE Preparation.
              </h1>
              <h2 className="pt-4 font-supply-light md:text-2xl sm:text-xl text-lg">
                AI-Driven Personalised Roadmaps to Maximize Student's Academic
                Potential
              </h2>
            </div>
            <div className="flex flex-row md:mt-14 mt-8 gap-8">
              <button className="font-supply-medium text-lg bg-[#2c4cf0] text-[#fdfdfd] h-18 w-40">
                Download
                <br /> (Android)
              </button>
              <button className="font-supply-medium text-lg bg-[#2c4cf0] text-[#fdfdfd] h-18 w-40">
                Download
                <br /> (IOS)
              </button>
            </div>
            <div className="md:px-16 hidden absolute left-0 -bottom-20">
              <p>Scroll to discover</p>
              <p>Studize</p>
            </div>
          </div>
          <div className="flex">
            <Image src={image} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
}
