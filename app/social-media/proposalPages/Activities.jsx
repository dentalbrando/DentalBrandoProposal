"use client";
import marketingImage from "@public/assets/socialMedia/marketing activiting infographics-13.png";
import strips from "@public/assets/socialMedia/pic3.png";

function Activities(prop) {
  return (
    <div className="w-[8.27in] h-[1123px]">
      <div className="flex flex-col justify-center items-center h-[100%] relative">
        <div className="flex w-full h-[50%] absolute top-0 overflow-hidden">
          <div className="absolute w-[87%] h-[50%] right-[6.5%] top-[120px] z-[200]">
            <div className="flex flex-col justify-center w-full leading-none">
              <span className="text-[#00A2FF] text-[44px] font-[600]">
                Marketing
              </span>
              <span className="text-[#00A2FF] text-[44px] font-[600]">
                Activities
              </span>
              <div className="w-[70px] h-[5px] bg-[#ffd600] my-3"></div>
            </div>
            <div className="flex flex-col justify-center w-full leading-snug">
              <span className="text-[white text-[15px] font-[400]">
                Our social media marketing services encompass the detailed
                project lifecycle broken down into smaller steps. We optimize
                the online social media brand presence of your business. We have
                listed below the detailed features of each SMM activity. They
                combine to craft a strong social reputation for your business.
                Get in touch with us to elevate your social presence!
              </span>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-[7%]">
          <img src={strips.src} className="w-[50px]" />
        </div>
        <div className="w-[87%] h-[55%] z-[100] absolute bottom-[9%] flex justify-between items-center">
          <div className="w-[32.5%] h-[100%]  flex flex-col gap-[5%] relative top-[20%]">
            <div className="w-[100%] h-fit leading-tight text-justify">
              <h3 className="text-[#00A2FF] text-[24px] font-[600] pb-1 text-start leading-[1.15]">
                Profile Creation & Optimization
              </h3>
              <span className="text-[15px] font-[400]">
                We create and optimize your social media profiles and align them
                with your unique business goals.
              </span>
            </div>
            <div className="w-[100%] h-fit leading-tight text-justify">
              <h3 className="text-[#00A2FF] text-[24px] font-[600] pb-1 text-start leading-[1.15]">
                Posting
              </h3>
              <span className="text-[15px] font-[400]">
                We schedule and publish your content consistently across all
                social media platforms.
              </span>
            </div>
            <div className="w-[100%] h-fit leading-tight text-justify">
              <h3 className="text-[#00A2FF] text-[24px] font-[600] pb-1 text-start leading-[1.15]">
                Monthly Report
              </h3>
              <span className="text-[15px] font-[400]">
                Our comprehensive report for SMM helps to see your brand's
                progress and success in visuals.
              </span>
            </div>
          </div>
          <div className="w-[31%] h-[100%] ">
            <img src={marketingImage.src} className="w-[100%]" />
          </div>
          <div className="w-[32.5%] h-[100%]  flex flex-col  gap-[5%] relative top-[5%]">
            <div className="w-[100%] h-fit leading-tight text-justify">
              <h3 className="text-[#00A2FF] text-[24px] font-[600] pb-1 text-start leading-[1.15]">
                Monthly Calendar/Plan
              </h3>
              <span className="text-[15px] font-[400]">
                We craft a monthly calendar plan as the strategic blueprint for
                managing your whole social media.
              </span>
            </div>
            <div className="w-[100%] h-fit leading-tight text-justify">
              <h3 className="text-[#00A2FF] text-[24px] font-[600] pb-1 text-start leading-[1.15]">
                Content Creation (Design Team)
              </h3>
              <span className="text-[15px] font-[400]">
                Designers and Social Media Team collaboratively work to create
                compelling social media content.
              </span>
            </div>
            <div className="w-[100%] h-fit leading-tight text-justify">
              <h3 className="text-[#00A2FF] text-[24px] font-[600] pb-1 text-start leading-[1.15]">
                Marketing
              </h3>
              <span className="text-[15px] font-[400]">
                We monitor and optimize marketing efforts to maximize your
                business ROI to achieve success.
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
              {prop.pageNumber < 10 ? "0" + prop.pageNumber : prop.pageNumber}
            </span>
          </div>
          <div className="w-[80%] h-[100%] bg-[rgb(204,236,255)] absolute left-[0%] rounded-tr-[100%] top-[20%]"></div>
        </div>
      </div>
    </div>
  );
}
export default Activities;
