import React from 'react'

function ComplaintCard({ title, category, status }) {

  const statusColor = status === 'Resolved' ? 'green' : status === 'In Progress' ? 'orange' : 'red';
  return (
    <div className="bg-white p-5 rounded-xl shadow flex justify-between items-center">
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{category}</p>
      </div>

      <span className={`text-sm font-medium ${statusColor}`}>
        {status}
      </span>
    </div>
  )
}

export default ComplaintCard;
