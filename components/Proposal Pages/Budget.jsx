import React from "react";

// import log from "@public/assets/budgetImgs/logo.png";
import log from "@public/assets/DB Logo-15.svg";
import { useSelector } from "react-redux";
import svg1 from "@public/assets/DbOurProcess/our process-01.svg";
import svg2 from "@public/assets/DbOurProcess/our process-02.svg";
import svg3 from "@public/assets/DbOurProcess/our process-03.svg";
import svg4 from "@public/assets/DbOurProcess/our process-04.svg";
import svg5 from "@public/assets/DbOurProcess/our process-05.svg";
import svg6 from "@public/assets/DbOurProcess/our process-06.svg";
import {
  FaCheckCircl,
  FaCheckCircle,
  FaCheckCircleeFaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

const Budget = ({ pageNumber }) => {
  const externalData = useSelector((state) => state.cover_page);
  const budgetData = useSelector((state) => state.budget);
  const clientName = useSelector((state) => state.cover_letter.clientName);
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
    // <>
    //   <div className="relative overflow-hidden shadow-lg bg-white w-[8.27in] h-[1122.6px]">
    //     <div>
    //       <div className="flex justify-between items-center">
    //         {/* <img
    //           src={log.src}
    //           alt=""
    //           className="ml-14"
    //           style={{ width: "200px" }}
    //         /> */}
    //         <img
    //           src={log.src}
    //           alt=""
    //           className="ml-14 my-10"
    //           style={{ width: "200px" }}
    //         />
    //         <div className="flex flex-col items-end gap-5">
    //           <div className="flex items-center">
    //             <div
    //               className="bg-[#03A0D7] relative w-[7rem] left-[5.5rem] h-28"
    //               style={{
    //                 clipPath: "polygon(75% 0, 100% 0, 25% 100%, 0 100%)",
    //               }}
    //             ></div>
    //             <div
    //               className="bg-[#093A5B] w-[22rem] h-28 flex justify-center items-center"
    //               style={{
    //                 clipPath: "polygon(24% 0, 100% 0, 100% 100%, 0% 100%)",
    //               }}
    //             >
    //               <h1 className="font-[800] text-white text-[36pt] ml-4">
    //                 ESTIMATE
    //               </h1>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="flex items-end justify-between mt-[-1rem]">
    //         <div className="relative">
    //           <div className="bg-[#03A0D7] h-6 w-72"></div>
    //           <div className="bg-[#03A0D7] h-6 w-80 rotate-[-53deg] absolute bottom-[123px] left-[215px]"></div>
    //         </div>
    //         <div
    //           className="bg-[#093A5B] w-[28rem] h-14 flex justify-center items-center text-white text-[17.71pt] font-[600]"
    //           style={{
    //             clipPath: "polygon(11.5% 0, 100% 0, 100% 100%, 2% 100%)",
    //           }}
    //         >
    //           <h2>
    //             Total Estimate:{" "}
    //             <span className="capitalize">
    //               {" "}
    //               {budgetData.currency} {addCommasToNumber(totalEstimate)}/-
    //             </span>
    //           </h2>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="w-[85%] mx-auto mt-3">
    //       <div className="flex flex-col gap-2">
    //         <p className="text-[8.72pt] ml-4">INVOICE TO : {clientName}</p>
    //         <span
    //           id="name"
    //           className="text-[16.72pt] font-[600] w-[14rem] leading-tight ml-4 capitalize"
    //         >
    //           {externalData.companyName}
    //         </span>

    //         <p className="text-[8.85pt]">
    //           The Estimate has been generated for the following services
    //           provided on terms agreed beforehand.
    //         </p>
    //       </div>
    //       <div className="mt-2">
    //         <div className="flex items-center relative" role="navigation">
    //           <div
    //             className="bg-[#093A5B] w-[53%] h-10 text-[11pt] font-[800] text-white flex items-center gap-8 pl-5"
    //             style={{ clipPath: "polygon(0 0, 98% 2%, 91% 100%, 0 100%)" }}
    //           >
    //             <h3>NO.</h3>
    //             <h3>SERVICES DESCRIPTION</h3>
    //           </div>
    //           <div
    //             className="bg-[#03A0D7] w-[53%] h-10 absolute right-0 text-[11pt] font-[800] flex items-center justify-end pr-5 gap-9 text-white"
    //             style={{
    //               clipPath: "polygon(9% 2%, 100% 0, 100% 100%, 0 100%)",
    //             }}
    //           >
    //             <h3>PACKAGE</h3>
    //             <h3 className="capitalize">
    //               SUB TOTAL{" "}
    //               {/* {totalEstimate
    //                 ? "(" + budgetData.currency + totalEstimate + ")"
    //                 : null} */}
    //             </h3>
    //           </div>
    //         </div>
    //         <table>
    //           {budgetData.service != "" &&
    //             budgetData.service.map((service, index) => {
    //               if (service.description == null || service.charges == null) {
    //                 return null;
    //               }
    //               return (
    //                 <tr key={index}>
    //                   <td className="text-[8.85pt] font-[700]">{index + 1}.</td>
    //                   <td className="w-1/2 text-[10pt] pl-[0] font-[700] capitalize">
    //                     {service.description}
    //                   </td>
    //                   <td className="text-[10pt] pl-[0] font-[600] text-center capitalize">
    //                     {service.packageType}
    //                   </td>
    //                   <td className="text-[10pt] w-[117px] font-[600]">
    //                     = {addCommasToNumber(service.charges)}/-
    //                   </td>
    //                 </tr>
    //               );
    //             })}
    //         </table>
    //       </div>

    //       {/* {(totalEstimate = subTotal - budgetData.discount) && true} */}
    //       {/* {totalEstimate === 0 ? null : totalEstimate} */}

    //       <div className="mt-[13.8rem]">
    //         <div className="bg-[#03A0D7] w-full h-14 text-[11pt] font-[700] flex items-center justify-end ">
    //           <div className="w-[30%] text-white">
    //             <div className="flex items-center gap-2">
    //               <p>Subtotal :</p>
    //               <span className="capitalize">
    //                 {budgetData.currency} {addCommasToNumber(subTotal)}/-
    //               </span>
    //             </div>
    //             {budgetData.discount ? (
    //               <>
    //                 <div className="flex items-center gap-2">
    //                   <p>Discount :</p>
    //                   <span className="capitalize">
    //                     -{budgetData.currency}{" "}
    //                     {addCommasToNumber(budgetData.discount)}/-
    //                   </span>
    //                 </div>
    //               </>
    //             ) : null}
    //           </div>
    //         </div>
    //         <div className="bg-[#093A5B] w-full h-14 text-[13.77pt] font-[700] text-white flex items-center justify-end  gap-12">
    //           <div className="flex w-[30%] gap-1 bg-red-40">
    //             <p>TOTAL |</p>
    //             <span className="capitalize">
    //               {budgetData.currency} {addCommasToNumber(totalEstimate)}/-
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="text-[8pt] mt-4 mb-[50px]">
    //         <p
    //           className="font-[700] text-[9.84pt] mb-1"
    //           style={{ fontFamily: "Montserrat" }}
    //         >
    //           Terms & Conditions :
    //         </p>
    //         <ol type="1" className="list-decimal ml-3">
    //           {budgetData.terms.map((item, index) =>
    //             item ? <li key={index}>{item}</li> : null
    //           )}
    //         </ol>
    //       </div>
    //     </div>
    //     <div className="flex items-end absolute bottom-0 w-full">
    //       <div
    //         className="bg-[#093A5B] w-[55%] z-10 h-16"
    //         style={{ clipPath: "polygon(0 0, 73% 0%, 100% 100%, 0 100%)" }}
    //       ></div>
    //       <div
    //         className="bg-[#03A0D7] w-[55%] h-10 absolute right-0"
    //         style={{ clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 10% 100%)" }}
    //       ></div>
    //     </div>
    //   </div>
    // </>
    <>
      <div class="offer w-[8.27in] h-[1122.6px] shadow-lg print:shadow-none bg-whit bg-red-30 flex flex-col justify-between items-center">
        <div class="flex  print:h-[7.3rem] w-[90%]">
          <div class="mt-[50px] flex relative  pb-0">
            <svg
              class="transform rotate-90 relative ml-[-5px]  top-0 "
              width="64"
              height="64"
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#093A5B"
                d="m221.76 69.66l-88-48.18a12 12 0 0 0-11.52 0l-88 48.18A12 12 0 0 0 28 80.18v95.64a12 12 0 0 0 6.24 10.52l88 48.18a11.95 11.95 0 0 0 11.52 0l88-48.18a12 12 0 0 0 6.24-10.52V80.18a12 12 0 0 0-6.24-10.52ZM220 175.82a4 4 0 0 1-2.08 3.5l-88 48.18a4 4 0 0 1-3.84 0l-88-48.18a4 4 0 0 1-2.08-3.5V80.18a4 4 0 0 1 2.08-3.5l88-48.18a3.94 3.94 0 0 1 3.84 0l88 48.18a4 4 0 0 1 2.08 3.5Z"
              />
            </svg>
            <h6 class="absolute ml-[1.4rem] top-5 text-[#03A0D7]  text-[12pt]">
              {pageNumber}
            </h6>
          </div>
          <div class="mt-[65px]">
            <h3 class="font-[700] text-[9pt] text-[#03A0D7]">Dental Brando</h3>

            <h3 class=" font-[700]  text-[9pt] text-[#03A0D7]">
              Business Proposal
            </h3>

            <div class=" mt-1  w-[6.5in] h-0.5 bg-[#093A5B] "></div>
          </div>
        </div>

        <div className="w-full h-[85%] relative ">
          <div className="w-full h-[50%] pt-6 z-0">
            <div
              className="w-[80%] h-[100px] mx-auto text-[28px] text-main-blue font-[700] text-justify leading-8"
              style={{ textAlignLast: "center" }}
            >
              Get Set, Grow: Time to Attract New <br /> Patients with Our
              Stunning Website Designed
            </div>
          </div>

          <div className="w-full  h-[62%] absolute top-[16%] z-10 flex justify-center gap-[6%] items-center">
            <div className="w-[42%] h-[100%]  rounded-3xl overflow-hidden">
              <div className="flex flex-col justify-center items-center w-[100%] h-[20%] bg-[#03A0D7] text-white gap-1">
                <h1 className="font-[700] text-[28px] leading-none">Basic</h1>
                <h2 className="text-[18px] leading-none">Monthly Plan</h2>
              </div>
              <div className="w-[100%] h-[62%] bg-white flex flex-col justify-start items-start pt-6 px-2 gap-y-[5px]">
                <div className="w-[100%] h-fit bg-yellow-80 flex justify-start items-center gap-0">
                  <span className="w-[15%] h-[100%] flex justify-center items-center text-center text-green-400">
                    <FaCheckCircle />
                  </span>
                  Website Maintenance
                </div>
                <div className="w-[100%] h-fit bg-yellow-80 flex justify-start items-center gap-0">
                  <span className="w-[15%] h-[100%] flex justify-center items-center text-center text-green-400">
                    <FaCheckCircle />
                  </span>
                  Basic SEO
                </div>
                <div className="w-[100%] h-fit bg-yellow-80 flex justify-start items-center gap-0">
                  <span className="w-[15%] h-[100%] flex justify-center items-center text-center text-green-400">
                    <FaCheckCircle />
                  </span>
                  Google/Yelp Listings
                </div>
                <div className="w-[100%] h-fit bg-yellow-80 flex justify-start items-center gap-0">
                  <span className="w-[15%] h-[100%] flex justify-center items-center text-center text-green-400">
                    <FaCheckCircle />
                  </span>
                  Support Email + Whatsapp
                </div>
                <div className="w-[100%] h-fit bg-yellow-80 flex justify-start items-center gap-0">
                  <span className="w-[15%] h-[100%] flex justify-center items-center text-center text-green-400">
                    <FaCheckCircle />
                  </span>
                  SEO Audit Report One Time
                </div>
                <div className="w-[100%] h-fit bg-yellow-80 flex justify-start items-center gap-0">
                  <span className="w-[15%] h-[100%] flex justify-center items-center text-center text-red-500">
                    <FaTimesCircle />
                  </span>
                  Website Maintenance
                </div>
                <div className="w-[100%] h-fit bg-yellow-80 flex justify-start items-center gap-0">
                  <span className="w-[15%] h-[100%] flex justify-center items-center text-center text-red-500">
                    <FaTimesCircle />
                  </span>
                  Paid Ads Management
                </div>
                <div className="w-[100%] h-fit bg-yellow-80 flex justify-start items-center gap-0">
                  <span className="w-[15%] h-[100%] flex justify-center items-center text-center text-red-500">
                    <FaTimesCircle />
                  </span>
                  Social Media Management
                </div>
                <div className="w-[100%] h-fit bg-yellow-80 flex justify-start items-center gap-0">
                  <span className="w-[15%] h-[100%] flex justify-center items-center text-center text-red-500">
                    <FaTimesCircle />
                  </span>
                  Content Development
                </div>
                <div className="w-[100%] h-fit bg-yellow-80 flex justify-start items-center gap-0">
                  <span className="w-[15%] h-[100%] flex justify-center items-center text-center text-red-500">
                    <FaTimesCircle />
                  </span>
                  Email Marketing
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-[100%] h-[18%] bg-[#03A0D7] text-white gap-1">
                <h1 className="font-[700] text-[32px] leading-none">
                  $ 59.99/m
                </h1>
              </div>
            </div>
            <div className="w-[42%] h-[100%] bg-green-800  rounded-3xl overflow-hidden">
              <div className="flex flex-col justify-center items-center w-[100%] h-[20%] bg-[#03A0D7] text-white gap-1">
                <h1 className="font-[700] text-[28px] leading-none">Growth</h1>
                <h2 className="text-[18px] leading-none">Monthly Plan</h2>
              </div>
              <div className="w-[100%] h-[62%] bg-white flex flex-col justify-start items-start pt-6 px-2 gap-y-[5px]">
                <div className="w-[100%] h-fit bg-yellow-80 flex justify-start items-center gap-0">
                  <span className="w-[15%] h-[100%] flex justify-center items-center text-center text-green-400">
                    <FaCheckCircle />
                  </span>
                  Website Maintenance
                </div>
                <div className="w-[100%] h-fit bg-yellow-80 flex justify-start items-center gap-0">
                  <span className="w-[15%] h-[100%] flex justify-center items-center text-center text-green-400">
                    <FaCheckCircle />
                  </span>
                  Basic SEO
                </div>
                <div className="w-[100%] h-fit bg-yellow-80 flex justify-start items-center gap-0">
                  <span className="w-[15%] h-[100%] flex justify-center items-center text-center text-green-400">
                    <FaCheckCircle />
                  </span>
                  Google/Yelp Listings
                </div>
                <div className="w-[100%] h-fit bg-yellow-80 flex justify-start items-center gap-0">
                  <span className="w-[15%] h-[100%] flex justify-center items-center text-center text-green-400">
                    <FaCheckCircle />
                  </span>
                  VIP Priority Support
                </div>
                <div className="w-[100%] h-fit bg-yellow-80 flex justify-start items-center gap-0">
                  <span className="w-[15%] h-[100%] flex justify-center items-center text-center text-green-400">
                    <FaCheckCircle />
                  </span>
                  SEO Audit Report Monthly
                </div>
                <div className="w-[100%] h-fit bg-yellow-80 flex justify-start items-center gap-0">
                  <span className="w-[15%] h-[100%] flex justify-center items-center text-center text-green-400">
                    <FaCheckCircle />
                  </span>
                  Website Maintenance
                </div>
                <div className="w-[100%] h-fit bg-yellow-80 flex justify-start items-center gap-0">
                  <span className="w-[15%] h-[100%] flex justify-center items-center text-center text-green-400">
                    <FaCheckCircle />
                  </span>
                  Paid Ads Management
                </div>
                <div className="w-[100%] h-fit bg-yellow-80 flex justify-start items-center gap-0">
                  <span className="w-[15%] h-[100%] flex justify-center items-center text-center text-green-400">
                    <FaCheckCircle />
                  </span>
                  Social Media Management
                </div>
                <div className="w-[100%] h-fit bg-yellow-80 flex justify-start items-center gap-0">
                  <span className="w-[15%] h-[100%] flex justify-center items-center text-center text-green-400">
                    <FaCheckCircle />
                  </span>
                  Content Development
                </div>
                <div className="w-[100%] h-fit bg-yellow-80 flex justify-start items-center gap-0">
                  <span className="w-[15%] h-[100%] flex justify-center items-center text-center text-green-400">
                    <FaCheckCircle />
                  </span>
                  Email Marketing
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-[100%] h-[18%] bg-[#03A0D7] text-white gap-1">
                <h1 className="font-[700] text-[32px] leading-none">
                  $ 99.99/m
                </h1>
              </div>
            </div>
          </div>
          <div className="w-[100%] h-[50%] bg-main-blue relative z-0">
            <div className="px-[5%] w-[100%] h-fit text-[12px] text-white  text-justify  absolute  bottom-[32%] mx-auto">
              *Updation of Themes/Plugins, Regular Content Updations, Fixing
              Broken Links, Speed Optimization Security Updates, Backups, User
              Management, Uptime Monitoring.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Budget;
