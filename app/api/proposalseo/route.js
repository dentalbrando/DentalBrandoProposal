import ProposalSeoModel from "@app/models/Proposalseo";
import { NextResponse } from "next/server";

export async function POST(req) {
  let proposalSeoData = await req.json();
  try {
    await ProposalSeoModel(proposalSeoData).save();
    return NextResponse.json({ proposalSeoData: "proposalSeoData" });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ proposalData: false });
  }
}

export async function GET(req) {
  let proposalSeoData = await ProposalSeoModel.find();
  return NextResponse.json({ proposalSeoData });
}
