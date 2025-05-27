import React from "react";

export default function DownloadApp() {
  return (
    <div className="flex flex-col items-center justify-center text-center 
    px-6 py-12 bg-[#F8FFFA]">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-green-600 mb-4">
        Download BarkatWork app!
      </h2>

      {/* Description */}
      <p className="text-gray-700 max-w-2xl">
        Apply for Unlimited Jobs & Work | HRs, Employers & Dukaan Malik Contact You |
        Track Jobs, Work & Emergency Help | Get Instant Support!
      </p>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 mt-8">
        {/* Placeholder for Image */}
        <div className="w-32 h-32 bg-gray-300 rounded-lg"></div>

        {/* Input + Button */}
        <div className="flex items-center gap-2 border rounded-lg px-4 py-2 shadow-sm">
          <span className="text-gray-600">+91</span>
          <input
            type="text"
            placeholder="705-026-6383"
            className="outline-none border-none text-gray-800"
          />
          <button className="bg-gray-900 text-white px-4 py-1 rounded-md">
            Download App
          </button>
        </div>
      </div>

      {/* Play Store Button */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
        alt="Google Play"
        className="w-40 mt-4 cursor-pointer"
      />
    </div>
  );
}
