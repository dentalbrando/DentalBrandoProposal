import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePage } from "@app/store/pageSclice";
import CoverLetter from "./proposalPages/CoverLetter";
import CoverPage from "./proposalPages/coverPage";
import TableOfContent from "./proposalPages/TableOfContent";
import AboutUs from "./proposalPages/AboutUs";
import ProjectObjective from "./proposalPages/ProjectObjective";
import Activities from "./proposalPages/Activities";
import MonthlyCalender from "./proposalPages/MonthlyCalender";
import ContentCreation from "./proposalPages/ContentCreation";
import Marketing from "./proposalPages/Marketing";
import ValuedClient from "./proposalPages/ValuedClient";
import AdvertisementPackages from "./proposalPages/Advertisement Packages";
import PostDesignPackages from "./proposalPages/PostDesignPackages";
import MarketingPackages from "./proposalPages/MarketingPackages";
import Estimate from "./proposalPages/Estimate";
import Terms from "./proposalPages/Terms";
import Contact from "./proposalPages/Contact";
import SaveProposaltoDbSmm from "./saveProposaltoDbSmm";
const FullProposal = () => {
  const dispatch = useDispatch();
  const pageSequenceSmm = useSelector(
    (state) => state.pageSequenceSmm
  ).pageSequenceSmm;
  let pageNumber = 1;

  return (
    <div className="w-full h-full">
      <button
        type="button"
        onClick={() => dispatch(updatePage("1"))}
        className="print:hidden w-16 h-16 left-2 top-[48vh] bg-white border flex justify-center items-center rounded-full fixed z-50"
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#000000"
            d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20v-2z"
          />
        </svg>
      </button>
      <div className="print:bg-white flex gap-3 print:gap-0 justify-center items-center  flex-col hideInPrint">
        <div
          className="print:hidden fixed z-50 right-2"
          style={{ top: "50vh" }}
        >
          <SaveProposaltoDbSmm />
        </div>
        {pageSequenceSmm.map((page, index) => {
          const id = page.id;
          switch (id) {
            case "1":
              return page.checked && <CoverPage key={index} />;
            case "2":
              return page.checked && <TableOfContent key={index} />;
            case "3":
              return (
                page.checked && (
                  <CoverLetter key={index} pageNumber={pageNumber++} />
                )
              );
            case "4":
              return (
                page.checked && (
                  <AboutUs key={index} pageNumber={pageNumber++} />
                )
              );
            case "5":
              return (
                page.checked && (
                  <ProjectObjective key={index} pageNumber={pageNumber++} />
                )
              );
            case "6":
              return (
                page.checked && (
                  <Activities key={index} pageNumber={pageNumber++} />
                )
              );
            case "7":
              return (
                page.checked && (
                  <MonthlyCalender key={index} pageNumber={pageNumber++} />
                )
              );
            case "8":
              return (
                page.checked && (
                  <ContentCreation key={index} pageNumber={pageNumber++} />
                )
              );
            case "9":
              return (
                page.checked && (
                  <Marketing key={index} pageNumber={pageNumber++} />
                )
              );
            case "10":
              return (
                page.checked && (
                  <ValuedClient key={index} pageNumber={pageNumber++} />
                )
              );
            case "11":
              return (
                page.checked && (
                  <AdvertisementPackages
                    key={index}
                    pageNumber={pageNumber++}
                  />
                )
              );
            case "12":
              return (
                page.checked && (
                  <PostDesignPackages key={index} pageNumber={pageNumber++} />
                )
              );
            case "13":
              return (
                page.checked && (
                  <MarketingPackages key={index} pageNumber={pageNumber++} />
                )
              );
            case "14":
              return (
                page.checked && (
                  <Estimate key={index} pageNumber={pageNumber++} />
                )
              );
            case "15":
              return (
                page.checked && <Terms key={index} pageNumber={pageNumber++} />
              );
            case "16":
              return page.checked && <Contact key={index} />;
          }
        })}
      </div>
    </div>
  );
};

export default FullProposal;
