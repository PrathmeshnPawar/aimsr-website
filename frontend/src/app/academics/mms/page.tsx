"use client";
import React from "react";
import { motion } from "framer-motion";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

const MMS = () => {
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
            Master of Management Studies (MMS)
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
              About the Program
            </h2>
            <p className="text-blue-900 text-xl">
              One of the best MMS colleges in Mumbai, Aditya Institute of
              Management Studies & Research (AIMSR) is proud to announce the
              opening of admissions for the Master of Management Studies (MMS)
              program. The MMS course at AIMSR is a 2 year Full-time Course
              affiliated to University of Mumbai and approved by DTE, Govt. of
              Maharashtra (DTE Code: MB-3438). After completion, students
              receive an MMS degree from the University of Mumbai.
            </p>
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
              <div className="text-blue-900 text-lg">
                <p className="mb-4">
                  Passed minimum three-year duration bachelor's degree awarded
                  by any of the universities recognised by University Grants
                  Commission or Association of Indian Universities in any
                  discipline with:
                </p>
                <ul className="list-disc pl-5 mb-4">
                  <li>At least 50% marks in aggregate or equivalent</li>
                  <li>
                    At least 45% for backward class categories and persons with
                    disability (Maharashtra State only)
                  </li>
                  <li>
                    Valid scores in CAT, CET & CMAT (for academic year 2024)
                  </li>
                </ul>
                <p className="text-base italic">
                  Note: Final year students may apply subject to meeting minimum
                  marks requirement before the admission cut-off date.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-3xl font-semibold mb-4 text-blue-900">
                Program Outcomes
              </h3>
              <ul className="list-disc pl-5 text-blue-900 text-lg">
                <li>
                  Develop critical-thinking and analytical approach for
                  managerial decision-making
                </li>
                <li>
                  Understand socio-cultural & economic aspects of business
                  management
                </li>
                <li>Adapt to changing global business environment</li>
                <li>
                  Develop as managers, entrepreneurs & ethical business leaders
                </li>
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
              Program Highlights
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-blue-900">
                  Pedagogy Features
                </h3>
                <ul className="list-disc pl-5 text-blue-900 text-lg">
                  <li>Intensive, interactive learning experience</li>
                  <li>Case studies based on real-life situations</li>
                  <li>Industry-connected curriculum</li>
                  <li>
                    Experienced faculty with research & consulting expertise
                  </li>
                  <li>Digital marketing & NISM certification courses</li>
                  <li>Incubation & Entrepreneurship cell (E-Cell)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-blue-900">
                  Recent Accolades
                </h3>
                <div className="space-y-3 text-blue-900 text-lg">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  >
                    Ranked 35th among top Private B-Schools in India (2024)
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  >
                    Ranked 4th among top Private B-Schools in Mumbai (2024)
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  >
                    Ranked 37th among top Private B-Schools in India (2023)
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  >
                    Best Emerging Management Institute by ET NOW (2018)
                  </motion.div>
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

export default MMS;
