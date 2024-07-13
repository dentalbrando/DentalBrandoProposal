import sign from "@public/assets/sign.jpg";
import { useSelector } from "react-redux";
import tick from "@public/assets/TICK-01.svg";
import { useEffect, useState } from "react";

const CoverLetter = ({ pageNumber }) => {
  const cover_letter = useSelector((state) => state.cover_letter);
  if (cover_letter.letterType === "web_dev" && cover_letter.letterText === "") {
    var tempLetterText = `Welcome to Dental Brando, a leading IT company specializing in website development for dental practices. Our goal is to enhance your practice's professionalism with a comprehensive website development proposal. We offer innovative web solutions to elevate your online presence, ensuring it aligns with your brand values. Our expertise will help you create a professional and engaging online presence that resonates with your clients and sets you apart in the dental industry.
<p class = 'py-1'></p>
At Dental Brando, our commitment lies in crafting bespoke designs that authentically mirror your distinctive brand identity. We recognize the paramount significance of a website that not only exudes visual excellence but also operates with flawless efficiency. Collaborating closely with you, our team of seasoned professionals ensures the development of a website that faithfully embodies your practice's ethos while adeptly fulfilling your unique requirements.
<p class = 'py-1'></p>
Our customized website design services ensure that your site reflects the unique personality and branding of your dental practice. We focus on enhancing patient engagement through user-friendly web design, making it easy for patients to navigate your site, find information, and schedule appointments. We use the latest design and development technologies to ensure your website is modern, mobile-friendly, and easy to navigate.
<p class = 'py-1'></p>
Our expert team specializes in creating stunning websites that not only showcase your professional expertise but also attract new patients. With our customized digital solutions, your practice will thrive in today's competitive landscape.
<p class = 'py-1'></p>
Sincerely,`;
  } else {
    var tempLetterText = cover_letter.letterText;
  }
  let content = tempLetterText
    .split("<p class = 'py-1'></p>")
    .map((line) => {
      if (line.trim().startsWith(">")) {
        const ticked = `<div className="flex">
                    
                    <div className="flex items-center justify-center">

                        <img src="${tick.src}" alt="" width="10px" />
                    </div>
                    <div className="px-2" >
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
    <div className="offer flex w-[8.27in] h-[1122.6px] shadow-lg bg-white">
      <div className=" flex w-full relative bg-green-90">
        <div className="flex bg-orange-00 h-full w-full absolute left-0 top-0 z-0">
          <div className="ml-2 w-[3px] h-full bg-[#093A5B] "></div>
          <div className="line ml-1 mr-1 h-full w-[3px]  bg-[#03A0D7] "></div>
        </div>

        <div className=" w-[90%] mx-auto bg-green-00 relative">
          <div className="flex  print:h-[7.3rem] bg-green-40">
            <div className="mt-[50px] flex relative  pb-0">
              <svg
                className="transform rotate-90 relative ml-[-5px]  top-0 "
                width="64"
                height="64"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#093A5B"
                  d="m221.76 69.66l-88-48.18a12 12 0 0 0-11.52 0l-88 48.18A12 12 0 0 0 28 80.18v95.64a12 12 0 0 0 6.24 10.52l88 48.18a11.95 11.95 0 0 0 11.52 0l88-48.18a12 12 0 0 0 6.24-10.52V80.18a12 12 0 0 0-6.24-10.52ZM220 175.82a4 4 0 0 1-2.08 3.5l-88 48.18a4 4 0 0 1-3.84 0l-88-48.18a4 4 0 0 1-2.08-3.5V80.18a4 4 0 0 1 2.08-3.5l88-48.18a3.94 3.94 0 0 1 3.84 0l88 48.18a4 4 0 0 1 2.08 3.5Z"
                />
              </svg>
              <h6 className="absolute ml-[1.4rem] top-5 text-[#03A0D7]  text-[12pt]">
                {pageNumber}
              </h6>
            </div>
            <div className="mt-[65px]">
              <h3 className="font-[700] text-[9pt] text-[#03A0D7]">
                Dental Brando
              </h3>

              <h3 className=" font-[700]  text-[9pt] text-[#03A0D7]">
                Business Proposal
              </h3>

              <div className=" mt-1  w-[6.5in] h-0.5 bg-[#093A5B] "></div>
            </div>
          </div>
          <div className="mt-[70px] ">
            <h1
              className="font-[700] text-[25pt] text-[#093A5B] leading-[36px]"
              // style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              COVER <br />
              LETTER{" "}
            </h1>
            <div className="bline w-[90px] h-2 bg-[#03A0D7] "></div>
          </div>
          <div className="name underline  mt-14 font-[700]  text-[17.5pt]">
            <p>
              Dear{" "}
              <span id="name" className="capitalize">
                {cover_letter.clientName}
              </span>
            </p>
          </div>

          <div className=" font-[400] text-[12pt] leading-5">
            <div
              className="Part-one font-[400] text-[12pt] leading-6 text-justify w-[100%] pt-2 bg-yellow-00"
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
            <div>
              <img
                className="h-[50px] w-[150px] mt-6 ml-[-11px]"
                src={sign.src}
                alt=""
              />
            </div>

            <div className="end mt-2 ;">
              <p>Project Manager</p>
              <p>Dental Brando</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLetter;
