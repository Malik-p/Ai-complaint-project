import React from 'react'
import { Home, PlusCircle, FileText } from "lucide-react";
import { NavLink } from "react-router-dom";

function Sidebar() {

  const linkClass =
    "flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-indigo-100";

  return (
    <aside className="w-64 bg-white shadow-md p-4">
      <h2 className="text-xl font-bold text-indigo-600 mb-6">
        Complaint AI
      </h2>

      <nav className="space-y-2">
        <NavLink to="/dashboard" className={linkClass}>
          <Home size={18} /> Dashboard
        </NavLink>

        <NavLink to="/create" className={linkClass}>
          <PlusCircle size={18} /> New Complaint
        </NavLink>

        <NavLink to="/my-complaints" className={linkClass}>
          <FileText size={18} /> My Complaints
        </NavLink>
      </nav>
    </aside>
  )
}

export default Sidebar
