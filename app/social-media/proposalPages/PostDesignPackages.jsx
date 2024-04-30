"use client";
import strips from "@public/assets/socialMedia/pic3.png";
import clock from "@public/assets/socialMedia/clock icon-15.png";
import { useSelector } from "react-redux";

function PostDesignPackages(prop) {
  let postPackages = useSelector((state) => state.post_package);

  return (
    <div className="w-[8.27in] h-[1123px] bg-white shadow-lg">
      <div className="flex flex-col justify-start items-center h-[100%] relative">
        <div className="absolute top-0 left-[7%]">
          <img src={strips.src} className="w-[50px]" />
        </div>

        <div className="flex flex-col justify-center w-[87%] leading-none mt-20 pt-20">
          <span className="text-[#00A2FF] text-[44px] font-[600]">
            Social Media
          </span>
          <span className="text-[#00A2FF] text-[44px] font-[600]">
            Post Design Packages
          </span>
          <div className="w-[100px] h-[5px] my-3"></div>
          <p className="text-[15px] font-[400] leading-normal">
            Stand out from the crowd with eye-catching social media post
            designs. Our team of professional designers will transform your
            social media feed into a visual delight.
          </p>
        </div>

        <div className="flex flex-col w-[87%] h-[50%] mt-16 relative rounded-t-[60px] overflow-hidden z-[1]">
          <div className="absolute w-[100%] h-[22%] top-0 bg-[#00A2FF] border-b-4 border-[#ffd600]"></div>
          <div className="flex-between w-full h-full py-5 bg-gradient-to-b from-transparent from-50% to-white to-50% z-[10]">
            <div className="flex justify-center items-between w-[33%] h-[100%]">
              <div className="flex flex-col justify-start items-center h-full w-[90%] relative">
                <div className="h-[20%] w-full flex flex-col justify-center items-center leading-tight">
                  <h1 className="text-[32px] font-[600] text-[#ffd600]">
                    Basic
                  </h1>
                  <h2 className="text-[22px] font-[600] text-white">
                    <span className="text-[14px] font-[300]">PKR</span>{" "}
                    {postPackages.basic}
                  </h2>
                </div>
                <div className="h-[65%] w-full text-[14px] font-[500] text-center flex flex-col gap-3">
                  <p className="pt-10">10 Posts Design</p>
                  <p className="">High Quality Social Media Posts</p>
                  <p className="">Facebook + instagram + Linkedin</p>
                  <p className="">1 Revision</p>
                </div>
                <div className="flex flex-col justify-start items-center h-[15%] w-full absolute bottom-0">
                  <div className="w-[80%] h-[1px] bg-[#ffd600]"></div>
                  <div className="w-[95%] h-[90%] flex justify-between items-center">
                    <img src={clock.src} className="w-[15%]" />
                    <span className="text-[15px] font-[500]">
                      within 3 working days
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-between w-[33%] h-[100%] border-r border-l border-[#ffd600]">
              <div className="flex flex-col justify-start items-center h-full w-[90%] relative">
                <div className="h-[20%] w-full flex flex-col justify-center items-center leading-tight">
                  <h1 className="text-[32px] font-[600] text-[#ffd600]">
                    Standard
                  </h1>
                  <h2 className="text-[22px] font-[600] text-white">
                    <span className="text-[14px] font-[300]">PKR</span>
                    {postPackages.standard}
                  </h2>
                </div>
                <div className="h-[65%] w-full text-[14px] font-[500] text-center flex flex-col gap-3">
                  <p className="pt-10">20 Posts Design</p>
                  <p className="">High Quality Social Media Posts</p>
                  <p className="">
                    Facebook + Instagram + Linkedin + Pinterest
                  </p>
                  <p className="">3 Revision</p>
                  <p className="">1Dp + Cover Photo</p>
                </div>
                <div className="flex flex-col justify-start items-center h-[15%] w-full absolute bottom-0">
                  <div className="w-[80%] h-[1px] bg-[#ffd600]"></div>
                  <div className="w-[95%] h-[90%] flex justify-between items-center">
                    <img src={clock.src} className="w-[15%]" />
                    <span className="text-[15px] font-[500]">
                      within 5 working days
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-between w-[33%] h-[100%]">
              <div className="flex flex-col justify-start items-center h-full w-[90%] relative">
                <div className="h-[20%] w-full flex flex-col justify-center items-center leading-tight">
                  <h1 className="text-[32px] font-[600] text-[#ffd600]">
                    Premium
                  </h1>
                  <h2 className="text-[22px] font-[600] text-white">
                    <span className="text-[14px] font-[300]">PKR</span>
                    {postPackages.premium}
                  </h2>
                </div>
                <div className="h-[65%] w-full text-[14px] font-[500] text-center flex flex-col gap-3">
                  <p className="pt-10">30 Posts Design</p>
                  <p className="">3 Ad Campaign</p>
                  <p className="">High Quality Social Media Posts</p>
                  <p className="">
                    Facebook + Instagram + Linkedin + Pinterest + Twitter
                  </p>
                  <p className="">Unlimited Revisions</p>
                  <p className="">1Dp + Cover Photo</p>
                  <p className="">Post Analysis</p>
                </div>
                <div className="flex flex-col justify-start items-center h-[15%] w-full absolute bottom-0">
                  <div className="w-[80%] h-[1px] bg-[#ffd600]"></div>
                  <div className="w-[95%] h-[90%] flex justify-between items-center">
                    <img src={clock.src} className="w-[15%]" />
                    <span className="text-[15px] font-[500]">
                      within 7 working days
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 h-[100px] w-[100%] overflow-hidden z-[200]">
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

        <div className="absolute bottom-0 h-[35%] w-full overflow-hidden bg-yellow-100 z-[0]"></div>
      </div>
    </div>
  );
}
export default PostDesignPackages;
