"use server";

import axios from "axios";
import { cookies } from "next/headers";

export async function loginStudent(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
    });

    if (!res.data.token) {
      throw new Error("Token not received from server");
    }

    // Store token securely in HTTP-only cookies
    (await cookies()).set("token", res.data.token, {
      httpOnly: true, // Prevents access via JavaScript (more secure)
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    return { success: true };
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.message || "Login failed",
    };
  }
}

export async function logout() {
  const cookieStore = await cookies(); // Get cookies

  cookieStore.set("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    expires: new Date(0), // Effectively removes the cookie
  });

  return { success: true };
}
