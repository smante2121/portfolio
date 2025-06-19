"use client";
import { useState } from "react";


export default function ProjectCard({ title, about, motivation, languages, libraries, skills, type, link}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Closed Card */}
      <div
        onClick={() => setIsOpen(true)}
        className="aspect-square relative bg-slate-900/40 border-white border-2 backdrop-blur-sm  text-white shadow-2xl shadow-slate-900 cursor-pointer hover:bg-sky-800 transition duration-300 flex flex-col justify-start text-left ">
        {/* Title moved upward */}
        <h3
          className="text-2xl font-semibold px-4 pt-4 "
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          {title}
        </h3>

        <div className=" absolute w-full bottom-0 h-[41%] bg-slate-950/30 left-0 border-t-2 border-white"></div>
        <p className="absolute text-sm text-white h-[38%] px-4  py-1 bottom-0  " style={{ fontFamily: "Raleway, sans-serif"  }}>
          Short one-sentence project preview goes here.
        </p>
      </div>

      {/* Open Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 ">
          <div className="relative bg-sky-950 backdrop-blur-xl p-10  w-[80%] h-[60%] text-white shadow-2xl border border-white m-5">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-4 text-white hover:text-white text-xl">
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "Playfair Display, serif" }}>{title}</h2>
            <div className="relative mb-0.5 h-[1px] w-[100%] bg-white drop-shadow-2xl "></div>
            <div className="relative top-5% h-[0.5px] w-[100%] bg-white drop-shadow-2xl "></div> 

            <p className="text-base pt-4 mb-2 " style={{ fontFamily: "Work Sans, sans-serif"  }}>
              <strong>About:</strong> {about}
            </p>

            <p className="text-base mb-2" style={{ fontFamily: "Work Sans, sans-serif"  }}>
              <strong>Motivation:</strong> {motivation}
            </p>

            <p className="text-base mb-2" style={{ fontFamily: "Work Sans, sans-serif" }}>
              <strong>Languages Used:</strong> {languages}
            </p>

            <p className="text-base  mb-2" style={{ fontFamily: "Work Sans, sans-serif" }}>
              <strong>Libraries and Frameworks:</strong> {libraries}
            </p>

            <p className="text-base mb-6" style={{ fontFamily: "Work Sans, sans-serif"  }}>
              <strong>Skills and Concepts:</strong> {skills}
            </p>
            <div className="place-self-center">
            {type === "github" ? (
              <a href={link} target="_blank" rel="noopener noreferrer">
                <button className="hover:bg-sky-900 flex items-center gap-2 px-3 py-2 text-white rounded">
                  <img src="/icons/github.svg" alt="GitHub" className="w-10 h-10" />
                </button>
              </a>
              ) : (
                <a href={link} target="_blank" rel="noopener noreferrer"  
                className=" bg-slate-900/30  border border-white hover:bg-sky-900 text-white font-medium px-6 py-2 uppercase text-base shadow-lg shadow-slate-900" 
                style={{ fontFamily: 'Playfair Display, serif' }}> 
                Learn More
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
