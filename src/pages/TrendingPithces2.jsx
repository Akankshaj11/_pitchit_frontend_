import React from "react";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { GiTwoCoins } from "react-icons/gi";
import { AiFillCaretUp } from "react-icons/ai";

/* ---------------- DATA ---------------- */

const pitches = [
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

/* ---------------- COMPONENT ---------------- */

const TrendingPitches2 = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar2 />

      <main className="flex-grow px-4 sm:px-6 md:px-10 lg:px-20 py-10">
        {/* Header */}
       <h1 className="text-2xl font-semibold mb-6 flex items-center gap-1">
  <AiFillCaretUp className="text-red-600 text-4xl animate-bounce" />
  Trending Pitches
</h1>



        {/* Pitch Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pitches.map((item, idx) => (
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
                  <strong>Pitch by :</strong> {item.author}
                </p>
              </div>

              {/* Stats + View */}
              <div className="flex justify-between mt-4 text-gray-500 text-sm items-center">
                <div className="flex gap-4 items-center">
                  <span className="flex items-center gap-1">
                    <AiFillHeart className="text-red-500 text-lg" />
                    {item.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <BiCommentDetail className="text-gray-500 text-lg" />
                    {item.comments}
                  </span>
                  <span className="flex items-center gap-1">
                    <GiTwoCoins className="text-yellow-500 text-lg" />
                    {item.coins}
                  </span>
                </div>

                <button className="text-blue-600 text-xs hover:underline">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TrendingPitches2;
