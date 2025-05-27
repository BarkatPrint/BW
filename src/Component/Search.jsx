import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchConnect() {
  return (
    <div className="bg-green-50 pt-[50px] pb-10">
      {/* Search Box */}
      <div className="max-w-5xl mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          Search & Connect with Local Experts
        </h2>
        
        {/* Search Fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <select className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500">
            <option>Select Work Type</option>
            <option>Labour for House</option>
            <option>Electrician</option>
          </select>
          
          <select className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500">
            <option>Choose Location</option>
            <option>Patna</option>
            <option>Delhi</option>
          </select>
          
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex items-center justify-center transition-all">
            <FaSearch className="mr-2" /> Search
          </button>
        </div>
      </div>
      
      {/* Workers List */}
      <div className="max-w-5xl mx-auto mt-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-white p-4 shadow-md rounded-xl flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full mb-2"></div>
              <p className="text-sm font-semibold text-gray-800">Rahul Sharma</p>
              <p className="text-xs text-gray-600 text-center">Repaired an AC in Patna</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Trust Statement */}
      <p className="text-center text-green-700 font-bold text-lg mt-8">
        10L+ workers trust <span className="text-green-800">BarkatWork</span> for their work & service needs.
      </p>
    </div>
  );
}
