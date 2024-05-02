"use client";
import whiteLogo from "@public/assets/socialMedia/SE Logo.png";
import { useSelector } from "react-redux";

function Estimate(prop) {
  const storedServices = useSelector((state) => state.budget_smm.service);
  const budgetData = useSelector((state) => state.budget_smm);
  const cover_pageSmm = useSelector((state) => state.cover_pageSmm);

  function addCommasToNumber(number) {
    // Convert the number to a string
    let numberString = number.toString();

    // Use a regular expression to add commas
    numberString = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return numberString;
  }
  let subTotal = 0;
  let totalEstimate = 0;
  if (budgetData.service != "") {
    budgetData.service?.map((service) => {
      subTotal = subTotal + parseInt(service.charges ? service.charges : 0);
    });
    totalEstimate = subTotal - budgetData.discount;
  }
  return (
    <div className="w-[8.27in] h-[1123px] bg-white shadow-lg">
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
                  Total Estimate: {budgetData.currency}{" "}
                  {addCommasToNumber(totalEstimate)}
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
              <span className="text-[20px] font-[400]">Invoice To</span>
              <span className="text-[30px] font-[600]">
                {cover_pageSmm?.companyName}
              </span>
            </div>

            <div className="flex flex-col justify-center w-[87%] gap-1">
              <span className="text-[15.5px] font-[400] text-justify">
                The Estimate has been generated for the following services
                provided on terms agreed beforehand.
              </span>

              <div className="flex flex-col justify-start w-full h-[fit-content]">
                <div className="flex justify-between w-full text-[16px] font-[600] mb-5">
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
                {storedServices.length > 0
                  ? storedServices.map((item, key) => (
                      <div
                        key={key}
                        className="flex justify-between w-full text-[16px] font-[400]"
                      >
                        <div className=" w-[12%] text-center py-1">
                          {key + 1}
                        </div>
                        <div className=" w-[46%] py-1 ps-4">
                          {item.description}
                        </div>
                        <div className=" w-[16%] text-center py-1">
                          {item.packageType}
                        </div>
                        <div className=" w-[24%] text-center py-1">
                          {item.charges}
                        </div>
                      </div>
                    ))
                  : null}
              </div>

              <div className="flex flex-col justify-end items-end w-full pt-10 pb-7 border-b-[1px] border-black">
                <div className="flex justify-between items-center w-[40%] px-3 py-1">
                  <span className="text-[17px] font-[700] text-justify w-[40%]">
                    SUBTOTAL
                  </span>
                  <span className="text-[17px] font-[600] text-center w-[56%]">
                    {budgetData.currency}
                    {addCommasToNumber(subTotal)}
                  </span>
                </div>
                <div className="flex justify-between items-center w-[40%] px-3 py-1">
                  <span className="text-[17px] font-[700] text-justify w-[40%]">
                    DISCOUNT
                  </span>
                  <span className="text-[17px] font-[600] text-center w-[56%]">
                    - {budgetData.currency}{" "}
                    {budgetData.discount ? budgetData.discount : 0}
                  </span>
                </div>
                <div className="flex justify-between items-center w-[40%] px-3 py-2 bg-[rgb(255,214,0)]">
                  <span className="text-[17px] font-[700] text-justify w-[40%]">
                    TOTAL
                  </span>
                  <span className="text-[17px] font-[600] text-center w-[56%]">
                    {budgetData.currency}
                    {addCommasToNumber(totalEstimate)}
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-end items-end w-full pt-5 border-black leading-[1.2]">
                <span className="text-[18px] font-[700] w-full text-justify pb-1">
                  TERMS & CONDITIONS
                </span>
                <span className="text-[15.5px] font-[400] w-full text-justify">
                  {budgetData.terms.map((item, index) =>
                    item ? <li key={index}>{item}</li> : null
                  )}
                </span>
              </div>
            </div>
          </div>

          <div className="absolute top-0 left-[7%] z-[100] w-[50px] flex">
            <div className="w-[50%] h-[100px] bg-white"></div>
            <div className="w-[50%] h-[100px] bg-[#ffd600]"></div>
          </div>

          <div className="absolute bottom-0 h-[100px] w-[100%] overflow-hidden z-[200]">
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
    </div>
  );
}
export default Estimate;
