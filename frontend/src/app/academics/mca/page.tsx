"use client";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import React from "react";

export default function MCAComponent() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen p-8">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-4xl font-bold text-blue-900 mb-6">
              Master of Computer Applications (MCA)
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Unleash your potential in the world of computer applications at
              Aditya Institute of Management Studies & Research. We empower
              minds, foster strategic thinking and nurture future technocrats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                Program Highlights
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">→</span>Rigorous
                  coursework in software development
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">→</span>Specialization in
                  emerging technologies
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">→</span>Hands-on industry
                  projects
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">→</span>Expert faculty
                  with industry experience
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">→</span>State-of-the-art
                  facilities
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                Specializations
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">→</span>Programming
                  (Java, C++, Python)
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">→</span>Web & Mobile
                  Development
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">→</span>AI & Machine
                  Learning
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">→</span>Data Science &
                  Big Data
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">→</span>Cloud Computing &
                  Security
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-12 animate-slide-up">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Eligibility Criteria
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li>• Qualifying exam: MH-CET</li>
              <li>
                • Bachelor's degree with 50% aggregate (45% for reserved
                category)
              </li>
              <li>• Recognition from approved university</li>
            </ul>
          </div>

          <div className="bg-blue-900 text-white p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-6">
              Career Opportunities
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-800 p-4 rounded hover:bg-blue-700 transition duration-300">
                Software Engineer
              </div>
              <div className="bg-blue-800 p-4 rounded hover:bg-blue-700 transition duration-300">
                AI Specialist
              </div>
              <div className="bg-blue-800 p-4 rounded hover:bg-blue-700 transition duration-300">
                Systems Analyst
              </div>
              <div className="bg-blue-800 p-4 rounded hover:bg-blue-700 transition duration-300">
                Database Admin
              </div>
              <div className="bg-blue-800 p-4 rounded hover:bg-blue-700 transition duration-300">
                Web Developer
              </div>
              <div className="bg-blue-800 p-4 rounded hover:bg-blue-700 transition duration-300">
                Data Scientist
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/academics/courses/postgraduate/MCA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition duration-300"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
