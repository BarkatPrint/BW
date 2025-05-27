import React from "react";

export default function CityCategories() {
  const categories = [
    {
      title: "Uttar Pradesh (UP)",
      cities: [
        "Lucknow", "Kanpur", "Varanasi", "Prayagraj (Allahabad)", "Agra",
        "Meerut", "Ghaziabad", "Noida", "Bareilly", "Aligarh",
        "Moradabad", "Gorakhpur", "Jhansi", "Saharanpur", "Ayodhya",
        "Mathura", "Firozabad", "Faizabad", "Mirzapur", "Rampur",
      ],
    },
    {
      title: "Bihar",
      cities: [
        "Patna", "Gaya", "Muzaffarpur", "Bhagalpur", "Darbhanga",
        "Purnia", "Begusarai", "Katihar", "Saharsa", "Siwan",
        "Bettiah", "Motihari", "Samastipur", "Chhapra", "Arrah",
        "Nawada", "Sitamarhi", "Kishanganj", "Buxar", "Jehanabad",
      ],
    },
    {
      title: "Hyderabad (Telangana)",
      cities: [
        "Hyderabad", "Secunderabad", "Warangal", "Karimnagar", "Nizamabad",
        "Khammam", "Mahbubnagar", "Medak", "Adilabad", "Nalgonda",
      ],
    },
    {
      title: "Delhi (NCR)",
      cities: [
        "New Delhi", "South Delhi", "North Delhi", "East Delhi", "West Delhi",
        "Central Delhi", "Dwarka", "Rohini", "Karol Bagh", "Janakpuri",
      ],
    },
    {
      title: "Jharkhand",
      cities: [
        "Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh",
        "Deoghar", "Giridih", "Ramgarh", "Chaibasa", "Palamu",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto text-center py-12 px-6">
      {/* 🔹 Section: City Categories */}
      <div>
        <h1 className="text-3xl font-bold mb-4">Hire from 750+ Cities</h1>

        <div className="w-20 h-1 bg-green-500 mx-auto mb-8"></div>

        {/* ✅ 5 Equal Columns with Proper Spacing & Smaller Font */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-left">
          {categories.map((category, index) => (
            <div key={index} className="bg-gray-100 p-3 rounded-lg shadow-sm">
              <h3 className="font-semibold text-[15px] mb-2 text-gray-800">{category.title}</h3>
              <ul className="text-gray-700 text-[13px] space-y-1">
                {category.cities.map((city, idx) => (
                  <li key={idx} className="border-b last:border-none pb-1">{city}</li>
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
