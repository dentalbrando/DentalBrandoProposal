"use client";
import strips from "@public/assets/socialMedia/pic3.png";
import calender from "@public/assets/socialMedia/content creation-17.png";
import ProfileCreation from "@public/assets/socialMedia/posting.png";

function ContentCreation() {
  return (
      <div className="flex flex-col justify-center items-center h-[100%] bg-red-20 relative">
        <div className="absolute top-0 left-[7%]">
          <img src={strips.src} className="w-[50px]" />
        </div>

        <div className="flex flex-col w-[87%] h-[62%] bg-red-70 gap-20">
          <div className="flex justify-between items-start w-[100%] h-[50%] bg-purple-20">
            <div>
              <div className="flex flex-col justify-center w-full bg-red50 leading-none">
                <span className="text-[#00A2FF] text-[32px] font-[600]">
                  Content Creation
                </span>
                <span className="text-[#00A2FF] text-[32px] font-[600]">
                  (Design Team)
                </span>
                <div className="w-[100px] h-[5px] bg-yellow-400 mb-2 mt-3"></div>
              </div>
              <p className="w-[92%] text-justify">
                Content creation acts as the main foundation of building your
                strong social media presence. We will create engaging,
                compelling, and unique content for your social media profile to
                resonate with the individual platform’s guidelines. Our content
                is a mix of images, graphics, infographics, and videos to create
                a variety of shareable content. Both graphic designers and
                marketers work together to ensure all content creation aligns
                with your brand messaging.
              </p>
            </div>
            <img src={calender.src} className="w-[345px] h-[317px]" />
          </div>
          <div className="flex justify-between items-start w-[100%] h-[50%] bg-purple-20">
            <div>
              <div className="flex flex-col justify-center w-full bg-red50 leading-none">
                <span className="text-[#00A2FF] text-[32px] font-[600]">
                  Posting
                </span>
                <div className="w-[100px] h-[5px] bg-yellow-400 mb-2 mt-3"></div>
              </div>
              <p className="w-[92%] text-justify">
                We ensure the timely posting on your social media. It is always
                coordinated with the previously curated monthly calendar. We
                ensure strategic posting of the content so that it reaches your
                mass audience when they are mostly active on social platforms.
                We achieve this by analyzing the demographics, and peak active
                times of your target audience and scheduling according to it. We
                maintain your social media presence to build connections and
                spark conversations.
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
              Page 06
            </span>
          </div>
          <div className="w-[200%] h-[350%] bg-blue-100 absolute top-[5%] right-[15%] rounded-[40%]"></div>
        </div>
    </div>
  );
}
export default ContentCreation;
