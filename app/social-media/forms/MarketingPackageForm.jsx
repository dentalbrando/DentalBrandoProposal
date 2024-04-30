"use client";
import { useDispatch, useSelector } from "react-redux";

const MarketingPackageForm = () => {
  return (
    <div className="overflow-y-visible custom-scroll mt-5 h-fit custom-bg w-[900px] py-12 px-12 rounded-2xl border-2 border-color">
      <div className="">
        <div className="flex justify-center items-start h-fit my-5">
          <div className="w-[100%] flex flex-col gap-10">
            <div className={`flex justify-start items-center w-[100%]`}>
              <label
                className={`text-gray-900 text-[16px] font-medium pe-10 w-[15%]`}
              >
                Basic
              </label>
              <input
                className={`text-gray-900  text-[14px] font-normal p-2 rounded-md border-2 border-color outline-none rounded-md font-normal border-2 border-color outline-none w-[40%]`}
              />
              <p className="text-red-500 text-sm">{}</p>
            </div>
            <div className={`flex justify-start items-center w-[100%]`}>
              <label
                className={`text-gray-900 text-[16px] font-medium pe-10 w-[15%]`}
              >
                Standard
              </label>
              <input
                className={`text-gray-900  text-[14px] font-normal p-2 rounded-md border-2 border-color outline-none rounded-md font-normal border-2 border-color outline-none w-[40%]`}
              />
              <p className="text-red-500 text-sm">{}</p>
            </div>
            <div className={`flex justify-start items-center w-[100%]`}>
              <label
                className={`text-gray-900 text-[16px] font-medium pe-10 w-[15%]`}
              >
                Premium
              </label>
              <input
                className={`text-gray-900  text-[14px] font-normal p-2 rounded-md border-2 border-color outline-none rounded-md font-normal border-2 border-color outline-none w-[40%]`}
              />
              <p className="text-red-500 text-sm">{}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingPackageForm;
