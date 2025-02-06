"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Layout from "./Layout";

export default function ScrollRouter({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const routes = ["/", "/about"];
  const currentIndex = routes.indexOf(pathname);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!scrollEnabled || isTransitioning) {
        e.preventDefault();
        return;
      }

      const currentScroll = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        const direction = e.deltaY > 0 ? 1 : -1;

        if (
          (direction === 1 && currentScroll >= maxScroll) ||
          (direction === -1 && currentScroll <= 0)
        ) {
          const nextIndex = Math.min(
            Math.max(currentIndex + direction, 0),
            routes.length - 1
          );

          if (nextIndex !== currentIndex) {
            setIsTransitioning(true);
            setScrollEnabled(false);

            router.push(routes[nextIndex]);
          }
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isTransitioning, currentIndex, scrollEnabled]);

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        setIsTransitioning(false);
        setScrollEnabled(true);
      }}
    >
      <Layout key={pathname}>
        <div className={!scrollEnabled ? "overflow-y-hidden" : ""}>
          {children}
        </div>
      </Layout>
    </AnimatePresence>
  );
}
