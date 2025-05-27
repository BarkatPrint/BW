import React from 'react';

export default function Sponsor() {
  return (
    <div className="mt-6">
      {/* Contact Section */}
      <div className="text-center py-6 rounded-lg ">
        <h2 className="text-4xl font-bold font-semibold text-[#189D0E]">
          क्या आप अपना विज्ञापन लगवाना चाहते हैं?
        </h2>
        <p className="text-gray-600 text-2xl font-bold mt-2">हमसे संपर्क करें और अपने बिज़नेस को प्रमोट करें!</p>

        {/* Buttons Section */}
        <div className="flex justify-center gap-4 mt-4">
          {/* Call Button */}
          <a
            href="tel:+919876543210"
            className="bg-[#189D0E] text-white px-4 py-2 rounded-lg text-lg font-semibold flex items-center gap-2"
          >
            📞 कॉल करें
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            className="bg-[#189D0E] text-white px-4 py-2 rounded-lg text-lg font-semibold flex items-center gap-2"
          >
            💬 WhatsApp
          </a>

          {/* Email Button */}
          <a
            href="mailto:youremail@example.com"
            className="bg-[#189D0E] text-white px-4 py-2 rounded-lg text-lg font-semibold flex items-center gap-2"
          >
            📩 ईमेल करें
          </a>
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="flex flex-col md:flex-row justify-between items-start mt-5 px-4">
        {/* Left Side (Big Banner) */}
        <div className="w-full md:w-3/4 mb-5 md:mb-0">
          <img
            src="/images/banner.jpg"
            alt="Big Banner pl-5 "
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side (3 Smaller Banners) */}
        <div className="w-full md:w-1/4 space-y-5 md:space-y-0 md:flex md:flex-col gap-5">
          {/* Small Banner 1 */}
          <div className="w-full h-auto md:block hidden">
            <img
              src="/images/banner.jpg"
              alt="Small Banner 1"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Small Banner 2 */}
          <div className="w-full h-auto md:block hidden">
            <img
              src="/images/banner.jpg"
              alt="Small Banner 2"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Small Banner 3 */}
          <div className="w-full h-auto md:block hidden">
            <img
              src="/images/banner.jpg"
              alt="Small Banner 3"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* For smaller screens (Mobile version) */}
      <div className="md:hidden flex flex-col gap-5 mt-6 px-4">
       
        {/* Smaller banners in one row (Mobile version) */}
        <div className="flex gap-4 justify-between mt-6">
          {/* Small Banner 1 */}
          <div className="w-1/3">
            <img
              src="/images/banner.jpg"
              alt="Small Banner 1"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Small Banner 2 */}
          <div className="w-1/3  ">
            <img
              src="/images/banner.jpg"
              alt="Small Banner 2"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Small Banner 3 */}
          <div className="w-1/3">
            <img
              src="/images/banner.jpg"
              alt="Small Banner 3"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
