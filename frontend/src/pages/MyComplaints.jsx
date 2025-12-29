import { useEffect, useState } from "react";
import UserLayout from "../layouts/UserLayout";
import ComplaintCard from "../components/ComplaintCard";
import api from "../services/api";

function MyComplaints() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    api.get("/complaints/me").then((res) => {
      setComplaints(res.data);
    });
  }, []);

  return (
    <UserLayout>
      <h1 className="text-2xl font-bold mb-6">My Complaints</h1>

      {complaints.length === 0 ? (
        <div className="bg-white p-6 rounded-xl shadow text-center text-gray-500">
          You haven’t raised any complaints yet.
        </div>
      ) : (
        <div className="space-y-4">
          {complaints.map((c) => (
            <ComplaintCard
              key={c._id}
              title={c.title}
              category={c.category}
              status={c.status}
            />
          ))}
        </div>
      )}
    </UserLayout>
  );
}

export default MyComplaints;
