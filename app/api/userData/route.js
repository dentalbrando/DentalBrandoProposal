import connectDb from "@app/registration/connectDb";
import { NextResponse } from "next/server";
import TokenModel from "@app/models/token";
import { cookies } from "next/headers";
import RegistrationModel from "@app/models/registration";

export async function GET(req) {
  // connectDb();
  // let token = cookies().get("authToken");
  // if (token) {
  //   token = token.value;
  // } else {
  //   token = "";
  // }

  // try {
  //   let { userId } = await TokenModel.findOne({ token: token });
  //   let { admin } = await RegistrationModel.findOne({ _id: userId });
  //   return NextResponse.json({
  //     admin,
  //   });
  // } catch (e) {
    return NextResponse.json({
      admin: true,
    });
  // }
}
