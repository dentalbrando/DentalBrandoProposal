"use client";

import { useSelector } from "react-redux";
import CoverPageForm from "./forms/CoverPageForm";
import CoverLetterForm from "./forms/CoverLetterForm";
import AdPackageForm from "./forms/AdPackageForm";
import MarketingPackageForm from "./forms/MarketingPackageForm";
import PostPackageForm from "./forms/PostPackageForm";
import EstimateForm from "./forms/EstimateForm";
import ProjectObjectiveForm from "./forms/ProjectObjectiveForms";

const FormSmm = () => {
  const page = useSelector((state) => state.page);
  return (
    <div className="flex items-center flex-col bg-white py-16 w-[78vw]">
      <h1 className="text-main-blue text-[36px] font-semibold">
        {page.formId == "1"
          ? "Cover Page"
          : page.formId == "3"
          ? "Cover Letter"
          : page.formId == "5"
          ? "Project Objective"
          : page.formId == "11"
          ? "Advertisement Packages"
          : page.formId == "12"
          ? "Post Design Packages"
          : page.formId == "13"
          ? "Marketing Packages"
          : page.formId == "14"
          ? "Estimate"
          : "No Form Available"}
      </h1>
      {page.formId == "1" ? (
        <CoverPageForm />
      ) : page.formId == "3" ? (
        <CoverLetterForm />
      ) : page.formId == "5" ? (
        <ProjectObjectiveForm />
      ) : page.formId == "11" ? (
        <AdPackageForm />
      ) : page.formId == "12" ? (
        <PostPackageForm />
      ) : page.formId == "13" ? (
        <MarketingPackageForm />
      ) : page.formId == "14" ? (
        <EstimateForm />
      ) : null}
    </div>
  );
};

export default FormSmm;
