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
            className="text-5xl font-bold text-center text-gray-900 mb-8"
          >
            Master of Management Studies (MMS)
          </motion.h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6 mb-8"
          >
            <h2 className="text-3xl font-semibold mb-4">About the Program</h2>
            <p className="text-gray-600 text-lg">
              MMS course at AIMSR is a 2 year Full-time Course affiliated to
              University of Mumbai and approved by DTE, Govt. of Maharashtra.
              After completion, students receive an MMS degree from the
              University of Mumbai.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">
                Eligibility Criteria
              </h3>
              <ul className="list-disc pl-5 text-gray-600 text-lg">
                <li>Bachelor's degree with 50% aggregate marks</li>
                <li>45% for backward class categories</li>
                <li>Valid scores in CAT/CET/CMAT</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Course Highlights</h3>
              <ul className="list-disc pl-5 text-gray-600 text-lg">
                <li>Industry-connected curriculum</li>
                <li>Experienced faculty</li>
                <li>Entrepreneurship focus</li>
                <li>Digital marketing certification</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-3xl font-semibold mb-4">Accolades</h2>
            <div className="grid md:grid-cols-2 gap-4 text-base text-gray-600">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-gray-50 rounded"
              >
                Ranked 35th among top Private B-Schools in India (2024)
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-gray-50 rounded"
              >
                Ranked 4th among top Private B-Schools in Mumbai (2024)
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default MMS;
