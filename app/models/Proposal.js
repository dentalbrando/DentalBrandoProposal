import mongoose from "mongoose";
const ProposalSchema = mongoose.Schema({});
const ProposalModel =
  mongoose.models.Proposal || mongoose.model("Proposal", ProposalSchema);
export default ProposalModel;
