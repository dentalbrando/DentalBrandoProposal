"use client";
import seo3 from "@public/assets/socialMedia/seo3.png";
import seo10 from "@public/assets/socialMedia/seo10.png";
import seo11 from "@public/assets/socialMedia/seo11.png";

function LinkBuilding(prop) {
  return (
    <div className="w-[8.27in] h-[1123px] bg-white shadow-lg">
      <div className="flex flex-col justify-center items-center h-[100%] bg-red-20 relative">
        <div className="flex-end w-full h-[15%] absolute top-0 overflow-hidden ">
          <img src={seo3.src} className="h-full" />
        </div>

        <div className="flex flex-col w-[87%] h-[62%] bg-red-70 gap-20">
          <div className="flex justify-between items-start w-[100%] h-[50%] bg-purple-20">
            <div className="w-[335px]">
              <div className="flex flex-col justify-center w-full bg-red50 leading-none">
                <span className="text-[#00A2FF] text-[32px] font-[600]">
                  Link Building
                </span>
                <span className="text-[#00A2FF] text-[32px] font-[600]">
                  and Off-Page SEO
                </span>
                <div className="w-[100px] h-[5px] bg-yellow-400 mb-2 mt-3"></div>
              </div>
              <p className="w-[92%] text-justify">
                We build your business credibility and authority with our
                Off-Page SEO and Link-Building strategies on the internet. We
                acquire relevant backlinks from our authoritative websites in
                your niche. We develop high-quality backlinks to enhance your
                website's credibility. We use ethical and white hat techniques,
                so your website is not penalized. Our link-building strategies
                result in higher rankings and increased visibility of your
                business. We monitor it continuously.
              </p>
            </div>
            <img src={seo11.src} className="w-[345px] h-[317px]" />
          </div>
          <div className="flex flex-row-reverse justify-between items-start w-[100%] h-[50%]">
            <div className="w-[335px]">
              <div className="flex flex-col justify-center w-full leading-none">
                <span className="text-[#00A2FF] text-[32px] font-[600]">
                  Performance Tracking
                </span>
                <span className="text-[#00A2FF] text-[32px] font-[600]">
                  and Reporting
                </span>
                <div className="w-[100px] h-[5px] bg-yellow-400 mb-2 mt-3"></div>
              </div>
              <p className="w-[92%] text-justify">
                We do not do your SEO but keep it checked with performance
                tracking and reporting. We have regular performance reports
                detailing key metrics to track progress and optimize SEO
                efforts. These reports measure detailed vital metrics such as
                organic traffic, keyword rankings, backlink profiles, and more.
                With our reporting, you know what is going on with your
                website's ranking and visibility. You can track performance and
                see how beneficial our SEO efforts are for you.
              </p>
            </div>
            <img src={seo10.src} className="w-[345px] h-[317px]" />
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
export default LinkBuilding;
