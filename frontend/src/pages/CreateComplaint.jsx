import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import api from "../services/api";

function CreateComplaint() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [loadingAI, setLoadingAI] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("Title and description are required");
      return;
    }

    try {
      setSubmitting(true);

      await api.post("/complaints", {
        title,
        description,
        name,
        address,
      });

      alert("Complaint submitted successfully");
      navigate("/my-complaints"); // ✅ better UX
    } catch (err) {
      console.error(err);
      alert("Failed to submit complaint");
    } finally {
      setSubmitting(false);
    }
  };

  const enhanceWithAI = async () => {
    if (!description.trim()) {
      alert("Write a description first");
      return;
    }

    try {
      setLoadingAI(true);
      const res = await api.post("/ai/enhance-description", {
        description,
      });
      setDescription(res.data.enhancedDescription);
    } catch {
      alert("AI enhancement failed");
    } finally {
      setLoadingAI(false);
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
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-lg px-4 py-2"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Address</label>
          <textarea
            rows="2"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border rounded-lg px-4 py-2"
            placeholder="House no, street, area, city"
          />
        </div>


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
          />
        </div>

        {/* AI Preview */}
        <div className="bg-indigo-50 p-4 rounded-lg text-sm">
          <p><strong>AI Category:</strong> Auto-detect</p>
          <p><strong>Priority:</strong> Auto-detect</p>
        </div>

        <button
          type="button"
          onClick={enhanceWithAI}
          disabled={loadingAI}
          className="w-full border border-indigo-600 text-indigo-600 py-2 rounded-lg hover:bg-indigo-50 disabled:opacity-60"
        >
          {loadingAI ? "Enhancing..." : "Enhance with AI"}
        </button>

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 disabled:opacity-60"
        >
          {submitting ? "Submitting..." : "Submit Complaint"}
        </button>
      </form>
    </UserLayout>
  );
}

export default CreateComplaint;
