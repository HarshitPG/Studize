"use client";

import React, { useEffect, useState } from "react";
import image from "@/public/images/7.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className=" w-screen py-8 md:px-16 px-8 lg:h-[5vh] bg-[#fdfdfd] text-black flex justify-between">
      <span className="text-lg flex items-center font-supply-bold">
        <div className="relative w-[4vh] h-[4vh] bg-[#fdfdfd]">
          <Image src={image} alt="Example image" fill />
        </div>
        <div className="pl-2">Sstudize</div>
      </span>
      <ul className="hidden md:flex items-center space-x-12 font-supply-light ">
        <li className={pathname === "/" ? "active-link" : ""}>
          <Link href="/">Home</Link>
        </li>
        <li className={pathname === "/about" ? "active-link" : ""}>
          <Link href="/about">About</Link>
        </li>
        <li className={pathname === "/features" ? "active-link" : ""}>
          <Link href="/features">Features</Link>
        </li>
      </ul>
      <ul className="hidden md:flex items-center space-x-5">
        <li>
          <button className=" font-supply-medium text-sm bg-[#2c4cf0] text-[#fdfdfd] h-auto w-auto p-2 px-3 ">
            Book Demo
          </button>
        </li>
        <li>
          <button className=" font-supply-medium text-sm border-2 border-black bg-[#fdfdfd] h-auto w-auto p-2 px-3 ">
            Join us
          </button>
        </li>
      </ul>
      <button
        onClick={toggleMenu}
        className="z-50 space-y-1 group overflow-x-hidden md:hidden"
      >
        <div className="w-6 h-1 bg-black"></div>
        <div className="w-6 h-1 bg-black"></div>
        <div className="w-6 h-1 bg-black"></div>
      </button>
      <ul
        className={`fixed top-0 right-0 h-screen bg-[#2c4cf0] pb-4 w-screen transform ${
          menuOpen ? "translate-x-0  z-0 " : "translate-x-full"
        } z-10 transition-transform duration-300 ease-in-out flex flex-col space-y-3 justify-start`}
      >
        <button onClick={toggleMenu} className="px-10 py-10 relative ml-auto">
          <div className="w-6 h-1 rotate-45 absolute bg-black"></div>
          <div className="w-6 h-1 -rotate-45 absolute bg-black"></div>
        </button>
        <div className=" text-white flex self-start w-full px-16 text-2xl font-supply-medium pb-4  ">
          <li className={pathname === "/" ? "active-link" : ""}>
            <Link href="/">Home</Link>
          </li>
        </div>
        <hr className=" w-[90%] self-center" />
        <div className=" text-white flex self-start w-full px-16 text-2xl font-supply-medium pb-4  ">
          <li className={pathname === "/about" ? "active-link" : ""}>
            <Link href="/about">About</Link>
          </li>
        </div>
        <hr className=" w-[90%] self-center" />
        <div className=" text-white flex self-start w-full px-16 text-2xl font-supply-medium pb-4 ">
          <li className={pathname === "/features" ? "active-link" : ""}>
            <Link href="/features">Features</Link>
          </li>
        </div>
        <hr className=" w-[90%] self-center" />

        <li className="pt-20 px-16">
          <button className=" text-2xl font-supply-medium  bg-[#000000]  text-white h-16 w-full  ">
            book Demo
          </button>
        </li>
        <li className=" px-16">
          <button className=" text-2xl font-supply-medium  bg-[#fdfdfd] h-16 w-full  ">
            Join us
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
