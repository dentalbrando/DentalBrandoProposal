import mongoose from "mongoose";
const ProposalSchema = mongoose.Schema({
  aboutYourProject: { type: Object, required: true },
  budget: { type: Object, required: true },
  cover_letter: { type: Object, required: true },
  cover_page: { type: Object, required: true },
  pageSequence: { type: Object, required: true },
  popup: { type: Object, required: true },
  proposedSitemap: { type: Object, required: true },
  proposedSitemap2: { type: Object, required: true },
});
const ProposalModel =
  mongoose.models.Proposal || mongoose.model("Proposal", ProposalSchema);
export default ProposalModel;
