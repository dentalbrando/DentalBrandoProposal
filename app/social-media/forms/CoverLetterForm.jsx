"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setClientName, setLetterText } from "@app/store/CoverLetterSmm";

const CoverLetterForm = () => {
  const dispatch = useDispatch();
  let coverLetterSmm = useSelector((state) => state.cover_letterSmm);
  const [clientName, setclientName] = useState(coverLetterSmm.clientName);
  const [letterText, setletterText] = useState(coverLetterSmm.letterText);

  const handleSave = () => {
    dispatch(setLetterText(letterText));
    dispatch(setClientName(clientName));
  };

  useEffect(() => {
    handleSave();
  }, [clientName, letterText]);

  return (
    <div className="overflow-y-visible custom-scroll mt-5 h-fit custom-bg w-[900px] py-12 px-12 rounded-2xl border-2 border-color">
      <div className="">
        <div className="flex justify-center items-start h-fit my-5">
          <div className="w-[100%]">
            <div className={`flex justify-start items-center w-[100%]`}>
              <label
                className={`text-gray-900 text-[16px] font-medium pe-10 w-[20%]`}
              >
                Client Name
              </label>
              <input
                className={`text-gray-900  text-[14px] font-normal p-2 rounded-md border-2 border-color outline-none rounded-md font-normal border-2 border-color outline-none w-[30%]`}
                onChange={(e) => setclientName(e.target.value)}
                value={coverLetterSmm.clientName}
              />
            </div>
            <div className="flex justify-start my-10">
              <label className="text-gray-900 text-[16px] font-medium my-2 w-[20%]">
                Letter Text
              </label>
              <textarea
                cols={"auto"}
                rows="5"
                className={`text-gray-900  text-[14px] font-normal p-2 rounded-md border-2 border-color outline-none rounded-md font-normal border-2 border-color outline-none w-[80%]`}
                onChange={(e) => setletterText(e.target.value)}
                value={coverLetterSmm.letterText}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterForm;
