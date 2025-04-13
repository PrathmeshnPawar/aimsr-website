"use client";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Admissions() {
  return (
    <AnimatePresence mode="wait">
      <div key="admissions">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900"
        >
          {/* Hero Section */}
          <motion.section
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 100,
            }}
            className="text-center py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
          >
            <motion.h1
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold"
            >
              Ph.D in Management Studies
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-xl"
            >
              Join our recognized Ph.D. Centre of University of Mumbai
            </motion.p>
            <motion.a
              whileHover={{ scale: 1.1, backgroundColor: "#fff" }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400 }}
              href="/apply"
              className="mt-6 inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold shadow-md hover:bg-gray-100"
            >
              Apply Now
            </motion.a>
          </motion.section>

          {/* Program Overview */}
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="py-16 px-8 max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-semibold">Program Overview</h2>
            <div className="mt-6 space-y-4">
              <p className="text-lg">
                Duration: Minimum 3 years to maximum 6 years from the date of
                admission including course work.
              </p>
              <p className="text-lg">Total Seats: 10</p>
            </div>
          </motion.section>

          {/* Eligibility Criteria */}
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="py-16 px-8 max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-semibold">Eligibility Criteria</h2>
            <div className="mt-6 prose prose-lg">
              <p>Candidates must have:</p>
              <ul className="list-disc list-inside space-y-4">
                <li>
                  Master's degree or equivalent professional degree with minimum
                  55% marks in aggregate or B grade in UGC 7-point scale
                </li>
                <li>
                  Cleared Ph.D. Entrance Test in Management (PET) conducted by
                  University of Mumbai
                  <strong>OR</strong>
                  Cleared UGC-NET (including JRF)/UGC-CSIR NET (including
                  JRF)/SLET/GATE/teacher fellowship holder
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Course Work */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="py-16 px-8 bg-white"
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-semibold">Course Work</h2>
              <div className="mt-6 space-y-4">
                <p>
                  Every candidate must undergo course work prescribed by the
                  Board of Studies of Faculty in Management.
                </p>
                <ul className="list-disc list-inside space-y-3">
                  <li>Duration: Minimum one semester (6 months)</li>
                  <li>Course work is treated as pre-Ph.D. preparation</li>
                  <li>
                    M.Phil graduates from recognized universities may be
                    exempted from course work
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Documents Required */}
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="py-16 px-8 bg-white"
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-semibold">Required Documents</h2>
              <ul className="list-disc list-inside mt-6 space-y-4">
                {[
                  "Mark Sheets (all semesters) and Convocation Certificate of Bachelor's and Master's Degree",
                  "PET clearance certificate or relevant eligibility certificates",
                  "NOC from employer (if applicable)",
                  "Proof of residential address",
                  "Curriculum Vitae",
                  "Character Certificate",
                  "Migration Certificate (if applicable)",
                  "Caste Certificate (if applicable)",
                ].map((doc, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.3 }}
                    className="text-lg"
                  >
                    {doc}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Research Proposal */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="py-16 px-8 max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-semibold">Research Proposal</h2>
            <div className="mt-6 space-y-4">
              <p className="text-lg">After admission, candidates must:</p>
              <ul className="list-disc list-inside space-y-3">
                <li>
                  Submit research proposal in consultation with Research Guide
                </li>
                <li>
                  Obtain approval from Research Recognition Committee (RRC)
                </li>
                <li>
                  Complete P.G. Registration within 20 days of RRC approval
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="py-16 px-8 bg-gray-900 text-white text-center"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold">Need Help?</h2>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-6 space-y-3"
              >
                <p className="text-lg">
                  For any Ph.D. admission related queries, feel free to contact
                  us.
                </p>
                <p className="text-xl">
                  <strong>Email:</strong> admissions@aimsr.edu
                </p>
                <p className="text-xl">
                  <strong>Phone:</strong> +91-98765-43210
                </p>
              </motion.div>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400 }}
                href="/apply"
                className="mt-8 inline-block px-8 py-4 bg-green-500 text-white rounded-lg font-semibold shadow-lg hover:bg-green-600"
              >
                Apply Now
              </motion.a>
            </div>
          </motion.section>
        </motion.main>
      </div>
      <Footer />
    </AnimatePresence>
  );
}
