"use server";

import axios from "axios";
import Cookies from "js-cookie";

export async function loginStudent(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
    });

    // Store token in a cookie
    Cookies.set("token", res.data.token, { expires: 7 });

    return { success: true };
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.message || "Login failed",
    };
  }
}

export async function logout() {
  Cookies.remove("token");
  window.location.href = "/student-login";
}
