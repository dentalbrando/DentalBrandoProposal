"use client";
import {
  setFunctionalities,
  setOverviews,
  setWebsiteCMSs,
} from "@app/store/aboutYourProject";
import {
  setCurrency,
  setDiscount,
  setService,
  setTerms,
} from "@app/store/budget";
import { setClientName, setLetterText } from "@app/store/coverLetterSlice";
import {
  setCompanyAddress,
  setCompanyLogo,
  setCompanyName,
  setCompanyPhoneNumber,
  setIssueDate,
  setProjectTitle,
  setSubHeading,
  setValidDate,
} from "@app/store/coverPageSlice";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { setPage, updatePage } from "@app/store/pageSclice";
import Loader from "@components/Loader";
import Nav from "@components/Nav";
import { FaSearch } from "react-icons/fa";

function Proposal() {
  let router = useRouter();
  let dispatch = useDispatch();
  let [proposalData, setProposalData] = useState();
  let [loading, setLoading] = useState(false);
  let [isVerified, setIsVerified] = useState(true);
  let [multiplier, setMultiplier] = useState(0);
  let [buttonArray, setButtonArray] = useState();
  let [firstButton, SetFirstButton] = useState(0);
  let [secondButton, SetSecondButton] = useState(1);
  let [dotButton, SetdotButton] = useState(2);
  let [searchQuery, SetSearchQuery] = useState("");
  let [searchData, setSearchData] = useState();
  let limit = 8;

  useEffect(() => {
    if (isVerified === false) {
      router.push("/");
    }
    async function getData() {
      try {
        setLoading(true);
        let { data } = await axios.get("/api/proposal");
        setProposalData(data.proposalData);
      } catch (er) {
        console.log(er);
      } finally {
        setLoading(false);
      }
    }
    if (isVerified === true) {
      getData();
    }

    async function verifyTokenApi() {
      try {
        await axios.get("/api/verifyToken");
        setIsVerified(true);
      } catch (err) {
        setIsVerified(false);
      }
    }
    verifyTokenApi();
  }, [isVerified]);

  if (proposalData && !buttonArray) {
    setButtonArray(Array(Math.ceil(proposalData.length / limit)).fill(null));
  }
  function regenerate(key) {
    dispatch(
      setFunctionalities(proposalData[key].aboutYourProject.functionality)
    );
    dispatch(setOverviews(proposalData[key].aboutYourProject.overview));
    dispatch(setWebsiteCMSs(proposalData[key].aboutYourProject.websiteCMS));
    dispatch(setService(proposalData[key].budget.service));
    dispatch(setDiscount(proposalData[key].budget.discount));
    dispatch(setCurrency(proposalData[key].budget.currency));
    dispatch(setTerms(proposalData[key].budget.terms));
    dispatch(setLetterText(proposalData[key].cover_letter.letterText));
    dispatch(setClientName(proposalData[key].cover_letter.clientName));
    dispatch(setSubHeading(proposalData[key].cover_page.subHeading));
    dispatch(setProjectTitle(proposalData[key].cover_page.projectTitle));
    dispatch(
      setCompanyPhoneNumber(proposalData[key].cover_page.companyPhoneNumber)
    );
    dispatch(setCompanyAddress(proposalData[key].cover_page.companyAddress));
    dispatch(setCompanyName(proposalData[key].cover_page.companyName));
    dispatch(setIssueDate(proposalData[key].cover_page.issueDate));
    dispatch(setValidDate(proposalData[key].cover_page.validDate));
    dispatch(setCompanyLogo(proposalData[key].cover_page.companyLogo));
    dispatch(updatePage(100));
    router.push("/");
  }
  function searchFunction(e) {
    if (e.target.value) {
      let searchResult = proposalData.filter((item) => {
        return (
          item.cover_letter.clientName
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          item.cover_page.projectTitle
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          item.cover_page.companyName
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          item.cover_page.issueDate
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          item.cover_page.validDate
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        );
      });
      if (!e.target.value.trim()) {
        setSearchData(null);
      } else {
        setSearchData(searchResult);
      }
      console.log(searchData);
    } else {
      setSearchData(null);
    }
  }

  return (
    <>
      {loading || isVerified === undefined ? (
        <div className="w-fit m-auto py-24">
          <Loader />
        </div>
      ) : (
        // <div className="flex flex-col">
        //   <Nav />

        <div className="p-10">
          <h1 className="text-4xl font-bold text-tableBlueColor">
            Proposal Table
          </h1>
          <div className="flex flex-col">
            <div className="flex-end">
              <div className="w-fit flex justify-end items-center py-5">
                <input
                  className="w-full ps-4 pe-11 py-2 search-placehoder table-border rounded-md text-md"
                  placeholder="Search..."
                  onChange={(e) => {
                    searchFunction(e);
                  }}
                />
                <FaSearch className="absolute me-5" />
              </div>
            </div>

            <div className="tableDiv">
              <table className="table-border w-fit mx-auto">
                <thead className="thead">
                  <tr className="">
                    <th className="th-border text-center text-lg text-lg py-2 w-[100px]">
                      No.
                    </th>
                    <th className="th-border text-center text-lg text-lg py-2 w-[180px]">
                      Client Name
                    </th>
                    <th className="th-border text-center text-lg text-lg py-2 w-[200px]">
                      Project Title
                    </th>
                    <th className="th-border text-center text-lg text-lg py-2 w-[220px]">
                      Company Name
                    </th>
                    <th className="th-border text-center text-lg text-lg py-2 w-[170px]">
                      Issue Date
                    </th>
                    <th className="th-border text-center text-lg text-lg py-2 w-[170px]">
                      Valid Date
                    </th>
                    <th className="last-th-border text-center text-lg text-lg py-2 w-[200px] flex justify-center">
                      Action
                    </th>
                  </tr>
                </thead>

                {searchData ? (
                  <tbody>
                    {searchData
                      ? searchData.map((item, key) => (
                          <tr key={key} className="tr-border">
                            {key >= multiplier * limit &&
                            key < limit * (multiplier + 1) &&
                            searchData[key] ? (
                              <>
                                <td className="td-border text-center py-4 text-lg w-[100px]">
                                  {key < 9 ? "0" : null}
                                  {key + 1}
                                </td>
                                <td className="td-border text-center py-4 text-lg w-[180px]">
                                  {item.cover_letter.clientName}
                                </td>
                                <td className="td-border text-center py-4 text-lg w-[200px]">
                                  {item.cover_page.projectTitle}
                                </td>
                                <td className="td-border text-center py-4 text-lg w-[220px]">
                                  {item.cover_page.companyName}
                                </td>
                                <td className="td-border text-center py-4 text-lg w-[170px]">
                                  {item.cover_page.issueDate}
                                </td>
                                <td className="td-border text-center py-4 text-lg w-[170px]">
                                  {item.cover_page.validDate}
                                </td>
                                <td className="text-center text-lg px-0 w-[200px]">
                                  <button
                                    onClick={() => {
                                      regenerate(key);
                                    }}
                                    className="text-white bg-tableBlueColor px-4 py-[0.25rem] my-0 mx-6 rounded-lg"
                                  >
                                    Regenerate PDF
                                  </button>
                                </td>
                              </>
                            ) : null}
                          </tr>
                        ))
                      : null}
                  </tbody>
                ) : (
                  <tbody>
                    {proposalData
                      ? proposalData.map((item, key) => (
                          <tr key={key} className="tr-border">
                            {key >= multiplier * limit &&
                            key < limit * (multiplier + 1) &&
                            proposalData[key] ? (
                              <>
                                <td className="td-border text-center py-4 text-lg w-[100px]">
                                  {key < 9 ? "0" : null}
                                  {key + 1}
                                </td>
                                <td className="td-border text-center py-4 text-lg w-[180px]">
                                  {item.cover_letter.clientName}
                                </td>
                                <td className="td-border text-center py-4 text-lg w-[200px]">
                                  {item.cover_page.projectTitle}
                                </td>
                                <td className="td-border text-center py-4 text-lg w-[220px]">
                                  {item.cover_page.companyName}
                                </td>
                                <td className="td-border text-center py-4 text-lg w-[170px]">
                                  {item.cover_page.issueDate}
                                </td>
                                <td className="td-border text-center py-4 text-lg w-[170px]">
                                  {item.cover_page.validDate}
                                </td>
                                <td className="text-center text-lg px-0 w-[200px]">
                                  <button
                                    onClick={() => {
                                      regenerate(key);
                                    }}
                                    className="text-white bg-tableBlueColor px-4 py-[0.25rem] my-0 mx-6 rounded-lg"
                                  >
                                    Regenerate PDF
                                  </button>
                                </td>
                              </>
                            ) : null}
                          </tr>
                        ))
                      : null}
                  </tbody>
                )}
              </table>
            </div>

            {proposalData ? (
              <div className="flex-end py-5">
                <div className="ms-5">
                  <button
                    className={`px-2 text-lg ${
                      multiplier <= 0 ? "text-gray-400" : "text-tableBlueColor"
                    }`}
                    onClick={() => {
                      setMultiplier(multiplier - 1);
                      SetFirstButton(firstButton - 1);
                      SetSecondButton(secondButton - 1);
                      if (dotButton !== buttonArray.length - 2) {
                        SetdotButton(dotButton - 1);
                      }
                    }}
                    disabled={multiplier <= 0 ? true : false}
                  >
                    Prev
                  </button>

                  {buttonArray
                    ? buttonArray.map((item, key) =>
                        key === firstButton ? (
                          <button
                            key={key}
                            className={`px-2 text-lg ${
                              multiplier === key
                                ? "text-tableBlueColor"
                                : "text-black"
                            }`}
                            onClick={() => {
                              setMultiplier(key);
                              console.log(key);
                            }}
                          >
                            {firstButton + 1}
                          </button>
                        ) : key === secondButton ? (
                          <button
                            key={key}
                            className={`px-2 text-lg ${
                              multiplier === key
                                ? "text-tableBlueColor"
                                : "text-black"
                            }`}
                            onClick={() => {
                              setMultiplier(key);
                              console.log(key);
                            }}
                          >
                            {secondButton + 1}
                          </button>
                        ) : key === dotButton ? (
                          <button
                            key={key}
                            className={`px-2 text-lg ${
                              multiplier === key
                                ? "text-tableBlueColor"
                                : "text-black"
                            }`}
                            onClick={() => {
                              setMultiplier(key);
                              SetFirstButton(firstButton + 2);
                              SetSecondButton(secondButton + 2);
                              SetdotButton(dotButton + 2);
                            }}
                          >
                            ...
                          </button>
                        ) : key === buttonArray.length - 1 ? (
                          <button
                            key={key}
                            className={`px-2 text-lg ${
                              multiplier === key
                                ? "text-tableBlueColor"
                                : "text-black"
                            }`}
                            onClick={() => {
                              setMultiplier(key);
                              console.log(key);
                            }}
                          >
                            {key + 1}
                          </button>
                        ) : null
                      )
                    : null}

                  <button
                    className={`px-2 text-lg ${
                      multiplier >= proposalData.length / limit - 1
                        ? "text-gray-400"
                        : "text-tableBlueColor"
                    }`}
                    onClick={() => {
                      setMultiplier(multiplier + 1);
                      SetFirstButton(firstButton + 1);
                      SetSecondButton(secondButton + 1);
                      if (dotButton !== buttonArray.length - 2) {
                        SetdotButton(dotButton + 1);
                      }
                    }}
                    disabled={
                      multiplier >= proposalData.length / limit - 1
                        ? true
                        : false
                    }
                  >
                    Next
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        // </div>
      )}
    </>
  );
}
export default Proposal;
