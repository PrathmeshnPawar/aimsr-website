"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdmissionProcedure() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Admission Process for MCA Course
        </h1>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>CAP Round Seats</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Admission to seats belonging to CAP round is governed by the
              Director of Technical Education, Maharashtra State. Please refer
              DTE website for CAP admission process
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>
              Institute level seats and Hindi Speaking Minority Community seats
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              For admission to the above category seats,belonging to Hindi
              Speaking Minority Community is governed by the Director of
              Technical Education, Maharashtra State. Please refer DTE website
              for CAP admission process
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Number of MMS seats at AIMSR</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Total Intake: 120 Seats</li>
              <li>CAP Round Seats: 59</li>
              <li>Hindi Speaking Minority Community Seats: 61</li>
              <li>Institute Type: Private/Unaided Hindi Linguistic Minority</li>
              <li>Institute Code: MB-3438 (as given by DTE)</li>
            </ul>
          </CardContent>
        </Card>

        <p className="text-gray-700 text-center mb-6">
          Admission schedule for CAP round will be announced by Director of
          Technical Education.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Contact Details</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              For course enquiry and admissions: +91 8080 112200 or 022 – 6110
              6111/12
            </p>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
}
