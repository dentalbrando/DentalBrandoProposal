"use client";
import AboutPageImage from "@public/assets/socialMedia/about page.png";
import WhiteLogo from "@public/assets/socialMedia/se icon-14.png";
import mission from "@public/assets/socialMedia/mission.png";
import vision from "@public/assets/socialMedia/vision.png";
import goal from "@public/assets/socialMedia/goal.png";

function AboutUs(prop) {
  return (
    <div className="w-[8.27in] h-[1123px] bg-white shadow-lg">
      <div className="flex flex-col justify-center items-center h-[100%] bg-red-00 relative bg-red-10">
        <div className="flex w-full h-[50%] absolute top-0 overflow-hidden">
          <div className="w-[150%] h-[100%] rounded-br-[55%] rounded-bl-[40%] absolute top-[0%] right-[-10%] z-[50] bg-[#00A2FF] flex justify-center items-center"></div>

          <div className="absolute w-[87%] right-[6.5%] top-[120px] z-[200]">
            <div className="flex flex-col justify-center w-full leading-none">
              <span className="text-[white] text-[44px] font-[600]">About</span>
              <span className="text-[white] text-[44px] font-[600]">Us</span>
              <div className="w-[70px] h-[5px] bg-yellow-400 my-3"></div>
            </div>
            <div className="flex flex-col justify-center w-full leading-snug text-justify">
              <span className="text-[white] text-[15px] font-[400]">
                Dental Brando is an esteemed Web Development, Mobile Apps,
                Custom Software Development and Digital Marketing company. We
                provide exceptional Social Media Marketing Services to clients
                belonging to various industries, from interior design to tech
                companies. Whatever category your product or service falls into,
                we have amazing Social Media Marketing strategies for you. With
                our extensive experience in Social Media Marketing and expertise
                in a wide range of technologies, we have successfully delivered
                numerous projects for clients across various industries.
              </span>
            </div>
          </div>

          <div className="w-[60%] h-[120%] rounded-[50%] bottom-[15%] right-[-25%] z-[10] bg-[#ffd600] absolute"></div>
        </div>

        <div className="absolute top-0 left-[7%] z-[100] w-[50px]  flex">
          <div className="w-[50%] h-[100px] bg-white"></div>
          <div className="w-[50%] h-[100px] bg-[#ffd600]"></div>
        </div>

        <div className="w-[87%] h-[50%] z-[100] absolute bottom-[8%] flex justify-between items-start">
          <div className="w-fit h-[100%] relative">
            <img src={AboutPageImage.src} className="h-[97%] " />
            <div className="w-[50px] h-[50px] bg-[#ffd600] absolute top-[27%] right-[0%] z-[0] translate-x-[50%] flex justify-center items-center rounded-lg">
              <img src={mission.src} className="w-[55%]" />
            </div>
            <div className="w-[50px] h-[50px] bg-[#ffd600] absolute top-[47%] right-[0%] z-[0] translate-x-[50%] flex justify-center items-center rounded-lg">
              <img src={vision.src} className="w-[55%]" />
            </div>
            <div className="w-[50px] h-[50px] bg-[#ffd600] absolute top-[67%] right-[0%] z-[0] translate-x-[50%] flex justify-center items-center rounded-lg">
              <img src={goal.src} className="w-[55%]" />
            </div>
          </div>
          <div className="w-[40%] h-[100%] absolute right-[0%] flex flex-col justify-start items-start gap-[7%]">
            <div className="bg-[#ffd600] w-[110px] h-[110px] p-5 rounded-full flex justify-center items-center ms-10">
              <img src={WhiteLogo.src} className="w-[100%]" />
            </div>
            <div className="w-[100%] h-fit leading-tight">
              <h3 className="text-[#00A2FF] text-[24px] font-[600]">
                Our Mission
              </h3>
              <span className="text-[15px] font-[400]">
                Enhancing and ensuring the online success and presence of
                businesses.
              </span>
            </div>
            <div className="w-[100%] h-fit leading-tight">
              <h3 className="text-[#00A2FF] text-[24px] font-[600]">
                Our Vision
              </h3>
              <span className="text-[15px] font-[400]">
                Become a world leader helping to establish online businesses.
              </span>
            </div>
            <div className="w-[100%] h-fit leading-tight">
              <h3 className="text-[#00A2FF] text-[24px] font-[600]">
                Our Goals
              </h3>
              <span className="text-[15px] font-[400]">
                Helping every business to grow in unique ways to shine over the
                globe
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 h-[100px] w-[100%] overflow-hidden">
          <div className="flex justify-between items-center w-full px-16 h-full absolute top-[15%] left-0 z-[50]">
            <span className="text-gray-700 text-[15px] font-[500]">
              Social Media Marketing Proposal
            </span>
            <span className="text-gray-700 text-[15px] font-[500]">
              {prop.pageNumber < 10 ? "0" + prop.pageNumber : prop.pageNumber}
            </span>
          </div>
          <div className="w-[80%] h-[100%] bg-[rgb(204,236,255)] absolute left-[0%] rounded-tr-[100%] top-[20%]"></div>
        </div>
      </div>
    </div>
  );
}
export default AboutUs; 
