import connectDb from "@app/registration/connectDb";
import { NextResponse } from "next/server";
import ProposalModel from "@app/models/Proposal";
export async function POST(req) {
  let { _id } = await req.json();
  try {
    connectDb();
    let deleted = await ProposalModel.deleteOne({ _id: _id });
    return NextResponse.json({
      acknowledged: deleted.acknowledged,
    });
  } catch (e) {
    return NextResponse.json({
      acknowledged: false,
    });
  }
}
