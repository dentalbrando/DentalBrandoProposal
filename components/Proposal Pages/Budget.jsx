import React from "react";

import log from "@public/assets/budgetImgs/logo.png";
import { useSelector } from "react-redux";

const Budget = () => {
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
    <>
      <div className="relative overflow-hidden shadow-lg bg-white w-[8.27in] h-[1122.6px]">
        <div>
          <div className="flex justify-between items-center">
            <img
              src={log.src}
              alt=""
              className="ml-14"
              style={{ width: "200px" }}
            />
            <div className="flex flex-col items-end gap-5">
              <div className="flex items-center">
                <div
                  className="bg-[#ffd600] relative w-[7rem] left-[5.5rem] h-28"
                  style={{
                    clipPath: "polygon(75% 0, 100% 0, 25% 100%, 0 100%)",
                  }}
                ></div>
                <div
                  className="bg-[#00a2ff] w-[22rem] h-28 flex justify-center items-center"
                  style={{
                    clipPath: "polygon(24% 0, 100% 0, 100% 100%, 0% 100%)",
                  }}
                >
                  <h1 className="font-[800] text-white text-[36pt] ml-4">
                    ESTIMATE
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-between mt-[-1rem]">
            <div className="relative">
              <div className="bg-[#ffd600] h-6 w-72"></div>
              <div className="bg-[#ffd600] h-6 w-80 rotate-[-53deg] absolute bottom-[123px] left-[215px]"></div>
            </div>
            <div
              className="bg-[#00a2ff] w-[28rem] h-14 flex justify-center items-center text-white text-[17.71pt] font-[600]"
              style={{
                clipPath: "polygon(11.5% 0, 100% 0, 100% 100%, 2% 100%)",
              }}
            >
              <h2>
                Total Estimate:{" "}
                <span className="capitalize">
                  {" "}
                  {budgetData.currency} {addCommasToNumber(totalEstimate)}/-
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="w-[85%] mx-auto mt-3">
          <div className="flex flex-col gap-2">
            <p className="text-[8.72pt] ml-4">INVOICE TO : {clientName}</p>
            <span
              id="name"
              className="text-[16.72pt] font-[600] w-[14rem] leading-tight ml-4 capitalize"
            >
              {externalData.companyName}
            </span>

            <p className="text-[8.85pt]">
              The Estimate has been generated for the following services
              provided on terms agreed beforehand.
            </p>
          </div>
          <div className="mt-2">
            <div className="flex items-center relative" role="navigation">
              <div
                className="bg-[#00a2ff] w-[53%] h-10 text-[11pt] font-[800] text-white flex items-center gap-8 pl-5"
                style={{ clipPath: "polygon(0 0, 98% 2%, 91% 100%, 0 100%)" }}
              >
                <h3>NO.</h3>
                <h3>SERVICES DESCRIPTION</h3>
              </div>
              <div
                className="bg-[#ffd600] w-[53%] h-10 absolute right-0 text-[11pt] font-[800] flex items-center justify-end pr-5 gap-9"
                style={{
                  clipPath: "polygon(9% 2%, 100% 0, 100% 100%, 0 100%)",
                }}
              >
                <h3>PACKAGE</h3>
                <h3 className="capitalize">
                  SUB TOTAL{" "}
                  {/* {totalEstimate
                    ? "(" + budgetData.currency + totalEstimate + ")"
                    : null} */}
                </h3>
              </div>
            </div>
            <table>
              {budgetData.service != "" &&
                budgetData.service.map((service, index) => {
                  if (service.description == null || service.charges == null) {
                    return null;
                  }
                  return (
                    <tr key={index}>
                      <td className="text-[8.85pt] font-[700]">{index + 1}.</td>
                      <td className="w-1/2 text-[10pt] pl-[0] font-[700] capitalize">
                        {service.description}
                      </td>
                      <td className="text-[10pt] pl-[0] font-[600] text-center capitalize">
                        {service.packageType}
                      </td>
                      <td className="text-[10pt] w-[117px] font-[600]">
                        = {addCommasToNumber(service.charges)}/-
                      </td>
                    </tr>
                  );
                })}
            </table>
          </div>

          {/* {(totalEstimate = subTotal - budgetData.discount) && true} */}
          {/* {totalEstimate === 0 ? null : totalEstimate} */}

          <div className="mt-[13.8rem]">
            <div className="bg-[#ffd600] w-full h-14 text-[11pt] font-[700] flex items-center justify-end ">
              <div className="w-[30%]">
                <div className="flex items-center gap-2">
                  <p>Subtotal :</p>
                  <span className="capitalize">
                    {budgetData.currency} {addCommasToNumber(subTotal)}/-
                  </span>
                </div>
                {budgetData.discount ? (
                  <>
                    <div className="flex items-center gap-2">
                      <p>Discount :</p>
                      <span className="capitalize">
                        -{budgetData.currency}{" "}
                        {addCommasToNumber(budgetData.discount)}/-
                      </span>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
            <div className="bg-[#00a2ff] w-full h-14 text-[13.77pt] font-[700] text-white flex items-center justify-end  gap-12">
              <div className="flex w-[30%] gap-1 bg-red-40">
                <p>TOTAL |</p>
                <span className="capitalize">
                  {budgetData.currency} {addCommasToNumber(totalEstimate)}/-
                </span>
              </div>
            </div>
          </div>
          <div className="text-[8pt] mt-4 mb-[50px]">
            <p
              className="font-[700] text-[9.84pt] mb-1"
              style={{ fontFamily: "Montserrat" }}
            >
              Terms & Conditions :
            </p>
            <ol type="1" className="list-decimal ml-3">
              {budgetData.terms.map((item, index) =>
                item ? <li key={index}>{item}</li> : null
              )}
            </ol>
          </div>
        </div>
        <div className="flex items-end absolute bottom-0 w-full">
          <div
            className="bg-[#00a2ff] w-[55%] z-10 h-16"
            style={{ clipPath: "polygon(0 0, 73% 0%, 100% 100%, 0 100%)" }}
          ></div>
          <div
            className="bg-[#ffd600] w-[55%] h-10 absolute right-0"
            style={{ clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 10% 100%)" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Budget;
