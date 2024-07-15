import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import tick from "@public/assets/TICK-01.svg";

const AboutYourProjects = ({ pageNumber }) => {
  let onceBr = false;
  const ab = useSelector((state) => state.aboutYourProjectUpdate);
  const overviews = useSelector(
    (state) => state.aboutYourProjectUpdate.overview
  );
  const functionalities = useSelector(
    (state) => state.aboutYourProjectUpdate.functionality
  );
  const websiteCMSs = useSelector(
    (state) => state.aboutYourProjectUpdate.websiteCMS
  );

  if (functionalities === "") {
    var tempFunctionality = `Our dental website update services enhance online presence and engagement. We'll modernize your design to meet industry standards, improve navigation with strategic CTAs, and optimize speed for faster loading and lower bounce rates. On-page SEO improvements, including meta tags and headers, boost search visibility, attracting local patients. Mobile responsiveness ensures a seamless experience on all devices.`;
  } else {
    var tempFunctionality = functionalities;
  }

  const contentWithImages = tempFunctionality
    .replace(/\n/g, "<p class = 'py-1'></p>")
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
  let [tempWebsiteCMS, setTempWebsiteCMS] = useState(
    websiteCMSs === ""
      ? `We have conducted a thorough audit of your current website, benchmarking it against top dental websites in your area known for high patient engagement. Our findings reveal several critical areas that require immediate attention to enhance your online presence and patient interaction.`
      : websiteCMSs
  );
  let [tempOverviews, setTempOverviews] = useState(
    overviews === ""
      ? `We have conducted a thorough audit of your current website, benchmarking it against top dental websites in your area known for high patient engagement. Our findings reveal several critical areas that require immediate attention to enhance your online presence and patient interaction.`
      : overviews
  );

  useEffect(() => {
    setTempWebsiteCMS(
      websiteCMSs === ""
        ? `<b>Outdated Design:</b> Your website's design does not reflect current industry standards, potentially impacting user perception and engagement.
<b>Lack of Clear Calls-to-Action (CTAs):</b> Important actions like appointment scheduling and contacting your practice are not prominently displayed, hindering navigation and conversion rates.
<b>Speed Optimization:</b> The website's loading speed is suboptimal, leading to potential user frustration and increased bounce rates.
<b>On-Page SEO Deficiencies:</b> Critical elements such as meta tags, headers, and content optimization are not effectively implemented, reducing visibility in search engine results.
<b>Mobile Responsiveness:</b> The website may not provide an optimal experience on mobile devices, limiting accessibility for a significant portion of your audience.`
        : websiteCMSs
    );
    setTempOverviews(
      overviews === ""
        ? `We have conducted a thorough audit of your current website, benchmarking it against top dental websites in your area known for high patient engagement. Our findings reveal several critical areas that require immediate attention to enhance your online presence and patient interaction.`
        : overviews
    );
  }, [websiteCMSs, overviews]);

  return (
    <>
      <div class="offer w-[8.27in] h-[1122.6px] shadow-lg bg-white">
        <div class="w-100%">
          <div class="w-[90%] mx-auto">
            <div class="flex  print:h-[7.3rem]">
              <div class="mt-[50px] flex relative  pb-0">
                <svg
                  class="transform rotate-90 relative ml-[-5px]  top-0 "
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
                <h6 class="absolute ml-[1.4rem] top-5 text-[#03A0D7]  text-[12pt]">
                  {pageNumber}
                </h6>
              </div>
              <div class="mt-[65px]">
                <h3 class="font-[700] text-[9pt] text-[#03A0D7]">
                  Dental Brando
                </h3>

                <h3 class=" font-[700]  text-[9pt] text-[#03A0D7]">
                  Business Proposal
                </h3>

                <div class=" mt-1  w-[6.5in] h-0.5 bg-[#093A5B] "></div>
              </div>
            </div>

            <div class="pt-[34px] mb-2">
              <h1
                class="font-[700] text-[25pt] text-[#093A5B] leading-9 uppercase"
                // style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Scope of 
                <br />the PROJECT
              </h1>
              <div class="bline w-[90px] h-2 bg-[#03A0D7]"></div>
            </div>
            <section class="pt-2">
              <div class="flex">
                {/* <div class="text-[16pt] text-[#093A5B] font-[700] ">
                  <p>1.</p>
                </div> */}
                <div class="text-[16pt] text-[#093A5B] px- font-[700]">
                  <p>Overview & Goals</p>
                </div>
              </div>
              <div>
                <p
                  class="pt-2 text-[12pt] text-justify"
                  dangerouslySetInnerHTML={{
                    __html: tempOverviews.replace(
                      /\n/g,
                      "<p class = 'py-1'></p>"
                    ),
                  }}
                ></p>
              </div>
            </section>
            {tempWebsiteCMS ? (
              <section>
                <div class="flex pt-5">
                  {/* <div class="text-[16pt] text-[#093A5B] font-[700]">
                    <p>2.</p>
                  </div> */}
                  <div class="text-[16pt] text-[#093A5B] px- font-[700]">
                    <p>Website Issues Identified</p>
                  </div>
                </div>
                <div>
                  <p
                    class="pt-2 text-[12pt] text-justify"
                    dangerouslySetInnerHTML={{
                      __html: tempWebsiteCMS.replace(
                        /\n/g,
                        "<p class = 'py-1'></p>"
                      ),
                    }}
                  ></p>
                  {/* <p class="pt-2 text-[12pt] text-justify">
                    <b>Outdated Design:</b> Your website's design does not
                    reflect current industry standards, potentially impacting
                    user perception and engagement.
                    <br />
                    <b>Lack of Clear Calls-to-Action (CTAs):</b> Important
                    actions like appointment scheduling and contacting your
                    practice are not prominently displayed, hindering navigation
                    and conversion rates.
                    <br />
                    <b>Speed Optimization:</b> The website's loading speed is
                    suboptimal, leading to potential user frustration and
                    increased bounce rates.
                    <br />
                    <b>On-Page SEO Deficiencies:</b> Critical elements such as
                    meta tags, headers, and content optimization are not
                    effectively implemented, reducing visibility in search
                    engine results.
                    <br />
                    <b>Mobile Responsiveness:</b> The website may not provide an
                    optimal experience on mobile devices, limiting accessibility
                    for a significant portion of your audience.
                  </p> */}
                </div>
              </section>
            ) : null}
            <section>
              <div class="flex pt-5">
                {/* <div class="text-[16pt] text-[#093A5B]  font-[700]">
                  <p>3.</p>
                </div> */}
                <div class="text-[16pt] text-[#093A5B] px- font-[700]">
                  <p>Key Features and Functionality</p>
                </div>
              </div>
              <div>
                <p
                  class="pt-2 text-[12pt] text-justify"
                  dangerouslySetInnerHTML={{ __html: contentWithImages }}
                ></p>
                {/* <p
                  class="pt-2 text-[12pt] text-justify"
                  // dangerouslySetInnerHTML={{ __html: contentWithImages }}
                >
                  Our dental website update services enhance online presence and
                  engagement. We'll modernize your design to meet industry
                  standards, improve navigation with strategic CTAs, and
                  optimize speed for faster loading and lower bounce rates.
                  On-page SEO improvements, including meta tags and headers,
                  boost search visibility, attracting local patients. Mobile
                  responsiveness ensures a seamless experience on all devices.{" "}
                </p> */}
              </div>
            </section>
            <section>
              <div class="flex pt-5">
                {/* <div class="text-[16pt] text-[#093A5B]  font-[700]">
                  <p>4.</p>
                </div> */}
                <div class="text-[16pt] text-[#093A5B] px- font-[700]">
                  <p>Updating Your Current WordPress Website</p>
                </div>
              </div>
              <div>
                {/* <p
                  class="pt-2 text-[12pt] text-justify"
                  dangerouslySetInnerHTML={{ __html: contentWithImages }}
                ></p> */}
                <p class="pt-2 text-[12pt] text-justify">
                  Update your WordPress website with a modern design and
                  enhanced functionality for your dental practice. WordPress
                  offers easy management, extensive customization with themes
                  and plugins, built-in SEO, and scalability. Its responsive
                  design ensures optimal performance on all devices, backed by a
                  strong community for ongoing support and security updates,
                  elevating your online presence and improving patient
                  experience.{" "}
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutYourProjects;
