"use client";

import { Fragment, useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
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
  }, []);

  return (
    <Fragment>
      {/* Custom Cursor */}
      <div className="cursor-dot" id="cursorDot" />
      <div className="cursor-outline" id="cursorOutline" />
    </Fragment>
  );
};

export default CustomCursor;
