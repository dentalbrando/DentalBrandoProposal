import { setTokenToCookies } from "@app/registration/auth";
import connectDb from "@app/registration/connectDb";
import RegistrationModel from "@app/models/registration";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

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
        const token = jwt.sign(userData, "securityKey", { expiresIn: "1h" });
        let dataToSend = { msg: "token", userId: loginData._id };
        return new Response(JSON.stringify(dataToSend), {
          headers: {
            "Set-Cookie": [
              `authToken=${token}; HttpOnly`,
              `logOut=false; HttpOnly`,
            ],
          },
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

// headers: { "Set-Cookie": setTokenToCookies(userData) },
