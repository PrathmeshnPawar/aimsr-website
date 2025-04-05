// /app/admin/layout.tsx

import Link from "next/link";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li className="mb-4">{/* Removed the <a> tag here */}</li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default AdminLayout;
