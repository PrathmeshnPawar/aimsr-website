"use client";

import Sidebar from "@/app/components/Sidebar";
import StudentNavbar from "@/app/components/StudentNavbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="geist_e531dabc-module__QGiZLq__variable geist_mono_68a01160-module__YLcDdW_...">
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <StudentNavbar />
            <main className="p-6 flex-1">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
