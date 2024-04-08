"use client";
import coverPageImage from "@public/assets/socialMedia/cover page.png";
import VistaGroup from "@public/assets/socialMedia/vista logo.png";
import WhiteLogo1 from "@public/assets/socialMedia/SE Logo.png";
function CoverPage() {
  return (
    <div className="bg-green-200 w-[8.27in] h-[29.7cm]">
      <div className="flex flex-col justify-center items-center h-[100%] bg-red-200 relative">
        <div className="flex w-full h-[40%] absolute top-0 overflow-hidden">
          <div className="w-[200%] h-[300%] rounded-[40%] absolute bottom-[0%] right-[20%] z-[50] bg-[#00A2FF]">
            <div className="flex flex-col justify-between bg-orange-40 absolute left-[62%] bottom-[0%] w-[430px] h-[420px] z-[100]">
              <div className="bg-pink-40 h-[20%]">
                <img src={WhiteLogo1.src} className="w-[95px]" />
              </div>
              <div className="flex flex-col justify-start bg-yello-400 w-[100%] h-[75%] leading-[60px]">
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
          <div className="w-[80%] h-[130%] rounded-[50%] absolute top-[-60%] right-[-40%] z-[10] bg-[#ffd600]"></div>
        </div>
        <img src={coverPageImage.src} className="z-[0]" />
        <div className="flex w-full bg-yellow-20 h-[20%] absolute bottom-0 overflow-hidden">
          <div className="w-[200%] h-[250%] rounded-[50%] absolute top-[10%] left-[-50%] z-[10] bg-[#ffd600] z-[50]"></div>
          <div className="w-[200%] h-[250%] rounded-[50%] absolute top-[15%] left-[-45%] z-[10] bg-[#00A2FF] z-[50]">
            <div className=" w-[7.5in] h-[100px] flex justify-center absolute top-[10%] left-[25%]">
              <div className="w-[30%] relative">
                <img
                  src={VistaGroup.src}
                  className="w-[50%] absolute top-[-20%]"
                />
              </div>
              <div className="w-[33%] relative">
                <h2 className="text-[#ffd600] font-bold text-xl">
                  Project Name:
                </h2>
                <p className="text-white text-lg">VISTA CONRAD TOWER-1</p>
              </div>
              <div className="w-[33%]">
                <h2 className="text-[#ffd600] font-bold text-xl">Address:</h2>
                <p className="text-white text-lg">
                  Plot, No 165-B Commercial Area, Sector C, Bahria Town, Lahore
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CoverPage;
