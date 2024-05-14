"use client";
import strips from "@public/assets/socialMedia/pic3.png";
import { useSelector } from "react-redux";

function MarketingPackages(prop) {
  let marketingPackages = useSelector((state) => state.marketing_package);
  function addCommasToNumber(number) {
    let numberString = number.toString();
    numberString = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return numberString;
  }

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
            Marketing Packages
          </span>
          <div className="w-[100px] h-[5px] my-2"></div>
          <p className="text-[15px] font-[400] leading-normal">
            Stand out from the crowd with eye-catching social media post
            designs. Our team of professional designers will transform your
            social media feed into a visual delight.
          </p>
        </div>

        <div className="flex flex-col w-[87%] h-[60%] mt-10 relative rounded-t-[60px] overflow-hidden z-[1]">
          <div className="absolute w-[100%] h-[20%] top-0 bg-[#00A2FF] border-b-4 border-[#ffd600]"></div>
          <div className="flex-between w-full h-full bg-gradient-to-b from-transparent from-50% to-white to-50% z-[10]">
            <div className="flex justify-center items-between w-[33%] h-[100%]">
              <div className="flex flex-col justify-start items-center h-full w-[90%] relative">
                <div className="h-[20%] w-full flex flex-col justify-center items-center leading-tight">
                  <h1 className="text-[32px] font-[600] text-[#ffd600]">
                    Basic
                  </h1>
                  <h2 className="text-[22px] font-[600] text-white">
                    <span className="text-[14px] font-[300]">{marketingPackages.basicCurrency} </span>
                    {addCommasToNumber(marketingPackages.basic)}
                  </h2>
                  <span className="text-[12px] font-[600] text-white">
                    Per Month
                  </span>
                </div>
                <div className="w-full text-[14px] font-[500] text-center flex flex-col gap-3">
                  <p className="pt-7">2 Social Networks</p>
                  <span className="text-[8px] mt-[-6%]">
                    (Facebook + Instagram)
                  </span>
                  <p className="">Social Media Audit</p>
                  <p className="">Social Media Marketing Plan</p>
                  <p className="">3 Weekly Content Posting</p>
                  <p className="">Content Creation</p>
                  <p className="">Monthly Reporting</p>
                  <p className="">Monthly Consultation</p>
                  <p className="">1 Ad Campaign Management</p>
                  <p className="">Branded Design</p>
                  <p className="">Hashtag Optimization</p>
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
                    <span className="text-[14px] font-[300]">{marketingPackages.basicCurrency} </span>
                    {addCommasToNumber(marketingPackages.standard)}
                  </h2>
                  <span className="text-[12px] font-[600] text-white">
                    Per Month
                  </span>
                </div>
                <div className="w-full text-[14px] font-[500] text-center flex flex-col gap-3">
                  <p className="pt-7">3 Social Networks</p>
                  <span className="text-[8px] mt-[-6%]">
                    (Facebook + Instagram + LinkedIn)
                  </span>
                  <p className="">Social Media Audit</p>
                  <p className="">Social Media Marketing Plan</p>
                  <p className="">5 Weekly Content Posting</p>
                  <p className="">Content Creation</p>
                  <p className="">Semi Monthly Reporting</p>
                  <p className="">Semi Monthly Consultation</p>
                  <p className="">3 Ads Campaign Management</p>
                  <p className="">Branded Design</p>
                  <p className="">Hashtag Optimization</p>
                  <p className="">Content Calender</p>
                  <p className="">Account Creation/Optimization</p>
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
                    <span className="text-[14px] font-[300]">{marketingPackages.basicCurrency} </span>
                    {addCommasToNumber(marketingPackages.premium)}
                  </h2>
                  <span className="text-[12px] font-[600] text-white">
                    Per Month
                  </span>
                </div>
                <div className="w-full text-[14px] font-[500] text-center flex flex-col gap-3 leading-tight">
                  <p className="pt-7">5 Social Networks</p>
                  <span className="text-[8px] mt-[-6%]">
                    (Facebook + Instagram + LinkedIn + Pinterest + Twitter)
                  </span>
                  <p className="">Social Media Audit</p>
                  <p className="">Social Media Marketing Plan</p>
                  <p className="">7 Weekly Content Posting</p>
                  <p className="">Content Creation</p>
                  <p className="">Weakly Reporting</p>
                  <p className="">Weakly Consoltation</p>
                  <p className="">6 Ads Campaign Management</p>
                  <p className="">Branded Design</p>
                  <p className="">Hashtag Optimization</p>
                  <p className="">Content Calender</p>
                  <p className="">Account Creation/Optimization</p>
                  <p className="">Influencer Marketing Services</p>
                  <p className="">Community Management</p>
                  <p className="">Video Post</p>
                  <p className="">Page Management</p>
                  <p className="">Google Business Management</p>
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
export default MarketingPackages;
