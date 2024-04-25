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
      <div className="w-[21cm] h-[1122.9px]">
        <CoverPage />
      </div>
      <div className="w-[8.27in] h-[1122.9px]">
        <TableOfContent />
      </div>
      <div className="w-[8.27in] h-[1122.9px]">
        <CoverLetter />
      </div>

      <div className="w-[8.27in] h-[1122.9px]">
        <AboutUs />
      </div>
      <div className="w-[8.27in] h-[1122.9px]">
        <ProjectObjective />
      </div>
      <div className="w-[8.27in] h-[1122.9px]">
        <Activities />
      </div>
      <div className="w-[8.27in] h-[1122.9px]">
        <MonthlyCalender />
      </div>
      <div className="w-[8.27in] h-[1122.9px]">
        <ContentCreation />
      </div>
      <div className="w-[8.27in] h-[1124px]">
        <Marketing />
      </div>
      <div className="w-[8.27in] h-[1122.9px]">
        <ValuedClient />
      </div>
      <div className="w-[8.27in] h-[1122.9px]">
        <AdvertisementPackages />
      </div>
      <div className="w-[8.27in] h-[1122.9px]">
        <PostDesignPackages />
      </div>
      <div className="w-[8.27in] h-[1122.9px]">
        <MarketingPackages />
      </div>
      <div className="w-[8.27in] h-[1122.9px]">
        <Estimate />
      </div>
      <div className="w-[8.27in] h-[1122.9px]">
        <Terms />
      </div>
      <div className="w-[8.27in] h-[1122.9px]">
        <Contact />
      </div>
    </div>
  );
}
export default Designing;
