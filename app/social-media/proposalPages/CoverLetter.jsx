"use client";
import strips from "@public/assets/socialMedia/pic3.png";
import sign from "@public/assets/socialMedia/sign.fcbecd86.jpg";
import { useSelector } from "react-redux";
function CoverLetter(prop) {
  let coverLetterSmm = useSelector((state) => state.cover_letterSmm);
  if (coverLetterSmm.letterText === "") {
    var tempLetterText = `We are writing to express our interest in your web development project. As a company with extensive experience in web development and a track record of delivering exceptional results for our clients, we are confident that we would be the ideal partner for your project.
<p class = 'py-1'></p>
<p class = 'py-1'></p>
At Soft Enterprise, we understand that your website is often the first point of contact between your business and your customers. As such, we are committed to migrate your website to the sharepoint.
<p class = 'py-1'></p>
<p class = 'py-1'></p>
Our team of experienced web developers, designers, and project manager work closely with clients to understand their specific needs and requirements. We have expertise in a wide range of technologies including Wordpress, Laravel, Angular, PHP, Share Point, Vue.Js, React, Shopify, Python and more. We are always exploring new and innovative approaches to web development.
<p class = 'py-1'></p>
<p class = 'py-1'></p>
At every stage of the project, we prioritize communication and collaboration to ensure that you are fully involved in the process and the final product meets your expectations. We are dedicated to delivering projects on time and within budget, and we offer going support and maintenance to ensure that your website continues to perform at its best.
<p class = 'py-1'></p>
<p class = 'py-1'></p>
Thank you for considering Soft Enterprise for your web development needs. We are excited at the prospect of working with you and creating a website that will help your business succeed.
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
              class="Part-one font-[400] text-[12pt] leading-6 pt-2"
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>

            {/* <p className="text-[15px] font-[400] mt-1 leading-normal">
              {coverLetterSmm.letterText.split("\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[15px] font-[400] my-3 leading-normal"
                >
                  {paragraph}
                </p>
              ))}
            </p> */}
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
