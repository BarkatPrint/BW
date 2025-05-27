import React from "react";
import { FaYoutube, FaFacebook, FaInstagram, FaXTwitter, FaTelegram, FaExternalLink } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 px-4 text-center">
      {/* Follow Us Section */}
      <h2 className="text-2xl font-bold">Follow Us</h2>
      <div className="w-20 h-1 bg-green-500 mx-auto my-2"></div>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 text-green-600 text-2xl my-4">
        <FaYoutube />
        <FaFacebook />
        <FaInstagram />
        <FaXTwitter />
        <FaTelegram />
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-wrap justify-center gap-6 text-gray-700 text-sm">
        <a href="#">Home</a>
        <a href="#">Contact</a>
        <a href="#">Find Work & Job</a>
        <a href="#">Hire Workers</a>
        <a href="#">Emergency Help</a>
        <a href="#">About Us</a>
        <a href="#">Blog</a>
        <a href="#">Language</a>
        <a href="#">Register/Login</a>
      </nav>

      {/* Job/Hire Cards Section */}
      <div className="relative w-[15rem] h-[9rem] flex items-center justify-center pt-5 rounded-lg shadow-lg">
  {/* Background Image */}
  <img src="/Images/hire.png" alt="Hire" className="absolute inset-0 w-full h-full object-cover rounded-lg" />

  {/* Overlay Content */}
  <div className="relative flex items-center space-x-3 pl-[15] px-2 py-2 rounded-md ">
    {/* Text */}
    <h1 className=" text-white text-left font-bold text-lg">I want to <br /> Hire</h1>

    {/* Circular Icon */}
    <div className="w-10 h-10 rounded-full flex items-center justify-center  text-white ">
      
    </div>
  </div>
</div>


        {/* Work/Job Card */}
       

      {/* Copyright Section */}
      <div className="mt-6 text-gray-600 text-sm">
        <p>Powered by Shahzad Raza</p>
        <p>© 2025 All Rights Reserved.</p>
      </div>
    </footer>
  );
}
