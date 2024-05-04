"use client";
import tick from "@public/assets/TICK-01.svg";
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
    var tempLetterText = `We are writing to express our interest in your Social Media Marketing project. We are a team of professionals who are always busy making businesses successful through Social Media Marketing. We are confident that we can take your online presence and brand visibility to an elevated level with our esteemed Social Media Marketing services.
<p class = 'py-1'></p>
Soft Enterprise specializes in creating customized Social Media strategies tailored to the unique needs of our clients. Social Media acts as a bridge, not only among friends and family but also between businesses and their target. As the social network grew from its emergence, so did the idea to use divergent platforms as a means of advertising and reaching out to different cohorts of target audiences. We leverage Social Media to market the products and services of our clients in their niche by micro-targeting audiences with our expertise.
<p class = 'py-1'></p>
We will work closely with you to understand your Social Media Marketing goals. Then we will craft comprehensive strategies by ensuring that they align with your project goals, your brand identity, and how they provide value to your target audience. We do your complete brand reputation management to make your brand image consistent across all your social media platforms. We will update you on our Social Media Marketing efforts with clear and detailed performance reports from advanced analytical tools indicating Key Performance Indicators. 
<p class = 'py-1'></p>
We fulfill your project goals with open project communication, scheduled meetings, and reporting sessions. We are committed to upholding the highest level of professionalism in our services. We value our project partnerships to maintain the exclusivity of your project. 
<p class = 'py-1'></p>
Thank you for considering Soft Enterprise for your Social Media Marketing needs. We are excited at the prospect of working with you and creating a cohesive social media brand presence for your business to help you succeed in the era of Social Media Marketing. 
<p class = 'py-1'></p>
Sincerely,`;
  } else {
    var tempLetterText = coverLetterSmm.letterText;
  }

  const [letterText, setletterText] = useState(tempLetterText);
  const handleSave = () => {
    dispatch(
      setLetterText(letterText.replace(/\n/g, "<p class = 'py-1'></p>"))
    );
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
