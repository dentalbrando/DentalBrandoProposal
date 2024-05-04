"use client";
import { useSelector } from "react-redux";
import logo from "@public/assets/socialMedia/SE color logo-09.png";
import seo13 from "@public/assets/socialMedia/seo13.png";
import seo1 from "@public/assets/socialMedia/seo1.png";

function CoverPage(prop) {
  const cover_pageSeo = useSelector((state) => state.cover_pageSeo);
  console.log(cover_pageSeo)
  return (
    <div className="w-[8.27in] h-[1123px] shadow-lg overflow-hidden">
      <div className="flex flex-col justify-center items-center h-[100%] relative">
        <img
          src={logo.src}
          className="w-[200px] absolute top-[13%] left-[15%] "
        />
        <img
          src={seo13.src}
          className="w-[550px] absolute top-[20%] right-[-22px] "
        />
        <img
          src={seo1.src}
          className="w-[600px] absolute bottom-[9%] right-[0%] z-[10]"
        />

        <div className="w-[650px] h-[650px] bg-[rgb(0,160,255)] absolute left-[-49%] top-[17.1%] rotate-[-30deg] skew-x-[30deg]"></div>
        <div className="w-[650px] h-[650px] bg-[rgb(0,160,255)] absolute left-[90%] top-[27%] rotate-[-30deg] skew-x-[30deg] z-[0]"></div>
        <div className="w-[800px] h-[500px] bg-[rgb(255,212,0)] absolute right-[-30%] bottom-[-32%] rotate-[-30deg] z-[20]"></div>
        <div className="w-[500px] h-[500px] absolute left-[5%] top-[28%] z-[20] bg-red-40">
          <div className="flex flex-col justify-center w-[100%] h-full leading-[60px] bg-red-00">
            <h1 className="font-[600] text-[56px] text-white">Search Engine</h1>
            <h1 className="font-[600] text-[56px] text-[#ffd600]">
              Optimization
            </h1>
            <h1 className="font-[600] text-[56px] text-white">Proposal</h1>
          </div>
        </div>

        <div className="flex w-full h-[23%] absolute bottom-0 overflow-hidden z-[50] bg-red-30">
          <div className="w-[100%] h-[100%] z-[50]">
            <div className=" w-[50%] h-fit flex justify-end items-end bg-orange-40">
              <div className="w-[90%] relative bg-green-60">
                <h2 className="text-[#ffd600] font-bold text-xl h-[30px]">
                  Prepared for:
                </h2>
                {cover_pageSeo.companyLogo ? (
                  <div
                    className="w-[60px] h-[60px] mx-aut flex justify-center items-start overflow-hidden"
                    style={{
                      backgroundPosition: "center",
                    }}
                  >
                    <img
                      className="w-full h-full"
                      src={cover_pageSeo.companyLogo?.string}
                      alt="No company logo"
                    />
                  </div>
                ) : null}
                <div className="mt-2 flex flex-col justify-start gap-[6px] w-full relative bg-purple-70">
                  <h2 className="text-lg font-[600]">
                    {cover_pageSeo.companyName !== ""
                      ? cover_pageSeo.companyName
                      : "Company Name"}
                  </h2>
                  <p className="text-lg">
                    {cover_pageSeo.companyPhoneNumber !== ""
                      ? cover_pageSeo.companyPhoneNumber
                      : "Company Phone Number"}
                  </p>
                  <p className="text-lg">
                    {cover_pageSeo.companyAddress !== ""
                      ? cover_pageSeo.companyAddress
                      : "Company Address"}
                  </p>
                  <p className="text-lg">
                    {cover_pageSeo.issueDate !== ""
                      ? cover_pageSeo.issueDate
                      : "Issue Date"}
                  </p>
                  <p className="text-lg">
                    {cover_pageSeo.companyAddress !== ""
                      ? cover_pageSeo.validDate
                      : "Valid Date"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CoverPage;
