"use client";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className=" bg-[#fdfdfd] text-[#000000]">
      <div className=" md:px-16 sm:px-8 px-4 py-6 w-full min-w-screen min-h-fit md:h-screen md:max-h-screen flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.8 },
          }}
          viewport={{ once: true, amount: 1 }}
          className=" object-contain "
        >
          <h1 className="self-center font-supply-bold md:text-5xl text-4xl md:my-14 my-7">
            What is Studize?
          </h1>
          <p className=" font-supply-light md:text-xl text-lg md:mb-14 mb-7 self-center text-[#575555] ">
            We help you to take your Coaching Class to the Next Level by
            Empowering Students, Enhancing Coaching with the use of AI
          </p>
        </motion.div>
        <div className="lg:grid lg:grid-cols-3 grid-rows-1 gap-8 grid grid-cols-1">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.4, duration: 1.4 },
            }}
            viewport={{ once: true, amount: 1 }}
            className="  object-contain "
          >
            <div className="border-none border-2 pl-8 pr-4 py-5 md:pl-12 md:pr-8 md:py-10 flex-col md:space-y-8 space-y-4">
              <h1 className=" font-supply-regular md:text-3xl text-xl ">
                For Teachers
              </h1>
              <ul className="list-[square] list-outside custom-bullet">
                <li className=" font-supply-light md:text-lg text-base  text-[#575555]">
                  Our AI-driven insights help you monitor student progress,
                  track performance, and make data-backed decisions to ensure
                  the best results for your students.
                </li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.6, duration: 1.6 },
            }}
            viewport={{ once: true, amount: 1 }}
            className=" object-contain "
          >
            <div className="border-none border-2 pl-8 pr-4 py-5 md:pl-12 md:pr-8 md:py-10 flex-col space-y-8">
              <h1 className=" font-supply-regular md:text-3xl text-xl">
                For Students
              </h1>
              <ul className="list-[square] list-outside custom-bullet ">
                <li className=" font-supply-light  md:text-lg text-base text-[#575555]">
                  Get customised learning roadmaps based on your strengths,
                  weaknesses, and learning patterns, helping you optimise your
                  study time and reach your academic goals.
                </li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.8, duration: 1.8 },
            }}
            viewport={{ once: true, amount: 1 }}
            className=" object-contain "
          >
            <div className="border-none border-2 pl-8 pr-4 py-5 md:pl-12 md:pr-8 md:py-10 flex-col space-y-8">
              <h1 className=" font-supply-regular md:text-3xl text-xl">
                For Parents
              </h1>
              <ul className="list-[square] list-outside custom-bullet ">
                <li className=" font-supply-light md:text-lg text-base text-[#575555]">
                  We provide parents with real-time progress updates and
                  detailed reports, giving them peace of mind about their
                  child’s academic journey.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
