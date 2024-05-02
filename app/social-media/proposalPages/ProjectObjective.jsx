"use client";
import map from "@public/assets/socialMedia/map-17.png";
import roundStripes from "@public/assets/socialMedia/Social Media Marketing Proposal-16.png";
import logo from "@public/assets/socialMedia/SE color logo-09.png";
import whtieCircle from "@public/assets/socialMedia/whtieCircle.png";
import { useSelector } from "react-redux";

function ProjectObjective(prop) {
  const cover_pageSmm = useSelector((state) => state.cover_pageSmm);
  const aboutProjectSmm = useSelector((state) => state.about_projectSmm);
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
                {aboutProjectSmm.aboutProject.aboutProject}
              </span>
            </div>
          </div>
          <div className="w-[60%] h-[120%] rounded-[50%] bottom-[5%] right-[-25%] z-[10] bg-[#ffd600] absolute"></div>
        </div>

        <div className="absolute top-0 left-[7%] z-[100] w-[50px] bg-pink-900 flex">
          <div className="w-[50%] h-[100px] bg-white"></div>
          <div className="w-[50%] h-[100px] bg-[#ffd600]"></div>
        </div>

        <div className="w-[90%] h-[40%] z-[100] absolute bottom-[15%] flex justify-between items-center">
          <div className="w-[100%] h-[100%] z-[100] bg-green-40 flex justify-center items-center">
            <img src={map.src} className="w-full" />
          </div>
          <div className="absolute w-[100%] h-[100%] z-[200] flex justify-center items-center">
            <img src={roundStripes.src} className="w-full" />
          </div>
          <div className="absolute w-[100%] h-[100%] z-[200] flex justify-center items-center mx-auto averflow-hidden bg-red-10">
            <div className="relative w-[150px] h-[150px] bg-white rounded-full overflow-hidden">
              {cover_pageSmm.companyLogo ? (
                <img
                  src={cover_pageSmm.companyLogo.string}
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
          <div className="absolute w-[100%] h-[60%] z-[100] bg-green-40 flex flex-col justify-between items-center">
            <div className="w-[90%] h-[30%] z-[100] bg-blue-40 flex justify-between items-center text-center leading-tight">
              <span className="w-[30%] text-[15px] font-[400]">
                Spread Brand Awareness in entire Pakistan.
              </span>
              <span className="w-[30%] text-[15px] font-[400]">
                Posting high-quality Posts for Facebook, Instagram.
              </span>
            </div>
            <div className="w-[90%] h-[30%] z-[100] bg-blue-40 flex justify-between items-center text-center leading-tight">
              <span className="w-[30%] text-[15px] font-[400]">
                Posting & Sharing the Content on Social Media profiles & Groups.
              </span>
              <span className="w-[30%] text-[15px] font-[400]">
                Generating engagement on all the posts in different Social Media
                platforms.
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 h-[100px] w-[100%] overflow-hidden">
          <div className="flex justify-between items-center w-full px-16 h-full absolute top-[15%] left-0 z-[50]">
            <span className="text-gray-700 text-[15px] font-[500]">
              Social Media Marketing Proposal
            </span>
            <span className="text-gray-700 text-[15px] font-[500]">
              {" "}
              {prop.pageNumber < 10 ? "0" + prop.pageNumber : prop.pageNumber}
            </span>
          </div>
          <div className="w-[80%] h-[100%] bg-[rgb(204,236,255)] absolute left-[0%] rounded-tr-[100%] top-[20%]"></div>
        </div>
      </div>
    </div>
  );
}
export default ProjectObjective;
