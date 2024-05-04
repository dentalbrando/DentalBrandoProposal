import ProposalModel from "@app/models/Proposal";
import { NextResponse } from "next/server";

export async function POST(req) {
  let proposalData = await req.json();
  const res = await ProposalModel(proposalData).save();
  console.log(res);
  return NextResponse.json({ proposalData: "proposalData" });
}

export async function GET(req) {
  let proposalData = await ProposalModel.find();
  return NextResponse.json({ proposalData });
}
