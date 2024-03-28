import connectDb from "@app/registration/connectDb";
import TokenModel from "@app/models/token";
import { NextResponse } from "next/server";
import RegistrationModel from "@app/models/registration";
export async function POST(req) {
  let { tokenFromCookie, userId } = await req.json();
  connectDb();
  let tokenAlreadyAvaible = await TokenModel.findOne({
    token: tokenFromCookie,
  });
  let userAlreadyAvaible = await TokenModel.findOne({
    userId: userId,
  });
  if (userId !== null) {
    if (!userAlreadyAvaible) {
      await TokenModel({
        token: tokenFromCookie,
        userId: userId,
      }).save();
    } else {
      await TokenModel.updateOne(
        { userId: userId },
        { $set: { token: tokenFromCookie } }
      );
    }
  } else {
    await TokenModel.updateOne(
      { userId: tokenAlreadyAvaible.userId },
      { $set: { token: tokenFromCookie } }
    );
  }
  if (userId === null) {
    let userData = await RegistrationModel.findOne({
      _id: tokenAlreadyAvaible.userId,
    });
    return NextResponse.json({ userData });
  } else {
    let userData = await RegistrationModel.findOne({ _id: userId });
    return NextResponse.json({ userData });
  }
}
