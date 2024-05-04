import ProposalSmmModel from "@app/models/Proposalsmm";
import { NextResponse } from "next/server";

export async function POST(req) {
  let proposalSmmData = await req.json();
  console.log(proposalSmmData);
  try {
    await ProposalSmmModel(proposalSmmData).save();
    return NextResponse.json({ proposalSmmData: "proposalSmmData" });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ proposalData: false });
  }
}

export async function GET(req) {
  let proposalSmmData = await ProposalSmmModel.find();
  console.log(proposalSmmData);
  return NextResponse.json({ proposalSmmData });
}
