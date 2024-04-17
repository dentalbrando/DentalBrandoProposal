"use client";
import horse from "@public/assets/socialMedia/our clients logo-07.png";
import commas from "@public/assets/socialMedia/comma-16.png";

function ValuedClient() {
  return (
    <div className="bg-green-20 w-[8.27in] minh-[29.7cm] h-[29.7cm] bg-white">
      <div className="flex flex-col justify-center items-center h-[100%] bg-red-00 relative bg-red-10">
        <div className="flex w-full h-[50%] absolute top-0 overflow-hidden">
          <div className="w-[150%] h-[80%] rounded-br-[55%] rounded-bl-[40%] absolute top-[0%] right-[-10%] z-[50] bg-[#00A2FF] flex justify-center items-center"></div>
          <div className="absolute w-[87%] h-[50%] right-[6.5%] top-[25%] z-[200] bg-red-90">
            <div className="flex flex-col justify-center w-full leading-[1.1]">
              <span className="text-[white] text-[44px] font-[600]">
                Our Valued
              </span>
              <span className="text-[white] text-[44px] font-[600]">
                Clients
              </span>
              <div className="w-[70px] h-[5px] bg-yellow-400 my-3"></div>
            </div>
            <div className="flex flex-col justify-center w-full leading-snug">
              <span className="text-[white] text-[16px] font-[200]">
                We have received true recognition from our clients for
                delivering the projects through our exceptional Social Media
                Marketing services. Our client base spans a wide range of
                industries. Whatever industry you are coming from, we understand
                your unique needs with our commitment to excellence and
                innovation. Join our growing list of satisfied clients to drive
                your business forward.
              </span>
            </div>
          </div>
          <div className="w-[60%] h-[120%] rounded-[50%] bottom-[25%] right-[-25%] z-[10] bg-[#ffd600] absolute"></div>
        </div>

        <div className="absolute top-0 left-[7%] z-[100] w-[50px] bg-pink-900 flex">
          <div className="w-[50%] h-[100px] bg-white"></div>
          <div className="w-[50%] h-[100px] bg-[#ffd600]"></div>
        </div>

        <div className="w-[87%] h-[45%] z-[100] absolute bottom-[13.5%] flex justify-between items-start bg-purple-60">
          <div className="w-[100%] h-[35%] flex justify-between items-center bg-red-60">
            <div className="w-[18%] h-[100%] flex justify-center items-center bg-yellow-5">
              <img src={commas.src} className="w-[80%]" />
            </div>
            <div className="w-[60%] h-[100%] flex justify-center items-center bg-yellow-5">
              <div className="w-[100%] h-fit leading-tight text-justify">
                <h3 className="text-[#00A2FF] text-[24px] font-[600] text-center pb-1">
                  Ma Ka Ching | Chief Executive Officer
                </h3>
                <span className="text-[16px] font-[400]">
                  Working with Soft Enterprise has been a game-changer for our
                  business. Their expertise and dedication to Social Media
                  Marketing services have helped us achieve remarkable campaign
                  results. We look forward to excelling in our projects!
                </span>
              </div>
            </div>
            <div className="w-[18%] h-[100%] flex justify-center items-center bg-yellow-5">
              <div className="w-[100%] h-[80%] flex justify-center items-center bg-[rgb(214,240,255)] rounded-[40px]">
                <img src={horse.src} className="" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 h-[8%] w-full bg-green-30 overflow-hidden">
          <div className="flex justify-between items-center w-full px-16 h-full bg-blue-40 absolute top-0 left-0 z-[50]">
            <span className="text-gray-700 text-[15px] font-[500]">
              Social Media Marketing Proposal
            </span>
            <span className="text-gray-700 text-[15px] font-[500]">
              Page 02
            </span>
          </div>
          <div className="w-[200%] h-[350%] bg-blue-100 absolute top-[5%] right-[15%] rounded-[40%]"></div>
        </div>
      </div>
    </div>
  );
}
export default ValuedClient;
