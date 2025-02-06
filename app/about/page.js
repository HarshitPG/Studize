// app/about/page.jsx
"use client";

import React from "react";
import ScrollRouter from "../components/ScrollRouter";
import Navbar from "../components/navbar";
import About from "../sections/About";
import HorizontalScroll from "../components/HorizontalScroll";
import Footer from "../sections/Footer";
import { FooterMain } from "../sections/FooterMain";

export default function AboutSection() {
  return (
    <ScrollRouter>
      <div className="overflow-y-hidden overflow-x-hidden">
        <main className="bg-[#fdfdfd]">
          <About />
          <HorizontalScroll />
          <Footer />
          <FooterMain />
        </main>
      </div>
    </ScrollRouter>
  );
}
