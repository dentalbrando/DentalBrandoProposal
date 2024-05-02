"use client";
import strips from "@public/assets/socialMedia/pic3.png";
import sign from "@public/assets/socialMedia/sign.fcbecd86.jpg";
import { useSelector } from "react-redux";
function CoverLetter(prop) {
  let coverLetterSeo = useSelector((state) => state.cover_letterSeo);

  // Apply line breaks
  // coverLetterText = coverLetterText.replace(/<br \/>/g, "\n");
 
  return (
    <div className="w-[8.27in] h-[1123px] bg-white shadow-lg">
      <div className="flex flex-col justify-center items-center h-[100%] bg-red-20 relative">
        <div className="absolute top-0 left-[7%]">
          <img src={strips.src} className="w-[50px]" />
        </div>
        <div className="w-[87%] h-[75%] bg-red-70">
          <div className="flex flex-col justify-center w-full leading-none">
            <span className="text-[#00A2FF] text-[44px] font-[600]">Cover</span>
            <span className="text-[#00A2FF] text-[44px] font-[600]">
              Letter
            </span>
            <div className="w-[100px] h-[5px] bg-yellow-400 my-3"></div>
          </div>
          <div className="flex flex-col justify-center w-full text-justify">
            <span className="text-[24px] font-[700] underline">
              Dear {coverLetterSeo.clientName}
            </span>

            <p className="text-[15px] font-[400] mt-1 leading-normal">
              {coverLetterSeo.letterText.split("\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[15px] font-[400] my-3 leading-normal"
                >
                  {paragraph}
                </p>
              ))}
            </p>
          </div>
          <div className="flex flex-col justify-center w-full mt-1">
            <div className="w-[200px] bg-red-300 ms-[-13px]">
              <img src={sign.src} className="" />
            </div>
            <p className="text-[15px] font-[500]">Project Manager</p>
            <p className="text-[15px] font-[500]"> Soft Enterprise</p>
          </div>
        </div>

        <div className="absolute bottom-0 h-[100px] w-[100%] overflow-hidden">
          <div className="flex justify-between items-center w-full px-16 h-full absolute top-[15%] left-0 z-[50]">
            <span className="text-gray-700 text-[15px] font-[500]">
              Social Media Marketing Proposal
            </span>
            <span className="text-gray-700 text-[15px] font-[500]">
              {prop.pageNumber < 10 ? "0" + prop.pageNumber : prop.pageNumber}
            </span>
          </div>
          <div className="w-[80%] h-[100%] bg-[rgb(204,236,255)] absolute left-[0%] rounded-tr-[100%] top-[20%]"></div>
        </div>
      </div>
    </div>
  );
}
export default CoverLetter;
