import React from 'react'
import UserLayout from "../layouts/UserLayout";
import ComplaintCard from "../components/ComplaintCard";

const complaints = [
  {
    title: "Water leakage near home",
    category: "Water",
    status: "Pending",
  },
  {
    title: "Street light not working",
    category: "Electricity",
    status: "Resolved",
  },
  {
    title: "Road potholes",
    category: "Infrastructure",
    status: "In Progress",
  },
];

function MyComplaints() {
  return (
    <UserLayout>
      <h1 className="text-2xl font-bold mb-6">My Complaints</h1>

      <div className="space-y-4">
        {complaints.map((c, i) => (
          <ComplaintCard key={i} {...c} />
        ))}
      </div>
    </UserLayout>
  )
}

export default MyComplaints
