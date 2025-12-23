import React from 'react'
import AdminLayout from "../layouts/AdminLayout";

const complaints = [
  {
    id: 1,
    title: "Water leakage",
    category: "Water",
    priority: "High",
    status: "Pending",
  },
  {
    id: 2,
    title: "Street light issue",
    category: "Electricity",
    priority: "Medium",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Road potholes",
    category: "Infrastructure",
    priority: "Low",
    status: "Resolved",
  },
];

function ManageComplaints() {
  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-6">
        Manage Complaints
      </h1>

      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-4">Title</th>
              <th className="text-left p-4">Category</th>
              <th className="text-left p-4">Priority</th>
              <th className="text-left p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {complaints.map((c) => (
              <tr key={c.id} className="border-t">
                <td className="p-4">{c.title}</td>
                <td className="p-4">{c.category}</td>
                <td className="p-4">{c.priority}</td>
                <td className="p-4">
                  <select
                    className="border rounded px-2 py-1"
                    defaultValue={c.status}
                  >
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Resolved</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  )
}

export default ManageComplaints
