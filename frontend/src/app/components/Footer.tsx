"use client";

export default function Footer() {
  return (
    <footer className="text-white py-8" style={{ backgroundColor: "#066c9d" }}>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Core Faculty</a>
            </li>
            <li>
              <a href="#">Visiting Faculty</a>
            </li>
            <li>
              <a href="#">Adjunct Faculty</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Event Payment Link</a>
            </li>
            <li>
              <a href="#">Media Coverage</a>
            </li>
            <li>
              <a href="#">Azadi Ka Amrit Mahotsav</a>
            </li>
            <li>
              <a href="#">Club Activities & Events</a>
            </li>
            <li>
              <a href="#">Student Grievance</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Campus</h3>
          <ul className="space-y-2">
            <li>
              <a href="#">Infrastructure</a>
            </li>
            <li>
              <a href="#">Circulars</a>
            </li>
            <li>
              <a href="#">Notices</a>
            </li>
            <li>
              <a href="#">Dress Code</a>
            </li>
            <li>
              <a href="#">Research</a>
            </li>
            <li>
              <a href="#">FDP</a>
            </li>
            <li>
              <a href="#">MDP</a>
            </li>
            <li>
              <a href="#">Entrepreneurship Cell</a>
            </li>
            <li>
              <a href="#">Institutional Social Responsibility</a>
            </li>
            <li>
              <a href="#">Internal Assessment Process</a>
            </li>
            <li>
              <a href="#">Finance Lab</a>
            </li>
            <li>
              <a href="#">Comprehensive Code of Conduct</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Quick Info</h3>
          <ul className="space-y-2">
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Online Fee Payment</a>
            </li>
            <li>
              <a href="#">Education Loan Portal</a>
            </li>
            <li>
              <a href="#">Advisory Board</a>
            </li>
            <li>
              <a href="#">Refund and Cancellation</a>
            </li>
            <li>
              <a href="#">Support (Only for Staff)</a>
            </li>
            <li>
              <a href="#">ERP – Employee Login</a>
            </li>
            <li>
              <a href="#">ERP – Student Login</a>
            </li>
            <li>
              <a href="#">Alumni Portal Login</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Get in Touch</h3>
          <p className="mb-4">
            Aditya Educational Campus, R.M.Bhattad Road, Ram Nagar, Borivali
            (West),Mumbai – 400092.
          </p>

          <p className="mb-2">For all other inquiries, please dial</p>
          <p>022-3520 6111</p>
          <p className="mb-4">022-3520 6112</p>

          <p className="mb-4">8080112200</p>

          <p className="mb-4">admissions@aimsr.edu.in</p>

          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              Facebook
            </a>
            <a href="#" className="hover:text-gray-300">
              X-twitter
            </a>
            <a href="#" className="hover:text-gray-300">
              Youtube
            </a>
            <a href="#" className="hover:text-gray-300">
              Linkedin
            </a>
            <a href="#" className="hover:text-gray-300">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8 text-sm">
        <p className="mb-4">
          The Institute reserves the right to change these terms and conditions
          at any time without prior notice. In the event that any changes are
          made, the revised terms and conditions shall be posted on this website
          immediately. Please check the latest information posted herein to
          inform yourself of any changes.
        </p>

        <p>
          Copyright © {new Date().getFullYear()} Aditya Institute of Management
          Studies and Research | Powered by Aditya Institute of Management
          Studies and Research
        </p>
      </div>
    </footer>
  );
}
