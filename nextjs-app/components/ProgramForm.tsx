"use client";

import { useState } from "react";

export default function ProgramForm() {
  const [role, setRole] = useState("");

  return (
    <section className="w-full bg-black text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE TEXT */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Want to know more about <br /> the Program?
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Fill out the form below and our counselors will contact <br /> you within 24 hours
          </p>
        </div>

        {/* RIGHT SIDE FORM */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* First Name */}
          <div className="col-span-1">
            <label className="text-sm mb-2 block">First name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              className="w-full bg-[#1a1a1a] border border-red-500/30 text-gray-200 rounded-full px-5 py-3 focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Last Name */}
          <div className="col-span-1">
            <label className="text-sm mb-2 block">Last name</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              className="w-full bg-[#1a1a1a] border border-red-500/30 text-gray-200 rounded-full px-5 py-3 focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Email */}
          <div className="col-span-1">
            <label className="text-sm mb-2 block">Email Address</label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full bg-[#1a1a1a] border border-red-500/30 text-gray-200 rounded-full px-5 py-3 focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Mobile Number */}
          <div className="col-span-1">
            <label className="text-sm mb-2 block">Mobile Number</label>
            <input
              type="number"
              placeholder="Enter mobile number"
              className="w-full bg-[#1a1a1a] border border-red-500/30 text-gray-200 rounded-full px-5 py-3 focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Course */}
          <div className="col-span-1">
            <label className="text-sm mb-2 block">Interested Course</label>
            <select
              className="w-full bg-[#1a1a1a] border border-red-500/30 text-gray-300 rounded-full px-5 py-3 focus:outline-none focus:border-red-500"
            >
              <option>Select your course</option>
              <option>Digital Marketing</option>
              <option>Web Development</option>
              <option>UI/UX</option>
            </select>
          </div>

          {/* Message */}
          <div className="col-span-1">
            <label className="text-sm mb-2 block">Message (Optional)</label>
            <input
              type="text"
              placeholder="Tell us about your career goals or any…"
              className="w-full bg-[#1a1a1a] border border-red-500/30 text-gray-200 rounded-full px-5 py-3 focus:outline-none focus:border-red-500"
            />
          </div>

          {/* ROLE SECTION */}
          <div className="col-span-2 mt-4">
            <label className="text-sm block mb-2">Select Role</label>

            <div className="flex items-center gap-10 mt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="professional"
                  onChange={(e) => setRole(e.target.value)}
                  className="accent-red-500 w-4 h-4"
                />
                <span className="text-gray-300">Working Professional</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  onChange={(e) => setRole(e.target.value)}
                  className="accent-red-500 w-4 h-4"
                />
                <span className="text-gray-300">Student</span>
              </label>
            </div>
          </div>

          {/* SUBMIT */}
          <div className="col-span-2">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 transition-all text-white rounded-full w-full md:w-40 py-3 text-lg font-medium"
            >
              Submit
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}
