import mongoose from "mongoose";
const ProposalUpgradingSchema = mongoose.Schema({
  date: { type: String, required: true },
  aboutYourProject: { type: Object, required: true },
  budget: { type: Object, required: true },
  cover_letter: { type: Object, required: true },
  cover_page: { type: Object, required: true },
  pageSequence: { type: Object, required: true },
}
);
const ProposalUpgradingModel =
  mongoose.models.ProposalUpgrading ||
  mongoose.model("ProposalUpgrading", ProposalUpgradingSchema);
export default ProposalUpgradingModel;