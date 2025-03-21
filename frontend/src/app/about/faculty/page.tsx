import React from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";

const Faculty = () => {
  const facultyData = [
    {
      name: "Dr. Neeta Bhatt",
      post: "Associate Professor",
      image: "/neeta-maam.webp",
      description:
        "After completing her Master's in computer applications, she went ahead to get her Doctorate in Computer Science. Her 16 years of experience in Education includes teaching Engineering, MCA and MBA students. She is a Guide for 5 PhD scholars. She has a long experience of handling the examination department. She is the Chairperson of Flying Squad Team at Mumbai University.",
    },
    {
      name: "Prof. Rashmi Pathak",
      post: "Assistant Professor",
      image: "/rashmi-maam.webp",
      description:
        "Prof. Rashmi Pathak holds a Master's degree in Information Technology. With over 4 years of hands-on experience in the industry, Miss Rashmi Pathak has significantly contributed to various prominent companies. She has worked with esteemed organizations like Tata Consultancy Services (TCS), Tata AIG, DCB, and Convergys India.",
    },
    {
      name: "Prof. Shweta Nigam",
      post: "Assistant Professor",
      image: "/shweta-maam.webp",
      description:
        "Prof. Shweta Nigam is a highly accomplished professional with a strong educational background in Computer Science and Engineering. She holds a M.Tech (Computer Science and Engineering) and Master of Computer Applications degree(MCA). With over 11 years of teaching experience in academics.",
    },
    {
      name: "Ramakrishnan Iyer",
      post: "Assistant Professor",
      image: "/iyyer-sir.webp",
      description:
        "Ramakrishnan Iyer holds a Executive MBA Post Graduate Certificate from IIM, Kozhikode and B.Tech. in Electrical & Electronics Engineering. He is a Senior IT professional with 30+ years' experience with rich experience in the areas of Innovation, technology architect and delivery management.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {facultyData.map((faculty, index) => (
          <Card
            key={index}
            className="p-6 space-y-4 transition-transform duration-300 hover:scale-105"
          >
            <div className="flex flex-col items-center">
              <div className="relative h-24 w-24 rounded-full overflow-hidden">
                <Image
                  src={faculty.image}
                  alt={faculty.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-2 text-center">
              <h2 className="text-2xl font-semibold text-foreground">
                {faculty.name}
              </h2>
              <h3 className="text-lg text-muted-foreground">{faculty.post}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {faculty.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Faculty;
