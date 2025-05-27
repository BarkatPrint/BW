import React from "react";

export default function WorkCategories() {
  const categories = [
    {
      title: "Unskilled Labor",
      jobs: [
        "Construction Work", "Agricultural Labor", "Cleaning Workers",
        "Loading & Unloading", "Domestic Helpers", "Rickshaw/Puller Work",
      ],
    },
    {
      title: "Skilled Labor",
      jobs: [
        "Electricians", "Plumbers", "Welders", "Carpenters",
        "Tiles & Painting Work", "Tailoring & Embroidery",
      ],
    },
    {
      title: "Industrial & Factory Labor",
      jobs: [
        "Machine Operators", "Factory Helpers", "Tool Makers & Mechanics",
        "Food Processing Workers", "Labor Supervisors",
      ],
    },
    {
      title: "Construction & Real Estate Labor",
      jobs: [
        "Building Construction Workers", "Road Construction", "Drivers",
        "Crane Operators & Lift Men",
      ],
    },
    {
      title: "Transportation & Loading Work",
      jobs: [
        "Coolie & Loaders", "Truck/Tractor Helpers", "Warehouse & Logistics Labor",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto text-center py-12 px-6">
      {/* 🔹 Section: Work Categories */}
      <div>
        <h2 className="text-3xl font-bold mb-4">Hire from All Local Work Categories</h2>
        <div className="w-20 h-1 bg-green-500 mx-auto mb-8"></div>

        {/* ✅ Equal 5-Column Grid with Proper Spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-left">
          {categories.map((category, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-[15px] text-gray-800 mb-2">{category.title}</h3>
              <ul className="text-gray-700 text-[13px] space-y-1">
                {category.jobs.map((job, idx) => (
                  <li key={idx} className="border-b last:border-none pb-1">{job}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 👉 यहां से बटन का टेक्स्ट चेंज कर सकते हो */}
        <button className="mt-8 bg-green-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-700">
          View All
        </button>
      </div>
    </div>
  );
}
