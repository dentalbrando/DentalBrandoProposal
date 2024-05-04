"use client";
import tick from "@public/assets/TICK-01.svg";
import strips from "@public/assets/socialMedia/pic3.png";
import sign from "@public/assets/socialMedia/sign.fcbecd86.jpg";
import { useSelector } from "react-redux";
function CoverLetter(prop) {
  let coverLetterSmm = useSelector((state) => state.cover_letterSmm);
  if (coverLetterSmm.letterText === "") {
    var tempLetterText = `We are writing to express our interest in your Social Media Marketing project. We are a team of professionals who are always busy making businesses successful through Social Media Marketing. We are confident that we can take your online presence and brand visibility to an elevated level with our esteemed Social Media Marketing services.
<p class = 'py-1'></p>
<p class = 'py-1'></p>
<p class = 'py-1'></p>
Soft Enterprise specializes in creating customized Social Media strategies tailored to the unique needs of our clients. Social Media acts as a bridge, not only among friends and family but also between businesses and their target. As the social network grew from its emergence, so did the idea to use divergent platforms as a means of advertising and reaching out to different cohorts of target audiences. We leverage Social Media to market the products and services of our clients in their niche by micro-targeting audiences with our expertise.
<p class = 'py-1'></p>
<p class = 'py-1'></p>
<p class = 'py-1'></p>
We will work closely with you to understand your Social Media Marketing goals. Then we will craft comprehensive strategies by ensuring that they align with your project goals, your brand identity, and how they provide value to your target audience. We do your complete brand reputation management to make your brand image consistent across all your social media platforms. We will update you on our Social Media Marketing efforts with clear and detailed performance reports from advanced analytical tools indicating Key Performance Indicators. 
<p class = 'py-1'></p>
<p class = 'py-1'></p>
<p class = 'py-1'></p>
We fulfill your project goals with open project communication, scheduled meetings, and reporting sessions. We are committed to upholding the highest level of professionalism in our services. We value our project partnerships to maintain the exclusivity of your project. 
<p class = 'py-1'></p>
<p class = 'py-1'></p>
<p class = 'py-1'></p>
Thank you for considering Soft Enterprise for your Social Media Marketing needs. We are excited at the prospect of working with you and creating a cohesive social media brand presence for your business to help you succeed in the era of Social Media Marketing. 
<p class = 'py-1'></p>
<p class = 'py-1'></p>
<p class = 'py-1'></p>
Sincerely,`;
  } else {
    var tempLetterText = coverLetterSmm.letterText;
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
              Dear {coverLetterSmm.clientName}
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
