"use client";

import CoverPageForm from "./Forms/CoverPageForm";
import ConverLetterForm from "./Forms/ConverLetterForm";
import { useSelector } from "react-redux";
import AboutYourProject from "./Forms/AboutYourProject";
import BudgetForm from "./Forms/BudgetForm";

const Form = () => {
  const page = useSelector((state) => state.pageUpdate);
  return (
    <div className="flex items-center flex-col bg-white py-16 w-[78vw]">
      <h1 className="text-main-blue text-[36px] font-semibold">
        {page.formId == "1"
          ? "Cover Page"
          : page.formId == "3"
          ? "Cover Letter"
          : page.formId == "4"
          ? "Scope Of The Project"
          : page.formId == "5"
          ? "No Form Available"
          : page.formId == "9"
          ? "No Form Available"
          : "No Form Available"}
      </h1>
      {page.formId == "1" ? (
        <CoverPageForm />
      ) : page.formId == "3" ? (
        <ConverLetterForm />
      ) : page.formId == "4" ? (
        <AboutYourProject />
      ) : page.formId == "8" ? (
        <BudgetForm />
      ) : null}
    </div>
  );
};

export default Form;
