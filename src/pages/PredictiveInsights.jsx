import React, { useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  Star,
  BarChart2,
  Eye,
  Bell,
  AlertCircle,
  Target,
  CheckCircle,
} from "lucide-react";
import { Line } from "react-chartjs-2";
import Sidebar from "../components/Sidebar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function PredictiveInsights() {
  const [open, setOpen] = useState(false);

  // Top 3 cards data
  const cardsData = [
    {
      title: "Predicted Reviews Next Week",
      icon: <Star size={20} className="text-violet-400" />,
      value: "3.8k",
      analytics: { type: "up", value: "+12%" },
    },
    {
      title: "Predicted Rating Trend",
      icon: <BarChart2 size={20} className="text-violet-400" />,
      value: "4.7/5",
      analytics: { type: "stable", text: "Stable" },
    },
    {
      title: "Engagement Growth Forecast",
      icon: <Eye size={20} className="text-violet-400" />,
      value: "18%",
      analytics: { type: "up", value: "+3%" }, // or { type: "down", value: "-4%" }
    },
  ];

  // Graph data
  const chartData = {
    labels: [
      "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
    ],
    datasets: [
      {
        label: "Projected Score",
        data: [3.5, 3.7, 3.9, 4.1, 4.2, 4.3, 4.5, 4.6, 4.7, 4.8, 4.9, 5],
        borderColor: "#6366F1",
        backgroundColor: "transparent",
        tension: 0.4,
      },
      {
        label: "Projected Views",
        data: [500, 800, 1200, 1500, 1800, 2200, 2700, 3200, 3800, 4500, 5200, 6000],
        borderColor: "#EC4899",
        backgroundColor: "transparent",
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: { legend: { labels: { color: "#D1D5DB" } } },
    scales: {
      x: { ticks: { color: "#D1D5DB" }, grid: { color: "#1E293B" } },
      y: { ticks: { color: "#D1D5DB" }, grid: { color: "#1E293B" } },
    },
  };

  return (
    <div className="flex min-h-screen bg-[#0B0F1A]">
      <Sidebar open={open} setOpen={setOpen} />

      <main className="flex-1 md:ml-64 text-gray-200 px-4 md:px-8 py-5 font-sans">
        {/* Heading */}
        <h1 className="text-xl md:text-2xl font-bold text-white mb-6">
          Predictive Insights
        </h1>

        {/* Top Row: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {cardsData.map((card, i) => (
            <div
              key={i}
              className="bg-[#151A2D] rounded-2xl p-5 border border-white/5 flex flex-col justify-between"
            >
              <div className="flex items-center gap-2 text-gray-400 mb-4">
                <div className="p-2 rounded-lg bg-[#0B0F1A]">
                  {card.icon}
                </div>
                <span className="text-sm font-medium">{card.title}</span>
              </div>

              <p className="text-2xl font-bold text-white mb-3">{card.value}</p>

              {card.analytics.type === "up" && (
                <div className="flex items-center gap-1 text-emerald-400 font-bold text-sm">
                  <TrendingUp size={14} /> {card.analytics.value}
                </div>
              )}

              {card.analytics.type === "down" && (
                <div className="flex items-center gap-1 text-rose-400 font-bold text-sm">
                  <TrendingDown size={14} /> {card.analytics.value}
                </div>
              )}

              {card.analytics.type === "stable" && (
                <div className="flex items-center gap-1 text-gray-400 font-bold text-sm">
                  → {card.analytics.text}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Middle Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Left Section: Full Card with Graph */}
          <div className="lg:col-span-2 bg-[#151A2D] rounded-2xl p-6 border border-white/5">
            <h2 className="text-lg font-semibold text-white mb-4">
              Pitch Performance Projection
            </h2>
            <p className="text-sm text-gray-400 mb-6">
              Future projections for pitch score and views over the next 12 months
            </p>
            <Line data={chartData} options={chartOptions} />
          </div>

          {/* Right Section: Two Cards stacked */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#151A2D] rounded-2xl p-5 border border-white/5">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle size={18} className="text-violet-400" />
                <span className="font-medium text-gray-300 text-sm">
                  Upcoming Milestone Alert
                </span>
              </div>
              <p className="text-sm text-gray-400">
                Your pitch is projected to reach <span className="text-white font-bold">2000 views</span> this month, exceeding initial targets by 15%.
              </p>
            </div>

            <div className="bg-[#151A2D] rounded-2xl p-5 border border-white/5">
              <div className="flex items-center gap-2 mb-2">
                <Target size={18} className="text-violet-400" />
                <span className="font-medium text-gray-300 text-sm">Opportunity Identified</span>
              </div>
              <p className="text-sm text-gray-400">
                Chances of achieving <span className="text-white font-bold">5+ new reviews next week: 78%</span>. Focus on engaging new viewers for conversion.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row: Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Suggested Actions */}
          <div className="bg-[#151A2D] rounded-2xl p-5 border border-white/5">
            <h2 className="text-lg font-semibold text-white mb-4">Suggested Actions</h2>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-violet-400" />
                Post pitch update on Wednesday — peak community activity
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-violet-400" />
                Analyze top performing keywords from recent searches
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-violet-400" />
                Segment audience by engagement level for targeted outreach
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-violet-400" />
                Experiment with a new call-to-action in your pitch description
              </li>
            </ul>
          </div>

          {/* Recent Activity */}
          <div className="bg-[#151A2D] rounded-2xl p-5 border border-white/5">
            <h2 className="text-lg font-semibold text-white mb-4">Recent Activity</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-red-400">
                <Bell size={16} /> 
                <div>
                  <span className="font-bold text-white">Critical:</span> Performance drop detected in "Introduction" section
                  <div className="text-gray-400 text-xs">2 hours ago</div>
                </div>
              </li>
              <li className="flex items-start gap-2 text-yellow-400">
                <Bell size={16} />
                <div>
                  <span className="font-bold text-white">Warning:</span> Engagement forecast for next month revised down by 5%
                  <div className="text-gray-400 text-xs">Yesterday</div>
                </div>
              </li>
              <li className="flex items-start gap-2 text-emerald-400">
                <Bell size={16} />
                <div>
                  <span className="font-bold text-white">Insight:</span> New audience segment identified in North America
                  <div className="text-gray-400 text-xs">2 days ago</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
