import React from 'react'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import UserDashboard from './pages/UserDashboard.jsx'
import CreateComplaint from "./pages/CreateComplaint";
import MyComplaints from "./pages/MyComplaints";
import AdminDashboard from "./pages/AdminDashboard";
import ManageComplaints from "./pages/ManageComplaints";
import AdminAnalytics from "./pages/AdminAnalytics";


function App() {
  return (
    <Routes>

      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/create" element={<CreateComplaint />} />
      <Route path="/my-complaints" element={<MyComplaints />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/complaints" element={<ManageComplaints />} />
      <Route path="/admin/analytics" element={<AdminAnalytics />} />

    </Routes>
  )
}

export default App
