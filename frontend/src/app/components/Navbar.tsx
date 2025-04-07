"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAcademicsMenuOpen, setIsAcademicsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isMobileAcademicsOpen, setIsMobileAcademicsOpen] = useState(false);
  const [isLoginMenuOpen, setIsLoginMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (!mounted) {
    return null;
  }

  return (
    <nav className="bg-gradient 0 via-blue-700 to-blue-500 shadow-2xl sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24 relative">
          <AnimatePresence>
            <motion.div
              className="flex items-center z-50"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/"
                className="flex font-mono font-bold tracking-wider text-yellow-300 text-3xl hover:text-yellow-200 transition-all duration-300 transform hover:scale-105"
              >
                <Image
                  src="/logo.png"
                  alt="AIMSR Logo"
                  width={140}
                  height={70}
                  className="object-contain drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300 bg-white/90 p-2 rounded-lg"
                  priority
                />
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* Login Button - Top Right */}
          <AnimatePresence>
            <motion.div
              className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:block"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative group">
                <button
                  onClick={() => setIsLoginMenuOpen(!isLoginMenuOpen)}
                  className="bg-white/90 text-blue-800 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Login
                </button>
                <AnimatePresence>
                  {isLoginMenuOpen && (
                    <motion.div
                      className="absolute top-full right-0 mt-2 bg-white/95 backdrop-blur-sm shadow-2xl rounded-lg py-2 w-48 z-10"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <Link
                        href="/student-login"
                        className="block px-6 py-3 text-lg text-gray-800 hover:bg-blue-100 hover:text-blue-800 transition-all duration-300 rounded-md mx-2"
                      >
                        Student Login
                      </Link>
                      <Link
                        href="/admin"
                        className="block px-6 py-3 text-lg text-gray-800 hover:bg-blue-100 hover:text-blue-800 transition-all duration-300 rounded-md mx-2"
                      >
                        Admin Login
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Centered Desktop Links */}
          <AnimatePresence>
            <motion.div
              className="hidden md:flex space-x-12 mx-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="relative group">
                <Link
                  href="/#"
                  className={`text-blue-800 text-xl font-semibold hover:text-blue-900 transition-all duration-300 transform hover:scale-105 flex items-center gap-1 ${
                    activeSection === "about"
                      ? "border-b-2 border-blue-800"
                      : ""
                  }`}
                  onClick={() => setActiveSection("about")}
                >
                  About
                  <motion.svg
                    className="w-4 h-4"
                    animate={{ rotate: isAcademicsMenuOpen ? 180 : 0 }}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </Link>
                <motion.div
                  className="absolute top-full left-0 bg-white/95 backdrop-blur-sm shadow-2xl rounded-lg py-2 w-56 z-10 hidden group-hover:block"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Link
                    href="/about/differentiators@-AIMSR"
                    className="block px-6 py-3 text-lg text-gray-800 hover:bg-blue-100 hover:text-blue-800 transition-all duration-300 rounded-md mx-2"
                  >
                    Differentiators@ AIMSR
                  </Link>
                  <Link
                    href="/about/vision-mission"
                    className="block px-6 py-3 text-lg text-gray-800 hover:bg-blue-100 hover:text-blue-800 transition-all duration-300 rounded-md mx-2"
                  >
                    Vision & Mission
                  </Link>
                  <Link
                    href="/about/faculty"
                    className="block px-6 py-3 text-lg text-gray-800 hover:bg-blue-100 hover:text-blue-800 transition-all duration-300 rounded-md mx-2"
                  >
                    Faculty
                  </Link>
                </motion.div>
              </div>
              <div className="relative group">
                <Link
                  href="/academics"
                  className={`text-blue-800 text-xl font-semibold hover:text-blue-900 transition-all duration-300 transform hover:scale-105 flex items-center gap-1 ${
                    activeSection === "academics"
                      ? "border-b-2 border-blue-800"
                      : ""
                  }`}
                  onClick={() => setActiveSection("academics")}
                >
                  Academics
                  <motion.svg
                    className="w-4 h-4"
                    animate={{ rotate: isAcademicsMenuOpen ? 180 : 0 }}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </Link>
                <motion.div
                  className="absolute top-full left-0 bg-white/95 backdrop-blur-sm shadow-2xl rounded-lg py-2 w-56 z-10 hidden group-hover:block"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Link
                    href="/academics/courses"
                    className="block px-6 py-3 text-lg text-gray-800 hover:bg-blue-100 hover:text-blue-800 transition-all duration-300 rounded-md mx-2"
                  >
                    Courses
                  </Link>
                  <Link
                    href="/academics/mca"
                    className="block px-6 py-3 text-lg text-gray-800 hover:bg-blue-100 hover:text-blue-800 transition-all duration-300 rounded-md mx-2"
                  >
                    Master of Computer Applications (MCA)
                  </Link>
                  <Link
                    href="/academics/mms"
                    className="block px-6 py-3 text-lg text-gray-800 hover:bg-blue-100 hover:text-blue-800 transition-all duration-300 rounded-md mx-2"
                  >
                    Master of Management Studies (MMS)
                  </Link>
                  <Link
                    href="/academics/fee-structure"
                    className="block px-6 py-3 text-lg text-gray-800 hover:bg-blue-100 hover:text-blue-800 transition-all duration-300 rounded-md mx-2"
                  >
                    Fee Structure
                  </Link>
                  <Link
                    href="/academics/admission-procedure"
                    className="block px-6 py-3 text-lg text-gray-800 hover:bg-blue-100 hover:text-blue-800 transition-all duration-300 rounded-md mx-2"
                  >
                    Admission Procedure
                  </Link>
                </motion.div>
              </div>
              <Link
                href="/placements"
                className={`text-blue-800 text-xl font-semibold hover:text-blue-900 transition-all duration-300 transform hover:scale-105 ${
                  activeSection === "placements"
                    ? "border-b-2 border-blue-800"
                    : ""
                }`}
                onClick={() => setActiveSection("placements")}
              >
                Placements
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMobileMenu}
            className="md:hidden fixed right-4 top-8 text-yellow-300 p-2 hover:text-yellow-200 transition-all duration-300 z-50 bg-blue-800/50 backdrop-blur-sm rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </motion.button>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={toggleMobileMenu}
              />
            )}
          </AnimatePresence>

          {/* Mobile Menu Content */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="fixed top-0 right-0 h-full w-[80%] bg-white/95 backdrop-blur-sm shadow-2xl z-50 overflow-y-auto"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
              >
                <div className="py-20">
                  <div>
                    <button
                      onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                      className="w-full px-6 py-3 text-lg font-medium text-gray-800 hover:bg-blue-100 hover:text-blue-800 transition-all duration-300 flex justify-between items-center"
                    >
                      About
                      <motion.svg
                        animate={{ rotate: isMobileAboutOpen ? 180 : 0 }}
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </motion.svg>
                    </button>
                    <AnimatePresence>
                      {isMobileAboutOpen && (
                        <motion.div
                          className="bg-gray-50"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          <Link
                            href="/about/differentiators@-AIMSR"
                            className="block px-8 py-2 text-gray-600 hover:bg-blue-50"
                            onClick={toggleMobileMenu}
                          >
                            Differentiators@ AIMSR
                          </Link>
                          <Link
                            href="/about/vision-mission"
                            className="block px-8 py-2 text-gray-600 hover:bg-blue-50"
                            onClick={toggleMobileMenu}
                          >
                            Vision & Mission
                          </Link>
                          <Link
                            href="/about/faculty"
                            className="block px-8 py-2 text-gray-600 hover:bg-blue-50"
                            onClick={toggleMobileMenu}
                          >
                            Faculty
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div>
                    <button
                      onClick={() =>
                        setIsMobileAcademicsOpen(!isMobileAcademicsOpen)
                      }
                      className="w-full px-6 py-3 text-lg font-medium text-gray-800 hover:bg-blue-100 hover:text-blue-800 transition-all duration-300 flex justify-between items-center"
                    >
                      Academics
                      <motion.svg
                        animate={{ rotate: isMobileAcademicsOpen ? 180 : 0 }}
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </motion.svg>
                    </button>
                    <AnimatePresence>
                      {isMobileAcademicsOpen && (
                        <motion.div
                          className="bg-gray-50"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          <Link
                            href="/academics/courses"
                            className="block px-8 py-2 text-gray-600 hover:bg-blue-50"
                            onClick={toggleMobileMenu}
                          >
                            Courses
                          </Link>
                          <Link
                            href="/academics/fee-structure"
                            className="block px-8 py-2 text-gray-600 hover:bg-blue-50"
                            onClick={toggleMobileMenu}
                          >
                            Fee Structure
                          </Link>
                          <Link
                            href="/academics/admission-procedure"
                            className="block px-8 py-2 text-gray-600 hover:bg-blue-50"
                            onClick={toggleMobileMenu}
                          >
                            Admission Procedure
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link
                    href="/placements"
                    className="block px-6 py-3 text-lg font-medium text-gray-800 hover:bg-blue-100 hover:text-blue-800 transition-all duration-300"
                    onClick={toggleMobileMenu}
                  >
                    Placements
                  </Link>
                  <Link
                    href="/student-login"
                    className="block px-6 py-3 text-lg font-medium text-gray-800 hover:bg-blue-100 hover:text-blue-800 transition-all duration-300"
                    onClick={toggleMobileMenu}
                  >
                    Student Login
                  </Link>
                  <Link
                    href="/admin-login"
                    className="block px-6 py-3 text-lg font-medium text-gray-800 hover:bg-blue-100 hover:text-blue-800 transition-all duration-300"
                    onClick={toggleMobileMenu}
                  >
                    Admin Login
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
