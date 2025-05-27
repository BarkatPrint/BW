import React from "react";
import Marquee from "react-fast-marquee";

export default function TrustedCompanies() {
  const companies = new Array(20).fill("Company"); // Example placeholders

  return (
    <div className="max-w-6xl mx-auto p-6 text-center">
      <h2 className="text-2xl font-bold mb-6">
        10L+ top companies and small dukans trust <br /> BarkatWork for their hiring needs.
      </h2>
      <Marquee pauseOnHover gradient={false} speed={50}>
        <div className="flex gap-6">
          {companies.map((company, index) => (
            <div
              key={index}
              className="w-32 h-16 bg-gray-300 rounded-lg flex items-center justify-center text-sm font-semibold shadow-sm"
            >
              {company} {index + 1}
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
