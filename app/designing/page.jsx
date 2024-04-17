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

function Designing() {
  return (
    <div className="w-full h-fit bg-gray-200 flex flex-col items-center ">
      <CoverPage />
      <TableOfContent />
      <CoverLetter />
      <AboutUs />
      <ProjectObjective />
      <Activities />
      <MonthlyCalender />
      <ContentCreation />
      <Marketing />
      <ValuedClient />
      <AdvertisementPackages />
      <PostDesignPackages />
      <MarketingPackages />
      <PostDesignPackages />
    </div>
  );
}
export default Designing;
