import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Layout({ children }) {
  const columsExpandVariant = {
    initial: { left: 0 },
    enter: (index) => ({
      left: "100vw",
      transition: { duration: 0.3, delay: 0.3 * index, ease: "easeIn" },
      transitionEnd: { width: "0", left: "0" },
    }),
    exit: (index) => ({
      width: "100vw",
      transition: { duration: 0.3, delay: 0.3 * index, ease: "easeIn" },
    }),
  };

  const numOfCols = 6;

  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = "hidden";

    // Re-enable scrolling after animation completes
    const timeout = setTimeout(() => {
      document.body.style.overflow = "auto";
    }, numOfCols); // Calculate total animation duration

    return () => {
      clearTimeout(timeout);
      document.body.style.overflow = "auto"; // Ensure scroll is enabled on unmount
    };
  }, []);

  return (
    <div>
      {/* Animated overlay columns */}
      <div className="w-screen h-screen fixed flex flex-col top-0 left-0 pointer-events-none z-20">
        {[...Array(numOfCols)].map((_, index) => (
          <motion.div
            key={index}
            variants={columsExpandVariant}
            initial={"initial"}
            animate={"enter"}
            exit={"exit"}
            custom={index}
            className="bg-[#2c4cf0] relative w-full h-full"
          />
        ))}
      </div>

      {/* Page content */}
      {children}
    </div>
  );
}
