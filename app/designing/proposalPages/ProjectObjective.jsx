"use client";
import map from "@public/assets/socialMedia/map-17.png";
import roundStripes from "@public/assets/socialMedia/Social Media Marketing Proposal-16.png";

function ProjectObjective() {
  return (
    <div className="flex flex-col justify-center items-center h-[100%] bg-red-00 relative bg-red-10">
      <div className="flex w-full h-[40%] absolute top-0 overflow-hidden">
        <div className="w-[150%] h-[100%] rounded-br-[45%] rounded-bl-[40%] absolute top-[0%] right-[-10%] z-[50] bg-[#00A2FF] flex justify-center items-center"></div>
        <div className="absolute w-[87%] h-[50%] right-[6.5%] top-[25%] z-[200] bg-red-90">
          <div className="flex flex-col justify-center w-full leading-tight">
            <span className="text-[white] text-[44px] font-[600]">Project</span>
            <span className="text-[white] text-[44px] font-[600]">
              Objective
            </span>
            <div className="w-[70px] h-[5px] bg-yellow-400 my-3"></div>
          </div>
          <div className="flex flex-col justify-center w-full leading-snug">
            <span className="text-[white] text-[16px] font-[200]">
              Our specialized expertise in Social Media Marketing will enhance
              your brand’s social media presence. We aim to bring you business
              by targeting your sophisticated audience interested in the
              residential apartments of Vista Cornard Tower. We will involve
              multiples social media platforms, like Facebook, Instagram,
              LinkedIn, Twitter, Pinterest etc, for marketing your mall and
              residential apartments. We believe that powerful content creation
              is the backbone of marketing success, so we will create engaging
              content that showcases the luxury mall, amenities, and lifestyle
              offered by you.
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
        <div className="absolute w-[100%] h-[60%] z-[100] bg-green-40 flex flex-col justify-between items-center">
          <div className="w-[90%] h-[30%] z-[100] bg-blue-40 flex justify-between items-center text-center leading-tight">
            <span className="w-[30%] text-[15px] font-[500]">
              Spread Brand Awareness in entire Pakistan.
            </span>
            <span className="w-[30%] text-[15px] font-[500]">
              Posting high-quality Posts for Facebook, Instagram.
            </span>
          </div>
          <div className="w-[90%] h-[30%] z-[100] bg-blue-40 flex justify-between items-center text-center leading-tight">
            <span className="w-[30%] text-[15px] font-[500]">
              Posting & Sharing the Content on Social Media profiles & Groups.
            </span>
            <span className="w-[30%] text-[15px] font-[500]">
              Generating engagement on all the posts in different Social Media
              platforms.
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 h-[8%] w-full bg-green-30 overflow-hidden">
        <div className="flex justify-between items-center w-full px-16 h-full bg-blue-40 absolute top-0 left-0 z-[50]">
          <span className="text-gray-700 text-[15px] font-[500]">
            Social Media Marketing Proposal
          </span>
          <span className="text-gray-700 text-[15px] font-[500]">Page 03</span>
        </div>
        <div className="w-[200%] h-[350%] bg-blue-100 absolute top-[5%] right-[15%] rounded-[40%]"></div>
      </div>
    </div>
  );
}
export default ProjectObjective;
