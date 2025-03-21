import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="p-6 bg-white rounded-xl shadow-md text-center border border-gray-100">
        <h3 className="font-semibold text-blue-600 text-xl">
          {new Date().toLocaleDateString()}
        </h3>
        <p className="mt-2 text-gray-700">{new Date().toLocaleTimeString()}</p>
      </div>
    </>
  );
};

export default AboutPage;
