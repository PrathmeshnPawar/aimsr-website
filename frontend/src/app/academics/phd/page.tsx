"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const PhD = () => {
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
            Ph.D. in Management Studies
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
              Aditya Institute of Management Studies and Research (AIMSR) is a
              recognized Ph.D. Centre of University of Mumbai. Students
              interested in pursuing Ph.D. in management studies can register
              for this programme with a duration ranging from 3-6 years.
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
                  Candidates must have a Master's degree or equivalent
                  professional degree with:
                </p>
                <ul className="list-disc pl-5 mb-4">
                  <li>
                    At least 55% marks in aggregate or equivalent grade 'B' in
                    UGC 7-point scale
                  </li>
                  <li>
                    Foreign degree holders must have accreditation from approved
                    assessment agencies
                  </li>
                  <li>Must clear PET conducted by University of Mumbai OR</li>
                  <li>Must have cleared UGC-NET/UGC-CSIR NET/SLET/GATE</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-3xl font-semibold mb-4 text-blue-900">
                Program Structure
              </h3>
              <ul className="list-disc pl-5 text-blue-900 text-lg">
                <li>Duration: 3-6 years including coursework</li>
                <li>Intake: 10 seats</li>
                <li>Mandatory coursework (6 months)</li>
                <li>Research proposal submission</li>
                <li>Thesis submission and defense</li>
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
              Additional Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-blue-900">
                  Required Documents
                </h3>
                <ul className="list-disc pl-5 text-blue-900 text-lg">
                  <li>Academic transcripts and certificates</li>
                  <li>PET/NET/GATE clearance proof</li>
                  <li>Employer NOC (if applicable)</li>
                  <li>Research proposal</li>
                  <li>Identity and address proof</li>
                  <li>Category certificates (if applicable)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-blue-900">
                  Course Work Details
                </h3>
                <div className="space-y-3 text-blue-900 text-lg">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  >
                    Mandatory for all except M.Phil holders
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  >
                    6 months duration
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  >
                    Research methodology training
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

export default PhD;
