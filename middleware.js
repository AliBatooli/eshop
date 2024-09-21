import { NextResponse } from "next/server";

export const config = {
  matcher: ["/admin/:path*"],
};

export default function middleware(request) {
  //   console.log(" middleware");
  //   console.log(request.nextUrl.pathname);
  //   console.log(request.nextUrl.origin);
  //   console.log(request.headers.get("user-agent"));
  if (request.cookies.get("token") === undefined) {
    return NextResponse.redirect("http://localhost:3000/Login");
  }
}
