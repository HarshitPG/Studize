import image from "@/public/images/2.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className=" flex flex-col  justify-center items-center relative pb-4  bg-[#f2efeb] text-[#000000]">
      <div className=" sm:w-[50%] w-[80%] min-w-screen  h-fit flex flex-col  ">
        <div className=" flex flex-col justify-center  mt-10">
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
            <div className=" flex flex-col space-y-4">
              {" "}
              <h1 className=" font-supply-bold md:text-7xl sm:text-5xl text-3xl mb-4">
                Get in-Touch
              </h1>
              <h2 className=" font-supply-light md:text-xl sm:text-lg text-base">
                {" "}
                Ready to Transform Your Coaching Class using Sstudize? See the
                power of AI in action and book a one-on-one demo call with our
                team
              </h2>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.3, duration: 0.8 },
            }}
            viewport={{ once: true, amount: 1 }}
            className=" object-contain "
          >
            <div className=" mt-10 ">
              <button className=" font-supply-medium text-lg bg-[#2c4cf0] text-[#fdfdfd] h-16 w-40 ">
                Book a Demo
              </button>
            </div>
          </motion.div>
        </div>

        {/* <div className=" flex ">
          {" "}
          <Image src={image} alt=" image" />
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
