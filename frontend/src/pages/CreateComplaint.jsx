import { useState } from "react";
import UserLayout from "../layouts/UserLayout";
import api from "../services/api";

function CreateComplaint() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/complaints", {
        title,
        description,
      });

      alert("Complaint submitted successfully");
      setTitle("");
      setDescription("");
    } catch (err) {
      console.error(err);
      alert("Failed to submit complaint");
    }
  };

  return (
    <UserLayout>
      <h1 className="text-2xl font-bold mb-6">New Complaint</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow max-w-xl space-y-5"
      >
        <div>
          <label className="block text-sm font-medium mb-1">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Brief issue title"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Description
          </label>
          <textarea
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Explain the issue in detail"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* AI Preview (dummy for now) */}
        <div className="bg-indigo-50 p-4 rounded-lg text-sm">
          <p><strong>AI Category:</strong> Auto-detect</p>
          <p><strong>Priority:</strong> Auto-detect</p>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
        >
          Submit Complaint
        </button>
      </form>
    </UserLayout>
  );
}

export default CreateComplaint;
