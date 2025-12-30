

import React, { useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import Sidebar from "../components/Sidebar";

const sentimentData = [
  { name: "Positive", value: 45, color: "#22c55e" },
  { name: "Neutral", value: 16, color: "#8b5cf6" },
  { name: "Negative", value: 10, color: "#ef4444" },
];

const barData = [
  { name: "Problem / Solution", value: 45 },
  { name: "Team & Execution", value: 70 },
  { name: "Market Fit", value: 90 },
  { name: "Revenue Model", value: 130 },
  { name: "Idea Clarity", value: 180 },
];

export default function SentimentAndFeedbackInsights() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#0B0F1A]">
      <Sidebar open={open} setOpen={setOpen} />

      <main className="flex-1 md:ml-64 px-4 md:px-8 py-5 text-gray-200 font-sans">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between mb-10 gap-4">
          <div>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white">
              Sentiment & Feedback Insights
            </h1>
            <p className="text-sm text-gray-400 mt-1">
              Understand audience perception and review trends
            </p>
          </div>
        </div>

        {/* Top Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 mb-8">
          <MetricCard
            title="Positive Feedback"
            value="45%"
            change="2.5%"
            positive
          />
          <MetricCard
            title="Neutral Feedback"
            value="16%"
            change="-1.2%"
          />
          <MetricCard
            title="Negative Feedback"
            value="10%"
            change="0.8%"
            negative
          />
        </div>

        {/* Middle Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Sentiment Distribution */}
          <div className="bg-[#151A2D] rounded-2xl p-6 border border-white/5">
            <h2 className="text-lg font-semibold text-white mb-6">
              Sentiment Distribution
            </h2>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sentimentData}
                    dataKey="value"
                    nameKey="name"
                    outerRadius="70%"
                  >
                    {sentimentData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="flex justify-between mt-6 text-xs text-gray-400">
              <LegendDot color="bg-green-500" label="Positive" />
              <LegendDot color="bg-violet-500" label="Neutral" />
              <LegendDot color="bg-red-500" label="Negative" />
            </div>
          </div>

          {/* Frequent Review Terms */}
          <div className="bg-[#151A2D] rounded-2xl p-6 border border-white/5">
            <h2 className="text-lg font-semibold text-white mb-6">
              Frequent Review Terms
            </h2>

            <div className="flex flex-wrap gap-2">
              {[
                "User Experience",
                "Usability",
                "Performance",
                "Bug Report",
                "Customer Support",
                "Speed",
                "Reliability",
                "Navigation",
                "Value Proposition",
              ].map((term) => (
                <span
                  key={term}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-[#0B0F1A] text-gray-300 border border-white/5"
                >
                  {term}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Feedback Theme Clustering */}
        <div className="bg-[#151A2D] rounded-2xl p-6 md:p-8 border border-white/5 mb-8">
          <h2 className="text-lg font-semibold text-white mb-6">
            Feedback Theme Clustering
          </h2>

          <div className="h-80 md:h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} layout="vertical">
                <XAxis type="number" domain={[0, 180]} />
                <YAxis type="category" dataKey="name" width={160} />
                <Bar dataKey="value" fill="#8B5CF6" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI Assistant */}
        <div className="bg-[#151A2D] rounded-2xl p-6 border border-white/5">
          <h2 className="text-lg font-semibold text-white mb-4">
            AI Feedback Assistant
          </h2>

          <ul className="space-y-3 text-sm text-gray-300">
            <li>• Improve onboarding clarity and value proposition.</li>
            <li>• Add feature request capability inside the app.</li>
            <li>• Optimize performance during peak usage.</li>
          </ul>

          <button className="mt-6 px-5 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-sm font-medium">
            Ask AI for Detailed Feedback
          </button>
        </div>
      </main>
    </div>
  );
}

/* ------------------ Small Components ------------------ */

function MetricCard({ title, value, change, positive, negative }) {
  return (
    <div className="bg-[#151A2D] rounded-2xl p-5 border border-white/5">
      <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">
        {title}
      </p>
      <p className="text-2xl font-bold text-white">{value}</p>
      <p
        className={`mt-2 flex items-center gap-1 text-xs font-semibold ${
          positive
            ? "text-emerald-400"
            : negative
            ? "text-rose-400"
            : "text-gray-400"
        }`}
      >
        {positive ? (
          <ArrowUp size={14} />
        ) : negative ? (
          <ArrowDown size={14} />
        ) : null}
        {change}
      </p>
    </div>
  );
}

function LegendDot({ color, label }) {
  return (
    <span className="flex items-center gap-2">
      <span className={`w-2.5 h-2.5 rounded-full ${color}`} />
      {label}
    </span>
  );
}
