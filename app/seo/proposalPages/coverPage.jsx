"use client";
import { useSelector } from "react-redux";

function CoverPage(prop) {
  const cover_pageSeo = useSelector((state) => state.cover_pageSeo);

  return (
    <div className="w-[8.27in] h-[1123px]  bg-white shadow-lg">
      <div className="flex flex-col justify-center items-center h-[100%] relative">
        <div className="flex w-full h-[30%] absolute top-0 overflow-hidden">
          <div className="w-[200%] h-[250%] rounded-tl-[44%]  rounded-tr-[53%] absolute top-[3%] left-[-50%] z-[10] bg-[#ffd600] z-[50]"></div>
          <div className="w-[200%] h-[250%] rounded-tl-[44%]  rounded-tr-[53%] absolute top-[8%] left-[-45%] z-[10] bg-[#00A2FF] z-[50]">
            <div className=" w-[7.5in] h-fit flex justify-evenly items-end absolute bottom-[68%] left-[25%] bg-red-40">
              <div className="w-[40%] relative h-[120px bg-green-60">
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
                  <h2 className="text-white text-lg font-[600]">
                    {cover_pageSeo.companyName !== ""
                      ? cover_pageSeo.companyName
                      : "Company Name"}
                  </h2>
                  <p className="text-white text-lg">
                    {cover_pageSeo.companyPhoneNumber !== ""
                      ? cover_pageSeo.companyPhoneNumber
                      : "Company Phone Number"}
                  </p>
                  <p className="text-white text-lg">
                    {cover_pageSeo.companyAddress !== ""
                      ? cover_pageSeo.companyAddress
                      : "Company Address"}
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-end gap-[20px] w-[20%] h-fit relative bg-orange-60 absolute bottom-[20px]">
                <div className="w-[33% relative g-red-300">
                  <h2 className="text-[#ffd600] font-bold text-xl">
                    Proposal Issued:
                  </h2>
                  <p className="text-white text-lg">
                    {cover_pageSeo.issueDate !== ""
                      ? cover_pageSeo.issueDate
                      : "dd/mm/yyyy"}
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-[20px] w-[20%] h-fit relative bg-orange-60 absolute bottom-[20px]">
                <div className="w-[33% relative g-red-300">
                  <h2 className="text-[#ffd600] font-bold text-xl">
                    Proposal Valid:
                  </h2>
                  <p className="text-white text-lg">
                    {cover_pageSeo.validDate !== ""
                      ? cover_pageSeo.validDate
                      : "dd/mm/yyyy"}
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
