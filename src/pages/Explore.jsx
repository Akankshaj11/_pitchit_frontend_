



import React, { useState } from "react";
import { FaLightbulb, FaSearch, FaBell } from "react-icons/fa";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import { AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { GiTwoCoins } from "react-icons/gi";

/* ---------------- DATA ---------------- */

const content = [
  {
    type: "pitch",
    title: "AI-Powered Resume Builder",
    description:
      "ATS-friendly resumes using AI algorithms that help candidates get shortlisted faster by recruiters.",
    author: "TechTigers",
    category: "Tech",
    likes: 128,
    comments: 34,
    coins: 21000,
  },
  {
    type: "post",
    title: "How AI is Changing Hiring",
    description:
      "AI-driven recruitment tools are transforming how companies shortlist and interview candidates.",
    author: "Akash",
    category: "Tech",
    likes: 56,
    comments: 12,
    coins: 9000,
  },
  {
    type: "pitch",
    title: "Smart Health Tracker",
    description:
      "Tracks vital health parameters using IoT sensors and provides real-time insights to users.",
    author: "HealthPlus",
    category: "Healthcare",
    likes: 90,
    comments: 20,
    coins: 14000,
  },
  {
    type: "post",
    title: "Why Preventive Healthcare Matters",
    description:
      "Early diagnosis using technology can reduce healthcare costs and improve patient outcomes.",
    author: "Dr. Neha",
    category: "Healthcare",
    likes: 42,
    comments: 8,
    coins: 6000,
  },
  {
    type: "pitch",
    title: "Climate Watch",
    description:
      "AI-based climate monitoring platform that predicts environmental changes using satellite data.",
    author: "GreenTech",
    category: "Climate",
    likes: 160,
    comments: 48,
    coins: 30000,
  },
  {
    type: "post",
    title: "Climate Startups to Watch in 2025",
    description:
      "A look at emerging startups solving climate challenges using AI and clean technology.",
    author: "EcoDaily",
    category: "Climate",
    likes: 77,
    comments: 18,
    coins: 11000,
  },
  {
    type: "pitch",
    title: "FinSmart",
    description:
      "Personal finance and expense tracking app designed for students and young professionals.",
    author: "MoneyMind",
    category: "Finance",
    likes: 112,
    comments: 26,
    coins: 19000,
  },
  {
    type: "pitch",
    title: "AI-Powered Resume Builder",
    description:
      "ATS-friendly resumes using AI algorithms that help candidates get shortlisted faster by recruiters.",
    author: "TechTigers",
    category: "Tech",
    likes: 128,
    comments: 34,
    coins: 21000,
  },
  {
    type: "post",
    title: "How AI is Changing Hiring",
    description:
      "AI-driven recruitment tools are transforming how companies shortlist and interview candidates.",
    author: "Akash",
    category: "Tech",
    likes: 56,
    comments: 12,
    coins: 9000,
  },
  {
    type: "pitch",
    title: "Smart Health Tracker",
    description:
      "Tracks vital health parameters using IoT sensors and provides real-time insights to users.",
    author: "HealthPlus",
    category: "Healthcare",
    likes: 90,
    comments: 20,
    coins: 14000,
  },
  {
    type: "post",
    title: "Why Preventive Healthcare Matters",
    description:
      "Early diagnosis using technology can reduce healthcare costs and improve patient outcomes.",
    author: "Dr. Neha",
    category: "Healthcare",
    likes: 42,
    comments: 8,
    coins: 6000,
  },
  {
    type: "pitch",
    title: "Climate Watch",
    description:
      "AI-based climate monitoring platform that predicts environmental changes using satellite data.",
    author: "GreenTech",
    category: "Climate",
    likes: 160,
    comments: 48,
    coins: 30000,
  },
  {
    type: "post",
    title: "Climate Startups to Watch in 2025",
    description:
      "A look at emerging startups solving climate challenges using AI and clean technology.",
    author: "EcoDaily",
    category: "Climate",
    likes: 77,
    comments: 18,
    coins: 11000,
  },
  {
    type: "pitch",
    title: "FinSmart",
    description:
      "Personal finance and expense tracking app designed for students and young professionals.",
    author: "MoneyMind",
    category: "Finance",
    likes: 112,
    comments: 26,
    coins: 19000,
  },
];

const categories = [
  "Tech",
  "Healthcare",
  "Education",
  "Finance",
  "Climate",
  "Gaming",
  "Social",
];

const events = [
  { title: "Hack the Future", date: "15 Aug 2025", mode: "Online" },
  { title: "GreenTech Summit", date: "22 Aug 2025", mode: "Hybrid" },
  { title: "Code For Good", date: "30 Aug 2025", mode: "Offline" },
];

/* ---------------- COMPONENT ---------------- */

const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [openDropdown, setOpenDropdown] = useState(null);

  // Filtered content
  const filteredContent = content.filter((item) => {
    const categoryMatch =
      selectedCategory === "All" ||
      item.category.toLowerCase() === selectedCategory.toLowerCase();

    const typeMatch =
      selectedType === "All" || item.type === selectedType.toLowerCase();

    return categoryMatch && typeMatch;
  });

  // Split into rows of 3
  const rows = [];
  for (let i = 0; i < filteredContent.length; i += 3) {
    rows.push(filteredContent.slice(i, i + 3));
  }

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar2 />

      <main className="flex-grow px-4 sm:px-6 md:px-10 lg:px-20 py-10">
        {/* Header */}
        {/* <div className="flex items-center gap-2 text-3xl font-semibold mb-6">
          <FaLightbulb className="text-yellow-500" />
          <h1>Explore</h1>
        </div> */}

        {/* Browse by Category */}
        <div className="flex items-center gap-2 text-2xl font-semibold mb-3">
          <FaSearch className="text-indigo-600" />
          <h2>Explore by Category</h2>
        </div>

        {/* <p className="text-gray-600 mb-4 text-sm">
          Click on a category to filter by Pitch or Post
        </p> */}

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-3 sticky top-16 bg-gray-50 py-5 z-10">
          {["All", ...categories].map((cat) => (
            <div key={cat} className="relative">
              {/* <button
                onClick={() => {
                  setSelectedCategory(cat);
                  setSelectedType("All");
                  setOpenDropdown(openDropdown === cat ? null : cat);
                }}
                className={`px-4 py-1 rounded-full text-sm transition ${
                  selectedCategory === cat && selectedType === "All"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button> */}


              <button
  onClick={() => {
    setSelectedCategory(cat);
    setSelectedType("All");
    setOpenDropdown(openDropdown === cat ? null : cat);
  }}
  className={`px-4 py-1 rounded-full text-sm transition ${
    selectedCategory === cat
      ? selectedType === "All"
        ? "bg-indigo-600 text-white"
        : selectedType === "pitch"
        ? "bg-indigo-700 text-white"
        : "bg-indigo-600 text-white"
      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
  }`}
>
  {cat}
</button>


              {/* Dropdown */}
              {cat !== "All" && openDropdown === cat && (
                <div className="absolute left-0 mt-1 flex flex-col bg-white border rounded shadow-md z-20">
                  {["Pitch", "Post"].map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setSelectedType(type);
                        setOpenDropdown(null);
                      }}
                      className={`px-4 py-1 text-sm text-gray-700 hover:bg-gray-100 w-full text-left ${
                        selectedCategory === cat &&
                        selectedType.toLowerCase() === type.toLowerCase()
                          ? "bg-gray-200"
                          : ""
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredContent.length === 0 && (
          <div className="text-center text-gray-500 py-20">
            <p className="text-lg font-medium">No pitches or posts found</p>
            <p className="text-sm mt-2">Try selecting another category</p>
          </div>
        )}

        {/* Content Rows */}
        <div className="space-y-6">
          {rows.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              {/* Cards Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {row.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition flex flex-col justify-between"
                  >
                    {/* Card Content */}
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-gray-600 mt-2 text-sm line-clamp-3">
                        {item.description}
                      </p>

                      {item.description.length > 90 && (
                        <button className="text-blue-600 text-xs mt-1 hover:underline">
                          More...
                        </button>
                      )}

                      <p className="text-sm text-gray-500 mt-3">
                        <strong>
                          {item.type === "pitch" ? "Pitch" : "Post"} by :
                        </strong>{" "}
                        {item.author}
                      </p>
                    </div>

                    {/* Likes / Comments / Coins + More button */}
                    {/* <div className="flex justify-between mt-4 text-gray-500 text-sm items-center">
                      <div className="flex gap-4">
                        <span>❤️ {item.likes}</span>
                        <span>💬 {item.comments}</span>
                        <span>🪙 {item.coins}</span>
                      </div>
                      <button className="text-blue-600 text-xs hover:underline">
                        View
                      </button>
                    </div> */}


                   <div className="flex justify-between mt-4 text-gray-500 text-sm items-center">
  <div className="flex gap-4 items-center">
    <span className="flex items-center gap-1">
      <AiFillHeart className="text-red-500 text-lg" /> {item.likes}
    </span>
    <span className="flex items-center gap-1">
      <BiCommentDetail className="text-gray-500 text-lg" /> {item.comments}
    </span>
    <span className="flex items-center gap-1">
      <GiTwoCoins className="text-yellow-500 text-lg" /> {item.coins}
    </span>
  </div>
  <button className="text-blue-600 text-xs hover:underline">
    View
  </button>
</div>




                  </div>
                ))}
              </div>

              {/* Upcoming Events */}
              {(rowIndex + 1) % 2 === 0 && (
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl">
                  <div className="flex items-center gap-2 text-2xl font-semibold mb-6">
                    <FaBell />
                    <h2>Upcoming Events</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map((event, idx) => (
                      <div
                        key={idx}
                        className="bg-white/10 p-5 rounded-xl cursor-pointer transform transition-all hover:-translate-y-1 hover:scale-105"
                      >
                        <h3 className="font-semibold text-lg">{event.title}</h3>
                        <p className="text-sm mt-1">{event.date}</p>
                        <p className="text-sm">{event.mode}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Explore;
