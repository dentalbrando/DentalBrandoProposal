"use client";

import AdvertisementPackages from "./proposalPages/Advertisement Packages";
import ContentCreation from "./proposalPages/ContentCreation";
import CoverLetter from "./proposalPages/CoverLetter";
import Marketing from "./proposalPages/Marketing";
import MarketingPackages from "./proposalPages/MarketingPackages";
import MonthlyCalender from "./proposalPages/MonthlyCalender";
import PostDesignPackages from "./proposalPages/PostDesignPackages";
import TableOfContent from "./proposalPages/TableOfContent";
import CoverPage from "./proposalPages/coverPage";
import AboutUs from "./proposalPages/AboutUs";
import ProjectObjective from "./proposalPages/ProjectObjective";
import Activities from "./proposalPages/Activities";
import ValuedClient from "./proposalPages/ValuedClient";
import Estimate from "./proposalPages/Estimate";
import Terms from "./proposalPages/Terms";
import Contact from "./proposalPages/Contact";

function Designing() {
  return (
    <div className="w-full h-fit flex flex-col items-center gap-0">
      <div className="w-[8.27in] h-[29.7cm]">
        <CoverPage />
      </div>
      <div className="w-[8.27in] h-[29.7cm]">
        <TableOfContent />
      </div>
      <div className="w-[8.27in] h-[29.7cm]">
        <CoverLetter />
      </div>

      <div className="w-[8.27in] h-[29.7cm]">
        <AboutUs />
      </div>
      <div className="w-[8.27in] h-[29.7cm]">
        <ProjectObjective />
      </div>
      <div className="w-[8.27in] h-[29.7cm]">
        <Activities />
      </div>
      <div className="w-[8.27in] h-[29.7cm]">
        <MonthlyCalender />
      </div>
      <div className="w-[8.27in] h-[29.7cm]">
        <ContentCreation />
      </div>
      <div className="w-[8.27in] h-[29.7cm]">
        <Marketing />
      </div>
      <div className="w-[8.27in] h-[29.7cm]">
        <ValuedClient />
      </div>
      <div className="w-[8.27in] h-[29.7cm]">
        <AdvertisementPackages />
      </div>
      <div className="w-[8.27in] h-[29.7cm]">
        <PostDesignPackages />
      </div>
      <div className="w-[8.27in] h-[29.7cm]">
        <MarketingPackages />
      </div>
      <div className="w-[8.27in] h-[29.7cm]">
        <Estimate />
      </div>
      <div className="w-[8.27in] h-[29.7cm]">
        <Terms />
      </div>
      <div className="w-[8.27in] h-[29.7cm]">
        <Contact />
      </div>
    </div>
  );
}
export default Designing;
