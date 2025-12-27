import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      <h1 className="text-xl font-bold text-indigo-600">
        AI Complaint System
      </h1>

      <div className="flex gap-4">

        <Link to='/login'>
          <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600">
            Login
          </button>
        </Link>

        <Link to='/signup'>
          <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
            Sign Up
          </button>
        </Link>


      </div>
    </nav>
  )
}

export default Navbar
