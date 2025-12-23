import React from 'react'
import UserLayout from "../layouts/UserLayout";

function CreateComplaint() {
  return (
    <UserLayout>
      <h1 className="text-2xl font-bold mb-6">New Complaint</h1>

      <form className="bg-white p-6 rounded-xl shadow max-w-xl space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1">
            Title
          </label>
          <input
            type="text"
            placeholder="Brief issue title"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Description
          </label>
          <textarea
            rows="4"
            placeholder="Explain the issue in detail"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>

        {/* AI Preview (dummy) */}
        <div className="bg-indigo-50 p-4 rounded-lg text-sm">
          <p>
            <strong>AI Category:</strong> Water Issue
          </p>
          <p>
            <strong>Priority:</strong> High
          </p>
        </div>

        <button
          type="button"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
        >
          Submit Complaint
        </button>
      </form>
    </UserLayout>
  )
}

export default CreateComplaint
