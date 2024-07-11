"use client";

import CoverPageForm from "./Forms/CoverPageForm";
import ConverLetterForm from "./Forms/ConverLetterForm";
import { useSelector } from "react-redux";
import AboutYourProject from "./Forms/AboutYourProject";
import ProposedSiteMap from "./Proposal Pages/ProposedSiteMap";
import ProposedSiteMapForm from "./Forms/ProposedSiteMapForm";
import BudgetForm from "./Forms/BudgetForm";

const Form = () => {
  const page = useSelector((state) => state.page);
  return (
    <div className="flex items-center flex-col bg-white py-16 w-[78vw]">
      <h1 className="text-main-blue text-[36px] font-semibold">
        {page.formId == "1"
          ? "Cover Page"
          : page.formId == "3"
          ? "Cover Letter"
          : page.formId == "4"
          ? "Scope of the Project"
          : page.formId == "5"
          ? "No Form Available"
          : page.formId == "9"
          ? "No Form Available"
          : "No Form Available"}
      </h1>
      {/* <div className="overflow-y-visible custom-scroll mt-5 h-fit custom-bg w-[900px] py-12 px-12 rounded-2xl border-2 border-color"> */}
      {page.formId == "1" ? (
        <CoverPageForm />
      ) : page.formId == "3" ? (
        <ConverLetterForm />
      ) : page.formId == "4" ? (
        <AboutYourProject />
      ) : //     : page.formId == "5" ? (
      // <ProposedSiteMapForm />
      //     )
      page.formId == "8" ? (
        <BudgetForm />
      ) : null}
      {/* </div> */}
    </div>
  );
};

export default Form;
