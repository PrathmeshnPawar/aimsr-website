"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginStudent } from "./actions";
import Cookies from "js-cookie";

export default function StudentLogin() {
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const res = await loginStudent(formData);
    if (res.success) {
      router.push("/student-login/dashboard");
    } else {
      setError(res.message);
    }
  }

  function handleOAuthLogin(provider: "google" | "github") {
    window.location.href = `http://localhost:5000/api/auth/${provider}-login`;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Student Login</h2>
      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="w-full p-2 mb-4 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>

      <div className="mt-4 text-center">
        <button
          onClick={() => handleOAuthLogin("google")}
          className="w-full bg-red-500 text-white py-2 rounded mt-2 hover:bg-red-600"
        >
          Login with Google
        </button>

        <button
          onClick={() => handleOAuthLogin("github")}
          className="w-full bg-gray-800 text-white py-2 rounded mt-2 hover:bg-gray-900"
        >
          Login with GitHub
        </button>
      </div>
    </div>
  );
}
