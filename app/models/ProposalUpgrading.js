import mongoose from "mongoose";
const ProposalSchema = mongoose.Schema({
  date: { type: String, required: true },
  aboutYourProject: { type: Object, required: true },
  budget: { type: Object, required: true },
  cover_letter: { type: Object, required: true },
  cover_page: { type: Object, required: true },
  pageSequence: { type: Object, required: true },
  proposedSitemap: { type: Object, required: true },
  proposedSitemap2: { type: Object, required: true },
  proposedSitemapOverview: { type: Object, required: true },
}
);
const ProposalUpgradingModel =
  mongoose.models.ProposalUpgrading ||
  mongoose.model("ProposalUpgrading", ProposalSchema);
export default ProposalUpgradingModel;
