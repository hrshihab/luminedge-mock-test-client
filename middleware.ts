import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export { default } from "next-auth/middleware"

const AuthRoutes = ["/login", "/register"];
export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
  
    const accessToken = cookies().get("accessToken")?.value;
  
    if (!accessToken) {
      if (AuthRoutes.includes(pathname)) {
        return NextResponse.next();
      } else {
        return NextResponse.redirect(new URL("/login", request.url));
      }
    }}

export const config = { matcher: [""] }
///dashboard", "/admin", "/booking/:path*