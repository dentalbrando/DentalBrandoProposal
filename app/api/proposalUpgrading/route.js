import ProposalUpgradingModel from "@app/models/ProposalUpgrading";
import { NextResponse } from "next/server";

export async function POST(req) {
  let proposalData = await req.json();
  try {
    await ProposalUpgradingModel(proposalData).save();
    return NextResponse.json({ proposalData: "proposalData" });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ proposalData: false });
  }
}

export async function GET(req) {
  let proposalData = await ProposalUpgradingModel.find();
  return NextResponse.json({ proposalData });
}
