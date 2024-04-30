"use client";
import coverPageImage from "@public/assets/socialMedia/cover page.png";
import VistaGroup from "@public/assets/socialMedia/vista logo.png";
import WhiteLogo1 from "@public/assets/socialMedia/SE Logo.png";
import { useSelector } from "react-redux";

function CoverPage(prop) {
  const cover_pageSmm = useSelector((state) => state.cover_pageSmm);

  return (
    <div className="w-[8.27in] h-[1123px]  bg-white shadow-lg">
      <div className="flex flex-col justify-center items-center h-[100%] relative">
        <div className="flex w-full h-[43%] absolute top-0 overflow-hidden">
          <div className="w-[200%] h-[300%] rounded-[40%] absolute bottom-[0%] right-[0%] z-[50] bg-[#00A2FF]">
            <div className="flex flex-col justify-evenly absolute left-[52%] bottom-[0%] w-[650px] h-[480px] z-[100]">
              <div className="w-[20%]">
                <img src={WhiteLogo1.src} className="w-[95px]" />
              </div>
              <div className="w-[600px]">
                <h1 className="font-[600] text-[22px] text-white text-justify">
                  {cover_pageSmm.subHeading}
                </h1>
              </div>
              <div className="flex flex-col justify-start w-[100%] leading-[60px]">
                <h1 className="font-[600] text-[56px] text-white">
                  SOCIAL MEDIA
                </h1>
                <h1 className="font-[600] text-[56px] text-[#ffd600]">
                  MARKETING
                </h1>
                <h1 className="font-[600] text-[56px] text-white">PROPOSAL</h1>
              </div>
            </div>
          </div>
          <div className="w-[80%] h-[160%] rounded-[50%] absolute top-[-60%] right-[-40%] z-[10] bg-[#ffd600]"></div>
        </div>
        <img src={coverPageImage.src} className="z-[0] absolute bottom-[18%]" />
        <div className="flex w-full h-[30%] absolute bottom-0 overflow-hidden">
          <div className="w-[200%] h-[250%] rounded-[50%] absolute top-[10%] left-[-50%] z-[10] bg-[#ffd600] z-[50]"></div>
          <div className="w-[200%] h-[250%] rounded-[50%] absolute top-[15%] left-[-45%] z-[10] bg-[#00A2FF] z-[50]">
            <div className=" w-[7.5in] h-[100px] flex justify-evenly absolute top-[10%] left-[25%]">
              <div className="w-[20%] relative h-[120px]">
                <h2 className="text-[#ffd600] font-bold text-xl h-[30px]">
                  Prepared for:
                </h2>
                <div
                  className="w-[100px] h-[100px] flex justify-center items-start overflow-hidden"
                  style={{
                    backgroundPosition: "center",
                  }}
                >
                  {cover_pageSmm.companyLogo ? (
                    <img
                      className="w-full h-full"
                      src={cover_pageSmm.companyLogo?.string}
                      alt="No company logo"
                    />
                  ) : null}
                </div>
              </div>
              <div className="flex flex-col justify-start gap-[6px] w-[33%] relative g-red-400">
                <h2 className="text-[#ffd600] font-bold text-xl">
                  {cover_pageSmm.companyName !== ""
                    ? cover_pageSmm.companyName
                    : "Company Name"}
                </h2>
                <p className="text-white text-lg">
                  {cover_pageSmm.companyPhoneNumber !== ""
                    ? cover_pageSmm.companyPhoneNumber
                    : "Company Phone Number"}
                </p>
                <p className="text-white text-lg">
                  {cover_pageSmm.companyAddress !== ""
                    ? cover_pageSmm.companyAddress
                    : "Company Address"}
                </p>
              </div>
              <div className="flex flex-col justify-start gap-[20px] w-[20%] relative g-red-300">
                <div className="w-[33% relative g-red-300">
                  <h2 className="text-[#ffd600] font-bold text-xl">
                    Proposal Issued:
                  </h2>
                  <p className="text-white text-lg">
                    {cover_pageSmm.issueDate !== ""
                      ? cover_pageSmm.issueDate
                      : "dd/mm/yyyy"}
                  </p>
                </div>
                <div className="w-[33% relative g-red-300">
                  <h2 className="text-[#ffd600] font-bold text-xl">
                    Proposal Valid:
                  </h2>
                  <p className="text-white text-lg">
                    {cover_pageSmm.validDate !== ""
                      ? cover_pageSmm.validDate
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
