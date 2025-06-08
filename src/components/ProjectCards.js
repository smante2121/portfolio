"use client";
import { useState } from "react";

export default function ProjectCard({ title }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Closed Card */}
      <div
        onClick={() => setIsOpen(true)}
        className="aspect-square  bg-sky-950 border border-white border-2 backdrop-blur-sm p-4 text-white shadow-2xl shadow-slate-900 cursor-pointer hover:bg-sky-900 transition duration-300 flex flex-col justify-center items-center text-center"
      >
        {/* Title moved upward */}
        <h3
          className="text-2xl font-semibold text-left pb-5"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          {title}
        </h3>

        {/* Horizontal Line */}
        <div className="w-[100%]   h-[1px] bg-white mb-2"></div>


        <p className="text-sm text-slate-200" style={{ fontFamily: "Playfair Display, serif" }}>
          Short one-sentence project preview goes here.
        </p>
      </div>

      {/* Open Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-10 max-w-md w-[90%] text-white shadow-2xl border border-white/20">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-4 text-white/60 hover:text-white text-xl"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-sm opacity-80" style={{ fontFamily: "Playfair Display, serif" }}>
              This is a placeholder for your project details.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
