import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFunctionalities,
  setOverviews,
  setWebsiteCMSs,
} from "@app/store/aboutYourProjectUpdate";

const AboutYourProject = () => {
  const overviews = useSelector((state) => state.aboutYourProjectUpdate.overview);
  const functionalities = useSelector(
    (state) => state.aboutYourProjectUpdate.functionality
  );
  const websiteCMSs = useSelector((state) => state.aboutYourProjectUpdate.websiteCMS);
  const [overview, setOverview] = useState(
    overviews == ""
      ? `Create a professional and visually appealing website that reflects the quality and reliability of your dental services.

<b>Increasing Patient Engagement:</b> Provide an easy-to-navigate platform where patients can learn about your services, read testimonials, and contact your practice.

<b>Enhancing Accessibility:</b> Ensure the website is mobile-friendly and responsive, offering a seamless experience on all devices.

<b>Improving SEO and Visibility:</b> Optimize your website to rank higher on search engines, making it easier for potential patients to find you.`
      : overviews
  );
  const [functionality, setFunctionality] = useState(
    functionalities == ""
      ? `Our website development services for dentists include a variety of essential features designed to meet your specific needs. We offer custom design and branding to create a visually appealing and modern website that reflects your practice's unique identity. Detailed service pages will provide comprehensive information about your treatments, accompanied by before-and-after galleries to showcase your work. To enhance patient engagement, we integrate tools such as appointment scheduling systems, patient forms, and live chat functionality for immediate inquiries. The website will be fully responsive and mobile-friendly, ensuring a seamless experience on desktops, tablets, and smartphones. SEO optimization is a key component of our service, ensuring your website ranks well on search engines and attracts local patients in the Miami area.`
      : functionalities
  );
  const [websiteCMS, setWebsiteCMS] = useState(
    websiteCMSs == ""
      ? `We recommend using WordPress as the content management system (CMS) for your website due to its user-friendly interface, extensive customization options, built-in SEO tools, scalability, and robust security features. WordPress allows for easy content updates without technical expertise, making it an ideal platform for managing your website efficiently. WordPress scales easily with you. You can add new features and functionalities through plugins or custom development.`
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
              Website CMS
            </label>
            <div className="flex items-center gap-3">
              <button
                className="py-2 px-4 rounded-xl text-white mx-1 bg-main-blue font-medium text-[12px] my-3"
                onClick={() => {
                  textareaRef.current.value = `We recommend using WordPress as the content management system (CMS) for your website due to its user-friendly interface, extensive customization options, built-in SEO tools, scalability, and robust security features. WordPress allows for easy content updates without technical expertise, making it an ideal platform for managing your website efficiently. WordPress scales easily with you. You can add new features and functionalities through plugins or custom development.`;
                  setWebsiteCMS(textareaRef.current.value);
                }}
              >
                Wordpress
              </button>
              <button
                className="py-2 px-4 rounded-xl text-white mx-1 bg-main-blue font-medium text-[12px] my-3"
                onClick={() => {
                  textareaRef.current.value = `Shopify has been selected to develop this e-commerce website due to its numerous benefits. Shopify is a widely recognized and highly versatile E-Commerce platform that offers many advantages for online store development. The key benefit of Shopify is its user-friendly interface, which allows even non-technical individuals to manage and update website content easily.  Users can effortlessly add, edit, and delete products, images, and other multimedia elements with its intuitive dashboard. It has a range of built-in tools to support E-commerce businesses, including inventory management, order tracking, secure payment gateways, and customizable storefront themes.`;
                  setWebsiteCMS(textareaRef.current.value);
                }}
              >
                Shopify
              </button>
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
