"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProgramForm() {
  const [role, setRole] = useState("working");

  return (
    <section className="w-full bg-[#FFF9F9] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* LEFT ILLUSTRATION */}
        <div className="flex justify-center order-1 lg:order-none">
          <Image
            src="/svg/Illustration.svg"
            alt="Program Illustration"
            width={480}
            height={420}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
            priority
          />
        </div>

        {/* RIGHT FORM CONTENT */}
        <div className="order-2 lg:order-none">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-3">
            Want to know more about the <br className="hidden sm:block" /> Program?
          </h2>

          <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-10">
            Fill out the form below and our counselors will contact you within
            24 hours
          </p>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

            {/* Name */}
            <div>
              <label className="text-sm text-gray-700 mb-1 block">
                Enter your name
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-red-500"
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="text-sm text-gray-700 mb-1 block">
                Your Mobile No.
              </label>
              <input
                type="tel"
                placeholder="+91 -"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-red-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-700 mb-1 block">
                Your Email Id
              </label>
              <input
                type="email"
                placeholder="abc@abc.com"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-red-500"
              />
            </div>

            {/* Course */}
            <div>
              <label className="text-sm text-gray-700 mb-1 block">
                Interested Course For
              </label>
              <select className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm text-gray-600 focus:outline-none focus:border-red-500">
                <option>Select</option>
                <option>Master in Digital Marketing</option>
                <option>Digital Marketing Specialist</option>
                <option>Best Digital Marketing Course for Business Owners</option>
                <option>Customised Course in Digital Marketing</option>
              </select>
            </div>

            {/* Role */}
            <div className="sm:col-span-2 mt-2">
              <label className="text-sm text-gray-700 block mb-3">
                You are a
              </label>

              <div className="flex flex-wrap gap-4 sm:gap-6">
                {[
                  { label: "Working Professional", value: "working" },
                  { label: "Business Owner", value: "business" },
                  { label: "Student", value: "student" },
                  { label: "Other", value: "other" },
                ].map((item) => (
                  <label
                    key={item.value}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="role"
                      value={item.value}
                      checked={role === item.value}
                      onChange={(e) => setRole(e.target.value)}
                      className="accent-red-500"
                    />
                    <span className="text-gray-700 text-sm">
                      {item.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit */}
            <div className="sm:col-span-2 mt-6 flex justify-center sm:justify-start">
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white px-10 sm:px-12 py-3 rounded-full text-sm sm:text-base font-medium transition"
              >
                Submit
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
