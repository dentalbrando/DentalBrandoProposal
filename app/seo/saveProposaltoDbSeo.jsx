"use client";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
export default function SaveProposaltoDbSeo() {
  let cover_page = useSelector((state) => state.cover_pageSeo);
  let cover_letter = useSelector((state) => state.cover_letterSeo);
  let packages = useSelector((state) => state.package_seo);
  let budget = useSelector((state) => state.budget_seo);
  let aboutProject = useSelector(
    (state) => state.about_projectSeo.aboutProject
  );
  let [loading, setLoading] = useState(false);
  let [saveButtonText, setSaveButtonText] = useState("Save Proposal");

  async function submit() {
    // if (saveButtonText === "Saved") {
    //   return;
    // }
    try {
      setLoading(true);
      await axios.post("/api/proposalseo", {
        cover_page,
        cover_letter,
        packages,
        budget,
        aboutProject,
      });
    } catch (err) {
      console.log(err);
      alert("Cant save your project at the moment");
      setSaveButtonText("Save proposal");
    } finally {
      setSaveButtonText("Saved");
      setLoading(false);
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
