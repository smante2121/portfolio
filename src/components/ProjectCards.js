"use client";
import { useState } from "react";

export default function ProjectCard({ title, about, motivation, languages, libraries, skills, type, link}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Closed Card */}
      <div
        onClick={() => setIsOpen(true)}
        className="aspect-square relative bg-slate-900/40 border-white border-2 backdrop-blur-sm  text-white shadow-2xl shadow-slate-900 cursor-pointer hover:bg-sky-800 transition duration-300 flex flex-col justify-start text-left "
      >
        {/* Title moved upward */}
        <h3
          className="text-2xl font-semibold px-4 pt-4 "
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          {title}
        </h3>

        {/* Horizontal Line */}
        <div className=" absolute w-full bottom-[5.75rem] h-[1px] bg-white left-0"></div>
        <div className=" absolute w-full bottom-0 h-[41%] bg-slate-950/30 left-0"></div>


        <p className="absolute text-sm text-white px-4  bottom-[3em]  " style={{ fontFamily: "Playfair Display, serif" }}>
          Short one-sentence project preview goes here.
        </p>
      </div>

      {/* Open Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative bg-sky-950 backdrop-blur-xl  p-10  w-[80%] h-[60%] text-white shadow-2xl border border-white">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-4 text-white/60 hover:text-white text-xl"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "Playfair Display, serif" }}>{title}</h2>
            <p className="text-sm opacity-80 mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
              <strong>About:</strong> {about}
            </p>

            <p className="text-sm opacity-80 mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
              <strong>Motivation:</strong> {motivation}
            </p>

            <p className="text-sm opacity-80 mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
              <strong>Languages Used:</strong> {languages}
            </p>

            <p className="text-sm opacity-80 mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
              <strong>Libraries and Frameworks:</strong> {libraries}
            </p>

            <p className="text-sm opacity-80 mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
              <strong>Skills and Concepts:</strong> {skills}
            </p>
            {type === "github" ? (
              <a href={link} target="_blank" rel="noopener noreferrer">
                <button className="hover:bg-sky-900 flex items-center gap-2 px-3 py-2 text-white rounded">
                  <img src="/icons/github.svg" alt="GitHub" className="w-6 h-6" />
                  <span className="text-sm" style={{ fontFamily: "Playfair Display, serif" }}>View Code</span>
                </button>
              </a>
              ) : (
                <a href="https://github.com/smante2121" target="_blank" rel="noopener noreferrer">
                    <button className="hover:bg-sky-900 flex items-center gap-2 px-3 py-4 text-white rounded ">
                      <img src="/icons/github.svg" alt="GitHub" className="w-10 h-10" />
                    </button>
                </a>
              )}
            
          </div>
        </div>
      )}
    </>
  );
}
