import React from "react";

export default function WorkCategories() {
  const categories = [
    {
      title: "Corporate Jobs",
      jobs: [
        "Business Consultants", "Human Resource (HR)", "Sales & Marketing",
        "Customer Support", "Administration", "Public Relations (PR)",
      ],
    },
    {
      title: "Information Technology (IT)",
      jobs: [
        "Software Development", "Web & App Development", "Data Science & AI",
        "Cybersecurity", "IT Support & Networking", "Cloud Computing",
      ],
    },
    {
      title: "Digital & Creative Services",
      jobs: [
        "Graphic Design", "Video Editing", "UI/UX Design",
        "Content Writing", "SEO & Digital Marketing", "Social Media Management",
      ],
    },
    {
      title: "Finance & Accounting",
      jobs: [
        "Chartered Accountants (CA)", "Tax Consultants", "Investment Banking",
        "Financial Analysts", "Auditors",
      ],
    },
    {
      title: "Management & Strategy",
      jobs: [
        "Business Analysts", "Project Managers",
        "Operations Managers", "Risk Management",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto text-center py-12 px-6">
      {/* 🔹 Section: Work Categories */}
      <div>
        <h2 className="text-3xl font-bold mb-4">Hire from All Professional Work Categories</h2>
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
