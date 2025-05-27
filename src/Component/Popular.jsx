import React from "react";

export default function PopularSearches() {
  const searches = [
    "Work for Freshers",
    "Work from Home",
    "Part Time Work",
    "Work for Women",
    "Full Time Work",
    "Night Shift Work",
    "International Work",
    "Emergency Work",
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-green-600 mb-6">
        Popular Searches on Barkat
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {searches.map((search, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow-sm relative bg-white hover:shadow-md transition"
          >
            <p className="text-sm text-gray-500 font-semibold">TRENDING AT #{index + 1}</p>
            <h2 className="text-lg font-bold mt-2">{search}</h2>
            <a
              href="/new-page"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 mt-2 font-semibold cursor-pointer block"
            >
              View All &gt;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}