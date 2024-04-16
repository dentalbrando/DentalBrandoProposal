"use client";
import strips from "@public/assets/socialMedia/pic3.png";
import calender from "@public/assets/socialMedia/Monthly CalendarPlan.png";
import ProfileCreation from "@public/assets/socialMedia/Profile Creation & Optimization.png";

function MonthlyCalender() {
  return (
    <div className="bg-white w-[8.27in] h-[29.7cm]">
      <div className="flex flex-col justify-center items-center h-[100%] bg-red-20 relative">
        <div className="absolute top-0 left-[7%]">
          <img src={strips.src} className="w-[50px]" />
        </div>

        <div className="flex flex-col w-[87%] h-[62%] bg-red-70 gap-20">
          <div className="flex justify-between items-start w-[100%] h-[50%] bg-purple-20">
            <div>
              <div className="flex flex-col justify-center w-full bg-red50 leading-none">
                <span className="text-[#00A2FF] text-[32px] font-[600]">
                  Monthly
                </span>
                <span className="text-[#00A2FF] text-[32px] font-[600]">
                  Calendar/Plan
                </span>
                <div className="w-[100px] h-[5px] bg-yellow-400 mb-2 mt-3"></div>
              </div>
              <p className="w-[92%] text-justify">
                We will develop a monthly calendar plan for managing your
                business’s social media activities. This will be the roadmap for
                managing your posting details, types of posts, date and time of
                posts which all align with your business goals. We align the
                content calendar with the unique needs of your target audience.
                We will create your overall content theme to facilitate an
                organized social media presence with consistent and cohesive
                marketing efforts across platforms
              </p>
            </div>
            <img src={calender.src} className="w-[345px] h-[317px]" />
          </div>
          <div className="flex justify-between items-start w-[100%] h-[50%] bg-purple-20">
            <div>
              <div className="flex flex-col justify-center w-full bg-red50 leading-none">
                <span className="text-[#00A2FF] text-[32px] font-[600]">
                  Profile Creation
                </span>
                <span className="text-[#00A2FF] text-[32px] font-[600]">
                  & Optimization
                </span>
                <div className="w-[100px] h-[5px] bg-yellow-400 mb-2 mt-3"></div>
              </div>
              <p className="w-[92%] text-justify">
                We create your social media profiles for the major social media
                platforms like Facebook, Instagram, LinkedIn, Twitter,
                Pinterest, and any other platform if you want it. We will then
                optimize your whole profile to align with your unique business
                goals to create a strong brand identity online. We complete the
                optimization process with a concise bio having relevant
                keywords, branded images, and compelling content to improve your
                business visibility on social media.
              </p>
            </div>
            <img src={ProfileCreation.src} className="w-[345px] h-[317px]" />
          </div>
        </div>

        <div className="absolute bottom-0 h-[8%] w-full bg-green-30 overflow-hidden">
          <div className="flex justify-between items-center w-full px-16 h-full bg-blue-40 absolute top-0 left-0 z-[50]">
            <span className="text-gray-700 text-[15px] font-[500]">
              Social Media Marketing Proposal
            </span>
            <span className="text-gray-700 text-[15px] font-[500]">
              Page 05
            </span>
          </div>
          <div className="w-[200%] h-[350%] bg-blue-100 absolute top-[5%] right-[15%] rounded-[40%]"></div>
        </div>
      </div>
    </div>
  );
}
export default MonthlyCalender;
