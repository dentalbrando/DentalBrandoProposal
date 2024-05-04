"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setAboutProject } from "@app/store/aboutProjectSmm";

const ProjectObjectiveForm = () => {
  const dispatch = useDispatch();
  let aboutProjectSmm = useSelector(
    (state) => state.about_projectSmm
  ).aboutProject;
  const [aboutProject, setaboutProject] = useState(aboutProjectSmm);
  let tempAbout =
    "Our specialized expertise in Social Media Marketing will enhance your brand’s social media presence. We aim to bring you business by targeting your sophisticated audience interested in the residential apartments of Vista Cornard Tower. We will involve multiples social media platforms, like Facebook, Instagram, LinkedIn, Twitter, Pinterest etc, for marketing your mall and residential apartments. We believe that powerful content creation is the backbone of marketing success, so we will create engaging content that showcases the luxury mall, amenities, and lifestyle offered by you.";
  const handleSave = () => {
    dispatch(setAboutProject(aboutProject));
  };
  useEffect(() => {
    handleSave();
  }, [aboutProject]);
  const selectOptions = [
    { value: "Socail Media", label: "Social Media" },
    // ...
  ];

  return (
    <div className="overflow-y-visible custom-scroll mt-5 h-fit custom-bg w-[900px] py-12 px-12 rounded-2xl border-2 border-color">
      <div>
        <div className="flex justify-center items-start h-fit my-5">
          <div className="w-[100%]">
            <div className="flex justify-start my-10">
              <label className="text-gray-900 text-[16px] font-medium my-2 w-[20%]">
                About Project
              </label>
              <textarea
                cols={"auto"}
                rows="5"
                className={`text-gray-900  text-[14px] font-normal p-2 rounded-md border-2 border-color outline-none rounded-md font-normal border-2 border-color outline-none w-[80%]`}
                onChange={(e) => setaboutProject(e.target.value)}
              >
                {aboutProjectSmm === "default" ? tempAbout : aboutProjectSmm}
              </textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectObjectiveForm;
