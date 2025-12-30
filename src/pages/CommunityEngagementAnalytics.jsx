


import React, { useState } from "react";
import {
  Bell,
  Search,
  Eye,
  Clock,
  BarChart2,
  Star,
  TrendingUp,
  TrendingDown,
  Presentation,
} from "lucide-react";
import Sidebar from "../components/Sidebar";

export default function CommunityEngagementAnalytics() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#0B0F1A]">
      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* Main Content */}
      <main className="flex-1 md:ml-64 text-gray-200 px-4 md:px-8 py-5 font-sans">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
          <div>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white">
              Community Engagement Analytics
            </h1>
            <p className="text-sm text-gray-400 mt-1">
              Real-time performance metrics for your pitch deck
            </p>
          </div>

          <div className="flex gap-4">
            <button className="p-2.5 rounded-xl bg-[#151A2D] border border-white/5 hover:bg-[#1E2440] transition-colors">
              <Search size={20} className="text-gray-400" />
            </button>
            <button className="p-2.5 rounded-xl bg-[#151A2D] border border-white/5 hover:bg-[#1E2440] transition-colors relative">
              <Bell size={20} className="text-gray-400" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-violet-500 rounded-full border-2 border-[#151A2D]" />
            </button>
          </div>
        </div>

        {/* Top Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 mb-8">
          <MetricCard title="Total Views" value="12,845" icon={<Eye size={18} />} change="+8.1%" positive />
          <MetricCard title="Avg Watch Time" value="03:45" icon={<Clock size={18} />} change="+2.5%" positive />
          <MetricCard title="Completion" value="62%" icon={<BarChart2 size={18} />} change="-1.2%" />
          <MetricCard title="Total Reviews" value="486" icon={<Star size={18} />} change="+4.3%" positive />

          <div className="col-span-2 md:col-span-1 bg-[#151A2D] rounded-2xl p-5 border border-white/5 flex flex-col justify-between">
            <div className="flex items-center gap-2 text-gray-400">
              <Presentation size={18} className="text-violet-400" />
              <span className="text-xs font-medium uppercase tracking-wider">
                Top Slide
              </span>
            </div>
            <div>
              <p className="mt-4 text-lg font-bold text-white">
                Slide 3: Problem
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Highest retention rate
              </p>
            </div>
          </div>
        </div>

        {/* Middle Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Engagement Funnel */}
          <div className="bg-[#151A2D] rounded-2xl p-6 border border-white/5">
            <h2 className="text-lg font-semibold text-white">
              Engagement Funnel
            </h2>
            <p className="text-sm text-gray-400 mb-8">
              User progression through pitch stages
            </p>

            <div className="space-y-6">
              <FunnelRow label="Opened Pitch" width="95%" value="100%" />
              <FunnelRow label="Watched Fully" width="70%" value="70%" />
              <FunnelRow label="Rated Pitch" width="45%" value="45%" />
              <FunnelRow label="Left Review" width="30%" value="30%" />
            </div>
          </div>

          {/* Slide Engagement Heatmap */}
          <div className="bg-[#151A2D] rounded-2xl p-6 border border-white/5">
            <h2 className="text-lg font-semibold text-white mb-6">
              Slide Engagement Heatmap
            </h2>

            <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
              {heatmapData.map((slide, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[1.5fr_1fr_1fr] items-center bg-[#0B0F1A]/50 p-3 rounded-xl border border-white/5"
                >
                  <span className="text-sm font-medium text-gray-200 truncate">
                    {slide.title}
                  </span>
                  <div className="flex justify-center">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${slide.color}`}>
                      {slide.level}
                    </span>
                  </div>
                  <span className="text-right text-sm font-mono text-gray-400">
                    {slide.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Audience Drop-off */}
          <div className="bg-[#151A2D] rounded-2xl p-6 border border-white/5">
            <h2 className="text-lg font-semibold text-white">
              Audience Drop-off Analysis
            </h2>
            <p className="text-sm text-gray-400 mb-8">
              Identify where viewers lose interest
            </p>

            <div className="relative h-56 mt-4 ml-8">
              {[0, 25, 50, 75, 100].map((y) => (
                <div
                  key={y}
                  className="absolute w-full border-t border-white/5"
                  style={{ bottom: `${y}%` }}
                >
                  <span className="absolute -left-10 text-[10px] font-mono text-gray-500">
                    {y}%
                  </span>
                </div>
              ))}

              <svg
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="none"
                viewBox="0 0 500 200"
              >
                <path
                  d="M0,40 Q50,60 100,80 T200,120 T300,150 T400,180 T500,190"
                  fill="none"
                  stroke="#8B5CF6"
                  strokeWidth="3"
                />
              </svg>
            </div>

            <div className="flex justify-between text-[10px] font-mono text-gray-500 mt-6 px-1 ml-8">
              {["1","2","3","4","5","6","7","8","9","10"].map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>

          {/* Key Insights */}
          <div className="bg-[#151A2D] rounded-2xl p-6 border border-white/5 flex flex-col">
            <h2 className="text-lg font-semibold text-white mb-2">
              Key Insights
            </h2>
            <p className="text-sm text-gray-400 mb-6">
              Actionable takeaways for your pitch
            </p>

            <div className="flex-1 space-y-4">
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                <p className="text-sm text-gray-200">
                  Audience interest drops after{" "}
                  <span className="text-red-400 font-bold">slide 7 (Team)</span>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-violet-500/10 border border-violet-500/20">
                <p className="text-sm text-gray-200">
                  <span className="text-violet-400 font-bold block mb-1">
                    Suggestion:
                  </span>
                  Slide 3 performs best — your problem statement is strong.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

/* ---------- Helper Components ---------- */

function MetricCard({ title, value, icon, change, positive = false }) {
  return (
    <div className="bg-[#151A2D] rounded-2xl p-4 border border-white/5">
      <div className="flex items-center gap-2 text-gray-400 mb-4">
        <div className="p-1.5 rounded-lg bg-[#0B0F1A] text-violet-400">
          {icon}
        </div>
        <span className="text-xs uppercase tracking-wider">{title}</span>
      </div>
      <div className="flex justify-between items-baseline">
        <p className="text-2xl font-bold text-white">{value}</p>
        <span className={`text-xs font-bold flex items-center gap-1 ${positive ? "text-emerald-400" : "text-rose-400"}`}>
          {positive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          {change}
        </span>
      </div>
    </div>
  );
}

function FunnelRow({ label, width, value }) {
  return (
    <div className="flex items-center gap-4">
      <span className="w-32 text-xs text-gray-400">{label}</span>
      <div className="flex-1">
        <div
          className="h-6 rounded-md bg-gradient-to-r from-violet-600 to-violet-400"
          style={{ width }}
        />
      </div>
      <span className="w-10 text-right text-xs text-gray-500">{value}</span>
    </div>
  );
}

const heatmapData = [
  { title: "Slide 1: Introduction", level: "High", color: "bg-violet-400 text-violet-950", time: "1:30" },
  { title: "Slide 2: Market Opp", level: "High", color: "bg-violet-400 text-violet-950", time: "1:45" },
  { title: "Slide 3: Problem", level: "High", color: "bg-violet-400 text-violet-950", time: "2:10" },
  { title: "Slide 4: Solution", level: "Medium", color: "bg-violet-600 text-white", time: "1:40" },
  { title: "Slide 5: Business Model", level: "Medium", color: "bg-violet-600 text-white", time: "1:20" },
  { title: "Slide 6: Traction", level: "Medium", color: "bg-violet-600 text-white", time: "1:15" },
  { title: "Slide 7: Team", level: "Low", color: "bg-[#1E2440] text-gray-400", time: "0:50" },
];
