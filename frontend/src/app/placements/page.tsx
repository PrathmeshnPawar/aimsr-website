"use client";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function PlacementsPage() {
  return (
    <>
      <Navbar />
      <div className="p-8 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8">
          Corporate Partners
        </h1>

        <div className="prose max-w-none mb-12">
          <p className="mb-6">Dear Industry Expert,</p>

          <p className="mb-6">
            We would like to thank you for your valuable guidance and support.
            Today, brand AIMSR evokes recognition and respect in the corporate
            world.
          </p>

          <p className="mb-6">
            The placement cell comprising of experienced industry-oriented
            faculty & students is committed towards ensuring placement
            opportunities from multiple domains for all students. Summer
            placement helps students to gain firsthand experience in a
            particular industry. It also helps them in becoming more receptive
            to market requirements. The placement cell organizes student
            presentations about the projects undertaken in the organization by
            ensuring adequate rigour and discipline throughout the exercise.
            Students are provided feedback from both Industry & Faculty mentors.
            AIMSR has enjoyed support from several renowned corporates resulting
            in intense learning experiences. The internship often results in
            pre-placement offer and live projects for the students.
          </p>

          <p className="mb-6">
            Final placements take place by the best organizations in India &
            abroad by visiting AIMSR campus year after year. The Institute's
            Alumni help build an image in the industry that facilitates
            recruitment from the campus. The placement cell organizes grooming
            workshops covering tips on resume building, mock Group Discussion &
            Personal Interview sessions to add value to the student preparation
            for the corporate. The placement cell also strives to instill life
            skills amongst the students.
          </p>

          <p className="mb-6">
            Through well–qualified, industry trained Faculty experts, the
            placement cell focuses on the holistic growth of the students,
            enabling them to stand to the challenges of the corporate world, not
            just as managers but also as leaders. The rigorous academic emphasis
            is designed to groom students to face the corporate industry
            challenges. The placement cell organizes activities that enable
            students to be effective team leaders as well as team players. The
            placement cell designs systems with the objective of providing
            better student-recruiter fit. The processes allow recruiters to
            access the students & provide them with career option. The placement
            cell works around the year to connect with these recruiters to our
            students.
          </p>

          <p className="mb-12">
            Looking forward to a long-term association always,
          </p>
        </div>

        <div className="border-t pt-8">
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex items-center gap-4">
              <div className="text-4xl text-primary">
                <i className="fas fa-user-tie"></i>
              </div>
              <div>
                <h3 className="font-medium">Placement Head</h3>
                <p>Ms. Geeta Shetti</p>
                <a
                  href="mailto:placement@aimsr.edu.in"
                  className="text-primary hover:underline"
                >
                  placement@aimsr.edu.in
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-4xl text-primary">
                <i className="fas fa-user-graduate"></i>
              </div>
              <div>
                <h3 className="font-medium">Deputy Director</h3>
                <p>Ms. Ruhi Mishra</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
