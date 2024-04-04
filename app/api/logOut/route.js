import { removeTokenFromCookies } from "@app/registration/auth";
import connectDb from "@app/registration/connectDb";
import RegistrationModel from "@app/models/registration";
import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function GET(req) {
  return new Response(null, {
    headers: { "Set-Cookie": removeTokenFromCookies() },
  });
}
