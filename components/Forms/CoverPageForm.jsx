import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
  setSubHeading,
  setProjectTitle,
  setCompanyPhoneNumber,
  setCompanyAddress,
  setCompanyName,
  setIssueDate,
  setValidDate,
  setCompanyLogo,
} from "@app/store/coverPageSlice";
import TextInput from "../TextInput";
import { setPopup } from "@app/store/popup";

const CoverPageForm = () => {
  const dispatch = useDispatch();
  const coverPage = useSelector((state) => state.cover_page);
  // Local state to track input values
  const [subHeading, setSubHeadingLocal] = useState(
    coverPage.subHeading == ""
      ? "A comprehensive website transfer proposal to enhance the professionalism of your business."
      : coverPage.subHeading
  );
  const [projectTitle, setProjectTitleLocal] = useState(coverPage.projectTitle);
  const [companyPhoneNumber, setCompanyPhoneNumberLocal] = useState(
    coverPage.companyPhoneNumber
  );
  const [companyAddress, setCompanyAddressLocal] = useState(
    coverPage.companyAddress
  );
  const [companyName, setCompanyNameLocal] = useState(coverPage.companyName);
  const [issueDate, setIssueDateLocal] = useState(coverPage.issueDate);
  const [validDate, setValidDateLocal] = useState(coverPage.validDate);
  const [companyLogo, setCompanyLogoLocal] = useState(
    coverPage.companyLogo || null
  );

  const handleSave = () => {
    // Dispatch actions to save the data
    dispatch(setSubHeading(subHeading));
    dispatch(setProjectTitle(projectTitle));
    dispatch(setCompanyPhoneNumber(companyPhoneNumber));
    dispatch(setCompanyAddress(companyAddress));
    dispatch(setCompanyName(companyName));
    dispatch(setIssueDate(issueDate.split("-").reverse().join("-")));
    dispatch(setValidDate(validDate.split("-").reverse().join("-")));
    dispatch(setCompanyLogo(companyLogo));
  };
  useEffect(() => {
    handleSave();
  }, [
    subHeading,
    projectTitle,
    companyPhoneNumber,
    companyAddress,
    companyName,
    issueDate,
    validDate,
    companyLogo,
  ]);
  const handleLogoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataURL = e.target.result;
        dispatch(setCompanyLogo({ string: dataURL, name: file.name }));
        setCompanyLogoLocal({ string: dataURL, name: file.name });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col justify-between">
      <div className="my-5 flex justify-center items-center">
        <TextInput
          length="full"
          label="Sub Heading"
          placeholder="Enter Sub Heading"
          value={subHeading}
          onChange={(event) => {
            setSubHeadingLocal(event.target.value);
          }}
        />
      </div>

      <div className="my-5 flex justify-center items-center">
        <TextInput
          length="full"
          label="Project Title"
          placeholder="Enter Project Title"
          value={projectTitle}
          onChange={(event) => {
            setProjectTitleLocal(event.target.value);
          }}
        />
      </div>

      <div className="my-5 flex justify-center items-center">
        <TextInput
          length="half"
          label="Company Number"
          placeholder="000 000 0000"
          value={companyPhoneNumber}
          onChange={(event) => {
            setCompanyPhoneNumberLocal(event.target.value);
          }}
        />

        <TextInput
          length="half"
          secondInput={true}
          label="Address"
          placeholder="Company Address Here"
          value={companyAddress}
          onChange={(event) => {
            setCompanyAddressLocal(event.target.value);
          }}
        />
      </div>
      <div className="my-5 flex justify-center items-center">
        <TextInput
          length="full"
          label="Company Name"
          placeholder="Company Name Here"
          value={companyName}
          onChange={(event) => {
            setCompanyNameLocal(event.target.value);
          }}
        />
      </div>
      <div className="my-5 flex justify-center items-center">
        <TextInput
          length="half"
          label="Issue Date"
          type="date"
          value={issueDate}
          onChange={(event) => {
            setIssueDateLocal(event.target.value);
          }}
        />

        <TextInput
          length="half"
          secondInput={true}
          label="Valid Date"
          type="date"
          value={validDate}
          onChange={(event) => {
            setValidDateLocal(event.target.value);
          }}
        />
      </div>
      <div className="flex flex-start my-5 w-[100%]">
        <label className="text-gray-900 3xl:text-2xl text-[16px] font-medium my-2 w-[20%]">
          Upload Logo
        </label>
        <div className="flex flex-start items-cetner w-[75]">
          <div className="w-[70px] h-[70px] absolute overflow-hidden opacity-0">
            <input
              type="file"
              onChange={handleLogoChange}
              className="w-[100px] h-[100px] text-[14px] font-normal"
            />
          </div>
          <div className="w-[70px] h-[70px] bg-white rounded-xl text-main-blue text-[16px] font-medium flex items-center justify-center border-2 border-color">
            {coverPage.companyLogo?.name || companyLogo?.name ? (
              <div className="bg-yellow-200">
                <img
                  className="w-[100%] h-[100%]"
                  src={
                    !companyLogo.string
                      ? coverPage.companyLogo.string
                      : companyLogo.string
                  }
                  alt=""
                />
              </div>
            ) : (
              "Logo"
            )}
          </div>
        </div>
        <button
          type="button"
          className="py-2 px-4 rounded-xl text-white mx-4 bg-main-blue font-medium text-[12px]"
          onClick={() => {
            dispatch(setCompanyLogo(null));
            setCompanyLogoLocal(null);
          }}
        >
          Remove
        </button>
      </div>
      {/* <div className="flex-center m-6">
                <button onClick={handleSave} className="button w-32 h-10 text-center  rounded-2xl">
                    Save
                </button>
            </div> */}
    </div>
  );
};
{
  /* <TextInput
                    length="full"
                    label=""
                    type="file"
                    accept="image/*"
                    border="absolute w-[50px] h-20 cursor-pointer"
                    className="bg-pink-200"
                  /> */
}

export default CoverPageForm;
