import React, { useState, useEffect, useRef } from "react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // **Click Outside to Close Dropdown**
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // **Scroll to Top on Click**
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="bg-white shadow-lg p-4 w-full fixed top-0 z-50 text-xs">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between text-xs px-4">
        {/* Left Section - Logo & Name */}
        <div className="flex items-center cursor-pointer" onClick={scrollToTop}>
          <img className="w-10 h-10" src="/images/logo.png" alt="Logo" />
          <div className="border border-black mx-5 h-8"></div>
          <span className="text-lg font-semibold text-[#189D0E]">BarkatWork</span>
        </div>

        {/* Center Section - Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 mx-auto">
          {["Candidate/Mazdoor", "Employer/Dukan Malik", "Company"].map((item, index) => (
            <div key={index} className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsOpen(isOpen === index ? null : index)}
                className="flex items-center text-gray-700 font-normal hover:text-[#189D0E] hover:font-bold transition-all cursor-pointer"
              >
                <span className="mr-1">{item}</span>
                {isOpen === index ? <RxCaretUp fontSize={20} /> : <RxCaretDown fontSize={20} />}
              </button>

              {/* Dropdown Content */}
              {isOpen === index && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-white shadow-lg rounded-lg border py-2 text-left">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Post a Job (For Employers)
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Find Workers
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Section - Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="border border-green-500 text-green-500 px-4 py-1 rounded-lg hover:bg-green-100">
            Find a Job/Work
          </button>
          <div className="relative">
            <button
              onClick={() => setIsOpen(isOpen === "hire" ? null : "hire")}
              className="bg-green-500 text-white text-sm px-3 py-2 rounded-lg hover:bg-green-600 flex items-center gap-1 h-9 whitespace-nowrap"
            >
              <span className="leading-none">Hire Now</span>
              <RxCaretDown fontSize={14} />
            </button>
            {isOpen === "hire" && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border py-2 text-left">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Post a Job
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Find Workers
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4 absolute top-16 right-0 w-3/4 border-t">
          {["Candidate/Mazdoor", "Employer/Dukan Malik", "Company"].map((item, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => setIsOpen(isOpen === index ? null : index)}
                className="flex justify-between items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                <span>{item}</span>
                {isOpen === index ? <RxCaretUp fontSize={20} /> : <RxCaretDown fontSize={20} />}
              </button>
              {isOpen === index && (
                <div className="w-full bg-white shadow-lg rounded-lg border py-2 text-left">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Post a Job
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Find Workers
                  </a>
                </div>
              )}
            </div>
          ))}

          <button className="block w-full text-left border border-green-500 text-green-500 px-4 py-2 mt-2 rounded-lg hover:bg-green-100">
            Find a Job/Work
          </button>
          <div className="relative w-full">
            <button
              onClick={() => setIsOpen(isOpen === "hire" ? null : "hire")}
              className="block w-full text-left bg-green-500 text-white px-4 py-2 mt-2 rounded-lg
               hover:bg-green-600 flex items-center gap-1"
            >
              <span className="leading-none">Hire Now</span>
              <RxCaretDown fontSize={16} />
            </button>
            {isOpen === "hire" && (
              <div className="w-full bg-white shadow-lg rounded-lg border py-2 text-left">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Post a Job
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Find Workers
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
