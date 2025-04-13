"use client";

import React from "react";
import { motion } from "framer-motion";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

const BMSProgram = () => {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-6xl font-bold text-center text-blue-900 mb-4"
          >
            Bachelor of Management Studies (BMS)
          </motion.h1>

          <motion.h2
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-3xl text-center text-blue-900 mb-8"
          >
            College Course in Mumbai
          </motion.h2>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6 mb-8"
          >
            <h2 className="text-4xl font-semibold mb-4 text-blue-900">
              Program Highlights
            </h2>
            <p className="text-blue-900 text-xl mb-4">
              Digital Ready Professionals for a Dynamic Future
            </p>
            <p className="text-blue-900 text-xl">
              In today's digital and data-driven era, the BMS program aims at
              developing key attributes within students:
            </p>
            <ul className="list-disc pl-5 text-blue-900 text-lg mt-4">
              <li>
                Data Literacy – ability to derive insights from data for making
                informed decisions
              </li>
              <li>
                Agile Leadership – capability to lead teams, leverage agile
                methodologies and adaptive strategies
              </li>
              <li>
                Digital Communication – leveraging digital channels and
                platforms for effective communication
              </li>
              <li>
                Tech-Savviness – proficiency with digital tools and technologies
                relevant to business operations
              </li>
              <li>
                Entrepreneurial Thinking – evaluating complex situations and
                proposing effective solutions
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-3xl font-semibold mb-4 text-blue-900">
                Eligibility Criteria
              </h3>
              <ul className="list-disc pl-5 text-blue-900 text-lg">
                <li>Minimum 50% aggregate marks in 10+2</li>
                <li>Entrance exam of MHCET or AIMA UGAT</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-3xl font-semibold mb-4 text-blue-900">
                Key Skills Developed
              </h3>
              <ul className="list-disc pl-5 text-blue-900 text-lg">
                <li>Critical & Analytical thinking</li>
                <li>Communication & Negotiation skills</li>
                <li>Problem solving skills</li>
                <li>Digital skills</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-4xl font-semibold mb-6 text-blue-900">
              Career Opportunities
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-blue-900">
                  Job Roles
                </h3>
                <ul className="list-disc pl-5 text-blue-900 text-lg">
                  <li>Marketing Manager</li>
                  <li>Quality Manager</li>
                  <li>Business Development Executive</li>
                  <li>Consultant</li>
                  <li>HR Executive</li>
                  <li>Assistant Manager</li>
                  <li>Finance Manager</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-blue-900">
                  Admission Process
                </h3>
                <div className="text-blue-900 text-lg">
                  <p>The admission procedure involves:</p>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Application Forms with academic details</li>
                    <li>Entrance Exam Scores</li>
                    <li>General Aptitude Assessment</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default BMSProgram;
