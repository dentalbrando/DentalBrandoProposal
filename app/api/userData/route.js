import connectDb from "@app/registration/connectDb";
import { NextResponse } from "next/server";
import TokenModel from "@app/models/token";
import { cookies } from "next/headers";

export async function GET(req) {
  let token = cookies().get("authToken");
  if (token) {
    token = token.value;
  } else {
    token = "";
  }
  try {
    connectDb();
    let userData = await TokenModel.findOne({ _id: _id });
    console.log(userData);
    return NextResponse.json({
      userData: "userData",
    });
  } catch (e) {
      console.log("err");
    return NextResponse.json({
      userData: "user not found",
    });
  }
}
