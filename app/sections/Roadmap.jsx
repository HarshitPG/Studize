"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { useEffect } from "react";
import image from "@/public/images/1.jpg";

const Roadmap = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = document.querySelector(".main-wrapper");
    const sections = container.querySelectorAll("section");

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        scrub: 1,
        pin: true,
        start: "top top",
        end: "+=3300",
      },
    });

    t1.to(container, {
      x: () =>
        -(container.scrollWidth - document.documentElement.clientWidth - 95) +
        "px",
      ease: "none",
      duration: 1,
    });
  });

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

  return (
    <div className=" main-wrapper flex h-screen w-full shrink-0">
      <section className=" section-1 flex">
        <div className=" box1  w-2/3 flex items-center justify-center ">
          <div className="name  text-6xl font-bold">What we offer</div>
        </div>
        <div className=" box2 w-[35%]">
          <div className="image-gallery flex h-screen">
            <div className=" col col-1 flex flex-col items-center justify-center ">
              <Image
                src={image}
                alt="Example image"
                width={200} // Specify width
                height={300} // Specify height
              />
              <Image
                src={image}
                alt="Example image"
                width={200} // Specify width
                height={300} // Specify height
              />
              <Image
                src={image}
                alt="Example image"
                width={200} // Specify width
                height={300} // Specify height
              />{" "}
              <Image
                src={image}
                alt="Example image"
                width={200} // Specify width
                height={300} // Specify height
              />{" "}
              <Image
                src={image}
                alt="Example image"
                width={200} // Specify width
                height={300} // Specify height
              />
            </div>
            <div className=" col col-2 flex flex-col items-center justify-center">
              <Image
                src={image}
                alt="Example image"
                width={200} // Specify width
                height={300} // Specify height
              />{" "}
              <Image
                src={image}
                alt="Example image"
                width={200} // Specify width
                height={300} // Specify height
              />{" "}
              <Image
                src={image}
                alt="Example image"
                width={200} // Specify width
                height={300} // Specify height
              />{" "}
              <Image
                src={image}
                alt="Example image"
                width={200} // Specify width
                height={300} // Specify height
              />{" "}
              <Image
                src={image}
                alt="Example image"
                width={200} // Specify width
                height={300} // Specify height
              />
            </div>
            <div className=" col col-3 flex flex-col items-center justify-center">
              <Image
                src={image}
                alt="Example image"
                width={200} // Specify width
                height={300} // Specify height
              />
              <Image
                src={image}
                alt="Example image"
                width={200} // Specify width
                height={300} // Specify height
              />
              <Image
                src={image}
                alt="Example image"
                width={200} // Specify width
                height={300} // Specify height
              />{" "}
              <Image
                src={image}
                alt="Example image"
                width={200} // Specify width
                height={300} // Specify height
              />{" "}
              <Image
                src={image}
                alt="Example image"
                width={200} // Specify width
                height={300} // Specify height
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section-2 flex translate-x-5">
        <div className="side-bar">
          <i className="fa-solid fa-expand"></i>
          <div className="brand-name">kove</div>
          <div className="des">
            HIGH QUALITY FABRICS.designed & madin iceland.
          </div>
        </div>
      </section>
      <div className="wrapper flex ">
        <div className="left w-[65%]">
          <div className="line-1">
            <p>VORLIF</p>
            <div className="copy-right">KOVE 2023&#174 DESIGNED TO ENDURE</div>
          </div>

          <div className="image-wrapper">
            <img src="/images/1.jpg" alt="" />
          </div>

          <div className="line-2">
            <p className="num">/22</p>
            <p>SPRING</p>
            <button className="loop">
              <span>COLLECTION /SHOP&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </button>
            <button className="loop loop2">
              <span>COLLECTION /SHOP&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </button>
          </div>
        </div>
        <div className="right">
          <div className="animate-text">
            <span>COLLECTION /19° W</span>
          </div>
          <div className="img-container">
            <img src="./img/im2.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
