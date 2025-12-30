



import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import Sidebar from "../components/Sidebar";

const evolutionData = [
  { day: "May 1", score: 62 },
  { day: "May 3", score: 64 },
  { day: "May 5", score: 66 },
  { day: "May 7", score: 65 },
  { day: "May 9", score: 69 },
  { day: "May 11", score: 71 },
  { day: "May 13", score: 70 },
  { day: "May 15", score: 73 },
  { day: "May 17", score: 76 },
  { day: "May 19", score: 74 },
  { day: "May 21", score: 77 },
  { day: "May 23", score: 78 },
  { day: "May 25", score: 76 },
  { day: "May 27", score: 79 },
  { day: "May 29", score: 80 },
  { day: "May 31", score: 78 },
];

const contributionData = [
  { name: "Engagement", value: 88 },
  { name: "Sentiment", value: 84 },
  { name: "Completion Rate", value: 90 },
];

export default function PitchScoreAnalytics() {
  const [open, setOpen] = useState(false);
  const score = 78;
  const circumference = 2 * Math.PI * 60;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="flex min-h-screen bg-[#0F1220] text-white">
      <Sidebar open={open} setOpen={setOpen} />

      <main className="flex-1 md:ml-64 p-6 md:p-8 space-y-8">
        {/* Heading */}
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold">
            Pitch Score Analytics
          </h1>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Overall Pitch Score */}
          <div className="bg-gradient-to-br from-[#1B2B52] to-[#111827] rounded-xl p-6 shadow-lg">
            <h2 className="text-sm text-gray-300 font-medium">
              Overall Pitch Score
            </h2>

            <div className="flex justify-center mt-6">
              <div className="relative w-44 h-44">
                <svg className="w-full h-full -rotate-90">
                  <circle
                    cx="88"
                    cy="88"
                    r="60"
                    stroke="#1F2937"
                    strokeWidth="10"
                    fill="none"
                  />
                  <circle
                    cx="88"
                    cy="88"
                    r="60"
                    stroke="url(#grad)"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="grad">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold">{score}</span>
                  <span className="text-xs text-gray-400 mt-1">Score</span>
                </div>
              </div>
            </div>

            <p className="text-center mt-6 text-sm text-gray-300">
              Top <span className="text-indigo-400 font-semibold">15%</span> of
              all startups in your category
            </p>
          </div>

          {/* Score Contributions */}
          <div className="bg-[#161A2B] rounded-xl p-6 shadow-lg">
            <h2 className="text-sm font-semibold">Score Contributions</h2>
            <p className="text-xs text-gray-400 mb-6">
              Breakdown of factors influencing your pitch score.
            </p>

            <div className="space-y-6">
              {contributionData.map((item) => (
                <div key={item.name}>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-gray-300">{item.name}</span>
                    <span className="text-gray-400">{item.value}%</span>
                  </div>

                  {/* Taller Bar */}
                  <div className="w-full h-3 rounded-full bg-gray-700">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pitch Score Evolution */}
        <div className="bg-[#161A2B] rounded-xl p-6 md:p-8 shadow-lg">
          <h2 className="text-sm font-semibold">
            Pitch Score Evolution (30 Days)
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Track your progress over the past month
          </p>

          <div className="flex items-center gap-2 mt-3 text-sm">
            <ArrowUpRight size={16} className="text-blue-500" />
            <span className="text-blue-500 font-medium">
              Pitch score improved +8%
            </span>
            <span className="text-gray-300">
              since last update. Keep up the great work!
            </span>
          </div>

          <div className="w-full h-80 mt-6">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={evolutionData}>
                <XAxis dataKey="day" tick={{ fill: "#9CA3AF", fontSize: 10 }} />
                <YAxis domain={[50, 100]} tick={{ fill: "#9CA3AF", fontSize: 10 }} />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#6366F1"
                  strokeWidth={2}
                  dot={{ r: 3, fill: "#6366F1" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Generate Report */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 flex items-center justify-between shadow-lg">
          <h3 className="text-lg font-semibold">
            Generate Full Pitch Score Report (PDF)
          </h3>
          <button className="bg-white text-blue-600 px-5 py-2 rounded-lg font-medium hover:bg-gray-100 transition">
            Generate Report
          </button>
        </div>
      </main>
    </div>
  );
}
