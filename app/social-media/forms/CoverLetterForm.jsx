"use client";
import { useDispatch, useSelector } from "react-redux";

const CoverLetterForm = () => {
  return (
    <div className="overflow-y-visible custom-scroll mt-5 h-fit custom-bg w-[900px] py-12 px-12 rounded-2xl border-2 border-color">
      <div className="">
        <div className="flex justify-center items-start h-fit my-5">
          <div className="w-[50%]">
            <div className={`flex justify-between items-center w-[100%]`}>
              <label
                className={`text-gray-900 text-[16px] font-medium flex-end pe-10 w-[40%]`}
              >
                Client Name
              </label>
              <input
                className={`text-gray-900  text-[14px] font-normal p-2 rounded-md border-2 border-color outline-none rounded-md font-normal border-2 border-color outline-none w-[60%]`}
              />
              <p className="text-red-500 text-sm">{}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center  my-10">
          <label className="text-gray-900 text-[16px] font-medium my-2 w-[20%]">
            Letter Text
          </label>
          <textarea></textarea>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterForm;
