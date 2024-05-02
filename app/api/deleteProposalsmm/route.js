import connectDb from "@app/registration/connectDb";
import { NextResponse } from "next/server";
import ProposalModelSmm from "@app/models/Proposalsmm"
export async function POST(req) {
  let { _id } = await req.json();
  try {
    connectDb();
    let deleted = await ProposalModelSmm.deleteOne({ _id: _id });
    return NextResponse.json({
      acknowledged: deleted.acknowledged,
    });
  } catch (e) {
    return NextResponse.json({
      acknowledged: false,
    });
  }
}
