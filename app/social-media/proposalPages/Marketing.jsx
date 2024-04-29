"use client";
import strips from "@public/assets/socialMedia/pic3.png";
import calender from "@public/assets/socialMedia/Marketing.png";
import ProfileCreation from "@public/assets/socialMedia/Monthly Report.png";

function Marketing() {
  return (
          <div className="w-[8.27in] h-[1123px]">

    <div className="flex flex-col justify-center items-center h-[100%] relative">
      <div className="absolute top-0 left-[7%]">
        <img src={strips.src} className="w-[50px]" />
      </div>

      <div className="flex flex-col w-[87%] h-[62%] gap-20">
        <div className="flex justify-between items-start w-[100%] h-[50%]">
          <div>
            <div className="flex flex-col justify-center w-full leading-none">
              <span className="text-[#00A2FF] text-[32px] font-[600]">
                Marketing
              </span>
              <div className="w-[100px] h-[5px] bg-yellow-400 mb-2 mt-3"></div>
            </div>
            <p className="w-[92%] text-justify">
              Our overall social media marketing efforts encompass a wide range
              of promotional activities to amplify your brand presence. We can
              promote your content according to the needs and scope of your
              business. It may include but not be limited to paid advertising,
              partnerships with influencers or other businesses popular on
              social media, and strategic collaborations. We not only promote
              but continuously monitor and optimize your social presence.
            </p>
          </div>
          <img src={calender.src} className="w-[345px] h-[317px]" />
        </div>
        <div className="flex justify-between items-start w-[100%] h-[50%]">
          <div>
            <div className="flex flex-col justify-center w-full bg-red50 leading-none">
              <span className="text-[#00A2FF] text-[32px] font-[600]">
                Monthly
              </span>
              <span className="text-[#00A2FF] text-[32px] font-[600]">
                Report
              </span>
              <div className="w-[100px] h-[5px] bg-yellow-400 mb-2 mt-3"></div>
            </div>
            <p className="w-[92%] text-justify">
              Finally, we keep your business thought leaders informed about our
              social media marketing efforts with detailed monthly reports. They
              are platform-dependent and analyze the user interaction with your
              brand on individual social media platforms. We deliver solid
              results. We discuss the successes and improvement areas in the
              social media marketing efforts. Our monthly reports also predict
              future trends which will be beneficial for your business.
            </p>
          </div>
          <img src={ProfileCreation.src} className="w-[345px] h-[317px]" />
        </div>
      </div>

      <div className="absolute bottom-0 h-[100px] w-[100%] overflow-hidden">
        <div className="flex justify-between items-center w-full px-16 h-full absolute top-[15%] left-0 z-[50]">
          <span className="text-gray-700 text-[15px] font-[500]">
            Social Media Marketing Proposal
          </span>
          <span className="text-gray-700 text-[15px] font-[500]">Page 07</span>
        </div>
        <div className="w-[80%] h-[100%] bg-[rgb(204,236,255)] absolute left-[0%] rounded-tr-[100%] top-[20%]"></div>
      </div>
      </div>
      </div>
  );
}
export default Marketing;
