import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req) {
  let token = cookies().get("authToken");
  if (token) {
    token = token.value;
  } else {
    token = "";
  }
  let securityKey = process.env.SECURITY_KEY;
  jwt.verify(token, "securityKey");
  return NextResponse.json({ msg: "verified" });
}
