import React from "react";
import { useNavigate } from "react-router-dom";

export default function StepsSection() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center py-10 px-4 md:px-20">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 px-5">
        Get started in <span className="text-[#189D0E] underline">3 easy steps</span>
      </h2>

      {/* Steps Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {/* Step 1 */}
        <div className="flex flex-col items-center">
         
          <img src="/images/step1.png" alt="Kaam Post Karein" className="w-40 mt-4" />
          <h3 className="text-lg font-semibold mt-2">Kaam Post Karein</h3>
          <p className="text-gray-600 text-sm mt-1">
            Apni zaroorat ke mutabiq kaam ya job post karein, sirf 5 minutes mein.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center">
          
          <img src="/images/step2.png" alt="Verify Karein" className="w-40 mt-4" />
          <h3 className="text-lg font-semibold mt-2">Verify Karein</h3>
          <p className="text-gray-600 text-sm mt-1">
            Hamari team aapka employer account verify karegi.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center">
          
          <img src="/images/step3.png" alt="Turant Call Paayein" className="w-40 mt-4" />
          <h3 className="text-lg font-semibold mt-2">Turant Call Paayein Aur Hiring Karein</h3>
          <p className="text-gray-600 text-sm mt-1">
            Aapko relevant candidates ke calls milenge ya hamare database se unse contact kar sakte hain.
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
