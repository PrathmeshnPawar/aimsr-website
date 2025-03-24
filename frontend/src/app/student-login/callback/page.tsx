"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Cookies from "js-cookie";

export default function OAuthCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  useEffect(() => {
    if (token) {
      Cookies.set("token", token, { expires: 7 });
      router.push("/student-login/dashboard");
    } else {
      router.push("/student-login");
    }
  }, [token, router]);

  return <h1>Processing login...</h1>;
}
