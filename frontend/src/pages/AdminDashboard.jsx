import React from 'react'
import AdminLayout from "../layouts/AdminLayout";

function AdminDashboard() {
  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Total Complaints", value: 124 },
          { label: "High Priority", value: 18 },
          { label: "Pending", value: 37 },
          { label: "Resolved", value: 69 },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-white p-6 rounded-xl shadow"
          >
            <p className="text-gray-500">{item.label}</p>
            <h2 className="text-3xl font-bold mt-2">{item.value}</h2>
          </div>
        ))}
      </div>
    </AdminLayout>
  )
}

export default AdminDashboard
