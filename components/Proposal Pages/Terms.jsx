import React from "react";

const Terms = ({ pageNumber }) => {
  return (
    <>
      <div className="offer w-[8.27in] h-[1122.6px] print:shadow-none shadow-lg bg-white">
        <div className="w-full h-full">
          <div className="w-[90%] mx-auto">
            <div className="flex  h-[7.3rem] ">
              <div className="mt-[50px]  flex relative  ">
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

                <div className=" mt-1  w-[6.8in] h-0.5 bg-[#093A5B] "></div>
              </div>
            </div>

            <div className="pt-[33px] mb-2">
              <h1
                className="font-[700] text-[25pt] text-[#093A5B] leading-9"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                TERMS & <br />
                CONDITIONS
              </h1>
              <div className="bline w-[200px] h-2 bg-[#03A0D7]"></div>
            </div>

            <h1 className=" font-[700]  text-[20px]  text-[#093A5B] w-fit mt-7 mb-1">
              GENERAL TERMS
              <div className="w-full border-b-[2px] border-[#03A0D7]"></div>
            </h1>
            <div className="flex gap-6 mt- py-1 ">
              <div className=" w-full h-fit   flex ">
                <div>
                  <div className="flex gap-2 items-end justify-start">
                    <div>
                      <p className="text-[#03A0D7] text-[23pt] font-[800] leading-none">
                        01
                      </p>
                    </div>
                    <div className="text-[12pt] font-[600] mt-[px] ">
                      <p>NDA and IP Contract:</p>
                    </div>
                  </div>

                  <div className=" w-full mx-auto pb font-[400] text-[10pt] text-justify pt-1">
                    <p>
                      We will execute a Non-Disclosure Agreement (NDA) and
                      Intellectual Property (IP) contract to protect your
                      confidential information and intellectual property.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" w-full  flex">
                <div>
                  <div className="flex gap-2 items-end justify-start">
                    <div>
                      <p className="text-[#03A0D7] text-[23pt] font-[800] leading-none ">
                        02
                      </p>
                    </div>
                    <div className="text-[12pt] font-[600] mt-[px] ">
                      <p>Quality Assurance:</p>
                    </div>
                  </div>

                  <div className=" w-full mx-auto font-[400] text-[10pt] text-justify pt-1 ">
                    <p>
                      We ensure high-quality service and timely delivery. Any
                      delays will be communicated promptly, and necessary
                      effective adjustments to the project will be made.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className=" w-full  flex">
                <div>
                  <div className="flex gap-2 items-end justify-start">
                    <div>
                      <p className="text-[#03A0D7] text-[23pt] font-[800] leading-none ">
                        03
                      </p>
                    </div>
                    <div className="text-[12pt] font-[600]  mt-[px]">
                      <p>Customer Satisfaction:</p>
                    </div>
                  </div>

                  <div className=" w-full mx-auto pb font-[400] text-[10pt] text-justify pt-1 ">
                    <p>
                      We strive for 100% customer satisfaction in every project.
                      If you are not satisfied with the service, we will make
                      necessary revisions at no additional cost.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-6 py-1">
              <div className=" w-full   flex">
                <div>
                  <div className="flex gap-2 items-end justify-start">
                    <div>
                      <p className="text-[#03A0D7] text-[23pt] font-[800] leading-none ">
                        04
                      </p>
                    </div>
                    <div className="text-[12pt] font-[600] mt-[px] ">
                      <p>Free Maintenance:</p>
                    </div>
                  </div>

                  <div className=" w-full mx-auto pb- font-[400] text-[10pt] text-justify pt-1 ">
                    <p>
                      After the website is delivered, we provide one month of
                      complimentary maintenance to ensure everything operates
                      smoothly and to address any unforeseen issues that may
                      arise.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className=" w-full  flex">
                <div>
                  <div className="flex gap-2 items-end justify-start">
                    <div>
                      <p className="text-[#03A0D7] text-[23pt] font-[800] leading-none ">
                        05
                      </p>
                    </div>
                    <div className="text-[12pt] font-[600] mt-[px] ">
                      <p>Customer Support:</p>
                    </div>
                  </div>

                  <div className=" w-full mx-auto pb- font-[400] text-[10pt] text-justify pt-1 ">
                    <p>
                      Our dedicated 24/7 customer support team is always
                      available and ready to assist you with any questions,
                      concerns, or issues you may encounter.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className=" w-full  flex">
                <div>
                  <div className="flex gap-2 items-end justify-start">
                    <div>
                      <p className="text-[#03A0D7] text-[23pt] font-[800] leading-none ">
                        06
                      </p>
                    </div>
                    <div className="text-[12pt] font-[600]  mt-[px]">
                      <p>No Hidden Fees:</p>
                    </div>
                  </div>

                  <div className="bg-red-00 w-full mx-auto pb ps- font-[400] text-[10pt] text-justify pt-1 ">
                    {/* <ol className="list-disc">
                      <li> */}
                    We believe in our quality and are confident that it will
                    meet your expectations, so there is no upfront payment
                    required. There are no hidden fees in both of our plans.{" "}
                    {/* </li> */}
                    {/* <li>There is no hidden fees in both of our plans. </li> */}
                    {/* </ol> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="my-5">
              <div className="w-[100%] border-b-[3px] border-[#093A5B]  "></div>{" "}
            </div>

            <h1 className=" font-[700]  text-[20px]  text-[#093A5B] w-fit mt- mb-2 uppercase">
              Fixed Price Plan - $249
              <div className="w-full border-b-[2px] border-[#03A0D7]"></div>{" "}
            </h1>
            <div className="flex gap-6 mt- py-1 ">
              <div className=" w-full h-fit   flex ">
                <div>
                  <div className="flex gap-2 items-end justify-start">
                    <div>
                      <p className="text-[#03A0D7] text-[23pt] font-[800] leading-none">
                        01
                      </p>
                    </div>
                    <div className="text-[12pt] font-[600] mt-[px] ">
                      <p>Payment Schedule:</p>
                    </div>
                  </div>

                  <div className=" w-full mx-auto pb font-[400] text-[10pt] text-justify pt-1">
                    {/* <ol className="list-disc">
                      <li> */}
                    <p>
                      50% ($124.50) payment is due after 50% of the work is
                      completed. The remaining 50% ($124.50) is due upon the
                      completion of the website and your approval.{" "}
                    </p>
                    {/* </li>
                    </ol> */}
                  </div>
                </div>
              </div>
              <div className=" w-full  flex">
                <div>
                  <div className="flex gap-2 items-end justify-start">
                    <div>
                      <p className="text-[#03A0D7] text-[23pt] font-[800] leading-none ">
                        02
                      </p>
                    </div>
                    <div className="text-[12pt] font-[600] mt-[px] ">
                      <p>Refund Policy:</p>
                    </div>
                  </div>

                  <div className=" w-full mx-auto  font-[400] text-[10pt] text-justify pt-1 ">
                    <p>
                      If we fail to deliver the quality work as per our
                      commitments, a full refund will be issued. We ensure your
                      satisfaction and uphold our promise of quality.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" w-full  flex">
                <div>
                  <div className="flex gap-2 items-end justify-start">
                    <div>
                      <p className="text-[#03A0D7] text-[23pt] font-[800] leading-none ">
                        03
                      </p>
                    </div>
                    <div className="text-[12pt] font-[600] mt-[px] ">
                      <p> Service Standards: </p>
                    </div>
                  </div>

                  <div className=" w-full mx-auto  font-[400] text-[10pt] text-justify pt-1 ">
                    <p>
                      We have clear performance benchmarks for the website. This
                      includes website uptime, loading speed critical for user
                      experience and search engine ranking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-5">
              <div className="w-[100%] border-b-[3px] border-[#093A5B]  "></div>
            </div>

            <h1 className=" font-[700]  text-[20px]  text-[#093A5B] w-fit mt- mb-2 uppercase">
              Monthly Plan - $100 per month (For 3 months){" "}
              <div className="w-full border-b-[2px] border-[#03A0D7]"></div>{" "}
            </h1>
            <div className="flex gap-6 mt- py-1 ">
              <div className=" w-full h-fit   flex ">
                <div>
                  <div className="flex gap-2 items-end justify-start">
                    <div>
                      <p className="text-[#03A0D7] text-[23pt] font-[800] leading-none">
                        01
                      </p>
                    </div>
                    <div className="text-[12pt] font-[600] mt-[px] ">
                      <p>Payment Schedule:</p>
                    </div>
                  </div>

                  <div className=" w-full mx-auto pb font-[400] text-[10pt] text-justify pt-1 ">
                    {/* <ol className="list-disc">
                      <li>
                        50% of the first installment ($50) is due after 50% of
                        the work is completed upon your approval.
                      </li>
                      <li>
                        The remaining 50% of the first installment ($50) is due
                        upon completion of the website upon your approval.
                      </li>
                      <li>
                        Remaining monthly installments ($100 per month) will be
                        charged in advance each month for remaining 2 months.
                      </li>
                    </ol> */}
                    <p>
                      The payment is split into three parts: 50% upfront after
                      approval of the first half of work, another 50% upon
                      completion, and then two monthly installments of $100.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className=" w-full  flex">
                <div>
                  <div className="flex gap-2 items-end justify-start">
                    <div>
                      <p className="text-[#03A0D7] text-[23pt] font-[800] leading-none ">
                        02
                      </p>
                    </div>
                    <div className="text-[12pt] w-fit font-[600] mt-[px] ">
                      <p>Service Start:</p>
                    </div>
                  </div>

                  <div className=" w-full mx-auto font-[400] text-[10pt] text-justify pt-1 ">
                    <p>
                      The service period begins on the contract date. For
                      example, if your plan starts on July 24th, the month will
                      be completed on August 23rd, easily tracking validity.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className=" w-full  flex">
                <div>
                  <div className="flex gap-2 items-end justify-start">
                    <div>
                      <p className="text-[#03A0D7] text-[23pt] font-[800] leading-none ">
                        03
                      </p>
                    </div>
                    <div className="text-[12pt] font-[600]  mt-[px]">
                      <p>Customer Satisfaction:</p>
                    </div>
                  </div>

                  <div className=" w-full mx-auto pb font-[400] text-[10pt] text-justify pt-1 ">
                    <div className=" w-full mx-auto pb font-[400] text-[10pt] text-justify ">
                      {/* <ol className="list-disc">
                        <li>
                          All resources, including your website, stay with
                          Dental Brando until all dues are paid.
                        </li>
                        <li>
                          Failure to pay a monthly installment within 3 business
                          days will lead to your website being taken down until
                          payment is made.
                        </li>
                        <li>
                          Upon full clearance of dues and installments,
                          ownership of the website and resources will transfer
                          to you.
                        </li>
                      </ol> */}
                      <p>
                        We hold ownership of the website until you pay in full. Late
                        monthly payments (over 3 business days) may suspend your
                        website. Once you pay, you own the website.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className=5my-4">
              <div className="w-[100%] h-0.5 bg-[#093A5B]  "></div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
