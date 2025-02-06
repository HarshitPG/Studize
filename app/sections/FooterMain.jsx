import React from "react";
import { motion } from "framer-motion";

export const FooterMain = () => {
  return (
    <div className=" bg-[#f2efeb] pt-10 min-h-fit justify-center overflow-y-hidden flex flex-col overflow-x-hidden">
      {/* <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{
          opacity: 1,
          y: 0,
          x: "25%",
          transition: { delay: 0.2, duration: 0.8 },
        }}
        viewport={{ once: true, amount: 1 }}
        className=" object-contain "
      > */}
      <div className=" bg-[#2c4cf0] sm:w-[50%] w-[80%] flex-col self-center text-white">
        <div className="flex flex-col ">
          <div className=" p-4 font-supply-medium md:text-4xl sm:text-2xl text-base">
            Start your Sstudize Journey Today
          </div>
          <div className=" px-4 ">
            <button className=" font-supply-medium text-lg bg-[#fdfdfd] text-black h-16 w-40 ">
              Join us!
            </button>
          </div>
        </div>
      </div>
      {/* </motion.div> */}
      <div className=" inset-0 relative w-full font-supply-regular overflow-hidden bg-[#2c4cf0] text-white flex flex-col justify-end items-center h-fit ">
        <div className=" flex mt-8 mb-6 justify-center items-center">
          <footer className="">
            <div className="container grid grid-cols-1 mx-auto gap-x-12 gap-y-8 sm:grid-cols-3">
              <div className="flex flex-col space-y-4">
                <h2 className="font-medium">Product</h2>
                <div className="flex flex-col space-y-2 text-sm text-[##f6d5cd]">
                  <a rel="noopener noreferrer" href="#">
                    Features
                  </a>
                  <a rel="noopener noreferrer" href="#">
                    FAQ
                  </a>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <h2 className="font-medium">Resources</h2>
                <div className="flex flex-col space-y-2 text-sm text-[##f6d5cd] ">
                  <a rel="noopener noreferrer" href="#">
                    Privacy
                  </a>
                  <a rel="noopener noreferrer" href="#">
                    Terms&Conditions
                  </a>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <h2 className="font-medium">Company</h2>
                <div className="flex flex-col space-y-2 text-sm ">
                  <a rel="noopener noreferrer" href="#">
                    About us
                  </a>
                  <a rel="noopener noreferrer" href="#">
                    Careers
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center pt-6 text-xs">
              <span className="text-white">
                © Copyright 2024.All Rights Reserved.
              </span>
            </div>
          </footer>
        </div>
        {/* <div
          className=" opacity inset-0 relative w-full font-supply-regular overflow-hidden bg-[#2c4cf0] text-white flex flex-col justify-end items-center h-fit "
          // style={{
          //   backgroundImage: "url('/images/grid.svg')",
          //   backgroundRepeat: "repeat",
          //   backgroundSize: "140px",
          //   backgroundPosition: "center",
          // }}
        >
          <p
            className="  text-[19vw] leading-none font-supply-bold uppercase text-center"
            style={{
              fontSize: "clamp(1rem, 19vw, 25rem)",

              textAlign: "center",
            }}
          >
            SSTUDIZE
          </p>
          <div className="flex items-center justify-center px-6 text-xs">
            <span className="text-white">
              © Copyright 2024.All Rights Reserved.
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
};
