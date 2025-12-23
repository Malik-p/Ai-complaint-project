import React from 'react'
import { LayoutDashboard, ClipboardList, BarChart } from "lucide-react";
import { NavLink } from "react-router-dom";

function AdminSidebar() {
    const linkClass =
        "flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-indigo-100";
    return (
        <aside className="w-64 bg-white shadow-md p-4">
            <h2 className="text-xl font-bold text-indigo-600 mb-6">
                Admin Panel
            </h2>

            <nav className="space-y-2">
                <NavLink to="/admin/dashboard" className={linkClass}>
                    <LayoutDashboard size={18} /> Dashboard
                </NavLink>

                <NavLink to="/admin/complaints" className={linkClass}>
                    <ClipboardList size={18} /> Complaints
                </NavLink>

                <NavLink to="/admin/analytics" className={linkClass}>
                    <BarChart size={18} /> Analytics
                </NavLink>
            </nav>
        </aside>
    )
}

export default AdminSidebar
