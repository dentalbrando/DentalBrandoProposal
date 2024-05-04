import ProposalSeoModel from "@app/models/Proposalseo";
import { NextResponse } from "next/server";

export async function POST(req) {
  let proposalSeoData = await req.json();
  console.log(proposalSeoData);
  try {
    await ProposalSeoModel(proposalSeoData).save();
  } catch (err) {
    console.log(err);
  }
  return NextResponse.json({ proposalSeoData: "proposalSeoData" });
}

export async function GET(req) {
  let proposalSeoData = await ProposalSeoModel.find();
  console.log(proposalSeoData);
  return NextResponse.json({ proposalSeoData });
}
