"use client";

import React from "react";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function FeeStructurePage() {
  return (
    <>
      <NavBar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fee-structure flex flex-col items-center py-12 my-12"
      >
        <div className="max-w-3xl w-full">
          <h2 className="border-b-2 border-gray-200 pb-4 mb-6 text-center">
            MCA Fee Structure for Batch 2023-24
          </h2>

          <Table className="border-2 border-gray-200 rounded-lg overflow-hidden">
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="border">Fee Component</TableHead>
                <TableHead className="border">First Year (₹)</TableHead>
                <TableHead className="border">Second Year (₹)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="border">Tuition Fee</TableCell>
                <TableCell className="border">1,31,718.00</TableCell>
                <TableCell className="border">1,31,718.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border">Development Fee</TableCell>
                <TableCell className="border">17,782.00</TableCell>
                <TableCell className="border">17,782.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border">Total</TableCell>
                <TableCell className="border">1,49,500.00</TableCell>
                <TableCell className="border">1,49,500.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <motion.div
            className="course-info border-2 border-gray-200 rounded-lg p-6 mt-8"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="border-b-2 border-gray-200 pb-4 mb-6">
              Course Information
            </h3>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="border">Duration:</TableCell>
                  <TableCell className="border">24 months</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border">Study Level:</TableCell>
                  <TableCell className="border">Post Graduate</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border">Total Seats:</TableCell>
                  <TableCell className="border">120</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </motion.div>

          <motion.button
            className="apply-btn border-2 border-blue-500 rounded-lg px-6 py-3 mt-8"
            onClick={() =>
              (window.location.href = "/academics/courses/postgraduate/MCA")
            }
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Apply Online
          </motion.button>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}
