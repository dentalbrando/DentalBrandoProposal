"use client";
import map from "@public/assets/socialMedia/map-17.png";
import roundStripes from "@public/assets/socialMedia/Social Media Marketing Proposal-16.png";
import logo from "@public/assets/socialMedia/SE color logo-09.png";
import whtieCircle from "@public/assets/socialMedia/whtieCircle.png";
import { useSelector } from "react-redux";

function ProjectObjective(prop) {
  const cover_pageSeo = useSelector((state) => state.cover_pageSeo);
  const aboutProjectSeo = useSelector((state) => state.about_projectSeo.aboutProject);
  return (
    <div className="w-[8.27in] h-[1123px] bg-white shadow-lg">
      <div className="flex flex-col justify-center items-center h-[100%] bg-red-00 relative bg-red-10">
        <div className="flex w-full h-[40%] absolute top-0 overflow-hidden">
          <div className="w-[150%] h-[100%] rounded-br-[45%] rounded-bl-[40%] absolute top-[0%] right-[-10%] z-[50] bg-[#00A2FF] flex justify-center items-center"></div>
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
          <div className="w-[60%] h-[120%] rounded-[50%] bottom-[5%] right-[-25%] z-[10] bg-[#ffd600] absolute"></div>
        </div>


      </div>
    </div>
  );
}
export default ProjectObjective;
