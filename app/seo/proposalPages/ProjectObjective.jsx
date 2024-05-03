"use client";
import { useSelector } from "react-redux";
import seo4 from "@public/assets/socialMedia/seo4.png";
import seo5 from "@public/assets/socialMedia/seo5.png";
import whtieCircle from "@public/assets/socialMedia/whtieCircle.png";

function ProjectObjective(prop) {
  const cover_pageSeo = useSelector((state) => state.cover_pageSeo);
  const aboutProjectSeo = useSelector(
    (state) => state.about_projectSeo.aboutProject
  );
  return (
    <div className="w-[8.27in] h-[1123px] bg-white shadow-lg">
      <div className="flex flex-col justify-center items-center h-[100%] bg-red-00 relative">
        <div className="flex w-full h-[47%] absolute top-0 overflow-hidden ">
          <div className="w-[120%] h-[95%] absolute top-[-15%] left-[-5%] rotate-[-7deg] z-[50] bg-[#00A2FF] flex justify-center items-center"></div>
          <div className="absolute w-[87%] right-[6.5%] top-[120px] z-[200]">
            <div className="flex flex-col justify-center w-full leading-[53px]">
              <span className="text-[white] text-[44px] font-[600]">
                Project
              </span>
              <span className="text-[white] text-[44px] font-[600]">
                Objective
              </span>
              <div className="w-[70px] h-[5px] bg-yellow-400 my-3"></div>
            </div>
            <div className="flex flex-col justify-center w-full leading-snug">
              <span className="text-[white] text-[15px] font-[400]">
                {aboutProjectSeo}
              </span>
            </div>
          </div>
          <div className="flex items-end justify-center w-[35%] h-[100%] bottom-[-10px] right-[-5%] z-[0]  absolute">
            <img src={seo4.src} className="rotate-[-7deg] w-full" />
          </div>
        </div>

        <div className="w-[100%] h-[40%] z-[100] absolute bottom-[14%] flex justify-between items-center">
          <div className="w-[100%] h-[100%] z-[400] bg-green-40 flex justify-center items-center">
            <img src={seo5.src} className="w-full" />
          </div>

          <div className="absolute w-[100%] h-[100%] z-[200] flex justify-center items-center mx-auto averflow-hidden bg-red-10">
            <div className="relative w-[120px] left-[1%] h-[120px] bg-white rounded-full overflow-hidden bg-red-80">
              {cover_pageSeo.companyLogo ? (
                <img
                  src={cover_pageSeo.companyLogo.string}
                  className="absolute w-[100%] h-[100%]"
                />
              ) : (
                <img
                  src={whtieCircle.src}
                  className="absolute w-[100%] h-[100%]"
                />
              )}
            </div>
          </div>

          <div className="absolute w-[100%] h-[100%] z-[100] bg-green-40 flex flex-col justify-between items-center bg-red-40">
            <div className="flex flex-col justify-between items-center relative w-[100%] h-[100%]">
              <div className="w-[90%] h-[30%] z-[100] flex justify-center items- text-center leading-tight">
                <span className="w-[18%] text-[15px] font-[400] absolute left-[38%]">
                  Increased Website Ranking & Visibility on Search Engines.
                </span>
              </div>
              <div className="w-[90%] h-[30%] z-[100] flex justify-between items-center text-center leading-tight">
                <span className="w-[15%] text-[15px] font-[400] absolute left-[21%] top-[48%]">
                  Drive more qualified traffic for increased Brand Exposure.
                </span>
                <span className="w-[15%] text-[15px] font-[400] absolute right-[19%] top-[35%]">
                  Stay Ahead of Competitors and reach Customers before they do.
                </span>
              </div>
              <div className="w-[90%] h-[30%] z-[100] bg-blue-40 flex justify-center items-center text-center leading-tight">
                <span className="w-[18%] text-[15px] font-[400] absolute right-[36%] bottom-[5%]">
                  Stay up to date with the latest SEO best practices and trends.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 h-[110px] w-[100%] overflow-hidden bg-red-40">
          <div className="flex justify-between items-center w-full px-14 h-full absolute top-[18%] left-0 z-[50]">
            <span className="text-gray-700 text-[15px] font-[500]">
              Search Engine Optimization Proposal
            </span>
            <span className="text-gray-700 text-[15px] font-[500]">
              {prop.pageNumber < 10 ? "0" + prop.pageNumber : prop.pageNumber}
            </span>
          </div>
          <div className="w-[110%] h-[90%] bg-[rgb(255,246,203)] absolute left-[-5%] top-[55%] rotate-[7deg]"></div>
          <div className="w-[110%] h-[90%] bg-[rgb(204,236,255)] absolute left-[-5%] top-[60%] rotate-[7deg]"></div>
        </div>
      </div>
    </div>
  );
}
export default ProjectObjective;
