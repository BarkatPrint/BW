import React from "react";
import { useNavigate } from "react-router-dom";

export default function StepsSection() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center py-10 px-4 md:px-20">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 px-5">
      Why choose <span className="text-[#189D0E] underline"> BarkatWork?</span>
      </h2>

      {/* Steps Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {/* Step 1 */}
        <div className="flex flex-col items-center">
         
          <img src="/images/1.png" alt="Kaam Post Karein" className="w-40 mt-4" />
          <h3 className="text-lg font-semibold mt-2">Simple Hiring</h3>
          <p className="text-gray-600 text-sm mt-1">
          Post a job & get calls from 
qualified candidates or skilled 
workers within an hour.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center">
          
          <img src="/images/2.png" alt="Verify Karein" className="w-40 mt-4" />
          <h3 className="text-lg font-semibold mt-2">Smart Matching</h3>
          <p className="text-gray-600 text-sm mt-1">
          Our ML recommends the best 
candidates and workers tailored 
to your job requirements.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center">
          
          <img src="/images/3.png" alt="Turant Call Paayein" className="w-40 mt-4" />
          <h3 className="text-lg font-semibold mt-2">Customer Support</h3>
          <p className="text-gray-600 text-sm mt-1">
          Exclusive and prioritized 
customer support for 
paid plan users.
          </p>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={() => navigate("/find-work")}
        className="mt-6 bg-[#189D0E] text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-green-700 transition"
      >
        Find Work & Job ➤
      </button>
    </div>
  );
}
