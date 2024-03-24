import RegistrationModel from "@app/models/registration";
import connectDb from "@app/registration/connectDb";
import { NextResponse } from "next/server";

export async function POST(req) {
  let body = await req.json();
  connectDb();
  await RegistrationModel.updateOne(
    { admin: false },
    { $set: { permission: body.permission } }
  );
  return NextResponse.json({ msg: "permission saved" });
}
