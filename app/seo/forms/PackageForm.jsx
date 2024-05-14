"use client";
import { useDispatch, useSelector } from "react-redux";
import {
  setBasic,
  setStandard,
  setPremium,
  setBasicCurrency,
} from "@app/store/packagesSliceSeo";
import { useEffect, useState } from "react";
const PackageForm = () => {
  let packages = useSelector((state) => state.package_seo);
  let dispatch = useDispatch();
  let [basic, setbasic] = useState(packages.basic);
  let [standard, setstandard] = useState(packages.standard);
  let [premium, setpremium] = useState(packages.premium);
  let [basicCurrency, setbasicCurrency] = useState(packages.basicCurrency);

  useEffect(() => {
    dispatch(setBasic(basic));
    dispatch(setStandard(standard));
    dispatch(setPremium(premium));
    dispatch(setBasicCurrency(basicCurrency));
  }, [
    basic,
    standard,
    premium,
    basicCurrency,
  ]);

  return (
    <div className="overflow-y-visible custom-scroll mt-5 h-fit custom-bg w-[900px] py-12 px-12 rounded-2xl border-2 border-color">
      <div className="">
        <div className="flex justify-center items-start h-fit my-5">
          <div className="w-[50%] flex flex-col gap-10 ">
            <div className={`flex justify-start items-center w-[100%] `}>
              <label
                className={`text-gray-900 text-[16px] font-medium pe-10 w-[30%]`}
              >
                Basic
              </label>
              <input
                className={`text-gray-900  text-[14px] font-normal p-2 rounded-md border-2 border-color outline-none rounded-md font-normal border-2 border-color outline-none w-[60%]`}
                value={basic}
                onChange={(e) => setbasic(e.target.value)}
              />
              <p className="text-red-500 text-sm">{}</p>
            </div>
            <div className={`flex justify-start items-center w-[100%]`}>
              <label
                className={`text-gray-900 text-[16px] font-medium pe-10 w-[30%]`}
              >
                Standard
              </label>
              <input
                className={`text-gray-900  text-[14px] font-normal p-2 rounded-md border-2 border-color outline-none rounded-md font-normal border-2 border-color outline-none w-[60%]`}
                value={standard}
                onChange={(e) => setstandard(e.target.value)}
              />
              <p className="text-red-500 text-sm">{}</p>
            </div>
            <div className={`flex justify-start items-center w-[100%]`}>
              <label
                className={`text-gray-900 text-[16px] font-medium pe-10 w-[30%]`}
              >
                Premium
              </label>
              <input
                className={`text-gray-900  text-[14px] font-normal p-2 rounded-md border-2 border-color outline-none rounded-md font-normal border-2 border-color outline-none w-[60%]`}
                value={premium}
                onChange={(e) => setpremium(e.target.value)}
              />
              <p className="text-red-500 text-sm">{}</p>
            </div>
          </div>
          <div className="w-[50%] flex flex-col gap-10 ">
            <div className={`flex justify-start items-center w-[100%] `}>
              <label
                className={`text-gray-900 text-[16px] font-medium pe-10 w-[30%]`}
              >
                Currency
              </label>
              <input
                className={`text-gray-900  text-[14px] font-normal p-2 rounded-md border-2 border-color outline-none rounded-md font-normal border-2 border-color outline-none w-[60%]`}
                value={basicCurrency}
                onChange={(e) => setbasicCurrency(e.target.value)}
              />
              <p className="text-red-500 text-sm">{}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageForm;
