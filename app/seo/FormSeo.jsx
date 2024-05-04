"use client";

import { useSelector } from "react-redux";
import CoverPageForm from "./forms/CoverPageForm";
import CoverLetterForm from "./forms/CoverLetterForm";
import PackageForm from "./forms/PackageForm";
import EstimateForm from "./forms/EstimateForm";
import ProjectObjectiveForm from "./forms/ProjectObjectiveForms";

const FormSeo = () => {
  const page = useSelector((state) => state.pageSeo);
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
          ? "Seo Packages"
          : page.formId == "12"
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
        <PackageForm />
      ) : page.formId == "12" ? (
        <EstimateForm />
      ) : null}
    </div>
  );
};

export default FormSeo;
