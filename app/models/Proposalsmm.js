import mongoose from "mongoose";

const ProposalSmmSchema = mongoose.Schema({
  cover_letter: { type: Object, required: true },
  cover_page: { type: Object, required: true },
  adPackage: { type: Object, required: true },
  postPackage: { type: Object, required: true },
  marketingPackage: { type: Object, required: true },
  budget: { type: Object, required: true },
  aboutProject: { type: String, required: true },
});

const ProposalSmmModel =
  mongoose.models.ProposalSmm ||
  mongoose.model("ProposalSmm", ProposalSmmSchema);
export default ProposalSmmModel;
