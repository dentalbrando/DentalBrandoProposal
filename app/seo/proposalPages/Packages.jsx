"use client";
import seo3 from "@public/assets/socialMedia/seo3.png";
import seo12 from "@public/assets/socialMedia/seo12.png";

import { useSelector } from "react-redux";

function Packages(prop) {
  let packages = useSelector((state) => state.package_seo);
  return (
    <div className="w-[8.27in] h-[1123px] bg-white shadow-lg">
      <div className="flex flex-col justify-center items-center h-[100%] bg-red-20 relative">
        <div className="flex-end w-full h-[15%] absolute top-0 overflow-hidden ">
          <img src={seo3.src} className="h-full" />
        </div>
        <div className="flex w-full h-[50%] absolute top-0 overflow-hidden">
          <div className="absolute w-[87%] h-[50%] right-[6.5%] top-[120px] z-[200] bg-red-90">
            <div className="flex flex-col justify-center w-full leading-none">
              <span className="text-[#00A2FF] text-[44px] font-[600]">
                Search Engine
              </span>
              <span className="text-[#00A2FF] text-[44px] font-[600]">
                Optimization Packages
              </span>
              <div className="w-[70px] h-[5px] bg-yellow-400 my-3"></div>
            </div>
            <div className="flex flex-col justify-center w-full leading-snug">
              <span className="text-[white text-[15px] font-[400] text-justify">
                Unlock your brand's potential on a search engine with our
                professional advertisement design packages. Leave your
                competition in the dust with our cutting-edge solutions.
              </span>
            </div>
          </div>
        </div>
        <div className="w-[87%] h-fit absolute top-[25%] overflow-hidden">
          <div className="flex items-end justify-between w-[100%] h-[200px] relative">
            <img src={seo12.src} className="w-[25%]" />
            <div className="flex justify-between items-end w-[65%] h-[100%]">
              <div className="relative flex flex-col items-center justify-center w-[33%] h-[100%] overflow-hidden">
                <div className="flex items-end w-[100%] h-[50%] bg-[rgb(0,161,255)]"></div>
                <div className="flex items-end w-[100px] h-[100px] bg-[rgb(0,161,255)] absolute left-[0%]  bottom-[16%] rotate-[25deg]"></div>
                <div className="flex items-end w-[100px] h-[100px] bg-[rgb(0,161,255)] absolute right-[0%] bottom-[16%] rotate-[-25deg]"></div>
              </div>
              <div className="relative flex flex-col items-center justify-center w-[33%] h-[100%] overflow-hidden">
                <div className="flex items-end w-[100%] h-[50%] bg-[rgb(0,161,255)]"></div>
                <div className="flex items-end w-[100px] h-[100px] bg-[rgb(0,161,255)] absolute left-[0%]  bottom-[16%] rotate-[25deg]"></div>
                <div className="flex items-end w-[100px] h-[100px] bg-[rgb(0,161,255)] absolute right-[0%] bottom-[16%] rotate-[-25deg]"></div>
              </div>
              <div className="relative flex flex-col items-center justify-center w-[33%] h-[100%] overflow-hidden">
                <div className="flex items-end w-[100%] h-[50%] bg-[rgb(0,161,255)]"></div>
                <div className="flex items-end w-[100px] h-[100px] bg-[rgb(0,161,255)] absolute left-[0%]  bottom-[16%] rotate-[25deg]"></div>
                <div className="flex items-end w-[100px] h-[100px] bg-[rgb(0,161,255)] absolute right-[0%] bottom-[16%] rotate-[-25deg]"></div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-center text">{packages.basic}</h1>
        <h1 className="text-center text">{packages.standard}</h1>
        <h1 className="text-center text">{packages.premium}</h1>

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
export default Packages;
