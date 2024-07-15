"use client";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";
export default function SaveProposaltoDb() {
  let page = useSelector((state) => state.pageUpdate);
  let aboutYourProject = useSelector((state) => state.aboutYourProjectUpdate);
  let budget = useSelector((state) => state.budgetUpdate);
  let cover_letter = useSelector((state) => state.cover_letter_Update);
  let cover_page = useSelector((state) => state.cover_page_Update);
  let pageSequence = useSelector((state) => state.pageSequenceUpdate);
  let proposedSitemap = useSelector((state) => state.proposedSitemapUpdate);
  let proposedSitemap2 = useSelector((state) => state.proposedSitemap2Update);
  let [loading, setLoading] = useState(false);
  let [saveButtonText, setSaveButtonText] = useState("Save Proposal");
  let proposedSitemapOverview = useSelector(
    (state) => state.proposedSitemapOverviewUpdate
  );
  async function submit() {
    if (saveButtonText === "Saved") {
      return;
    }
    try {
      setLoading(true);
      let date =
        new Date().getDate() +
        "/" +
        (new Date().getMonth() + 1) +
        "/" +
        new Date().getFullYear();

      await axios.post("/api/proposal", {
        date,
        page,
        aboutYourProject,
        budget,
        cover_letter,
        cover_page,
        pageSequence,
        proposedSitemap,
        proposedSitemap2,
        proposedSitemapOverview,
      });
      alert("Your Proposal has been saved!");
      setSaveButtonText("Saved");
    } catch {
      alert("Cant save your project at the moment");
      setSaveButtonText("Save proposal");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        className={`mt-3 mx-0 p-2 ${
          loading
            ? "bg-gray-500"
            : "focus:outline-none text-white bg-[#093A5B] hover:bg-[#03A0D7]"
        } font-bold rounded-lg text-md px-3 py-2 m-2`}
        onClick={submit}
      >
        {saveButtonText}
      </button>
    </>
  );
}
