"use client";

import TextInput from "../TextInput";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import {
  setLetterType,
  setClientName,
  setLetterText,
} from "@app/store/coverLetterSlice";

const ConverLetterForm = () => {
  const dispatch = useDispatch();
  const coverLetter = useSelector((state) => state.cover_letter);
  if (coverLetter.letterType === "web_dev" && coverLetter.letterText === "") {
    var tempLetterText = `Welcome to Dental Brando, a leading IT company specializing in website development for dental practices. Our goal is to enhance your practice's professionalism with a comprehensive website development proposal. We offer innovative web solutions to elevate your online presence, ensuring it aligns with your brand values. Our expertise will help you create a professional and engaging online presence that resonates with your clients and sets you apart in the dental industry.
At Dental Brando, our commitment lies in crafting bespoke designs that authentically mirror your distinctive brand identity. We recognize the paramount significance of a website that not only exudes visual excellence but also operates with flawless efficiency. Collaborating closely with you, our team of seasoned professionals ensures the development of a website that faithfully embodies your practice's ethos while adeptly fulfilling your unique requirements.
Our customized website design services ensure that your site reflects the unique personality and branding of your dental practice. We focus on enhancing patient engagement through user-friendly web design, making it easy for patients to navigate your site, find information, and schedule appointments. We use the latest design and development technologies to ensure your website is modern, mobile-friendly, and easy to navigate.
Our team of experts is dedicated to ensuring that your dental practice stands out in a crowded digital landscape. With our innovative solutions and commitment to excellence, we are confident that we can help you achieve your online goals. At Dental Brando, we don’t believe in one-size-fits-all solutions. Our team takes the time to understand your unique practice and tailors strategies that resonate with your audience. Your success is our priority!
Sincerely,`;
  } else {
    var tempLetterText = coverLetter.letterText;
  }

  const [letterText, setletterText] = useState(tempLetterText);
  const [clientName, setclientName] = useState(coverLetter.clientName);
  const [letterType, setletterType] = useState(coverLetter.letterType);
  const selectOptions = [
    { value: "web_dev", label: "Web Development" },
    { value: "web_design", label: "Web Design" },
    // ...
  ];
  const textareaRef = useRef();
  const handleSave = () => {
    dispatch(
      setLetterText(letterText.replace(/\n/g, "<p class = 'py-1'></p>"))
    );
    dispatch(setClientName(clientName));
    dispatch(setLetterType(letterType));
  };

  useEffect(() => {
    handleSave();
  }, [letterText, clientName]);

  return (
    <div className="overflow-y-visible custom-scroll mt-5 h-fit custom-bg w-[900px] py-12 px-12 rounded-2xl border-2 border-color">
      <div className="">
        <div className="flex justify-center items-start h-fit my-5">
          <div className="flex items-center w-[50%]">
            <label className="text-gray-900 text-[16px] font-medium my-2 w-[40%]">
              Letter Type
            </label>
            <Select
              className="w-[60%] rounded-md font-normal border-2 border-color outline-none"
              options={selectOptions}
              placeholder={
                letterType === "web_dev" ? "Web Development" : "Web Design"
              }
              value={letterType}
              onChange={(event) => {
                setletterType(event.value);
                if (event.value == "web_dev") {
                  textareaRef.current.value = `Welcome to Dental Brando, a leading IT company specializing in website development for dental practices. Our goal is to enhance your practice's professionalism with a comprehensive website development proposal. We offer innovative web solutions to elevate your online presence, ensuring it aligns with your brand values. Our expertise will help you create a professional and engaging online presence that resonates with your clients and sets you apart in the dental industry.
At Dental Brando, our commitment lies in crafting bespoke designs that authentically mirror your distinctive brand identity. We recognize the paramount significance of a website that not only exudes visual excellence but also operates with flawless efficiency. Collaborating closely with you, our team of seasoned professionals ensures the development of a website that faithfully embodies your practice's ethos while adeptly fulfilling your unique requirements.
Our customized website design services ensure that your site reflects the unique personality and branding of your dental practice. We focus on enhancing patient engagement through user-friendly web design, making it easy for patients to navigate your site, find information, and schedule appointments. We use the latest design and development technologies to ensure your website is modern, mobile-friendly, and easy to navigate.
Our team of experts is dedicated to ensuring that your dental practice stands out in a crowded digital landscape. With our innovative solutions and commitment to excellence, we are confident that we can help you achieve your online goals. At Dental Brando, we don’t believe in one-size-fits-all solutions. Our team takes the time to understand your unique practice and tailors strategies that resonate with your audience. Your success is our priority!
Sincerely,`;
                }
                if (event.value == "web_design") {
                  textareaRef.current.value = `Testing web design template`;
                }
                setletterText(textareaRef.current.value);
              }}
              styles={{
                container: (base) => ({
                  ...base,
                  // width: '100%',
                }),
                control: (base) => ({
                  ...base,
                  height: "auto",
                  fontSize: "18px",
                  border: "none",
                  outline: "none",
                }),
                option: (base) => ({
                  ...base,
                  fontSize: "18px",
                  transition: "all 0.2s ease",
                  ":hover": {
                    background: "#093A5B",
                    color: "white",
                  },
                  background: "white",
                  zIndex: 999,
                }),
              }}
            />
          </div>

          <div className="w-[50%]">
            <div className={`flex justify-between items-center w-[100%]`}>
              <label
                className={`text-gray-900 text-[16px] font-medium flex-end pe-10 w-[40%]`}
              >
                Client Name
              </label>
              <input
                autoFocus
                className={`text-gray-900  text-[14px] font-normal p-2 rounded-md border-2 border-color border-color outline-none w-[60%]`}
                onChange={(event) => {
                  setclientName(event.target.value);
                }}
                value={clientName}
              />
              <p className="text-red-500 text-sm">{}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center  my-10">
          <label className="text-gray-900 text-[16px] font-medium my-2 w-[20%]">
            Letter Text
          </label>
          <textarea
            ref={textareaRef}
            cols={"auto"}
            rows="5"
            onChange={(e) => setletterText(e.target.value)}
            className="text-gray-900 text-lg p-2 rounded-md font-normal outline-none resize-none border-2 border-color w-[80%]"
            // defaultValue={overview.trim().replace(/<br\s*\/?>/g, '\n')}
          >
            {letterText
              .trim()
              .replace(/<p\s*[^>]*>/g, "\n")
              .replace(/<\/p>/g, "")}
          </textarea>
        </div>
      </div>
    </div>
  );
};

export default ConverLetterForm;
