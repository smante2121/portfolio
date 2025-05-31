"use client";
import { useState } from "react";

export default function ProjectCard({ title }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="aspect-square bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white shadow-xl cursor-pointer hover:bg-white/20 transition duration-300 flex items-center justify-center text-center"
      >
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>

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
            <p className="text-sm opacity-80">This is a placeholder for your project details.</p>
          </div>
        </div>
      )}
    </>
  );
}
