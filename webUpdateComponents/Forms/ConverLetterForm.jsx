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
    var tempLetterText = `Welcome to Dental Brando, where we specialize in enhancing dental practices through cutting-edge website updates. As a prominent IT company, we are committed to significantly improving the online professionalism and patient engagement of your dental practice. Our mission is to deliver a standout website that not only captures attention but also serves as a pivotal tool for the growth and success of your practice.
Our tailored website update services are designed to transform your current online presence into a powerful tool for growth. We offer innovative solutions that ensure your website not only looks exceptional but also functions seamlessly to meet the evolving needs of your patients. With a focus on both aesthetics and functionality, we create websites that leave a lasting impression on your visitors while enhancing their user experience.
At Dental Brando, we understand the importance of a website that not only reflects your unique brand but also drives results. Our team of experts will collaborate closely with you to deliver a customized update that aligns perfectly with your practice's goals and values. We take the time to understand your specific needs and preferences, ensuring that the final product is a true reflection of your practice and its mission.
From improved navigation to enhanced user experience, our updates will make it effortless for patients to connect with your practice, access information, and schedule appointments. We implement strategic features that simplify the user journey and make your website an efficient tool for patient engagement. Our goal is to make it easy for patients to find what they need and to take the next steps in their dental care journey with confidence.
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
                  textareaRef.current.value = `Welcome to Dental Brando, where we specialize in enhancing dental practices through cutting-edge website updates. As a prominent IT company, we are committed to significantly improving the online professionalism and patient engagement of your dental practice. Our mission is to deliver a standout website that not only captures attention but also serves as a pivotal tool for the growth and success of your practice.
Our tailored website update services are designed to transform your current online presence into a powerful tool for growth. We offer innovative solutions that ensure your website not only looks exceptional but also functions seamlessly to meet the evolving needs of your patients. With a focus on both aesthetics and functionality, we create websites that leave a lasting impression on your visitors while enhancing their user experience.
At Dental Brando, we understand the importance of a website that not only reflects your unique brand but also drives results. Our team of experts will collaborate closely with you to deliver a customized update that aligns perfectly with your practice's goals and values. We take the time to understand your specific needs and preferences, ensuring that the final product is a true reflection of your practice and its mission.
From improved navigation to enhanced user experience, our updates will make it effortless for patients to connect with your practice, access information, and schedule appointments. We implement strategic features that simplify the user journey and make your website an efficient tool for patient engagement. Our goal is to make it easy for patients to find what they need and to take the next steps in their dental care journey with confidence.
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
