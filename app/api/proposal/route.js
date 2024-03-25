import ProposalModel from "@app/models/Proposal";
import { NextResponse } from "next/server";

export async function POST(req) {
  let proposalData = await req.json();
  await ProposalModel(proposalData).save();
  return NextResponse.json({ proposalData });
}

export async function GET(req) {
  let proposalData = await ProposalModel.find();
  return NextResponse.json({ proposalData });
}