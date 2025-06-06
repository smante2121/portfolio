import { useState } from "react";

export default function DropDown({ show }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!show) return null;

  return (
    <div className="fixed top-20 right-15 z-50">
        <div className=" relative inline-block">
        {/* Button that toggles the menu */}
        <button
            id="dropdownMenuIconButton"
            onClick={() => setIsOpen(!isOpen)} // Toggle on click
            className="inline-flex items-center p-2 text-sm font-medium text-white bg-sky-950 rounded-lg hover:bg-sky-800 focus:ring-1 focus:outline-none focus:ring-sky-800"
            type="button"
        >
            <svg
            className="w-8 h-8"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 4 15"
            >
            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
            </svg>
        </button>

        {/* Dropdown menu — only shows when isOpen is true */}
        {isOpen && (
            <div className="absolute right-0 mt-2 border border-white bg-slate-600 divide-y divide-slate-300 rounded-lg shadow-md w-44">
            <ul className="py-2 text-sm text-white">
                <li>
                <a href="#home"
                 onClick={() => setIsOpen(false)}
                className="block px-4 py-2 hover:bg-slate-500 uppercase" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Portfolio
                </a>
                </li>
                <li>
                <a href="#about" 
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 hover:bg-slate-500 uppercase" style={{ fontFamily: 'Playfair Display, serif' }}>
                    About Me
                </a>
                </li>
                <li>
                <a href="#projects" 
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 hover:bg-slate-500 uppercase" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Projects
                </a>
                </li>
            </ul>
            </div>
        )}
      </div>
    </div>
  );
}
