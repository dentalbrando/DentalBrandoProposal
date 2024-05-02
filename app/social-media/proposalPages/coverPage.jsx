"use client";
import coverPageImage from "@public/assets/socialMedia/hands-holding-smartphone-social-media-concept.jpg";
import VistaGroup from "@public/assets/socialMedia/vista logo.png";
import WhiteLogo1 from "@public/assets/socialMedia/SE Logo.png";
import { useSelector } from "react-redux";

function CoverPage(prop) {
  const cover_pageSmm = useSelector((state) => state.cover_pageSmm);

  return (
    <div className="w-[8.27in] h-[1123px]  bg-white shadow-lg">
      <div className="flex flex-col justify-center items-center h-[100%] relative">
        <div className="flex w-full h-[40%] absolute top-0 overflow-hidden">
          <div className="w-[1600px] h-[1600px] rounded-br-[35%] rounded-bl-[60%] absolute bottom-[0%] right-[0%] z-[50] bg-[#00A2FF]">
            <div className="flex flex-col justify-start gap-10 absolute left-[52%] bottom-[0%] w-[650px] h-[420px] z-[100] bg-green-5">
              <div className="w-[20%] bg-green-40 absolut bttom-[70%]">
                <img src={WhiteLogo1.src} className="w-[95px]" />
              </div>
              <div className="flex flex-col justify-start w-[100%] leading-[60px] bg-red-40 absolut bttom-[15%]">
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
          <div className="w-[90%] h-[150%] rounded-[50%] absolute top-[-60%] right-[-33%] z-[10] bg-[#ffd600]"></div>
        </div>
        <img src={coverPageImage.src} className="z-[0] absolute bottom-[23%]" />
        <div className="flex w-full h-[30%] absolute bottom-0 overflow-hidden">
          <div className="w-[200%] h-[250%] rounded-tl-[44%]  rounded-tr-[53%] absolute top-[3%] left-[-50%] z-[10] bg-[#ffd600] z-[50]"></div>
          <div className="w-[200%] h-[250%] rounded-tl-[44%]  rounded-tr-[53%] absolute top-[8%] left-[-45%] z-[10] bg-[#00A2FF] z-[50]">
            <div className=" w-[7.5in] h-fit flex justify-between items-end absolute bottom-[68%] left-[25%] bg-red-40">
              <div className="w-[40%] relative h-[120px bg-green-600">
                <h2 className="text-[#ffd600] font-bold text-xl h-[30px]">
                  Prepared for:
                </h2>
                {cover_pageSmm.companyLogo ? (
                  <div
                    className="w-[60px] h-[60px] mx-aut flex justify-center items-start overflow-hidden"
                    style={{
                      backgroundPosition: "center",
                    }}
                  >
                    <img
                      className="w-full h-full"
                      src={cover_pageSmm.companyLogo?.string}
                      alt="No company logo"
                    />
                  </div>
                ) : null}
                <div className="mt-2 flex flex-col justify-start gap-[6px] w-full relative bg-purple-70">
                  <h2 className="text-white text-lg font-[600]">
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
              </div>

              <div className="flex flex-col justify-end gap-[20px] w-[30%] bg-red-700 h-fit relative bg-orange-60 absolute bottom-[20px]">
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
              </div>

              <div className="flex flex-col justify-center gap-[20px] w-[30%] bg-red-700 h-fit relative bg-orange-60 absolute bottom-[20px]">
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
