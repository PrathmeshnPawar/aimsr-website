"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import Image from "next/image";

export default function HomePage() {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  interface Slide {
    src: string;
  }

  const slides: Slide[] = [{ src: "/grp_e.jpeg" }, { src: "/campus.jpg" }];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: any) => {
    setSubmitting(true);
    console.log("submitted by apply button");
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
        setShowSuccessToast(true);
        setTimeout(() => setShowSuccessToast(false), 3000);
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
    <div className="min-h-screen flex flex-col text-lg bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-blue-100/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-blue-100/30 to-transparent"></div>
      </div>

      <Navbar />
      <div className="relative h-[80vh] overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentSlide].src}
              alt="Campus slide"
              fill
              style={{ objectFit: "cover" }}
              className="z-0"
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20"></div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                currentSlide === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Rest of the code remains exactly the same */}
      <AnimatePresence>
        {showEnquiry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 px-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white p-4 md:p-8 rounded-xl shadow-2xl w-full max-w-md"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
                Enquiry Form
              </h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input
                  type="text"
                  {...register("fullName", { required: true })}
                  placeholder="Full Name"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition text-lg"
                />
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Email"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition text-lg"
                />
                <input
                  type="tel"
                  {...register("phone", { required: true })}
                  placeholder="Phone"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition text-lg"
                />
                <textarea
                  {...register("message", { required: true })}
                  placeholder="Message"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition text-lg"
                  rows={4}
                ></textarea>
                <div className="flex justify-end space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    onClick={() => setShowEnquiry(false)}
                    className="px-4 md:px-5 py-2 text-gray-600 hover:text-gray-800 text-lg"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={submitting}
                    className="px-4 md:px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md disabled:opacity-50 text-lg"
                  >
                    {submitting ? "Submitting..." : "Submit"}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showSuccessToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 bg-green-500 text-white px-4 md:px-6 py-3 rounded-lg shadow-lg text-lg z-50"
          >
            Form submitted successfully!
          </motion.div>
        )}
      </AnimatePresence>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 md:py-20 px-4 bg-gray-50/70 backdrop-blur-sm"
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm p-6 md:p-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4 md:mb-6">
              About Us
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg md:text-xl mb-8">
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

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-blue-50/80 backdrop-blur-sm p-6 rounded-lg">
                <h4 className="text-2xl font-bold text-blue-600 mb-3">
                  Our Vision
                </h4>
                <p className="text-gray-700 text-lg">
                  To be globally recognized as an epitome of learning and
                  innovation, imparting multifaceted management education driven
                  by social sensitivity and supported by state of art
                  infrastructure.
                </p>
              </div>

              <div className="bg-blue-50/80 backdrop-blur-sm p-6 rounded-lg">
                <h4 className="text-2xl font-bold text-blue-600 mb-3">
                  Our Mission
                </h4>
                <p className="text-gray-700 text-lg">
                  To impart quality education that encourages students to be
                  competent enough for best-fit job roles. To provide faculty
                  members with facilities to research, experiment and implement
                  contemporary learning tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 md:py-20 px-4 bg-white/70 backdrop-blur-sm"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8 text-center">
              Upcoming Events
            </h3>
            <div className="grid gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg"
              >
                <div className="text-blue-600 font-bold mb-2 text-xl">
                  MAR 15, 2024
                </div>
                <h4 className="text-2xl font-semibold mb-2">
                  Annual Business Summit
                </h4>
                <p className="text-gray-600 text-lg">
                  Join industry leaders and experts for our annual business
                  conference.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg"
              >
                <div className="text-blue-600 font-bold mb-2 text-xl">
                  APR 20, 2024
                </div>
                <h4 className="text-2xl font-semibold mb-2">
                  Leadership Workshop
                </h4>
                <p className="text-gray-600 text-lg">
                  Interactive session on developing essential leadership skills.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg"
              >
                <div className="text-blue-600 font-bold mb-2 text-xl">
                  MAY 10, 2024
                </div>
                <h4 className="text-2xl font-semibold mb-2">
                  Career Fair 2024
                </h4>
                <p className="text-gray-600 text-lg">
                  Connect with top companies and explore career opportunities.
                </p>
              </motion.div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8 text-center">
              Latest News
            </h3>
            <div className="grid gap-4">
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium text-lg"
                >
                  General Merit list of 1st year BMS course for the AY 2024-25
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium text-lg"
                >
                  Admission Notice - 2024-25 from ARA
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium text-lg"
                >
                  MCA Admission Notification-2 A.Y. 2024-25
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium text-lg"
                >
                  MMS Admission Notification-2 A.Y. 2024-25
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium text-lg"
                >
                  ACAP MMS enquiry details for the year 2024-26
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium text-lg"
                >
                  Institute level Merit List for the of 1st year BMS course for
                  the AY 2024-25
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 md:py-20 px-4 bg-white/70 backdrop-blur-sm"
      >
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8 text-center">
            Our Programs
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-blue-50/80 backdrop-blur-sm p-6 rounded-xl shadow-lg"
            >
              <Image
                src="/mms.jpeg"
                alt="MMS Program"
                width={300}
                height={200}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h4 className="text-2xl font-bold text-blue-600 mb-3">MMS</h4>
              <p className="text-gray-700 text-lg">
                Master of Management Studies
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-blue-50/80 backdrop-blur-sm p-6 rounded-xl shadow-lg"
            >
              <Image
                src="/mca.jpeg"
                alt="MCA Program"
                width={300}
                height={200}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h4 className="text-2xl font-bold text-blue-600 mb-3">MCA</h4>
              <p className="text-gray-700 text-lg">
                Master of Computer Applications
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-blue-50/80 backdrop-blur-sm p-6 rounded-xl shadow-lg"
            >
              <Image
                src="/bms.jpeg"
                alt="BMS Program"
                width={300}
                height={200}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h4 className="text-2xl font-bold text-blue-600 mb-3">BMS</h4>
              <p className="text-gray-700 text-lg">
                Bachelor of Management Studies
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-blue-50/80 backdrop-blur-sm p-6 rounded-xl shadow-lg"
            >
              <Image
                src="/phd.jpeg"
                alt="PhD Program"
                width={300}
                height={200}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h4 className="text-2xl font-bold text-blue-600 mb-3">PhD</h4>
              <p className="text-gray-700 text-lg">Doctoral Program</p>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="py-12 text-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            reset();
            setShowEnquiry(true);
          }}
          type="button"
          className="inline-block bg-blue-600 text-white px-6 md:px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition duration-300 text-xl"
        >
          Apply Now
        </motion.button>
      </motion.div>
      <Footer />
    </div>
  );
}
