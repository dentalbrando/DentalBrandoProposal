import { useSelector } from "react-redux";
import CoverLetter from "./proposalPages/CoverLetter";
import CoverPage from "./proposalPages/coverPage";
import TableOfContent from "./proposalPages/TableOfContent";
import AboutUs from "./proposalPages/AboutUs";
import ProjectObjective from "./proposalPages/ProjectObjective";
import Activities from "./proposalPages/Activities";
import ValuedClient from "./proposalPages/ValuedClient";
import Contact from "./proposalPages/Contact";
import Terms from "./proposalPages/Terms";
import Estimate from "./proposalPages/Estimate";
import Packages from "./proposalPages/Packages";
import LinkBuilding from "./proposalPages/LinkBuilding";
import OnpageSeo from "./proposalPages/On-pageSeo";
import KeyWordSeo from "./proposalPages/KeywordResearch";

const LivePreviewSeo = () => {
  const page = useSelector((state) => state.page);

  return (
    <div className="flex items-center flex-col bg-white pb-16 w-[78vw] bg-white">
      <h1 className="text-main-blue text-[36px] font-semibold">Live Preview</h1>
      <div className="overflow-y-visible custom-scroll mt-5 h-fit custom-bg w-[900px] py-12 px-12 rounded-2xl border-2 border-color">
        {page.formId == "1" ? (
          <CoverPage />
        ) : page.formId == "2" ? (
          <TableOfContent />
        ) : page.formId == "3" ? (
          <CoverLetter />
        ) : page.formId == "4" ? (
          <AboutUs />
        ) : page.formId == "5" ? (
          <ProjectObjective />
        ) : page.formId == "6" ? (
          <Activities />
        ) : page.formId == "7" ? (
          <KeyWordSeo />
        ) : page.formId == "8" ? (
          <OnpageSeo />
        ) : page.formId == "9" ? (
          <LinkBuilding />
        ) : page.formId == "10" ? (
          <ValuedClient />
        ) : page.formId == "11" ? (
          <Packages />
        ) : page.formId == "12" ? (
          <Estimate />
        ) : page.formId == "13" ? (
          <Terms />
        ) : page.formId == "14" ? (
          <Contact />
        ) : (
          <div className="offer flex w-[8.27in] h-[11.6876in] bg-white shadow-lg justify-center items-center text-4xl text-red-400 font-semibold">
            {" "}
            Nothing to Preview
          </div>
        )}
      </div>
    </div>
  );
};

export default LivePreviewSeo;
