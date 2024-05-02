import mongoose from "mongoose";

const ProposalSeoSchema = mongoose.Schema({
  cover_letter: { type: Object, required: true },
  cover_page: { type: Object, required: true },
  packages: { type: Object, required: true },
  budget: { type: Object, required: true },
  aboutProject: { type: String, required: true },
});

const ProposalSeoModel =
  mongoose.models.ProposalSeo ||
  mongoose.model("ProposalSeo", ProposalSeoSchema);

export default ProposalSeoModel;
