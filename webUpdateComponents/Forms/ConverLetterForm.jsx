"use client";

import TextInput from "../TextInput";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import {
  setLetterType,
  setClientName,
  setLetterText,
} from "@app/store/coverLetterUpdate";

const ConverLetterForm = () => {
  const dispatch = useDispatch();
  const coverLetter = useSelector((state) => state.cover_letter_Update);
  if (coverLetter.letterType === "web_dev" && coverLetter.letterText === "") {
    var tempLetterText = `Welcome to Dental Brando, where we specialize in enhancing dental practices through cutting-edge website updates. As a leading IT company, we are dedicated to enhancing the online professionalism and patient engagement of your dental practice. Our tailored website update services are designed to transform your current online presence into a powerful tool for growth. We offer innovative solutions that ensure your website not only looks exceptional but also functions seamlessly to meet the evolving needs of your patients.
At Dental Brando, we understand the importance of a website that not only reflects your unique brand but also drives results. Our team of experts will collaborate closely with you to deliver a customized update that aligns perfectly with your practice's goals and values. We take the time to understand your specific needs and challenges, ensuring that our solutions are tailored to help you achieve your objectives.
From improved navigation to enhanced user experience, our updates will make it effortless for patients to connect with your practice, access information, and schedule appointments. We focus on creating a seamless experience that enhances patient satisfaction and engagement. Our goal is to make your website a central hub for patient interaction, where they can easily find the information they need and interact with your practice in a convenient manner.
Moreover, our dedication extends beyond the initial update. We provide ongoing support and maintenance to ensure your website remains secure, optimized, and aligned with your practice's growth objectives. This continuous improvement approach guarantees that your online presence evolves with the changing digital landscape, keeping your practice at the forefront of patient engagement and technological advancements.
We are excited about the opportunity to partner with you in enhancing your dental practice's online presence.`;
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
                  textareaRef.current.value = `Welcome to Dental Brando, where we specialize in enhancing dental practices through cutting-edge website updates. As a leading IT company, we are dedicated to enhancing the online professionalism and patient engagement of your dental practice. Our tailored website update services are designed to transform your current online presence into a powerful tool for growth. We offer innovative solutions that ensure your website not only looks exceptional but also functions seamlessly to meet the evolving needs of your patients.
At Dental Brando, we understand the importance of a website that not only reflects your unique brand but also drives results. Our team of experts will collaborate closely with you to deliver a customized update that aligns perfectly with your practice's goals and values. We take the time to understand your specific needs and challenges, ensuring that our solutions are tailored to help you achieve your objectives.
From improved navigation to enhanced user experience, our updates will make it effortless for patients to connect with your practice, access information, and schedule appointments. We focus on creating a seamless experience that enhances patient satisfaction and engagement. Our goal is to make your website a central hub for patient interaction, where they can easily find the information they need and interact with your practice in a convenient manner.
Moreover, our dedication extends beyond the initial update. We provide ongoing support and maintenance to ensure your website remains secure, optimized, and aligned with your practice's growth objectives. This continuous improvement approach guarantees that your online presence evolves with the changing digital landscape, keeping your practice at the forefront of patient engagement and technological advancements.
We are excited about the opportunity to partner with you in enhancing your dental practice's online presence.`;
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
