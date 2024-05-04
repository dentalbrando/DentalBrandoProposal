"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setClientName, setLetterText } from "@app/store/CoverLetterSeo";
import Select from "react-select";
const CoverLetterForm = () => {
  const dispatch = useDispatch();
  let coverLetterSeo = useSelector((state) => state.cover_letterSeo);
  const [clientName, setclientName] = useState(coverLetterSeo.clientName);
  const [letterType, setletterType] = useState("Seo");

  if (coverLetterSeo.letterText === "") {
    var tempLetterText = `Thank you for considering Soft Enterprise for your Search Engine Optimization project. We welcome the opportunity to discuss your SEO project in more detail. We want to provide a customized plan tailored to your business requirements and help you elevate your online visibility.
<p class = 'py-1'></p>
Soft Enterprise specializes in creating customized Search Engine Optimization strategies tailored to the unique needs of our clients. The most popular search engines, like Google, Yahoo, and Bing, are used globally to search for the desired businesses, products, and services. Businesses use it to target their audiences to sell their products and services. As search engines emerged, so did the idea of using divergent platforms to advertise and reach out to different cohorts of target audiences. We leverage Search Engine to market the products and services of our clients in their niche by micro-targeting audiences with our expertise.
<p class = 'py-1'></p>
We will work closely with you to understand your Search Engine Optimization goals. Then, we will craft comprehensive strategies that align with your project goals, your brand identity, and how they provide value to your target audience. We manage your entire brand reputation to make your brand image consistent. We will update you on our SEO efforts with clear and detailed performance reports from advanced analytical tools indicating Key Performance Indicators. 
<p class = 'py-1'></p>
We fulfill your project goals through open communication, scheduled meetings, and reporting sessions. We are committed to upholding the highest level of professionalism in our services and value our project partnerships to maintain your project's exclusivity. 
<p class = 'py-1'></p>
We are excited at the prospect of working with you to create a cohesive brand presence for your business on popular Search Engines, helping you succeed in the era of digitalization. Please reach out to schedule a consultation at your earliest convenience.
<p class = 'py-1'></p>
Sincerely,`;

  } else {
    var tempLetterText = coverLetterSeo.letterText;
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
    { value: "Seo", label: "Seo" },
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
                  value={coverLetterSeo.clientName}
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
