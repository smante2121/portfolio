import { useState } from "react";
import clsx from "clsx"; 

export default function DropDown({ show }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!show) return null;

  return (
    <div className="fixed top-12 right-15 z-50">
      <div className="relative inline-block">
        <button
          id="dropdownMenuIconButton"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 text-sm font-medium text-white bg-sky-950 rounded-lg hover:bg-sky-800 focus:ring-1 focus:outline-none focus:ring-sky-800"
          type="button">
          <svg
            className="w-8 h-8"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 4 15">
            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
          </svg>
        </button>

        {/* Dropdown menu with animation */}
        <div
          className={clsx(
            "absolute right-0 mt-2 border border-white bg-sky-900 divide-y divide-slate-300 shadow-md w-44 origin-top-right transition-all duration-300 ease-in-out",
            {
              "opacity-100 scale-100": isOpen,
              "opacity-0 scale-95 pointer-events-none": !isOpen,
            })} >
          <ul className="py-0 text-sm text-white">
            <li>
              <a href="#home"
                onClick={() => setIsOpen(false)}
                className="border-b border-white block px-4 py-2 hover:bg-slate-600 uppercase text-lg"
                style={{ fontFamily: "Playfair Display, serif" }} >
                Portfolio
              </a>
            </li>
            <li>
              <a href="#about"
                onClick={() => setIsOpen(false)}
                className="border-b border-white block px-4 py-2 hover:bg-slate-600 uppercase text-lg"
                style={{ fontFamily: "Playfair Display, serif" }}>
                About Me
              </a>
            </li>
            <li>
              <a href="#projects"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 hover:bg-slate-600 uppercase text-lg"
                style={{ fontFamily: "Playfair Display, serif" }}>
                Projects
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
