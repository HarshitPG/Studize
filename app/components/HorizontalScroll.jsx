"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Feature2 from "../sections/Features2";
import Feature4 from "../sections/Features4";
import Feature3 from "../sections/Features3";
import Feature1 from "../sections/Features1";
import { Reveal } from "./Reveal";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const racesRef = useRef(null);

  useEffect(() => {
    const races = racesRef.current;

    if (!races) return;

    function getScrollAmount() {
      const racesWidth = races.scrollWidth;
      return -(racesWidth - window.innerWidth);
    }

    const tween = gsap.to(races, {
      x: getScrollAmount,
      duration: 3,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: ".racesWrapper",
      start: "top  ",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative">
      <div className=" racesWrapper">
        <div className=" relative lg:h-[8vh] h-[5vh] bg-[#fdfdfd] text-[#000000] fix left-0 w-full flex flex-col justify-center items-center">
          <div className=" lg:text-6xl text-4xl font-bold lg:mt-20 mt-10 font-supply-bold ">
            WHAT WE OFFER
          </div>
          <div className=" h-[0vh] lg:text-xl text-base text-center md:px-12 px-6 lg:pt-8 pt-2 font-supply-light">
            We help you to take your Coaching Class to the Next Level by
            Empowering Students, Enhancing Coaching with the use of AI.
          </div>
        </div>
        <div
          className="relative races flex flex-nowrap w-fit lg:top-28 top-24 min-h-[90vh] h-fit"
          ref={racesRef}
        >
          <div className=" w-[100vw]">
            <Feature1 />
          </div>
          <div className=" w-[100vw]">
            <Feature2 />
          </div>
          <div className=" w-[100vw]">
            <Feature3 />
          </div>
          <div className=" w-[100vw]">
            <Feature4 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
