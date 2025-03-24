"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";
import { logout } from "../actions";

interface User {
  name: string;
}

export default function StudentDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");

    if (!token) {
      router.push("/student-login");
      return;
    }

    axios
      .get("http://localhost:5000/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data))
      .catch(() => {
        Cookies.remove("token");
        router.push("/student-login");
      });
  }, [router]);

  return (
    <div>
      <h1>Welcome, {user ? user.name : "Loading..."}</h1>
      <button onClick={logout} className="bg-red-500 text-white p-2 rounded">
        Logout
      </button>
    </div>
  );
}
