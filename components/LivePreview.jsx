import CoverLetter from "./Proposal Pages/CoverLetter";
import ConverPage from "./Proposal Pages/CoverPage";
import { useSelector } from "react-redux";
import AboutYourProjects from "./Proposal Pages/AboutYourProjects";
import ProposedSiteMap from "./Proposal Pages/ProposedSiteMap";
import Budget from "./Proposal Pages/Budget";
import TableOfContent from "./Proposal Pages/TableOfContent";
import OurProcess from "./Proposal Pages/OurProcess";
// import AboutUs from "./Proposal Pages Copy/AboutUs";
import AboutUs from "./Proposal Pages/AboutUs";
import WhyUs from "./Proposal Pages/WhyUs";
import Terms from "./Proposal Pages/Terms";
import LastPage from "./Proposal Pages/LastPage";
import Package2 from "./Proposal Pages/Package2";

const LivePreview = () => {
  const page = useSelector((state) => state.page);

  return (
    <div className="flex items-center flex-col pb-16 w-[78vw] bg-white">
      <h1 className="text-main-blue text-[36px] font-semibold">Live Preview</h1>
      <div className="overflow-y-visible custom-scroll mt-5 h-fit custom-bg w-[900px] py-12 px-12 rounded-2xl border-2 border-color">
        {page.formId == "1" ? (
          <ConverPage />
        ) : page.formId == "3" ? (
          <CoverLetter />
        ) : page.formId == "4" ? (
          <AboutYourProjects />
        ) : //       : page.formId == "5" ? (
        // <ProposedSiteMap />
        //       )
        page.formId == "8" ? (
          <Budget />
        ) : page.formId == "2" ? (
          <TableOfContent />
        ) : page.formId == "6" ? (
          <OurProcess />
        ) : page.formId == "5" ? (
          <AboutUs />
        ) : page.formId == "7" ? (
          <WhyUs />
        ) : page.formId == "9" ? (
          <Terms />
        ) : page.formId == "10" ? (
          <LastPage />
        ) : page.formId == "11" ? (
          <Package2 />
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

export default LivePreview;
