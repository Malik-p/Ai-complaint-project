import React from 'react'
import Navbar from '../components/Navbar.jsx'

function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      <Navbar />

      <section className="max-w-6xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Raise Complaints <br />
            <span className="text-indigo-600">Smarter with AI</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            A smart platform to raise, track, and resolve issues efficiently.
            AI automatically categorizes and prioritizes your complaints.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 text-white bg-indigo-600 rounded-lg font-medium hover:bg-indigo-700">
              Get Started
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:border-indigo-600">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hidden md:block">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="space-y-4">
              <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
              <div className="h-3 w-full bg-gray-100 rounded"></div>
              <div className="h-3 w-5/6 bg-gray-100 rounded"></div>
              <div className="h-3 w-4/6 bg-gray-100 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Landing
