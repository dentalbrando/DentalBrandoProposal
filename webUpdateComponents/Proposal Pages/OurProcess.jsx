import svg1 from "@public/assets/DbOurProcess/our process-01.svg";
import svg2 from "@public/assets/DbOurProcess/our process-02.svg";
import svg3 from "@public/assets/DbOurProcess/our process-03.svg";
import svg4 from "@public/assets/DbOurProcess/our process-04.svg";
import svg5 from "@public/assets/DbOurProcess/our process-05.svg";
import svg6 from "@public/assets/DbOurProcess/our process-06.svg";

const OurProcess = ({ pageNumber }) => {
  return (
    <>
      <div className="offer w-[8.27in] h-[1122.6px] shadow-lg print:shadow-none bg-white">
        <div className="w-100%">
          <div className="w-[90%] mx-auto">
            <div className="flex  print:h-[7.3rem]">
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

            <div className="mt-[34px]">
              <h1
                className="font-[700] text-[25pt] text-[#093A5B] leading-9"
                // style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                OUR
                <br />
                PROCESS
              </h1>
              <div className="bline w-[90px] h-2 mb-3 bg-[#03A0D7]"></div>
            </div>
            <div className="text-[11pt] flex text-justify">
              <p>
                {/* Our website update process starts with a thorough assessment of
                your site's strengths and areas for improvement. As dental
                website specialists, we understand your goals. We focus on
                modernizing design, enhancing functionality, and optimizing user
                experience. Our iterative approach ensures transparency,
                prioritizing clear communication and feedback. Post-launch, we
                provide ongoing support to keep your site secure, optimized, and
                aligned with growth objectives.{" "} */}
                Our website update process begins with a detailed assessment of
                your site's strengths and areas for improvement. As dental
                website specialists, we focus on modernizing design, enhancing
                functionality, and optimizing user experience. Our iterative
                approach ensures clear communication and feedback. Post-launch,
                we offer ongoing support to keep your site secure, optimized,
                and aligned with your growth objectives.
              </p>
            </div>
            <div>
              <section>
                <div className="flex gap-3 my-3">
                  <div className="w-1/2  border-2 border-[#03A0D7] rounded-tr-2xl rounded-bl-2xl flex">
                    <div>
                      <div>
                        <div>
                          <p
                            className="text-[#093A5B] text-[30pt] font-[700] flex justify-end items-end mr-4 "
                            style={{ fontFamily: "open sans" }}
                          >
                            1
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mt-[-3rem]">
                        <div className="ml-7 h-[67px]">
                          <img
                            src={svg1.src}
                            alt=""
                            width="70px"
                            className="h-full"
                          />
                        </div>
                        <div className="text-[18pt] font-[600] px-5 pt-4">
                          <p>Auditing</p>
                        </div>
                      </div>
                      <div className=" w-[90%] mx-auto pb-4 font-[400] text-[10pt] text-justify pt-1">
                        <p>
                          The auditing phase is our first step. We review your
                          site's design, functionality, and performance,
                          assessing strengths and areas for improvement. By
                          analyzing user interactions, technical aspects, and
                          SEO effectiveness, we provide tailored recommendations
                          to enhance your online presence.{" "}
                          {/* The auditing phase is our first step. We conduct a
                          thorough audit of your site, reviewing design,
                          functionality, and performance. This assesses
                          strengths and areas for improvement. We analyze user
                          interactions, technical aspects, and SEO
                          effectiveness. Insights guide tailored recommendations
                          aligned with your goals, enhancing your online
                          presence effectively. */}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2  border-2 border-[#03A0D7] rounded-tr-2xl rounded-bl-2xl flex">
                    <div>
                      <div>
                        <div>
                          <p
                            className="text-[#093A5B] text-[30pt] font-[700] flex justify-end items-end mr-4 "
                            style={{ fontFamily: "open sans" }}
                          >
                            2
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mt-[-3rem] bg-red-400">
                        <div className="ml-7">
                          <img src={svg2.src} alt="" width="70px" />
                        </div>
                        <div className="text-[18pt] leading-none font-[600] px-5">
                          <p>
                            Planning <br />
                            and Design
                          </p>
                        </div>
                      </div>
                      <div className="w-[90%] mx-auto pb-4 font-[400] text-[10pt] text-justify pt-1">
                        <p>
                          {/* In planning, we refine audit insights to set clear
                          website objectives. Custom prototypes and wireframes
                          reflect your brand, with a focus on intuitive user
                          experiences and optimizing key CTAs. Our process
                          emphasizes iterative design and clear communication to
                          realize your vision effectively.{" "} */}
                          {/* In planning and design, we refine audit insights to
                          set clear objectives for your updated website. We
                          create prototypes aligned with your brand and goals,
                          ensuring a compelling user experience. Our focus is on
                          seamless interaction across devices and optimizing
                          CTAs like appointment scheduling. Iterative design
                          refinement ensures your vision is accurately
                          transformed into a functional website. */}
                          We refine audit insights to set clear objectives for
                          your updated website. Our prototypes align with your
                          brand and goals, ensuring a seamless user experience
                          across devices. We optimize CTAs like appointment
                          scheduling, iteratively refining the design to bring
                          your vision to life.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <div className="flex gap-3 my-3">
                  <div className="w-1/2  border-2 border-[#03A0D7] rounded-tr-2xl rounded-bl-2xl flex">
                    <div>
                      <div>
                        <div>
                          <p
                            className="text-[#093A5B] text-[30pt] font-[700] flex justify-end items-end mr-4 "
                            style={{ fontFamily: "open sans" }}
                          >
                            3
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mt-[-3rem]">
                        <div className="ml-7 h-[67px]">
                          <img
                            src={svg3.src}
                            alt=""
                            width="70px"
                            className="h-full"
                          />
                        </div>
                        <div className="text-[18pt] font-[600] px-5 pt-4">
                          <p>Implementation</p>
                        </div>
                      </div>
                      <div className=" mx-3 pb-4 font-[400] text-[10pt] text-justify pt-1">
                        <p>
                          Now the development team begins to code. They start
                          with the back-end development, which involves creating
                          the server-side logic and database structure. They
                          then move on to front-end development, which involves
                          creating the user interface and integrating the
                          back-end functionality.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2  border-2 border-[#03A0D7] rounded-tr-2xl rounded-bl-2xl flex">
                    <div>
                      <div>
                        <div>
                          <p
                            className="text-[#093A5B] text-[30pt] font-[700] flex justify-end items-end mr-4 "
                            style={{ fontFamily: "open sans" }}
                          >
                            4
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mt-[-3rem]">
                        <div className="ml-7">
                          <img src={svg4.src} alt="" width="70px" />
                        </div>
                        <div className="text-[18pt] font-[600] px-5 pt-4">
                          <p>Testing</p>
                        </div>
                      </div>
                      <div className=" mx-3 pb-4 font-[400] text-[10pt] text-justify pt-1">
                        <p>
                          Once the development stage is complete, the
                          development team tests the website to ensure that it
                          works as expected. They test for functionality,
                          compatibility, and performance, and make any necessary
                          adjustments. This includes testing forms, buttons,
                          links, and any other interactive elements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <div className="flex gap-3 my-3">
                  <div className="w-1/2  border-2 border-[#03A0D7] rounded-tr-2xl rounded-bl-2xl flex">
                    <div>
                      <div>
                        <div>
                          <p
                            className="text-[#093A5B] text-[30pt] font-[700] flex justify-end items-end mr-4 "
                            style={{ fontFamily: "open sans" }}
                          >
                            5
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mt-[-3rem]">
                        <div className="ml-7">
                          <img src={svg5.src} alt="" width="70px" />
                        </div>
                        <div className="text-[18pt] font-[600] px-5 pt-4">
                          <p>Deployment</p>
                        </div>
                      </div>
                      <div className=" mx-3 pb-4 font-[400] text-[10pt] text-justify pt-1">
                        <p>
                          Our team ensures that the server environment is set up
                          correctly and that all necessary software and
                          dependencies are installed. They must also configure
                          the web server to handle incoming requests and route
                          them to the appropriate resources on the server making
                          it available to the public.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 border-2 border-[#03A0D7] rounded-tr-2xl rounded-bl-2xl flex">
                    <div>
                      <div>
                        <div>
                          <p
                            className="text-[#093A5B] text-[30pt] font-[700] flex justify-end items-end mr-4 "
                            style={{ fontFamily: "open sans" }}
                          >
                            6
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mt-[-3rem]">
                        <div className="ml-7">
                          <img src={svg6.src} alt="" width="70px" />
                        </div>
                        <div className="text-[18pt] font-[600] px-5 pt-4">
                          <p>Maintenance</p>
                        </div>
                      </div>
                      <div className=" mx-3 pb-4 font-[400] text-[10pt] text-justify pt-1">
                        <p className="text-justify">
                          After the website is deployed, we continue to monitor
                          it for issues and make any necessary updates or fixes.
                          We also provide ongoing support and maintenance to
                          ensure that the website remains up-to-date and secure
                          as per client demand on a monthly/quarterly/annual
                          maintenance plan.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProcess;
