import ProposalModel from "@app/models/Proposal";
import { NextResponse } from "next/server";

export async function POST(req) {
  let proposalData = await req.json();
  console.log(proposalData);
  try {
    await ProposalModel(proposalData).save();
    return NextResponse.json({ proposalData: "proposalData" });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ proposalData: false });
  }
}

export async function GET(req) {
  let proposalData = await ProposalModel.find();
  return NextResponse.json({ proposalData });
}
