"use client";
import seo4 from "@public/assets/socialMedia/seo4.png";
import AboutPageImage from "@public/assets/socialMedia/about page.png";
import WhiteLogo from "@public/assets/socialMedia/se icon-14.png";
import mission from "@public/assets/socialMedia/mission.png";
import vision from "@public/assets/socialMedia/vision.png";
import goal from "@public/assets/socialMedia/goal.png";

function AboutUs(prop) {
  return (
    <div className="w-[8.27in] h-[1123px] bg-white shadow-lg">
      <div className="flex flex-col justify-center items-center h-[100%] bg-red-20 relative">
        <div className="flex w-full h-[47%] absolute top-0 overflow-hidden ">
          <div className="w-[120%] h-[95%] absolute top-[-15%] left-[-5%] rotate-[-7deg] z-[50] bg-[#00A2FF] flex justify-center items-center"></div>
          <div className="absolute w-[87%] right-[6.5%] top-[120px] z-[200]">
            <div className="flex flex-col justify-center w-full leading-[53px]">
              <span className="text-[white] text-[44px] font-[600]">About</span>
              <span className="text-[white] text-[44px] font-[600]">Us</span>
              <div className="w-[70px] h-[5px] bg-yellow-400 my-3"></div>
            </div>
            <div className="flex flex-col justify-center w-full leading-snug">
              <span className="text-[white] text-[15px] font-[400] text-justify">
                Soft Enterprise is an esteemed Web Development, Mobile Apps,
                Custom Software Development, Block Chain Development, and
                Digital Marketing company. We provide exceptional Search Engine
                Optimization Services to clients from various industries. We
                have fantastic SEO strategies to boost your online presence in
                whatever category your product or service falls into. With our
                extensive experience in SEO and expertise in a wide range of
                technologies, we have successfully delivered numerous projects
                for clients across various industries.
              </span>
            </div>
          </div>
          <div className="flex items-end justify-center w-[35%] h-[100%] bottom-[-10px] right-[-5%] z-[0]  absolute">
            <img src={seo4.src} className="rotate-[-7deg] w-full" />
          </div>
        </div>

        <div className="w-[87%] h-[49%] z-[100] absolute bottom-[7%] flex justify-between items-start">
          <div className="w-fit h-[100%] relative bg-red-40">
            <img src={AboutPageImage.src} className="h-[95%] w-[90%]" />
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
          <div className="w-[40%] h-[100%] absolute right-[0%] flex flex-col justify-start items-start gap-[7%] bg-red-60">
            <div className="w-[110px] h-[110px] p-5 flex justify-center items-center ms-10"></div>
            <div className="w-[100%] h-fit leading-tight text-justify">
              <h3 className="text-[#00A2FF] text-[24px] font-[600]">
                Our Mission
              </h3>
              <span className="text-[15px] font-[400]">
                Enhancing and ensuring the online success and presence of
                businesses.
              </span>
            </div>
            <div className="w-[100%] h-fit leading-tight text-justify">
              <h3 className="text-[#00A2FF] text-[24px] font-[600]">
                Our Vision
              </h3>
              <span className="text-[15px] font-[400] ">
                Become a world leader helping to establish online businesses.
              </span>
            </div>
            <div className="w-[100%] h-fit leading-tight text-justify">
              <h3 className="text-[#00A2FF] text-[24px] font-[600]">
                Our Goals
              </h3>
              <span className="text-[15px] font-[400] ">
                Helping every business to grow in unique ways to shine over the
                globe
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 h-[110px] w-[100%] overflow-hidden bg-red-40">
          <div className="flex justify-between items-center w-full px-14 h-full absolute top-[18%] left-0 z-[50]">
            <span className="text-gray-700 text-[15px] font-[500]">
              Search Engine Optimization Proposal
            </span>
            <span className="text-gray-700 text-[15px] font-[500]">
              {prop.pageNumber < 10 ? "0" + prop.pageNumber : prop.pageNumber}
            </span>
          </div>
          <div className="w-[110%] h-[90%] bg-[rgb(255,246,203)] absolute left-[-5%] top-[55%] rotate-[7deg]"></div>
          <div className="w-[110%] h-[90%] bg-[rgb(204,236,255)] absolute left-[-5%] top-[60%] rotate-[7deg]"></div>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
