import { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import api from "../services/api";

function AdminDashboard() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    api.get("/complaints").then((res) => {
      setComplaints(res.data);
    });
  }, []);

  const total = complaints.length;
  const pending = complaints.filter(c => c.status === "pending").length;
  const resolved = complaints.filter(c => c.status === "resolved").length;
  const highPriority = complaints.filter(
    c => c.priority?.toLowerCase() === "high"
  ).length;

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {complaints.length === 0 ? (
        <div className="bg-white p-6 rounded-xl shadow text-center text-gray-500">
          No complaints available.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: "Total Complaints", value: total },
            { label: "High Priority", value: highPriority },
            { label: "Pending", value: pending },
            { label: "Resolved", value: resolved },
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
      )}
    </AdminLayout>
  );
}

export default AdminDashboard;
