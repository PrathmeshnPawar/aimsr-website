"use client";
import { useState } from "react";
import { Home, BookOpen, FileText, User, BarChart } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

const menuItems = [
  { name: "Dashboard", href: "/student-login/dashboard", icon: Home },
  { name: "Courses", href: "/student-login/courses", icon: BookOpen },
  { name: "Assignments", href: "/student-login/assignments", icon: FileText },
  { name: "Profile", href: "/student-login/profile", icon: User },
  { name: "Analytics", href: "/student-login/analytics", icon: BarChart },
];

export default function Sidebar() {
  const [active, setActive] = useState("/dashboard");

  return (
    <>
      <aside className="h-screen w-64 bg-gray-900 text-white p-4 flex flex-col">
        <h2 className="text-xl font-bold mb-6 text-center">
          AIMSR
          <br /> Student Portal
        </h2>
        <nav className="space-y-4">
          {menuItems.map(({ name, href, icon: Icon }) => (
            <Link
              key={name}
              href={href}
              onClick={() => setActive(href)}
              className={clsx(
                "flex items-center gap-3 p-3 rounded-lg transition",
                active === href ? "bg-gray-700" : "hover:bg-gray-800",
              )}
            >
              <Icon className="w-5 h-5" />
              {name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
