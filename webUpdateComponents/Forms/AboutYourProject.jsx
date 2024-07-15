import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFunctionalities,
  setOverviews,
  setWebsiteCMSs,
} from "@app/store/aboutYourProjectUpdate";
import { Droppable } from "@hello-pangea/dnd";

const AboutYourProject = () => {
  const overviews = useSelector((state) => state.aboutYourProjectUpdate.overview);
  const functionalities = useSelector(
    (state) => state.aboutYourProjectUpdate.functionality
  );
  const websiteCMSs = useSelector((state) => state.aboutYourProjectUpdate.websiteCMS);
  const currentWebR = useSelector((state) => state.aboutYourProjectUpdate.websiteCMS);
  const [overview, setOverview] = useState(
    overviews == ""
      ? `We have conducted a thorough audit of your current website, benchmarking it against top dental websites in your area known for high patient engagement. Our findings reveal several critical areas that require immediate attention to enhance your online presence and patient interaction.`
      : overviews
  );
  const [functionality, setFunctionality] = useState(
    functionalities == ""
      ? `Our dental website update services enhance online presence and engagement. We'll modernize your design to meet industry standards, improve navigation with strategic CTAs, and optimize speed for faster loading and lower bounce rates. On-page SEO improvements, including meta tags and headers, boost search visibility, attracting local patients. Mobile responsiveness ensures a seamless experience on all devices.`
      : functionalities
  );
  const [websiteCMS, setWebsiteCMS] = useState(
    websiteCMSs == ""
      ? `<b>Outdated Design:</b> Your website's design does not reflect current industry standards, potentially impacting user perception and engagement.
<b>Lack of Clear Calls-to-Action (CTAs):</b> Important actions like appointment scheduling and contacting your practice are not prominently displayed, hindering navigation and conversion rates.
<b>Speed Optimization:</b> The website's loading speed is suboptimal, leading to potential user frustration and increased bounce rates.
<b>On-Page SEO Deficiencies:</b> Critical elements such as meta tags, headers, and content optimization are not effectively implemented, reducing visibility in search engine results.
<b>Mobile Responsiveness:</b> The website may not provide an optimal experience on mobile devices, limiting accessibility for a significant portion of your audience.`
      : websiteCMSs
  );
  const [currentWeb, setCurrentWeb] = useState(
    websiteCMSs == ""
      ? `From improved navigation to enhanced user experience, our updates will make it effortless for patients to connect with your practice, access information, and schedule appointments. We implement strategic features that simplify the user journey and make your website an efficient tool for patient engagement. Our goal is to make it easy for patients to find what they need and to take the next steps in their dental care journey with confidence.`
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
  };
  useEffect(() => {
    handleSaveAboutYourProject();
  }, [overview, functionality, websiteCMS]);

  const textareaRef = useRef();

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
                onClick={() => {
                  textareaRef.current.value = `We recommend using WordPress as the content management system (CMS) for your website due to its user-friendly interface, extensive customization options, built-in SEO tools, scalability, and robust security features. WordPress allows for easy content updates without technical expertise, making it an ideal platform for managing your website efficiently. WordPress scales easily with you. You can add new features and functionalities through plugins or custom development.`;
                  setWebsiteCMS(textareaRef.current.value);
                }}
              >
                <option value="" className="text-[12px]" >WordPress</option>
                <option value="" className="text-[12px]" >Shopify</option>
                <option value="" className="text-[12px]" >Drupal</option>
                <option value="" className="text-[12px]" >Custom</option>
              </select>

            </div>
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
      </div>
    </div>
  );
};

export default AboutYourProject;