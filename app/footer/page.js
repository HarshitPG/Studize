"use client";
import { motion } from "framer-motion";
import Footer from "../sections/Footer";
import { FooterMain } from "../sections/FooterMain";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <Footer />
      <FooterMain />
    </motion.div>
  );
}
