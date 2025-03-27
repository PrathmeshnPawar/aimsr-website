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
              Admissions at AIMSR
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-xl"
            >
              Join us and take the next step toward a bright future.
            </motion.p>
            <motion.a
              whileHover={{ scale: 1.1, backgroundColor: "#fff" }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400 }}
              href="/courses/postgraduate/MCA"
              className="mt-6 inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold shadow-md hover:bg-gray-100"
            >
              Apply Now
            </motion.a>
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
            <ul className="list-disc list-inside mt-6 space-y-4">
              {[
                {
                  title: "Bachelor's Program",
                  desc: "12th grade pass with minimum 50% marks",
                },
                {
                  title: "Master's Program",
                  desc: "Graduation with minimum 55% marks",
                },
                {
                  title: "Entrance Exam",
                  desc: "Required for specific programs",
                },
              ].map(({ title, desc }, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.3 }}
                  className="text-lg"
                >
                  <strong>{title}:</strong> {desc}
                </motion.li>
              ))}
            </ul>
          </motion.section>

          {/* Application Process */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="py-16 px-8 bg-white"
          >
            <h2 className="text-3xl font-semibold max-w-6xl mx-auto">
              Application Process
            </h2>
            <div className="mt-8 space-y-6 max-w-6xl mx-auto">
              {[
                "Fill out the online application form.",
                "Upload required documents.",
                "Appear for entrance test/interview.",
                "Pay admission fees and confirm seat.",
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.3 }}
                  className="flex items-center bg-gray-50 p-6 rounded-lg shadow-sm"
                >
                  <span className="text-blue-600 text-3xl">
                    {["📄", "📎", "📝", "💳"][index]}
                  </span>
                  <p className="ml-4 text-lg">
                    <strong>Step {index + 1}:</strong> {step}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Important Dates */}
          <motion.section
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="py-16 px-8 max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-semibold">Important Dates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {[
                { date: "March 20", event: "Applications Open" },
                { date: "April 15", event: "Early Bird Deadline" },
                { date: "May 10", event: "Entrance Exam" },
                { date: "June 1", event: "Final Admission Deadline" },
              ].map(({ date, event }, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, backgroundColor: "#EEF2FF" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-6 bg-white rounded-xl shadow-md text-center border border-gray-100"
                >
                  <h3 className="font-semibold text-blue-600 text-xl">
                    {date}
                  </h3>
                  <p className="mt-2 text-gray-700">{event}</p>
                </motion.div>
              ))}
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
              <h2 className="text-3xl font-semibold">Documents Required</h2>
              <ul className="list-disc list-inside mt-6 space-y-4">
                {[
                  "10th & 12th mark sheets (PDF/JPG, max 2MB)",
                  "Graduation certificate (if applicable)",
                  "Passport-size photo",
                  "Identity Proof (Aadhaar/Passport)",
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

          {/* Fee Structure */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="py-16 px-8 max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-semibold">Fee Structure</h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-8 overflow-hidden rounded-xl shadow-lg"
            >
              <table className="w-full">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="p-4 text-left">Program</th>
                    <th className="p-4 text-left">Annual Fees</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { program: "BCA", fee: "₹80,000" },
                    { program: "MCA", fee: "₹1,20,000" },
                  ].map(({ program, fee }, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="p-4">{program}</td>
                      <td className="p-4">{fee}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
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
                  For any admission-related queries, feel free to contact us.
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
