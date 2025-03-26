"use client";

import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Cookies from "js-cookie";

export default function OAuthCallback() {
  return (
    <Suspense fallback={<h1>Processing login...</h1>}>
      <CallbackContent />
    </Suspense>
  );
}

function CallbackContent() {
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
