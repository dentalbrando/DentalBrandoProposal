import connectDb from "@app/registration/connectDb";
import TokenModel from "@app/models/token";
import { NextResponse } from "next/server";
import RegistrationModel from "@app/models/registration";
import { cookies } from "next/headers";

export async function POST(req) {
  let userData = null;
  let token = cookies().get("authToken");
  if (token) {
    token = token.value;
  } else {
    token = null;
  }

  let { userId } = await req.json();
  connectDb();

  if (!userId) {
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
    let userAlreadyAvaible = await TokenModel.findOne({
      userId: userId,
    });

    if (!userAlreadyAvaible) {
      await TokenModel({
        token: token,
        userId: userId,
      }).save();
    }
    userData = await RegistrationModel.findOne({ _id: userId });
    return NextResponse.json({ userData });
  } else {
    userData = null;
    return NextResponse.json({ userData });
  }
}
