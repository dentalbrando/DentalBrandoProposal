import { setTokenToCookies } from "@app/registration/auth";
import connectDb from "@app/registration/connectDb";
import RegistrationModel from "@app/models/registration";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    let { username, password } = await req.json();
    let userData = { username, password };
    connectDb();
    let loginData = await RegistrationModel.findOne({ username: username });
    if (loginData) {
      if (password !== loginData.password) {
        return NextResponse.json({ error: "Incorrect Password" });
      } else {
        let dataToSend = { msg: "token", userId: loginData._id };
        return new Response(JSON.stringify(dataToSend), {
          headers: { "Set-Cookie": setTokenToCookies(userData) },
        });
      }
    } else {
      return NextResponse.json({ error: "User not found" });
    }
  } catch (err) {
    console.log("err: ", err);
    return NextResponse.json({
      error: "can't process your request at the moment",
    });
  }
}
