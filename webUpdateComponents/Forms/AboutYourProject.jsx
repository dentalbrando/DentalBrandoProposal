import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentTextR,
  setFunctionalities,
  setOverviews,
  setUpdateCurrentR,
  setWebsiteCMSs,
} from "@app/store/aboutYourProjectUpdate";

const AboutYourProject = () => {
  const overviews = useSelector(
    (state) => state.aboutYourProjectUpdate.overview
  );
  const functionalities = useSelector(
    (state) => state.aboutYourProjectUpdate.functionality
  );
  const websiteCMSs = useSelector(
    (state) => state.aboutYourProjectUpdate.websiteCMS
  );
  const updateCurrent = useSelector(
    (state) => state.aboutYourProjectUpdate.updateCurrent
  );
  console.log(updateCurrent);
  const [overview, setOverview] = useState(
    overviews == ""
      ? `We have conducted a thorough audit of your current website, benchmarking it against top dental websites in your area known for high patient engagement. Our findings reveal several critical areas that require immediate attention to enhance your online presence and patient interaction.`
      : overviews
  );
  const [functionality, setFunctionality] = useState(
    functionalities == ""
      ? `Our website update services for dental practices tackle critical issues affecting your online presence and user engagement. We'll modernize your website's design to meet industry standards, ensuring it's visually appealing and professional. Clear calls-to-action (CTAs) enhance navigation and conversion rates. Speed optimization techniques improve loading times and reduce bounce rates. Optimizing meta tags, headers, and content boosts search engine visibility, attracting and retaining local patients. Prioritizing mobile responsiveness ensures a seamless, intuitive experience across all devices, enhancing accessibility and engagement.`
      : functionalities
  );
  const [updateCurrentName, setUpdateCurrentName] = useState(updateCurrent);
  const [updateCurrentText1, setUpdateCurrentText1] = useState(
    "We propose updating your current WordPress website while retaining its familiar content management system (CMS). By rebuilding from scratch, we ensure a fresh design and enhanced functionality tailored to your dental practice's needs. WordPress offers user-friendly management, extensive customization with themes and plugins, built-in SEO capabilities, and scalability."
  );
  const [updateCurrentText2, setUpdateCurrentText2] = useState(`Shopify Text`);
  const [updateCurrentText3, setUpdateCurrentText3] = useState(`Drupal Text`);
  const [updateCurrentText4, setUpdateCurrentText4] = useState(`Custom Test`);
  const [websiteCMS, setWebsiteCMS] = useState(
    websiteCMSs == ""
      ? `<b>Outdated Design:</b> Your website's design does not reflect current industry standards, potentially impacting user perception and engagement.
<b>Lack of Clear Calls-to-Action (CTAs):</b> Important actions like appointment scheduling and contacting your practice are not prominently displayed, hindering navigation and conversion rates.
<b>Speed Optimization:</b> The website's loading speed is suboptimal, leading to potential user frustration and increased bounce rates.
<b>On-Page SEO Deficiencies:</b> Critical elements such as meta tags, headers, and content optimization are not effectively implemented, reducing visibility in search engine results.
<b>Mobile Responsiveness:</b> The website may not provide an optimal experience on mobile devices, limiting accessibility for a significant portion of your audience.`
      : websiteCMSs
  );
  const dispatch = useDispatch();

  const handleSaveAboutYourProject = () => {
    dispatch(setOverviews(overview.replace(/\n/g, "<p class = 'py-1'></p>")));
    dispatch(
      setFunctionalities(functionality.replace(/\n/g, "<p class = 'py-1'></p>"))
    );
    dispatch(
      setWebsiteCMSs(websiteCMS.replace(/\n/g, "<p class = 'py-1'></p>"))
    );
    dispatch(setUpdateCurrentR(updateCurrentName));
    dispatch(setCurrentTextR(updateCurrentName));
  };
  useEffect(() => {
    handleSaveAboutYourProject();
  }, [overview, functionality, websiteCMS, updateCurrentName]);

  const textareaRef = useRef();

  let [currentText, setCurrentText] = useState("");

  return (
    <div className="overflow-y-visible custom-scroll mt-5 h-fit custom-bg w-[900px] py-12 px-12 rounded-2xl border-2 border-color">
      <div>
        <div className="flex justify-center flex-col my-5">
          <label className="text-gray-900 text-[16px] font-medium my-2 ">
            Overview & Goals
          </label>
          <textarea
            cols={"auto"}
            onChange={(e) => setOverview(e.target.value)}
            rows="5"
            className="text-gray-900 text-[16px] p-2 rounded-md font-normal outline-none resize-none border-2 border-color"
            // className="text-gray-900 3xl:text-2xl text-lg p-2 rounded-md font-normal outline-none resize-none"
            // defaultValue={overview.trim().replace(/<p\s*[^>]*>/g, '\n').replace(/<\/p>/g, '')}
          >
            {overview
              .trim()
              .replace(/<p\s*[^>]*>/g, "\n")
              .replace(/<\/p>/g, "")}
          </textarea>
        </div>
        <div className="flex justify-center flex-col my-5">
          <label className="text-gray-900 text-[16px] font-medium my-2">
            Key Features and Functionality
          </label>
          <textarea
            placeholder="Add (>)  to add tick sign before the line"
            onChange={(e) => setFunctionality(e.target.value)}
            rows="5"
            className="text-gray-900 text-[16px] p-2 rounded-md font-normal outline-none resize-none border-2 border-color"
            // className="text-gray-900 3xl:text-2xl text-lg p-2 rounded-md font-normal outline-none resize-none"
            // defaultValue={functionality.trim().replace(/<p\s*[^>]*>/g, '\n').replace(/<\/p>/g, '')}
          >
            {functionality
              .trim()
              .replace(/<p\s*[^>]*>/g, "\n")
              .replace(/<\/p>/g, "")}
          </textarea>
        </div>
        <div className="flex justify-center flex-col my-5">
          <div className="flex justify-between items-center">
            <label className="text-gray-900 text-[16px] font-medium my-2">
              Website Issues Identified
            </label>
          </div>
          <textarea
            ref={textareaRef}
            placeholder="Add (>)  to add tick sign before the line"
            onChange={(e) => setWebsiteCMS(e.target.value)}
            rows="5"
            className="text-gray-900 text-[16px] p-2 rounded-md font-normal outline-none resize-none border-2 border-color"
          >
            {websiteCMS
              .trim()
              .replace(/<p\s*[^>]*>/g, "\n")
              .replace(/<\/p>/g, "")}
          </textarea>
        </div>
        <div className="flex justify-center flex-col my-5">
          <div className="flex justify-between items-center">
            <label className="text-gray-900 text-[16px] font-medium my-2">
              Updating Your Current WordPress Website
            </label>
            <div className="flex items-center gap-3">
              <select
                className="py-2 px- rounded-none text-white mx-1 bg-main-blue font-medium text-[12px] my-3"
                onChange={(e) => setUpdateCurrentName(e.target.value)}
              >
                <option value="WordPress" className="text-[12px]">
                  WordPress
                </option>
                <option value="Shopify" className="text-[12px]">
                  Shopify
                </option>
                <option value="Drupal" className="text-[12px]">
                  Drupal
                </option>
                <option value="Custom" className="text-[12px]">
                  Custom
                </option>
              </select>
            </div>
          </div>
          <textarea
            rows={5}
            className="text-gray-900 text-[16px] p-2 rounded-md font-normal outline-none resize-none border-2 border-color"
            onChange={() => setCurrentText(e.target.value)}
          >
            {updateCurrentName === "Custom"
              ? updateCurrentText4
              : updateCurrentName === "Shopify"
              ? updateCurrentText2
              : updateCurrentName === "Drupal"
              ? updateCurrentText3
              : updateCurrentText1}
          </textarea>
        </div>
      </div>
    </div>
  );
};

export default AboutYourProject;
