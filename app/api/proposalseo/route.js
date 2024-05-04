import ProposalSeoModel from "@app/models/Proposalseo";
import { NextResponse } from "next/server";

export async function POST(req) {
  let proposalSeoData = await req.json();
  console.log(proposalSeoData);
  try {
    await ProposalSeoModel(proposalSeoData).save();
    return NextResponse.json({ proposalSeoData: "proposalSeoData" });
  } catch (err) {
    console.log(err);
  }
}

export async function GET(req) {
  let proposalSeoData = await ProposalSeoModel.find();
  console.log(proposalSeoData);
  return NextResponse.json({ proposalSeoData });
}
