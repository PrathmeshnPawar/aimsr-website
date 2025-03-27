// /app/admin/layout.tsx

import Link from "next/link";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li className="mb-4">
              {/* Removed the <a> tag here */}
              <Link href="/admin/dashboard" className="text-lg hover:underline">
                Dashboard
              </Link>
            </li>
            <li className="mb-4">
              {/* Removed the <a> tag here */}
              <Link href="/admin/login" className="text-lg hover:underline">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default AdminLayout;
