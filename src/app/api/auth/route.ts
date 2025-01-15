
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json(); // Parse the request body

    // Email and Password Validation
    if (body.email === "daniyal@gmail.com" && body.password === "password123") {
      return NextResponse.json({
        message: "Valid User",
        redirectUrl: "/admin",
      });
    } else if (body.email === "ameen@gmail.com" && body.password === "ameen456") {
      return NextResponse.json({
        message: "Valid User",
        redirectUrl: "/admin",
      });
    } else if (body.email && body.password) {
      return NextResponse.json({
        message: "Valid User",
        redirectUrl: "/student",
      });
    } else {
      return NextResponse.json({
        message: "Invalid User",
      });
    }
  } catch (err: any) {
    return NextResponse.json({
      message: "An error occurred",
      error: err.message,
    });
  }
}
