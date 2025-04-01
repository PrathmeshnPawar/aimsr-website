"use client";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CoursesPage() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-4xl w-full mx-auto px-4 py-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mb-12 text-gray-800"
          >
            Available Courses
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <button
                onClick={() => toggleMenu("postgraduate")}
                className="block w-full text-center text-blue-600 px-6 py-4 rounded-lg font-semibold bg-green-100 hover:bg-green-200 transition-all duration-300 transform hover:shadow-lg"
              >
                PostGraduate Courses
              </button>
              <div
                className={`absolute top-full left-0 bg-white shadow-xl rounded-md py-2 w-full z-10 ${activeMenu === "postgraduate" ? "block" : "hidden"} transition-all duration-300`}
              >
                <Link
                  href="courses/postgraduate/MCA"
                  className="block px-6 py-3 text-lg text-gray-800 hover:bg-blue-50 transition-all duration-300 hover:translate-x-2"
                >
                  Masters of Computer Applications
                </Link>
                <Link
                  href="courses/postgraduate/MMS"
                  className="block px-6 py-3 text-lg text-gray-800 hover:bg-blue-50 transition-all duration-300 hover:translate-x-2"
                >
                  Masters in Management Studies
                </Link>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <button
                onClick={() => toggleMenu("undergraduate")}
                className="block w-full text-center bg-green-100 text-blue-600 px-6 py-4 rounded-lg font-semibold hover:bg-green-200 transition-all duration-300 transform hover:shadow-lg"
              >
                UnderGraduate Courses
              </button>
              <div
                className={`absolute top-full left-0 bg-white shadow-xl rounded-md py-2 w-full z-10 ${activeMenu === "undergraduate" ? "block" : "hidden"} transition-all duration-300`}
              >
                <Link
                  href="courses/undergraduate/BMS"
                  className="block px-6 py-3 text-lg text-gray-800 hover:bg-blue-50 transition-all duration-300 hover:translate-x-2"
                >
                  Bachelor of Management Studies
                </Link>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <button
                onClick={() => toggleMenu("phd")}
                className="block w-full text-center bg-green-100 text-blue-600 px-6 py-4 rounded-lg font-semibold hover:bg-green-200 transition-all duration-300 transform hover:shadow-lg"
              >
                PhD
              </button>
              <div
                className={`absolute top-full left-0 bg-white shadow-xl rounded-md py-2 w-full z-10 ${activeMenu === "phd" ? "block" : "hidden"} transition-all duration-300`}
              >
                <Link
                  href="courses/other-courses/Phd"
                  className="block px-6 py-3 text-lg text-gray-800 hover:bg-blue-50 transition-all duration-300 hover:translate-x-2"
                >
                  Ph.D. in Management Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
