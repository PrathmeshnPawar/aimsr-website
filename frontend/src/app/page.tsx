"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";

export default function HomePage() {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const onSubmit = async (data: any) => {
    setSubmitting(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contactform`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      if (response.ok) {
        alert("Form submitted successfully!");
        reset();
        setShowEnquiry(false);
      } else {
        alert("Failed to submit form. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-[80vh] flex items-center justify-center text-white text-center relative overflow-hidden"
        style={{
          backgroundImage: "url('/campus.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 backdrop-blur-sm bg-black/20"></div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col items-center space-y-6 relative z-10"
        >
          <h2 className="text-7xl font-bold text-blue-600 text-center text-shadow backdrop-blur-sm bg-white/30 p-4 rounded-lg">
            Welcome to AIMSR
          </h2>
          <p className="text-xl text-center max-w-2xl text-shadow text-blue-600 backdrop-blur-sm bg-white/30 p-3 rounded-lg">
            Ranked 4th amongst top private B-Schools in Mumbai - Times B-School
            Survey 2024
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowEnquiry(true)}
            className="mt-4 inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-50 transition duration-300"
          >
            Apply Now
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Enquiry Form Modal */}
      <AnimatePresence>
        {showEnquiry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/50"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white p-8 rounded-xl shadow-2xl w-96 m-4"
            >
              <h3 className="text-2xl font-bold text-blue-600 mb-6">
                Enquiry Form
              </h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input
                  type="text"
                  {...register("fullName", { required: true })}
                  placeholder="Full Name"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                />
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Email"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                />
                <input
                  type="tel"
                  {...register("phone", { required: true })}
                  placeholder="Phone"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                />
                <textarea
                  {...register("message", { required: true })}
                  placeholder="Message"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                  rows={4}
                ></textarea>
                <div className="flex justify-end space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    onClick={() => setShowEnquiry(false)}
                    className="px-5 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={submitting}
                    className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md disabled:opacity-50"
                  >
                    {submitting ? "Submitting..." : "Submit"}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg"
          >
            Form submitted successfully!
          </motion.div>
        )}
      </AnimatePresence>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-4 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-3xl font-bold text-blue-600 mb-6">About Us</h3>
            <p className="text-gray-700 leading-relaxed">
              There is an extraordinary appetite for leaders anticipating the
              leadership needs of being with purpose & resilience to change in
              the VUCA world. Aditya Institute of Management Studies and
              Research (AIMSR) has distinguished itself in this respect by
              preparing students with innovative leadership skills in accordance
              with the challenges in the business landscape. It is not
              surprising that AIMSR is amongst the leading B-Schools in India
              and ranked 4th amongst the top private B-Schools in Mumbai
              according to the Times B-School Survey 2024. Very recently the
              Institute received the Certificate of Accreditation by National
              Assessment and Accreditation Council (NAAC) as an endorsement of
              the Institute's commitment towards promoting quality in
              teaching-learning, research, consultancy and student development.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Vision & Mission Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-4 bg-blue-50"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-10 rounded-xl shadow-lg transition-all duration-300"
          >
            <h3 className="text-3xl font-bold text-blue-600 mb-6">Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be globally recognized as an epitome of learning and
              innovation, imparting multifaceted management education driven by
              social sensitivity and supported by state of art infrastructure.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-10 rounded-xl shadow-lg transition-all duration-300"
          >
            <h3 className="text-3xl font-bold text-blue-600 mb-6">Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To impart quality education that encourages students to be
              competent enough for best-fit job roles. To provide faculty
              members with facilities to research, experiment and implement
              contemporary learning tools.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
