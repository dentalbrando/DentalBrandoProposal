"use client";
import whiteLogo from "@public/assets/socialMedia/SE Logo.png";

function Estimate() {
  return (
    <div className="bg-green-20 w-[8.27in] minh-[29.7cm] h-[29.7cm] bg-white">
      <div className="flex flex-col justify-center items-center h-[100%] bg-red-00 relative bg-red-10">
        <div className="flex w-full h-[35%] absolute top-0 overflow-hidden">
          <div className="w-[150%] h-[80%] rounded-br-[55%] rounded-bl-[40%] absolute top-[0%] right-[-10%] z-[50] bg-[#00A2FF] flex justify-center items-center"></div>
          <div className="absolute w-[87%] h-[50%] right-[6.5%] top-[10%] z-[200] bg-red-90  flex flex-col justify-end">
            <div className="flex flex-col justify-center w-full leading-[1.1]">
              <span className="text-[white] text-[44px] font-[600]">
                Estimate
              </span>
            </div>
            <div className="flex flex-col justify-center w-full leading-snug">
              <span className="text-[rgb(255,214,0)] text-[20px] font-[700]">
                Total Estimate: PKR 340,000
              </span>
            </div>

            <img
              src={whiteLogo.src}
              className="w-[170px] absolute top-[25%] right-[5%]"
            />
          </div>
          <div className="w-[60%] h-[120%] rounded-[50%] bottom-[25%] right-[-25%] z-[10] bg-[#ffd600] absolute"></div>
        </div>

        <div className="w-full h-[60%] absolute bottom-[10%] flex flex-col items-center gap-3">
          <div className="flex flex-col justify-center w-[87%] leading-[1.2]">
            <span className="text-[20px] font-[400]">Estimated To</span>
            <span className="text-[30px] font-[600]">VISTA Conard Tower-1</span>
          </div>
          <div className="flex flex-col justify-center w-[87%] gap-1">
            <span className="text-[15.5px] font-[400] text-justify">
              The Estimate has been generated for the following services
              provided on terms agreed beforehand.
            </span>

            <div className="flex flex-col justify-start w-full h-[fit-content]">
              <div className="flex justify-between w-full text-[16px] font-[600]">
                <div className=" w-[12%] bg-[#ffd600] text-center pb-1 pt-2 ">
                  No.
                </div>
                <div className=" w-[46%] bg-[#00A2FF] pb-1 pt-2 ps-4 text-white">
                  SERVICES DESCRIPTION
                </div>
                <div className=" w-[16%] bg-[#ffd600] text-center pb-1 pt-2 ">
                  PACKAGE
                </div>
                <div className=" w-[24%] bg-[#ffd600] text-center pb-1 pt-2 ">
                  SUB TOTAL (PKR)
                </div>
              </div>
              <div className="flex justify-between w-full text-[16px] font-[400] pt-5">
                <div className=" w-[12%] text-center py-1">1</div>
                <div className=" w-[46%] py-1 ps-4">Service description </div>
                <div className=" w-[16%] text-center py-1">Basic</div>
                <div className=" w-[24%] text-center py-1">192300</div>
              </div>
              <div className="flex justify-between w-full text-[16px] font-[400]">
                <div className=" w-[12%] text-center py-1">2</div>
                <div className=" w-[46%] py-1 ps-4">Service description </div>
                <div className=" w-[16%] text-center py-1">Premium</div>
                <div className=" w-[24%] text-center py-1">192300</div>
              </div>
              <div className="flex justify-between w-full text-[16px] font-[400]">
                <div className=" w-[12%] text-center py-1">3</div>
                <div className=" w-[46%] py-1 ps-4">Service description </div>
                <div className=" w-[16%] text-center py-1">Premium</div>
                <div className=" w-[24%] text-center py-1">192300</div>
              </div>
              <div className="flex justify-between w-full text-[16px] font-[400]">
                <div className=" w-[12%] text-center py-1">2</div>
                <div className=" w-[46%] py-1 ps-4">Service description </div>
                <div className=" w-[16%] text-center py-1">Premium</div>
                <div className=" w-[24%] text-center py-1">192300</div>
              </div>
              <div className="flex justify-between w-full text-[16px] font-[400]">
                <div className=" w-[12%] text-center py-1">2</div>
                <div className=" w-[46%] py-1 ps-4">Service description </div>
                <div className=" w-[16%] text-center py-1">Premium</div>
                <div className=" w-[24%] text-center py-1">192300</div>
              </div>
              <div className="flex justify-between w-full text-[16px] font-[400] pb-5 border-b-[1px] border-black">
                <div className=" w-[12%] text-center py-1">2</div>
                <div className=" w-[46%] py-1 ps-4">Service description </div>
                <div className=" w-[16%] text-center py-1">Premium</div>
                <div className=" w-[24%] text-center py-1">192300</div>
              </div>
            </div>

            <div className="flex flex-col justify-end items-end w-full pt-10 pb-7 border-b-[1px] border-black">
              <div className="flex justify-between items-center w-[30%] px-3 py-1">
                <span className="text-[17px] font-[700] text-justify">
                  SUBTOTAL
                </span>
                <span className="text-[17px] font-[600] text-justify">
                  192300
                </span>
              </div>
              <div className="flex justify-between items-center w-[30%] px-3 py-1">
                <span className="text-[17px] font-[700] text-justify">
                  DISCOUNT
                </span>
                <span className="text-[17px] font-[600] text-justify">
                  -54230
                </span>
              </div>
              <div className="flex justify-between items-center w-[30%] px-3 py-2 bg-[rgb(255,214,0)]">
                <span className="text-[17px] font-[700] text-justify">
                  TOTAL
                </span>
                <span className="text-[17px] font-[600] text-justify">
                  982000
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-end items-end w-full pt-5 border-black leading-[1.1]">
              <span className="text-[18px] font-[700] w-full text-justify pb-1">
                TERMS & CONDITIONS
              </span>
              <span className="text-[15.5px] font-[400] w-full text-justify">
                1.The Estimate has been generated for the following services
                provided on terms agreed beforehand.
              </span>
              <span className="text-[15.5px] font-[400] w-full text-justify">
                2. Estimate can be revise if change in work requirements
              </span>
              <span className="text-[15.5px] font-[400] w-full text-justify">
                3. Estimate is valid for 7 days only.
              </span>
              <span className="text-[15.5px] font-[400] w-full text-justify">
                4. After delivering the website , 6 months of maintenance will
                be there with Premium Plan.
              </span>
              <span className="text-[15.5px] font-[400] w-full text-justify">
                5. 50% Payment will be in advance
              </span>
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-[7%] z-[100] w-[50px] flex">
          <div className="w-[50%] h-[100px] bg-white"></div>
          <div className="w-[50%] h-[100px] bg-[#ffd600]"></div>
        </div>
        <div className="absolute bottom-0 h-[8%] w-full bg-green-30 overflow-hidden">
          <div className="flex justify-between items-center w-full px-16 h-full bg-blue-40 absolute top-0 left-0 z-[50]">
            <span className="text-gray-700 text-[15px] font-[500]">
              Social Media Marketing Proposal
            </span>
            <span className="text-gray-700 text-[15px] font-[500]">
              Page 12
            </span>
          </div>
          <div className="w-[200%] h-[350%] bg-blue-100 absolute top-[5%] right-[15%] rounded-[40%]"></div>
        </div>
      </div>
    </div>
  );
}
export default Estimate;
