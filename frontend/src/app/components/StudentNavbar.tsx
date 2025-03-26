"use client";

import { useRouter } from "next/navigation";
import { logout } from "@/app/student-login/actions";

export default function StudentNavbar() {
  const router = useRouter();

  async function handleLogout() {
    const res = await logout();
    if (res.success) {
      router.push("/student-login"); // Redirect after logout
    }
  }

  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1>Student Portal</h1>
      <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">
        Logout
      </button>
    </nav>
  );
}
