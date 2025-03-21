"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <h1>Contact</h1>
        <p>Here are some ways to get in touch:</p>
        <ul>
          <li>Email: info@example.com</li>
          <li>Phone: 123-456-7890</li>
          <li>Address: 123 Main St, Anytown USA</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
