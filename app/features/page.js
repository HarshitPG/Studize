"use client";
import { motion } from "framer-motion";
import Features from "../sections/Features";
import HorizontalScroll from "../components/HorizontalScroll";
import ScrollRouter from "../components/ScrollRouter";
import Footer from "../sections/Footer";
import { FooterMain } from "../sections/FooterMain";

export default function AboutPage() {
  return (
    <ScrollRouter>
      <div className="overflow-y-hidden overflow-x-hidden">
        <main className="bg-[#fdfdfd]">
          <HorizontalScroll />
          <Footer />
          <FooterMain />
        </main>
      </div>
    </ScrollRouter>
  );
}
