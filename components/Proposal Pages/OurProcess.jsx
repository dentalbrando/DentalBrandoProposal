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

            <div className="mt-[40px]">
              <h1
                className="font-[700] text-[25pt] text-[#093A5B] leading-9"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                OUR
                <br />
                PROCESS
              </h1>
              <div className="bline w-[90px] h-2 mt-1 mb-3 bg-[#03A0D7]"></div>
            </div>
            <div className="text-[11pt] flex text-justify">
              <p>
                Our web development service follows a comprehensive process to
                ensure that we deliver high-quality, responsive, and optimized
                websites that meet the unique needs of our clients. We are
                committed to providing exceptional service and support
                throughout the entire process. We take on a collaborative
                approach to ensure that you are completely satisﬁed and happy
                with the ﬁnal product.
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
                        <div className="ml-7">
                          <img src={svg1.src} alt="" width="70px" />
                        </div>
                        <div className="text-[18pt] font-[600] px-5 pt-4">
                          <p>Planning</p>
                        </div>
                      </div>
                      <div className=" w-[90%] mx-auto pb-4 font-[400] text-[10pt] text-justify pt-[10px] ">
                        <p>
                          The first step in the web development process is
                          planning. Before the project begins, we will send you
                          a form where you will define your project
                          requirements. Our project managing team will ensure
                          that your project is planned efficiently. We will work
                          closely with you to fulfil your goals.
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
                      <div className="flex items-center mt-[-3rem]">
                        <div className="ml-7">
                          <img src={svg2.src} alt="" width="70px" />
                        </div>
                        <div className="text-[18pt] font-[600] px-5 pt-4">
                          <p>Design</p>
                        </div>
                      </div>
                      <div className="w-[90%] mx-auto pb-4 font-[400] text-[10pt] text-justify pt-1">
                        <p>
                          During this phase, our Design team will work closely
                          with the client to create wireframes and mock-ups of
                          the website's layout, design elements, and user
                          interface. The team will often begin by gathering
                          information about the client's brand and target
                          audience, as well as any specific goals.{" "}
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
                        <div className="ml-7">
                          <img src={svg3.src} alt="" width="70px" />
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
