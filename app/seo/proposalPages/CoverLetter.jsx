"use client";
import seo3 from "@public/assets/socialMedia/seo3.png";
import tick from "@public/assets/TICK-01.svg";
import sign from "@public/assets/socialMedia/sign.fcbecd86.jpg";
import { useSelector } from "react-redux";
function CoverLetter(prop) {
  let coverLetterSeo = useSelector((state) => state.cover_letterSeo);
  if (coverLetterSeo.letterText === "") {
    var tempLetterText = `Thank you for considering Soft Enterprise for your Search Engine Optimization project. We welcome 
the opportunity to discuss your SEO project in more detail. We want to provide a customized plan
tailored to your business requirements and help you elevate your online visibility. 
Soft Enterprise specializes in creating customized Search Engine Optimization strategies tailored to
the unique needs of our clients. The most popular search engines, like Google, Yahoo, and Bing, are
used globally to search for the desired businesses, products, and services. Businesses use it to
target their audiences to sell their products and services. As search engines emerged, so did the
idea of using divergent platforms to advertise and reach out to different cohorts of target audiences.
We leverage Search Engine to market the products and services of our clients in their niche by
micro-targeting audiences with our expertise.
We will work closely with you to understand your Search Engine Optimization goals. Then, we will
craft comprehensive strategies that align with your project goals, your brand identity, and how they
provide value to your target audience. We manage your entire brand reputation to make your brand
image consistent. We will update you on our SEO efforts with clear and detailed performance
reports from advanced analytical tools indicating Key Performance Indicators. 
We fulfill your project goals through open communication, scheduled meetings, and reporting
sessions. We are committed to upholding the highest level of professionalism in our services and
value our project partnerships to maintain your project's exclusivity. 
We are excited at the prospect of working with you to create a cohesive brand presence for your
business on popular Search Engines, helping you succeed in the era of digitalization. Please reach
out to schedule a consultation at your earliest convenience. 
Sincerely,`;
  } else {
    var tempLetterText = coverLetterSeo.letterText;
  }
  let content = tempLetterText
    .split("<p class = 'py-1'></p>")
    .map((line) => {
      if (line.trim().startsWith(">")) {
        const ticked = `<div class="flex">
                    
                    <div class="flex items-center justify-center">

                        <img src="${tick.src}" alt="" width="10px" />
                    </div>
                    <div class="px-2" >
                        <p>
                            ${line.substring(line.indexOf(">") + 1)}
                        </p>
                    </div>
                </div>`;

        return ticked;
      }

      line = line + "<p class = 'py-1'></p>";
      return line;
    })
    .join("");

  return (
    <div className="w-[8.27in] h-[1123px] bg-white shadow-lg">
      <div className="flex flex-col justify-center items-center h-[100%] bg-red-20 relative">
        <div className="flex-end w-full h-[15%] absolute top-0 overflow-hidden ">
          <img src={seo3.src} className="h-full" />
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
            <div
              class="Part-one font-[400] text-[15px] leading-6 pt-2"
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          </div>
          <div className="flex flex-col justify-center w-full mt-1">
            <div className="w-[200px] bg-red-300 ms-[-13px]">
              <img src={sign.src} className="" />
            </div>
            <p className="text-[15px] font-[500]">Project Manager</p>
            <p className="text-[15px] font-[500]"> Soft Enterprise</p>
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
export default CoverLetter;
