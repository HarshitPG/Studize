// app/page.jsx
"use client";

import "./styles.scss";
import React from "react";
import ScrollRouter from "./components/ScrollRouter";
import Hero from "./sections/Hero";

export default function Home() {
  return (
    <ScrollRouter>
      <div className="overflow-y-hidden overflow-x-hidden">
        <main className="bg-[#fdfdfd]">
          <Hero />
        </main>
      </div>
    </ScrollRouter>
  );
}
