"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { setClientName, setLetterText } from "@app/store/CoverLetterSmm";
import Select from "react-select";
const CoverLetterForm = () => {
  const dispatch = useDispatch();
  let coverLetterSmm = useSelector((state) => state.cover_letterSmm);
  const [clientName, setclientName] = useState(coverLetterSmm.clientName);
  const [letterType, setletterType] = useState("Social Media");

  if (coverLetterSmm.letterText === "") {
    var tempLetterText = `We are writing to express our interest in your web development project. As a company with extensive experience in web development and a track record of delivering exceptional results for our clients, we are confident that we would be the ideal partner for your project.
<p class = 'py-1'></p>
<p class = 'py-1'></p>
At Soft Enterprise, we understand that your website is often the first point of contact between your business and your customers. As such, we are committed to migrate your website to the sharepoint.
<p class = 'py-1'></p>
<p class = 'py-1'></p>
Our team of experienced web developers, designers, and project manager work closely with clients to understand their specific needs and requirements. We have expertise in a wide range of technologies including Wordpress, Laravel, Angular, PHP, Share Point, Vue.Js, React, Shopify, Python and more. We are always exploring new and innovative approaches to web development.
<p class = 'py-1'></p>
<p class = 'py-1'></p>
At every stage of the project, we prioritize communication and collaboration to ensure that you are fully involved in the process and the final product meets your expectations. We are dedicated to delivering projects on time and within budget, and we offer going support and maintenance to ensure that your website continues to perform at its best.
<p class = 'py-1'></p>
<p class = 'py-1'></p>
Thank you for considering Soft Enterprise for your web development needs. We are excited at the prospect of working with you and creating a website that will help your business succeed.
<p class = 'py-1'></p>
<p class = 'py-1'></p>
Sincerely,`;
  } else {
    var tempLetterText = coverLetterSmm.letterText;
  }

  const [letterText, setletterText] = useState(tempLetterText);
  const handleSave = () => {
    dispatch(setLetterText(letterText));
    dispatch(setClientName(clientName));
  };

  useEffect(() => {
    handleSave();
  }, [clientName, letterText]);
  const selectOptions = [
    { value: "Socail Media", label: "Social Media" },
    // ...
  ];

  return (
    <div className="overflow-y-visible custom-scroll mt-5 h-fit custom-bg w-[900px] py-12 px-12 rounded-2xl border-2 border-color">
      <div className="">
        <div className="flex justify-center items-start h-fit my-5">
          <div className="w-[100%]">
            <div className="w-full flex justify-between items-center">
              <div className={`flex justify-start items-center w-[100%]`}>
                <label
                  className={`text-gray-900 text-[16px] font-medium pe-10 w-[40%]`}
                >
                  Client Name
                </label>
                <input
                  className={`text-gray-900  text-[14px] font-normal p-2 rounded-md border-2 border-color outline-none rounded-md font-normal border-2 border-color outline-none w-[55%]`}
                  onChange={(e) =>
                    setclientName(
                      e.target.value.charAt(0).toUpperCase() +
                        e.target.value.slice(1)
                    )
                  }
                  value={coverLetterSmm.clientName}
                />
              </div>
              <div className={`flex justify-end items-center w-[100%]`}>
                <label
                  className={`text-gray-900 text-[16px] font-medium pe-10 w-[35%]`}
                >
                  Letter Type
                </label>
                <Select
                  className={`text-gray-900 text-[14px] font-normal rounded-md border-2 border-color outline-none rounded-md font-normal border-2 border-color outline-none w-[55%]`}
                  value={letterType}
                  onChange={(e) => setletterType(e.value)}
                  placeholder={letterType}
                  options={selectOptions}
                ></Select>
              </div>
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
              >
                {letterText
                  .trim()
                  .replace(/<p\s*[^>]*>/g, "\n")
                  .replace(/<\/p>/g, "")}
              </textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterForm;
