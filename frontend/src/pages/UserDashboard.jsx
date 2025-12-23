import React from 'react'
import UserLayout from "../layouts/UserLayout";

function UserDashboard() {
  return (
    <UserLayout>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { label: "Total Complaints", value: 12 },
          { label: "Pending", value: 4 },
          { label: "Resolved", value: 8 },
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

      {/* Recent complaints */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">
          Recent Complaints
        </h2>

        <ul className="space-y-4">
          {["Water leakage", "Power cut", "Road damage"].map(
            (title, i) => (
              <li
                key={i}
                className="flex justify-between border-b pb-2"
              >
                <span>{title}</span>
                <span className="text-sm text-indigo-600">
                  Pending
                </span>
              </li>
            )
          )}
        </ul>
      </div>
    </UserLayout>
  )
}

export default UserDashboard
