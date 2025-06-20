"use client";
import { Fragment, useEffect, useState } from "react";

const CustomCursor = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if device supports hover and has fine pointer (mouse)
    const checkIsDesktop = () => {
      return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    };

    setIsDesktop(checkIsDesktop());

    // Listen for changes (e.g., when connecting/disconnecting external mouse)
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const handleChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    // Only add mouse event listeners if it's a desktop device
    if (!isDesktop) return;

    const cursorDot = document.getElementById("cursorDot");
    const cursorOutline = document.getElementById("cursorOutline");

    const handleMouseMove = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;

      if (cursorDot && cursorOutline) {
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDesktop]);

  // Don't render anything on touch devices
  if (!isDesktop) return null;

  return (
    <Fragment>
      {/* Custom Cursor */}
      <div className="cursor-dot" id="cursorDot" />
      <div className="cursor-outline" id="cursorOutline" />
    </Fragment>
  );
};

export default CustomCursor;
