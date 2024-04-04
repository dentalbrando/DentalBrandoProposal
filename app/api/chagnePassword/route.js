import connectDb from "@app/registration/connectDb";
import { NextResponse } from "next/server";
import RegistrationModel from "@app/models/registration";
export async function POST(req) {
  let { oldPassword, newPassword, adminPassword } = await req.json();
  // let userData = { username, password, newPassword, adminPassword };
  connectDb();
  let adminPasswordCheck = await RegistrationModel.findOne({
    password: adminPassword,
  });
  let oldPasswordCheck = await RegistrationModel.findOne({
    password: oldPassword,
  });

  if (adminPasswordCheck) {
    if (adminPasswordCheck.admin) {
      if (oldPasswordCheck) {
        await RegistrationModel.updateOne(
          { password: oldPassword },
          { $set: { password: newPassword } }
        );
        return NextResponse.json({ msg: "Password Updated" });
      } else {
        return NextResponse.json({ error: "Wrong Password" });
      }
    } else {
      return NextResponse.json({ error: "Wrong Admin Password" });
    }
  } else {
    return NextResponse.json({ error: "Wrong Admin Password" });
  }
}
