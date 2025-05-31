"use client";
import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const gradientRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 100;
      const y = (e.clientY / innerHeight) * 100;

      if (gradientRef.current) {
        gradientRef.current.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(0, 255, 255, 0.25), transparent 60%)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={gradientRef}
      className="absolute inset-0 z-0 bg-black transition-all duration-200"
    />
  );
}
