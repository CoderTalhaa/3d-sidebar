"use client";
import Lenis from "lenis";
import React, { useCallback, useEffect, useState } from "react";
import Sidebar from "@/components/navbar/Sidebar";
import HomePage from "./pages/HomePage";
import Navbar from "@/components/navbar/Navbar";

function isMobile() {
  return window.innerWidth <= 768; // Adjust the width threshold as needed
}

function LenisWrapper({ children }) {
  const [lenis, setLenis] = useState(null);

  const raf = useCallback(
    (time) => {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    },
    [lenis]
  );

  useEffect(() => {
    if (!lenis) {
      const newLenis = new Lenis();
      newLenis.stop(); // Stop Lenis initially
      setLenis(newLenis);

      // Add class to body to keep scrollbar visible
      document.body.classList.add("scrollbar-visible");
      document.body.style.overflow = "hidden";

      // Apply padding on non-mobile devices
      if (!isMobile()) {
        document.body.style.paddingRight = "0px"; // Adjust padding to account for scrollbar width
      }

      // Re-enable scrolling after 2 seconds
      setTimeout(() => {
        newLenis.start();
        document.body.style.overflow = "auto";
        document.body.style.paddingRight = "0px"; // Reset padding
      }, 1000);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis?.destroy();
    };
  }, [lenis, raf]);

  return <>{children}</>;
}

export default function Home() {
  return (
    <>
      <Navbar />
      <LenisWrapper>
        <div className="relative grid grid-cols-auto-1fr">
          <Sidebar />

          <HomePage />
        </div>
      </LenisWrapper>
    </>
  );
}
