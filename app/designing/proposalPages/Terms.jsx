"use client";
import marketingImage from "@public/assets/socialMedia/marketing activiting infographics-13.png";
import strips from "@public/assets/socialMedia/pic3.png";

function Terms() {
  return (
    <div className="flex flex-col justify-center items-center h-[100%] bg-red-00 relative bg-red-10">
      <div className="flex w-full h-[50%] absolute top-0 overflow-hidden">
        <div className="absolute w-[87%] h-[50%] right-[6.5%] top-[25%] z-[200] bg-red-90">
          <div className="flex flex-col justify-center w-full leading-none">
            <span className="text-[#00A2FF] text-[44px] font-[600]">Terms</span>
            <span className="text-[#00A2FF] text-[44px] font-[600]">
              & Conditions
            </span>
            <div className="w-[70px] h-[5px] bg-yellow-400 my-3"></div>
          </div>
          <div className="flex flex-col justify-center w-full leading-snug">
            <span className="text-[white text-[16px] font-[400]">
              Social Media Marketing services encompass the right promotion of
              the right content at the right time. At Soft Enterprise, we are
              confident that we are your best partners for your Social Media
              Marketing venture to showcase a strong social presence for your
              brand. Make your business's social media presence consistent and
              engaging by partnering with Soft Enterprise
            </span>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-[7%]">
        <img src={strips.src} className="w-[50px]" />
      </div>

      <div className="w-[87%] h-[59%] z-[100] absolute bottom-[9%] flex flex-wrap justify-between gap-[1.5%] bg-red-400">
        <div className="w-[48%] h-[32%] bg-pink-300 leading-none">
          <div className=" w-[100%] h-[50%] right-[6.5%] top-[25%] z-[200] bg-red-90">
            <div className="flex flex-col justify-center w-full">
              <span className="text-[#00A2FF] text-[30px] font-[600]">
                Payment Terms
              </span>
            </div>
            <div className="flex flex-col justify-center w-full leading-[1.3]">
              <span className="text-[16px] font-[400] text-justify">
                To commence the project, all fees and charges must be paid in
                full as per the payment schedule provided in the proposal. For
                any delay of more than 3 days, we reserve the right to suspend
                the Social Media Marketing project until the overdue payment is
                cleared before resuming. Payment receipts will be sent upon
                payment.
              </span>
            </div>
          </div>
        </div>
        <div className="w-[48%] h-[32%] bg-pink-300"></div>
        <div className="w-[48%] h-[32%] bg-pink-300"></div>
        <div className="w-[48%] h-[32%] bg-pink-300"></div>
        <div className="w-[48%] h-[32%] bg-pink-300"></div>
        <div className="w-[48%] h-[32%] bg-pink-300"></div>
      </div>

      <div className="absolute bottom-0 h-[8%] w-full bg-green-30 overflow-hidden">
        <div className="flex justify-between items-center w-full px-16 h-full bg-blue-40 absolute top-0 left-0 z-[50]">
          <span className="text-gray-700 text-[15px] font-[500]">
            Social Media Marketing Proposal
          </span>
          <span className="text-gray-700 text-[15px] font-[500]">Page 13</span>
        </div>
        <div className="w-[200%] h-[350%] bg-blue-100 absolute top-[5%] right-[15%] rounded-[40%]"></div>
      </div>
    </div>
  );
}
export default Terms;
