"use client";
import seo3 from "@public/assets/socialMedia/seo3.png";
import seo6 from "@public/assets/socialMedia/seo6.png";
import seo7 from "@public/assets/socialMedia/seo7.png";

function KeyWordSeo(prop) {
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
                  Keyword Research
                </span>
                <span className="text-[#00A2FF] text-[32px] font-[600]">
                  and Optimization
                </span>
                <div className="w-[100px] h-[5px] bg-yellow-400 mb-2 mt-3"></div>
              </div>
              <p className="w-[92%] text-justify">
                We start your SEO process by identifying the keywords most
                searched for according to your niche in the search engines. We
                employ the best industry practices to uncover the high-potential
                keywords for your business. We study your target audience and
                competitors to optimize the content on your website in the
                following steps. These keywords are incorporated into your
                website content and metadata to improve your website's ranking
                significantly by optimizing your content.
              </p>
            </div>
            <img src={seo7.src} className="w-[345px] h-[317px]" />
          </div>
          <div className="flex flex-row-reverse justify-between items-start w-[100%] h-[50%]">
            <div className="w-[335px]">
              <div className="flex flex-col justify-center w-full leading-none">
                <span className="text-[#00A2FF] text-[32px] font-[600]">
                  Content Strategy
                </span>
                <div className="w-[100px] h-[5px] bg-yellow-400 mb-2 mt-3"></div>
              </div>
              <p className="w-[92%] text-justify">
                We will develop a tailored content strategy for your business.
                Focusing on creating engaging, relevant, and optimized content
                can result in a higher website ranking. First, we do keyword
                research and then create content in various forms, such as blog
                posts, articles, infographics, or videos related to the keywords
                provided. We deliver value through it to help your business
                establish an authority in your niche. We make it search
                engine-friendly to let your business shine.
              </p>
            </div>
            <img src={seo6.src} className="w-[345px] h-[317px]" />
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
export default KeyWordSeo;
