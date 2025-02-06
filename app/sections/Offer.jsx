"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { useEffect } from "react";
import image from "@/public/images/1.jpg";
import image2 from "@/public/images/2.png";
import image3 from "@/public/images/3.png";
import image4 from "@/public/images/4.png";
import image5 from "@/public/images/5.png";
import image6 from "@/public/images/6.png";
const Offer = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = document.querySelector(".main-wrapper");

    gsap.to(".col-1", {
      y: -250,
      ease: "none",
      duration: 2,
      scrollTrigger: {
        trigger: ".image-gallery",
        start: "top center",
        end: "+=3000",
        scrub: true,
      },
    });

    gsap.to(".col-2", {
      y: 250,
      ease: "none",
      duration: 2,
      scrollTrigger: {
        trigger: ".image-gallery",
        start: "top center",
        end: "+=3000",
        scrub: true,
      },
    });

    gsap.to(".col-3", {
      y: -250,
      ease: "none",
      duration: 2,
      scrollTrigger: {
        trigger: ".image-gallery",
        start: "top center",
        end: "+=3000",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className=" main-wrapper overflow-x-hidden flex h-screen w-full shrink-0 overflow-y-hidden bg-[#fdfdfd] text-[#000000]">
      <section className=" section-1  lg:grid lg:grid-cols-[59%,41%] grid-rows-1 gap-4 grid grid-cols-1 ">
        <div className=" box1  flex items-center mt-16 flex-col ">
          <div className="name font-supply-bold  text-6xl font-bold mb-8">
            WHAT WE OFFER
          </div>
          <p className=" font-supply-light text-xl px-12">
            We help you to take your Coaching Class to the Next Level by
            Empowering Students, Enhancing Coaching with the use of AI
          </p>
        </div>
        <div className=" box2 ">
          <div className="image-gallery flex h-screen bg-[#2c4cf0] ">
            <div className=" col col-1 flex flex-col items-center justify-center ">
              <div className=" bg-[#2c4cf0] flex justify-center items-center -top-4 h-[265px] w-[205px] ">
                <div className=" relative h-[250px] w-[190px] mb-5 mt-5">
                  <Image src={image} alt="Example image" fill />
                </div>
              </div>{" "}
              <div className=" bg-[#2c4cf0] flex justify-center items-center -top-4 h-[265px] w-[205px] ">
                <div className=" relative h-[250px] w-[190px] mb-5 mt-5">
                  <Image src={image2} alt="Example image" fill />
                </div>
              </div>
              <div className=" bg-[#2c4cf0] flex justify-center items-center -top-4 h-[265px] w-[205px] ">
                <div className=" relative h-[250px] w-[190px] mb-5 mt-5">
                  <Image src={image3} alt="Example image" fill />
                </div>
              </div>
              <div className=" bg-[#2c4cf0] flex justify-center items-center -top-4 h-[265px] w-[205px] ">
                <div className=" relative h-[250px] w-[190px] mb-5 mt-5">
                  <Image src={image4} alt="Example image" fill />
                </div>
              </div>
              <div className=" bg-[#2c4cf0] flex justify-center items-center -top-4 h-[265px] w-[205px] ">
                <div className=" relative h-[250px] w-[190px] mb-5 mt-5">
                  <Image src={image5} alt="Example image" fill />
                </div>
              </div>
            </div>
            <div className=" col col-2 flex flex-col items-center justify-center">
              <div className=" bg-[#2c4cf0] flex justify-center items-center -top-4 h-[265px] w-[205px] ">
                <div className=" relative h-[250px] w-[190px] mb-5 mt-5">
                  <Image src={image6} alt="Example image" fill />
                </div>
              </div>
              <div className=" bg-[#2c4cf0] flex justify-center items-center -top-4 h-[265px] w-[205px] ">
                <div className=" relative h-[250px] w-[190px] mb-5 mt-5">
                  <Image src={image4} alt="Example image" fill />
                </div>
              </div>
              <div className=" bg-[#2c4cf0] flex justify-center items-center -top-4 h-[265px] w-[205px] ">
                <div className=" relative h-[250px] w-[190px] mb-5 mt-5">
                  <Image src={image2} alt="Example image" fill />
                </div>
              </div>
              <div className=" bg-[#2c4cf0] flex justify-center items-center -top-4 h-[265px] w-[205px] ">
                <div className=" relative h-[250px] w-[190px] mb-5 mt-5">
                  <Image src={image3} alt="Example image" fill />
                </div>
              </div>
              <div className=" bg-[#2c4cf0] flex justify-center items-center -top-4 h-[265px] w-[205px] ">
                <div className=" relative h-[250px] w-[190px] mb-5 mt-5">
                  <Image src={image5} alt="Example image" fill />
                </div>
              </div>
            </div>
            <div className=" col col-3 flex flex-col items-center w-[205px] justify-center">
              <div className=" bg-[#2c4cf0] flex justify-center items-center -top-4 h-[265px] w-[205px] ">
                <div className=" relative h-[250px] w-[190px] mb-5 mt-5">
                  <Image src={image} alt="Example image" fill />
                </div>
              </div>
              <div className=" bg-[#2c4cf0] flex justify-center items-center -top-4 h-[265px] w-[205px] ">
                <div className=" relative h-[250px] w-[190px] mb-5 mt-5">
                  <Image src={image} alt="Example image" fill />
                </div>
              </div>
              <div className=" bg-[#2c4cf0] flex justify-center items-center -top-4 h-[265px] w-[205px] ">
                <div className=" relative h-[250px] w-[190px] mb-5 mt-5">
                  <Image src={image} alt="Example image" fill />
                </div>
              </div>
              <div className=" bg-[#2c4cf0] flex justify-center items-center -top-4 h-[265px] w-[205px] ">
                <div className=" relative h-[250px] w-[190px] mb-5 mt-5">
                  <Image src={image} alt="Example image" fill />
                </div>
              </div>
              <div className=" bg-[#2c4cf0] flex justify-center items-center -top-4 h-[265px] w-[205px] ">
                <div className=" relative h-[250px] w-[190px] mb-5 mt-5">
                  <Image src={image} alt="Example image" fill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offer;
