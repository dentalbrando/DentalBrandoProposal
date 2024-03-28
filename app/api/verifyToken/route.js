import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req) {
  let securityKey = JSON.stringify(process.env.SECURITY_KEY);
  //   console.log(securityKey);
  let token = cookies().get("authToken");
  if (token) {
    token = token.value;
  } else {
    token = "";
  }
  // console.log(
  jwt.verify(token, "securityKey");
  // );
  //   console.log(jwt.verify(token, securityKey));
  return NextResponse.json({ msg: "verified" });
}
