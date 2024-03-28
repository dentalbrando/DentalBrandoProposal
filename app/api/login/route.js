import { createToken } from "@app/registration/auth";
import connectDb from "@app/registration/connectDb";
import RegistrationModel from "@app/models/registration";
import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST(req) {
  try {
    let { username, password } = await req.json();
    let userData = { username, password };
    connectDb();
    let loginData = await RegistrationModel.findOne({ username: username });
    if (loginData) {
      if (password !== loginData.password) {
        return NextResponse.json({ error: "wrong password" });
      } else {
        let token = createToken(userData);

        const cookie = serialize("authToken", token, {
          maxAge: 3600, // 1 hour in seconds
          expires: new Date(Date.now() + 3600000),
          httpOnly: true,
          secure: process.env.NODE_ENV === "production", // Set secure for HTTPS only
          sameSite: "lax",
        });
        let dataToSend = { msg: token, userId: loginData._id };
        return new Response(JSON.stringify(dataToSend), {
          headers: { "Set-Cookie": cookie },
        });
      }
    } else {
      return NextResponse.json({ error: "user not found" });
    }
  } catch (err) {
    console.log("err: ", err);
    return NextResponse.json({
      error: "can't process you request at the moment",
    });
  }
}
