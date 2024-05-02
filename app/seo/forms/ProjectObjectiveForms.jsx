"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setAboutProject } from "@app/store/aboutProjectSeo";

const ProjectObjectiveForm = () => {
  const dispatch = useDispatch();
  let aboutProjectSeo = useSelector((state) => state.about_projectSeo).aboutProject;
  const [aboutProject, setaboutProject] = useState(aboutProjectSeo);

  const handleSave = () => {
    dispatch(setAboutProject(aboutProject));
  };

  console.log(aboutProjectSeo);

  useEffect(() => {
    handleSave();
  }, [aboutProject]);
  const selectOptions = [
    { value: "Socail Media", label: "Social Media" },
    // ...
  ];

  return (
    <div className="overflow-y-visible custom-scroll mt-5 h-fit custom-bg w-[900px] py-12 px-12 rounded-2xl border-2 border-color">
      <div className="">
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
                value={aboutProjectSeo}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectObjectiveForm;
