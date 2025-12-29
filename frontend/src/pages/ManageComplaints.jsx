import { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import api from "../services/api";

function ManageComplaints() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    api.get("/complaints").then((res) => {
      setComplaints(res.data);
    });
  }, []);

  const handleStatusChange = async (id, status) => {
    await api.put(`/complaints/${id}`, { status });

    setComplaints((prev) =>
      prev.map((c) =>
        c._id === id ? { ...c, status } : c
      )
    );
  };

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-6">
        Manage Complaints
      </h1>

      {/* EMPTY STATE */}
      {complaints.length === 0 ? (
        <div className="bg-white p-6 rounded-xl shadow text-center text-gray-500">
          No complaints found.
        </div>
      ) : (
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
                <tr key={c._id} className="border-t">
                  <td className="p-4">{c.title}</td>
                  <td className="p-4">{c.category}</td>
                  <td className="p-4">{c.priority}</td>
                  <td className="p-4">
                    <select
                      className="border rounded px-2 py-1"
                      value={c.status}
                      onChange={(e) =>
                        handleStatusChange(c._id, e.target.value)
                      }
                    >
                      <option value="pending">Pending</option>
                      <option value="in_progress">In Progress</option>
                      <option value="resolved">Resolved</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AdminLayout>
  );
}

export default ManageComplaints;
