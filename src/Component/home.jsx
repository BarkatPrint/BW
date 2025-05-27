import React, { useState, useEffect } from 'react';

export default function Home() {
  const images = [
    "/images/banner.jpg",
    "/images/banner2.jpg",
    "/images/banner3.jpg",
    "/images/banner4.jpg",
    "/images/banner5.png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Open Page Function
  const openNewPage = (url) => {
    window.location.href = url;
  };

  return (
    <div className="text-2xl">
      <div className="pt-20 h-full w-screen flex flex-col justify-center items-center relative">
        {/* Auto-sliding banner */}
        <img
          className="w-screen h-auto object-cover transition-opacity duration-1000 ease-in-out"
          src={images[currentIndex]}
          alt="Banner"
        />

        {/* Dots Indicator */}
        <div className="relative mt-4 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#189D0E]' : 'bg-gray-400'}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>

      <div className="text-2xl pt-10 pb-20 text-center text-gray-600 px-4 md:px-20 space-y-3 font-[Hind]">
        {/* Heading Section */}
        <p className="text-sm md:text-base">2 दिन में वर्कर हायर करें और तुरंत काम पाएं।</p>
        <h1 className="text-3xl md:text-5xl font-bold text-[#189D0E]">भारत का No.1 वर्क & हायरिंग प्लेटफॉर्म</h1>
        <p className="text-sm md:text-base">यहाँ 24x7 हर वर्कर को काम मिलेगा, हर काम के लिए वर्कर मिलेगा, और हर इमरजेंसी हेल्प तुरंत मिलेगी!</p>

        {/* Buttons Section */}
        <div className="flex justify-center gap-4 mt-6">
          {/* Hire Now Button */}
          <button 
            className="bg-[#189D0E] text-white px-6 py-2 rounded-lg text-lg font-semibold"
            onClick={() => setShowPopup('hire')}
          >Hire Now</button>
          
          {/* Find Work/Job Button */}
          <button 
            className="bg-[#189D0E] text-white px-6 py-2 rounded-lg text-lg font-semibold"
            onClick={() => openNewPage('/download-app')}
          >Find Work/Job</button>
        </div>
      </div>

      {/* Hire Worker Popup */}
      {showPopup === 'hire' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80">
            <h2 className="text-xl font-semibold mb-4 text-[#189D0E]">Hire Worker</h2>
            <p className="text-gray-700 mb-4">जल्दी से अपना काम शुरू करें!</p>
            <button 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-lg"
              onClick={() => setShowForm(true)}
            >Post a New Work</button>
            <button 
              className="bg-red-600 text-white px-4 py-2 rounded-lg text-lg mt-3"
              onClick={() => setShowPopup(null)}
            >Close</button>
          </div>
        </div>
      )}

      {/* Post a Job Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80">
            <h2 className="text-xl font-semibold mb-4 text-[#189D0E]">Post a New Work/Job</h2>
            <input
              type="text"
              placeholder="Enter job details"
              className="border p-2 mt-2 w-full"
            />
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-3"
              onClick={() => setShowForm(false)}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
