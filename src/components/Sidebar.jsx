





// import React from "react";
// import { useState } from "react";
// import {
//     LayoutDashboard,
//     BarChart3,
//     Users,
//     Settings,
//     HelpCircle,
//     Menu,
//     X,
// } from "lucide-react";

// export default function Sidebar() {
//     const [open, setOpen] = useState(false);

//     return (
//         <>


//             <button
//                 onClick={() => setOpen(true)}
//                 className="md:hidden fixed top-4 right-4 z-[60]
//   bg-[#151A2D] p-2.5 rounded-xl border border-white/10
//   text-white shadow-lg"
//             >
//                 <Menu size={20} />
//             </button>






//             {/* Overlay (Mobile) */}
//             {open && (
//                 <div
//                     className="fixed inset-0 bg-black/60 z-40 md:hidden"
//                     onClick={() => setOpen(false)}
//                 />
//             )}

//             {/* Sidebar */}


//             <aside
//                 className={`fixed md:static z-50 top-0 left-0 w-64 h-screen
//   bg-gradient-to-b from-[#1B1F2A] to-[#11141C]
//   text-gray-300 p-4 flex flex-col
//   transition-transform duration-300
//   overflow-y-auto
//   ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
//             >




//                 {/* Header */}
//                 <div className="flex items-center justify-between mb-8 px-2">
//                     <span className="text-xl font-bold text-white">PitchIt</span>
//                     <button className="md:hidden" onClick={() => setOpen(false)}>
//                         <X className="text-gray-400" />
//                     </button>
//                 </div>

//                 {/* Navigation */}
//                 <nav className="space-y-1">
//                     <SidebarItem icon={<LayoutDashboard size={18} />} label="Dashboard" active />
//                     <SidebarItem icon={<BarChart3 size={18} />} label="Pitches" />
//                     <SidebarItem icon={<Users size={18} />} label="Community" />
//                     <SidebarItem icon={<Settings size={18} />} label="Settings" />
//                     <SidebarItem icon={<HelpCircle size={18} />} label="Help" />
//                 </nav>

//                 {/* ✅ User Card fixed at bottom */}


//                 <div className="mt-auto pt-6">
//                     <div className="bg-[#1A1E2A] rounded-xl p-3 flex items-center gap-3 border border-white/5">
//                         <img
//                             src="https://i.pravatar.cc/40"
//                             alt="User"
//                             className="w-10 h-10 rounded-full"
//                         />
//                         <div className="flex-1">
//                             <p className="text-sm font-medium text-white">Alexandra Doe</p>
//                             <p className="text-xs text-gray-400">Online</p>
//                         </div>
//                         <span className="w-2 h-2 bg-emerald-400 rounded-full" />
//                     </div>
//                 </div>



//             </aside>


//         </>
//     );
// }

// function SidebarItem({ icon, label, active }) {
//     return (
//         <button
//             className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition
//       ${active
//                     ? "bg-[#2A2F4A] text-white shadow-md"
//                     : "hover:bg-white/5 hover:text-white"
//                 }`}
//         >
//             <span className={active ? "text-violet-400" : "text-gray-400"}>
//                 {icon}
//             </span>
//             {label}
//         </button>
//     );
// }







import React from "react";
import {
  LayoutDashboard,
  BarChart3,
  Users,
  Settings,
  HelpCircle,
  Menu,
  X,
} from "lucide-react";

export default function Sidebar({ open, setOpen }) {
  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 right-4 z-[60]
        bg-[#151A2D] p-2.5 rounded-xl border border-white/10
        text-white shadow-lg"
      >
        <Menu size={20} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 w-64 h-screen
        bg-gradient-to-b from-[#1B1F2A] to-[#11141C]
        text-gray-300 p-4 flex flex-col
        transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6 px-2">
          <span className="text-xl font-bold text-white">PitchIt</span>
          <button className="md:hidden" onClick={() => setOpen(false)}>
            <X className="text-gray-400" />
          </button>
        </div>

        {/* Navigation (scrollable) */}
        <nav className="flex-1 space-y-1 overflow-y-auto pr-1">
          <SidebarItem icon={<LayoutDashboard size={18} />} label="Dashboard" active />
          <SidebarItem icon={<BarChart3 size={18} />} label="Pitches" />
          <SidebarItem icon={<Users size={18} />} label="Community" />
          <SidebarItem icon={<Settings size={18} />} label="Settings" />
          <SidebarItem icon={<HelpCircle size={18} />} label="Help" />
        </nav>

        {/* User Card (bottom) */}
        <div className="pt-6">
          <div className="bg-[#1A1E2A] rounded-xl p-3 flex items-center gap-3 border border-white/5">
            <img
              src="https://i.pravatar.cc/40"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <p className="text-sm font-medium text-white">Alexandra Doe</p>
              <p className="text-xs text-gray-400">Online</p>
            </div>
            <span className="w-2 h-2 bg-emerald-400 rounded-full" />
          </div>
        </div>
      </aside>
    </>
  );
}

/* Sidebar Item */
function SidebarItem({ icon, label, active }) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition
      ${
        active
          ? "bg-[#2A2F4A] text-white shadow-md"
          : "hover:bg-white/5 hover:text-white"
      }`}
    >
      <span className={active ? "text-violet-400" : "text-gray-400"}>
        {icon}
      </span>
      {label}
    </button>
  );
}
