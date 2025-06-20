"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const ScrollProgressIndicator = () => {
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (indicatorRef.current) {
      gsap.to(indicatorRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <div ref={indicatorRef} className="scroll-indicator" id="scrollIndicator" />
  );
};

export default ScrollProgressIndicator;
