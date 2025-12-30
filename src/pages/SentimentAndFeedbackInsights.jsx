


// import React from "react";
// import { ArrowUp, ArrowDown } from "lucide-react";
// import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
// import Sidebar from "../components/Sidebar";

// const sentimentData = [
//   { name: "Positive", value: 45, color: "#22c55e" },
//   { name: "Neutral", value: 16, color: "#8b5cf6" },
//   { name: "Negative", value: 10, color: "#ef4444" },
// ];

// const barData = [
//   { name: "Problem/ Solution", value: 45 },
//   { name: "Team & Execution", value: 70 },
//   { name: "Market Fit", value: 90 },
//   { name: "Revenue Model", value: 130 },
//   { name: "Idea Clarity", value: 180 },
// ];

// export default function SentimentAndFeedbackInsights() {
//   return (
//     <div className="flex">
//       <Sidebar />
//     <div className="p-4 md:p-8 space-y-8 bg-gray-900 min-h-screen">
//       {/* Heading */}
//       <div>
//         <h1 className="text-2xl md:text-3xl font-bold text-white">Sentiment and Feedback Insights</h1>
//         <hr className="mt-2 border-gray-700" />
//       </div>

//       {/* Three Cards Row */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {/* Positive Feedback */}
//         <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center md:text-left">
//           <h2 className="text-lg font-semibold text-gray-300">Positive Feedback</h2>
//           <p className="text-4xl font-bold mt-2">45%</p>
//           <p className="flex items-center justify-center md:justify-start text-green-600 mt-2 font-medium">
//             <ArrowUp size={18} /> 2.5% increase
//           </p>
//         </div>

//         {/* Neutral Feedback */}
//         <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center md:text-left">
//           <h2 className="text-lg font-semibold text-gray-300">Neutral Feedback</h2>
//           <p className="text-4xl font-bold mt-2">16%</p>
//           <p className="flex items-center justify-center md:justify-start text-gray-500 mt-2 font-medium">
//             <ArrowUp size={18} className="rotate-180" /> -1.2% change
//           </p>
//         </div>

//         {/* Negative Feedback */}
//         <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center md:text-left">
//           <h2 className="text-lg font-semibold text-gray-300">Negative Feedback</h2>
//           <p className="text-4xl font-bold mt-2">10%</p>
//           <p className="flex items-center justify-center md:justify-start text-red-600 mt-2 font-medium">
//             <ArrowDown size={18} /> 0.8% decrease
//           </p>
//         </div>
//       </div>

//       {/* Pie Chart + Tags Row */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Sentiment Distribution */}
//         <div className="bg-gray-800 p-6 rounded-xl shadow-md">
//           <h2 className="text-lg font-semibold text-gray-300 mb-4">Sentiment Distribution</h2>

//           <div className="w-full h-64">
//             <ResponsiveContainer width="100%" height="100%">
//               <PieChart>
//                 <Pie data={sentimentData} dataKey="value" nameKey="name" outerRadius="70%">
//                   {sentimentData.map((entry, index) => (
//                     <Cell key={index} fill={entry.color} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>

//           <div className="flex justify-around mt-4 text-sm">
//             <p className="flex items-center gap-2">
//               <span className="w-3 h-3 bg-green-500 rounded-full" /> Positive
//             </p>
//             <p className="flex items-center gap-2">
//               <span className="w-3 h-3 bg-violet-500 rounded-full" /> Neutral
//             </p>
//             <p className="flex items-center gap-2">
//               <span className="w-3 h-3 bg-red-500 rounded-full" /> Negative
//             </p>
//           </div>
//         </div>

//         {/* Frequent Review Terms */}
//         <div className="bg-gray-800 p-6 rounded-xl shadow-md">
//           <h2 className="text-lg font-semibold text-gray-300 mb-4">Frequent Review Terms</h2>
//           <div className="flex flex-wrap gap-2">
//             {[
//               "User Experience", "Usability", "Performance", "Bug Report",
//               "Customer Support", "Speed", "Reliability", "Navigation",
//               "Value Proposition"
//             ].map((term) => (
//               <span key={term} className="px-3 py-1 bg-blue-900 text-white text-sm rounded-full">
//                 {term}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Feedback Theme Clustering */}
//       <div className="bg-gray-800 p-6 md:p-8 rounded-xl shadow-md w-full">
//         <h2 className="text-lg font-semibold text-gray-300 mb-4">Feedback Theme Clustering</h2>

//         <div className="w-full h-80 md:h-96">
//           <ResponsiveContainer width="100%" height="100%">
//             <BarChart
//               data={barData}
//               layout="vertical"
              
//             >
//               <XAxis type="number" ticks={[0, 45, 90, 135, 180]} domain={[0, 180]} />
//               <YAxis type="category" dataKey="name" width={140} />
//               <Bar dataKey="value" fill="#6366f1" radius={[0, 8, 8, 0]} />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* AI Feedback Assistant */}
//       <div className="bg-gray-800 p-6 rounded-xl shadow-md w-full">
//         <h2 className="text-lg font-semibold text-gray-300">AI Feedback Assistant</h2>

//         <h3 className="text-md font-semibold mt-4">Top 3 Improvement Tips:</h3>
//         <ul className="list-disc ml-6 mt-2 space-y-2 text-gray-300">
//           <li>Redefine the onboarding flow to clarify the core value proposition.</li>
//           <li>Add a "Request a Feature" option within the application.</li>
//           <li>Improve performance during heavy usage to increase satisfaction.</li>
//         </ul>

//         <button className="mt-6 px-5 py-2 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700">
//           Ask AI for Detailed Feedback
//         </button>
//       </div>
//     </div>
//     </div>
//   );
// }












// import React, { useState } from "react";
// import { ArrowUp, ArrowDown } from "lucide-react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   ResponsiveContainer,
// } from "recharts";
// import Sidebar from "../components/Sidebar";

// const sentimentData = [
//   { name: "Positive", value: 45, color: "#22c55e" },
//   { name: "Neutral", value: 16, color: "#8b5cf6" },
//   { name: "Negative", value: 10, color: "#ef4444" },
// ];

// const barData = [
//   { name: "Problem / Solution", value: 45 },
//   { name: "Team & Execution", value: 70 },
//   { name: "Market Fit", value: 90 },
//   { name: "Revenue Model", value: 130 },
//   { name: "Idea Clarity", value: 180 },
// ];

// export default function SentimentAndFeedbackInsights() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="flex min-h-screen bg-gray-900">
//       {/* Sidebar */}
//       <Sidebar open={open} setOpen={setOpen} />

//       {/* Main Content */}
//       <main className="flex-1 md:ml-64 p-4 md:p-8 space-y-8 text-gray-200">
//         {/* Heading */}
//         <div>
//           <h1 className="text-2xl md:text-3xl font-bold text-white">
//             Sentiment and Feedback Insights
//           </h1>
//           <hr className="mt-2 border-gray-700" />
//         </div>

//         {/* Cards Row */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {/* Positive */}
//           <div className="bg-gray-800 p-6 rounded-xl shadow-md">
//             <h2 className="text-lg font-semibold text-gray-300">
//               Positive Feedback
//             </h2>
//             <p className="text-4xl font-bold mt-2">45%</p>
//             <p className="flex items-center text-green-500 mt-2 font-medium">
//               <ArrowUp size={18} /> 2.5% increase
//             </p>
//           </div>

//           {/* Neutral */}
//           <div className="bg-gray-800 p-6 rounded-xl shadow-md">
//             <h2 className="text-lg font-semibold text-gray-300">
//               Neutral Feedback
//             </h2>
//             <p className="text-4xl font-bold mt-2">16%</p>
//             <p className="flex items-center text-gray-400 mt-2 font-medium">
//               <ArrowUp size={18} className="rotate-180" /> -1.2% change
//             </p>
//           </div>

//           {/* Negative */}
//           <div className="bg-gray-800 p-6 rounded-xl shadow-md">
//             <h2 className="text-lg font-semibold text-gray-300">
//               Negative Feedback
//             </h2>
//             <p className="text-4xl font-bold mt-2">10%</p>
//             <p className="flex items-center text-red-500 mt-2 font-medium">
//               <ArrowDown size={18} /> 0.8% decrease
//             </p>
//           </div>
//         </div>

//         {/* Pie + Tags */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {/* Pie */}
//           <div className="bg-gray-800 p-6 rounded-xl shadow-md">
//             <h2 className="text-lg font-semibold text-gray-300 mb-4">
//               Sentiment Distribution
//             </h2>

//             <div className="w-full h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <PieChart>
//                   <Pie
//                     data={sentimentData}
//                     dataKey="value"
//                     nameKey="name"
//                     outerRadius="70%"
//                   >
//                     {sentimentData.map((entry, i) => (
//                       <Cell key={i} fill={entry.color} />
//                     ))}
//                   </Pie>
//                   <Tooltip />
//                 </PieChart>
//               </ResponsiveContainer>
//             </div>

//             <div className="flex justify-around mt-4 text-sm">
//               <span className="flex items-center gap-2">
//                 <span className="w-3 h-3 bg-green-500 rounded-full" />
//                 Positive
//               </span>
//               <span className="flex items-center gap-2">
//                 <span className="w-3 h-3 bg-violet-500 rounded-full" />
//                 Neutral
//               </span>
//               <span className="flex items-center gap-2">
//                 <span className="w-3 h-3 bg-red-500 rounded-full" />
//                 Negative
//               </span>
//             </div>
//           </div>

//           {/* Tags */}
//           <div className="bg-gray-800 p-6 rounded-xl shadow-md">
//             <h2 className="text-lg font-semibold text-gray-300 mb-4">
//               Frequent Review Terms
//             </h2>
//             <div className="flex flex-wrap gap-2">
//               {[
//                 "User Experience",
//                 "Usability",
//                 "Performance",
//                 "Bug Report",
//                 "Customer Support",
//                 "Speed",
//                 "Reliability",
//                 "Navigation",
//                 "Value Proposition",
//               ].map((term) => (
//                 <span
//                   key={term}
//                   className="px-3 py-1 bg-blue-900 text-white text-sm rounded-full"
//                 >
//                   {term}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Bar Chart */}
//         <div className="bg-gray-800 p-6 md:p-8 rounded-xl shadow-md">
//           <h2 className="text-lg font-semibold text-gray-300 mb-4">
//             Feedback Theme Clustering
//           </h2>

//           <div className="w-full h-80 md:h-96">
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={barData} layout="vertical">
//                 <XAxis
//                   type="number"
//                   ticks={[0, 45, 90, 135, 180]}
//                   domain={[0, 180]}
//                 />
//                 <YAxis type="category" dataKey="name" width={150} />
//                 <Bar
//                   dataKey="value"
//                   fill="#6366f1"
//                   radius={[0, 8, 8, 0]}
//                 />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* AI Assistant */}
//         <div className="bg-gray-800 p-6 rounded-xl shadow-md">
//           <h2 className="text-lg font-semibold text-gray-300">
//             AI Feedback Assistant
//           </h2>

//           <h3 className="text-md font-semibold mt-4">
//             Top 3 Improvement Tips:
//           </h3>

//           <ul className="list-disc ml-6 mt-2 space-y-2 text-gray-300">
//             <li>Improve onboarding clarity and value proposition.</li>
//             <li>Add a “Request Feature” option.</li>
//             <li>Optimize performance under heavy usage.</li>
//           </ul>

//           <button className="mt-6 px-5 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700">
//             Ask AI for Detailed Feedback
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// }






















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
