"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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

  const toggleAcademicsMenu = () => {
    setIsAcademicsMenuOpen(!isAcademicsMenuOpen);
  };

  if (!mounted) {
    return null;
  }

  return (
    <nav className="bg-gradient-to-r from-indigo-900 via-blue-800 to-blue-600 shadow-2xl">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex font-mono font-bold tracking-wider text-white text-3xl hover:text-blue-200 transition-all duration-300 transform hover:scale-105 ml-4"
            >
              <Image
                src="/logo.png"
                alt="AIMSR Logo"
                width={160}
                height={80}
                className="object-contain drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300 bg-white p-2 rounded-lg"
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-12">
            <div className="relative group">
              <Link
                href="/about"
                className={`text-white text-xl font-semibold hover:text-blue-200 transition-all duration-300 transform hover:scale-110 ${activeSection === "about" ? "border-b-2 border-white" : ""}`}
                onClick={() => setActiveSection("about")}
              >
                About
              </Link>
              <div className="absolute top-full left-0 bg-white shadow-2xl rounded-lg py-2 w-56 z-10 hidden group-hover:block transform transition-all duration-300 hover:scale-105">
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
              </div>
            </div>
            <div className="relative group">
              <Link
                href="/academics"
                className={`text-white text-xl font-semibold hover:text-blue-200 transition-all duration-300 transform hover:scale-110 ${activeSection === "academics" ? "border-b-2 border-white" : ""}`}
                onClick={() => setActiveSection("academics")}
              >
                Academics
              </Link>
              <div className="absolute top-full left-0 bg-white shadow-2xl rounded-lg py-2 w-56 z-10 hidden group-hover:block transform transition-all duration-300 hover:scale-105">
                <Link
                  href="/academics/courses"
                  className="block px-6 py-3 text-lg text-gray-800 hover:bg-blue-100 hover:text-blue-800 transition-all duration-300 rounded-md mx-2"
                >
                  Courses
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
              </div>
            </div>
            <Link
              href="/placements"
              className={`text-white text-xl font-semibold hover:text-blue-200 transition-all duration-300 transform hover:scale-110 ${activeSection === "placements" ? "border-b-2 border-white" : ""}`}
              onClick={() => setActiveSection("placements")}
            >
              Placements
            </Link>
            <div className="relative group">
              <button className="bg-white text-blue-800 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition-all duration-300 transform hover:scale-110">
                Login
              </button>
              <div className="absolute top-full right-0 bg-white shadow-2xl rounded-lg py-2 w-48 z-10 hidden group-hover:block transform transition-all duration-300 hover:scale-105">
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
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white p-2 hover:text-blue-200 transition-all duration-300"
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {isMobileMenuOpen && (
              <div className="absolute top-24 right-0 left-0 bg-white shadow-2xl rounded-b-lg animate-fadeIn">
                <div>
                  <button
                    onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                    className="w-full px-6 py-3 text-lg font-medium text-gray-800 hover:bg-blue-100 hover:text-blue-800 transition-all duration-300 flex justify-between items-center"
                  >
                    About
                    <svg
                      className={`w-5 h-5 transform transition-transform ${
                        isMobileAboutOpen ? "rotate-180" : ""
                      }`}
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
                    </svg>
                  </button>
                  {isMobileAboutOpen && (
                    <div className="bg-gray-50">
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
                    </div>
                  )}
                </div>

                <div>
                  <button
                    onClick={() =>
                      setIsMobileAcademicsOpen(!isMobileAcademicsOpen)
                    }
                    className="w-full px-6 py-3 text-lg font-medium text-gray-800 hover:bg-blue-100 hover:text-blue-800 transition-all duration-300 flex justify-between items-center"
                  >
                    Academics
                    <svg
                      className={`w-5 h-5 transform transition-transform ${
                        isMobileAcademicsOpen ? "rotate-180" : ""
                      }`}
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
                    </svg>
                  </button>
                  {isMobileAcademicsOpen && (
                    <div className="bg-gray-50">
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
                    </div>
                  )}
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
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
