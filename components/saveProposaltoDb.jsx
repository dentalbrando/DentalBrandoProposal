"use client";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";
export default function SaveProposaltoDb() {
  let page = useSelector((state) => state.page);
  let aboutYourProject = useSelector((state) => state.aboutYourProject);
  let budget = useSelector((state) => state.budget);
  let cover_letter = useSelector((state) => state.cover_letter);
  let cover_page = useSelector((state) => state.cover_page);
  let pageSequence = useSelector((state) => state.pageSequence);
  let popup = useSelector((state) => state.cover_page);
  let proposedSitemap = useSelector((state) => state.proposedSitemap);
  let proposedSitemap2 = useSelector((state) => state.proposedSitemap2);
  let [loading, setLoading] = useState(false);
  let [saveButtonText, setSaveButtonText] = useState("Save Proposal");

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
        popup,
        proposedSitemap,
        proposedSitemap2,
      });
    } finally {
      setLoading(false);
      setSaveButtonText("Saved");
      alert("Your Proposal has been saved!");
    }
  }
  return (
    <>
      <button
        className={`mt-3 mx-0 p-2 ${
          loading
            ? "bg-gray-500"
            : "focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500"
        } font-bold rounded-lg text-md px-3 py-2 m-2`}
        onClick={submit}
      >
        {saveButtonText}
      </button>
    </>
  );
}
