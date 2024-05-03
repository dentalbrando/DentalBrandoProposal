"use client";
import seo3 from "@public/assets/socialMedia/seo3.png";
import seo8 from "@public/assets/socialMedia/seo8.png";
import seo9 from "@public/assets/socialMedia/seo9.png";

function OnpageSeo(prop) {
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
                  On-Page SEO
                </span>
                <div className="w-[100px] h-[5px] bg-yellow-400 mb-2 mt-3"></div>
              </div>
              <p className="w-[92%] text-justify">
                This step is the most interesting one! It is about improving
                your website's pages for the best search rankings. We implement
                best practices for on-page optimization (this includes
                optimizing your meta-data, headings, and internal content) to
                enhance your website's relevance and authority. We ensure the
                content on your website meets search engine guidelines and
                provides an excellent user experience for your visitors. It is
                an ongoing process, and we love doing it.
              </p>
            </div>
            <img src={seo9.src} className="w-[345px] h-[317px]" />
          </div>
          <div className="flex flex-row-reverse justify-between items-start w-[100%] h-[50%]">
            <div className="w-[335px]">
              <div className="flex flex-col justify-center w-full leading-none">
                <span className="text-[#00A2FF] text-[32px] font-[600]">
                  Technical SEO Audit
                </span>
                <div className="w-[100px] h-[5px] bg-yellow-400 mb-2 mt-3"></div>
              </div>
              <p className="w-[92%] text-justify">
                From an SEO perspective, we examine the technical aspects of
                your website. Usually, it includes website speed,
                mobile-friendliness, crawlability, indexability, URL structure,
                internal linking, schema markup, and more. Once the issues are
                identified, we improve them with the best industry practices. We
                improve your website's health so that search engines can crawl
                and index your website. Our SEO strategies rank your website
                higher on the search engine page results SERP.
              </p>
            </div>
            <img src={seo8.src} className="w-[345px] h-[317px]" />
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
export default OnpageSeo;
