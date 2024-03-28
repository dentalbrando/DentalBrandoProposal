import connectDb from "@app/registration/connectDb";
import TokenModel from "@app/models/token";
import { NextResponse } from "next/server";
import RegistrationModel from "@app/models/registration";
import { cookies } from "next/headers";

export async function POST(req) {
  let token = cookies().get("authToken");
  let { userId } = await req.json();
  connectDb();

  if (token) {
    let tokenAlreadyAvaible = await TokenModel.findOne({
      token: tokenFromCookie,
    });

    await TokenModel.updateOne(
      { userId: tokenAlreadyAvaible.userId },
      { $set: { token: tokenFromCookie } }
    );

    let userData = await RegistrationModel.findOne({
      _id: tokenAlreadyAvaible.userId,
    });
    return NextResponse.json({ userData });
  } else if (userId) {
    let userAlreadyAvaible = await TokenModel.findOne({
      userId: userId,
    });

    if (!userAlreadyAvaible) {
      await TokenModel({
        token: tokenFromCookie,
        userId: userId,
      }).save();
    }
    let userData = await RegistrationModel.findOne({ _id: userId });
    return NextResponse.json({ userData });
  } else {
    let userData = null;
    return NextResponse.json({ userData });
  }

  // connectDb();
  // let tokenAlreadyAvaible = await TokenModel.findOne({
  //   token: tokenFromCookie,
  // });
  // let userAlreadyAvaible = await TokenModel.findOne({
  //   userId: userId,
  // });
  // if (userId !== null) {
  //   if (!userAlreadyAvaible) {
  //     await TokenModel({
  //       token: tokenFromCookie,
  //       userId: userId,
  //     }).save();
  //   } else {
  //     await TokenModel.updateOne(
  //       { userId: userId },
  //       { $set: { token: tokenFromCookie } }
  //     );
  //   }
  // } else {
  //   await TokenModel.updateOne(
  //     { userId: tokenAlreadyAvaible.userId },
  //     { $set: { token: tokenFromCookie } }
  //   );
  // }
  // if (userId === null) {
  //   let userData = await RegistrationModel.findOne({
  //     _id: tokenAlreadyAvaible.userId,
  //   });
  //   return NextResponse.json({ userData });
  // } else if (token === undefined || token === null) {
  //   let userData = await RegistrationModel.findOne({ _id: userId });
  //   return NextResponse.json({ userData });
  // } else {
  //   let userData = null;
  //   return NextResponse.json({ userData });
  // }
  console.log(
    "ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok "
  );
  let userData = {};
  return NextResponse.json({ userData });
}
