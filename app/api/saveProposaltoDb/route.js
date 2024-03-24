import { NextResponse } from "next/server";
import { useSelector } from "react-redux";

export async function GET() {
  return NextResponse.json({ msg: "Hello World" });
}
