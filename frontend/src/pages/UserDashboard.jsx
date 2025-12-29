import { useEffect, useState } from "react";
import UserLayout from "../layouts/UserLayout";
import api from "../services/api";

function UserDashboard() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    api.get("/complaints/me").then((res) => {
      setComplaints(res.data);
    });
  }, []);

  const total = complaints.length;
  const pending = complaints.filter(c => c.status === "pending").length;
  const resolved = complaints.filter(c => c.status === "resolved").length;

  return (
    <UserLayout>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { label: "Total Complaints", value: total },
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

      {/* RECENT COMPLAINTS */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">
          Recent Complaints
        </h2>

        {complaints.length === 0 ? (
          <p className="text-gray-500 text-center">
            No complaints raised yet.
          </p>
        ) : (
          <ul className="space-y-4">
            {complaints.slice(0, 5).map((c) => (
              <li
                key={c._id}
                className="flex justify-between border-b pb-2"
              >
                <span>{c.title}</span>
                <span className="text-sm capitalize text-indigo-600">
                  {c.status.replace("_", " ")}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </UserLayout>
  );
}

export default UserDashboard;
