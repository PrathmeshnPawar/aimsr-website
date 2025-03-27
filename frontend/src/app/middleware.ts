import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token"); // Example: Get auth token from cookies

  if (!token && req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/student-login", req.url)); // Redirect to login
  }

  return NextResponse.next();
}

// Apply middleware only to the dashboard
export const config = {
  matcher: ["/dashboard/:path*"], // Protects all dashboard pages
};
