import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isDesktop = window.matchMedia("(pointer: fine)").matches; 
    if (!isDesktop) return; // Skip adding listeners on mobile/tablet

    let cursorX = 0;
    let cursorY = 0;
    let targetX = 0;
    let targetY = 0;

    const moveCursor = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX - 2}px, ${e.clientY - 2}px, 0)`;
      }

      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animateOuterCursor = () => {
      cursorX += (targetX - cursorX) * 0.15;
      cursorY += (targetY - cursorY) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorX - 18}px, ${cursorY - 18}px, 0)`;
      }

      requestAnimationFrame(animateOuterCursor);
    };

    window.addEventListener("mousemove", moveCursor);
    animateOuterCursor();

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-9 h-9 border-2 border-blue-500 rounded-full pointer-events-none z-50 hidden md:block"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      ></div>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-blue-500 rounded-full pointer-events-none z-50 hidden md:block"
        style={{ transform: "translate3d(-100px, -100px, 0)", transition: "transform 0.05s ease-out" }}
      ></div>
    </>
  );
};

export default CustomCursor;
