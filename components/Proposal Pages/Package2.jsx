import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import tick from "@public/assets/TICK-01.svg";
import { FaCheckCircle } from "react-icons/fa";

const Package2 = ({ pageNumber }) => {
  return (
    <>
      <div className="offer w-[8.27in] h-[1122.6px] shadow-lg bg-white">
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

            <div className="pt-[34px] mb-2">
              <h1
                className="font-[700] text-[25pt] text-[#093A5B] leading-9"
                // style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                DOMINATE THE DENTAL <br />
                MARKET WITH A WEBSITE!
              </h1>
              <div className="bline w-[90px] h-2 bg-[#03A0D7]"></div>
            </div>
            <section className="pt-2">
              <div>
                <p className="pt-6 text-[12pt] text-justify leading-[22px]">
                  Unlock the Hidden Potential of Your Dental Brand? Bring in
                  more Patients to your Dental Clinic with our Website Packages.
                  We have the perfect packages for Individual Dental
                  Practitioners and thriving Dental clinics. Stand out from the
                  crowd with stunning layouts, user-friendly navigation, and
                  content that convert visitors into loyal patients. Just as our
                  website is flawless, you grow effortlessly. You get more leads
                  and patient bookings. You achieve a greater revenue. Grow your
                  clinic as we provide a stunning online presence for every
                  Dentist.
                </p>
              </div>
            </section>
            <div className="w-full h-[370px] bg-main-blue text-white mt-8 pt-4 px-5 leading-[22px]">
              <h2 className="w-fit h-fit bg-red-40 font-[700] text-[21px] mx-auto py-7 leading-[32px]">
                Supercharge Your Dental Clinic's Online Presence
              </h2>
              <div className="w-full h-fit bg-yellow-40 flex flex-wrap justify-between gap-[4%] items-start gap-y-5">
                <h2 className="w-[48%] flex justify-start gap-3 items-center h-fit bg-red-40 text-[16px] mx-auto">
                  <FaCheckCircle />
                  Responsive And User-friendly Interface
                </h2>
                <h2 className="w-[48%] flex justify-start gap-3 items-center h-fit bg-red-40 text-[16px] mx-auto">
                  <FaCheckCircle />
                  Human Based Plagiarism Free Content
                </h2>
                <h2 className="w-[48%] flex justify-start gap-3 items-center h-fit bg-red-40 text-[16px] mx-auto">
                  <FaCheckCircle />
                  Call to Action that Drives Sales
                </h2>
                <h2 className="w-[48%] flex justify-start gap-3 items-center h-fit bg-red-40 text-[16px] mx-auto">
                  <FaCheckCircle />
                  Bespoke Customized Graphics
                </h2>
                <h2 className="w-[48%] flex justify-start gap-3 items-center h-fit bg-red-40 text-[16px] mx-auto">
                  <FaCheckCircle />
                  SEO Friendly to improve your ranking
                </h2>
                <h2 className="w-[48%] flex justify-start gap-3 items-center h-fit bg-red-40 text-[16px] mx-auto">
                  <FaCheckCircle />
                  Personalized Design
                </h2>
                <h2 className="w-[48%] flex justify-start gap-3 items-center h-fit bg-red-40 text-[16px] mx-auto">
                  <FaCheckCircle />
                  Ready in 7 Days
                </h2>
                <h2 className="w-[48%] flex justify-start gap-3 items-center h-fit bg-red-40 text-[16px] mx-auto">
                  <FaCheckCircle />
                  Speed Optimized page that loads faster
                </h2>
                <h2 className="w-[48%] flex justify-start gap-3 items-center h-fit bg-red-40 text-[16px] mx-auto">
                  <FaCheckCircle />
                  One Month Free Maintenance
                </h2>
                <h2 className="w-[48%] flex justify-start gap-3 items-center h-fit bg-red-40 text-[16px] mx-auto">
                  <FaCheckCircle />
                  Compelling Landing Page
                </h2>
              </div>
            </div>
            <section>
              <div className="leading-[22px]">
                <p className="pt-14 text-[12pt] text-justify">
                  Pay only one-time
                  <span className="text-main-blue font-[700] text-[28px]">
                    {" "}
                    $249
                  </span>{" "}
                  and get the whole website for a lifetime.
                </p>
                <p className="pt- text-[12pt] text-justify">
                  If you can't pay at once, don't worry. We have made it super
                  easy for you to pay in chunks
                  <span className="text-main-blue font-[700] text-[28px]">
                    {" "}
                    $100
                  </span>{" "}
                  per month for three months. Get your free quote and see the
                  difference from our competitors. We provide you with real
                  value.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Package2;
