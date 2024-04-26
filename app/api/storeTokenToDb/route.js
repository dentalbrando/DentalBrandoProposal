import connectDb from "@app/registration/connectDb";
import TokenModel from "@app/models/token";
import { NextResponse } from "next/server";
import RegistrationModel from "@app/models/registration";
import { cookies } from "next/headers";

export async function POST(req) {
  console.log("storeing");
  let userData = null;
  let token = cookies().get("authToken");
  if (token) {
    console.log("token true");

    token = token.value;
  } else {
    console.log("token false");
    token = null;
  }

  let { userId } = await req.json();
  connectDb();

  if (!userId) {
    console.log("user id false");
    let tokenAlreadyAvaible = await TokenModel.findOne({
      token: token,
    });
    if (tokenAlreadyAvaible) {
      await TokenModel.updateOne(
        { userId: tokenAlreadyAvaible.userId },
        { $set: { token: token } }
      );

      userData = await RegistrationModel.findOne({
        _id: tokenAlreadyAvaible.userId,
      });
      return NextResponse.json({ userData });
    } else {
      userData = null;
      return NextResponse.json({ userData });
    }
  } else if (userId) {
    console.log("user id true");

    let userAlreadyAvaible = await TokenModel.findOne({
      userId: userId,
    });

    if (!userAlreadyAvaible) {
      await TokenModel({
        token: token,
        userId: userId,
      }).save();
    } else {
      await TokenModel.updateOne(
        { userId: userId },
        { $set: { token: token } }
      );
    }
    userData = await RegistrationModel.findOne({ _id: userId });
    return NextResponse.json({ userData });
  } else {
    console.log("user id true or false");
    userData = null;
    return NextResponse.json({ userData });
  }
}
