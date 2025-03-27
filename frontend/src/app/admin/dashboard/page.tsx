// app/admin/dashboard/page.tsx
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminLayout from "../layout";

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    // Check if token exists in localStorage (ensure the user is logged in)
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
    } else {
      router.push("/admin/login"); // Redirect to login if not authenticated
    }
  }, [router]);

  return (
    <div>
      {isAuthenticated ? (
        <div>Welcome to the Admin Dashboard</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default AdminDashboard;
