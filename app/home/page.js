"use client";
import { motion } from "framer-motion";
import Home from "../page";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <Home />
    </motion.div>
  );
}
