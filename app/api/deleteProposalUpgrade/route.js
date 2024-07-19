import connectDb from "@app/registration/connectDb";
import { NextResponse } from "next/server";
import ProposalUpgradingModel from "@app/models/ProposalUpgrading";
export async function POST(req) {
  let { _id } = await req.json();
  try {
    connectDb();
    let deleted = await ProposalUpgradingModel.deleteOne({ _id: _id });
    return NextResponse.json({
      acknowledged: deleted.acknowledged,
    });
  } catch (e) {
    return NextResponse.json({
      acknowledged: false,
    });
  }
}
