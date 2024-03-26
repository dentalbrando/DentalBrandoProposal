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
import { getCookies, verifyToken } from "@app/registration/auth";
import Loader from "@components/Loader";

function Proposal() {
  let router = useRouter();
  let dispatch = useDispatch();
  let [proposalData, setProposalData] = useState();
  let [loading, setLoading] = useState(true);
  const [isVerified, setIsVerified] = useState(undefined);
  let tokenFromCookie = getCookies();

  useEffect(() => {
    setIsVerified(verifyToken(tokenFromCookie));
    if (isVerified === false) {
      router.push("/");
    }
    async function getData() {
      try {
        setLoading(true);
        let { data } = await axios.get("/api/proposal");
        setProposalData(data.proposalData);
      } finally {
        setLoading(false);
      }
    }
    if (isVerified === true) {
      getData();
    }
  }, [isVerified]);
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

  return (
    <>
      {loading || isVerified === undefined ? (
        <div className="w-fit m-auto py-24">
          <Loader />
        </div>
      ) : (
        <div className="p-10 h-screen">
          <h1 className="head_text">Proposal Table</h1>
          <div style={{ overflow: "auto" }} className="custom-bg h-[80%]">
            <table className="border-collapse border border-slate-500">
              <thead>
                <tr>
                  <th className="border border-slate-600 text-gray-900 text-lg custom-bg text-lg py-2">
                    Client Name
                  </th>
                  <th className="border border-slate-600 text-gray-900 text-lg custom-bg text-lg py-2">
                    Project Title
                  </th>
                  <th className="border border-slate-600 text-gray-900 text-lg custom-bg text-lg py-2">
                    Company Name
                  </th>
                  <th className="border border-slate-600 text-gray-900 text-lg custom-bg text-lg py-2">
                    Company Address
                  </th>
                  <th className="border border-slate-600 text-gray-900 text-lg custom-bg text-lg py-2">
                    Company Phone
                  </th>
                  <th className="border border-slate-600 text-gray-900 text-lg custom-bg text-lg py-2">
                    Issue Date
                  </th>
                  <th className="border border-slate-600 text-gray-900 text-lg custom-bg text-lg py-2">
                    Valid Date
                  </th>
                  <th className="border border-slate-600 text-gray-900 text-lg custom-bg text-lg py-2">
                    Subheading
                  </th>
                  <th className="border border-slate-600 text-gray-900 text-lg custom-bg text-lg py-2">
                    Cover Letter
                  </th>
                  <th className="border border-slate-600 text-gray-900 text-lg custom-bg text-lg py-2">
                    Overview
                  </th>
                  <th className="border border-slate-600 text-gray-900 text-lg custom-bg text-lg py-2">
                    Functionality
                  </th>
                  <th className="border border-slate-600 text-gray-900 text-lg custom-bg text-lg py-2">
                    Website CMS
                  </th>
                  <th className="border border-slate-600 text-gray-900 text-lg custom-bg text-lg py-2">
                    Terms & Conditions
                  </th>
                  <th
                    className="border border-slate-600 text-gray-900 text-lg"
                    custom-bg
                  >
                    Page Sequence
                  </th>
                  <th
                    className="border border-slate-600 text-gray-900 text-lg"
                    custom-bg
                  >
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {proposalData
                  ? proposalData.map((item) => (
                      <tr key={item._id}>
                        <td className="border border-slate-600 text-gray-900 text-lg custom-bg font-semibold">
                          <div className="tdInnerDiv">
                            {item.cover_letter.clientName}
                          </div>
                        </td>
                        <td className="border border-slate-600 text-gray-900 text-lg">
                          <div className="tdInnerDiv">
                            {item.cover_page.projectTitle}
                          </div>
                        </td>
                        <td className="border border-slate-600 text-gray-900 text-lg">
                          <div className="tdInnerDiv">
                            {item.cover_page.companyName}
                          </div>
                        </td>
                        <td className="border border-slate-600 text-gray-900 text-lg">
                          <div className="tdInnerDiv">
                            {item.cover_page.companyAddress}
                          </div>
                        </td>
                        <td className="border border-slate-600 text-gray-900 text-lg">
                          <div className="tdInnerDiv">
                            {item.cover_page.companyPhoneNumber}
                          </div>
                        </td>
                        <td className="border border-slate-600 text-gray-900 text-lg">
                          <div className="tdInnerDiv">
                            {item.cover_page.issueDate}
                          </div>
                        </td>
                        <td className="border border-slate-600 text-gray-900 text-lg">
                          <div className="tdInnerDiv">
                            {item.cover_page.validDate}
                          </div>
                        </td>
                        <td className="border border-slate-600 text-gray-900 text-lg">
                          <div className="tdInnerDiv">
                            {item.cover_page.subHeading}
                          </div>
                        </td>
                        <td className="border border-slate-600 text-gray-900 text-lg">
                          <div className="tdInnerDiv">
                            {item.cover_letter.letterText}
                          </div>
                        </td>
                        <td className="border border-slate-600 text-gray-900 text-lg">
                          <div className="tdInnerDiv">
                            {item.aboutYourProject.overview}
                          </div>
                        </td>
                        <td className="border border-slate-600 text-gray-900 text-lg">
                          <div className="tdInnerDiv">
                            {item.aboutYourProject.functionality}
                          </div>
                        </td>
                        <td className="border border-slate-600 text-gray-900 text-lg">
                          <div className="tdInnerDiv">
                            {item.aboutYourProject.websiteCMS}
                          </div>
                        </td>
                        <td className="border border-slate-600 text-gray-900 text-lg">
                          <div className="tdInnerDiv">
                            {item.budget &&
                              item.budget.terms.map((item2, key) => (
                                <li key={key} className="text-start">
                                  {item2}
                                </li>
                              ))}
                          </div>
                        </td>
                        <td className="border border-slate-600 text-gray-900 text-lg">
                          <div className="tdInnerDiv">
                            {item.pageSequence &&
                              item.pageSequence.pageSequence.map(
                                (item2, key) => (
                                  <li key={key} className="text-start">
                                    {item2.content}
                                  </li>
                                )
                              )}
                          </div>
                        </td>
                        <td className="border border-slate-600 text-gray-900 text-lg">
                          <div className="tdInnerDiv">{item.date}</div>
                        </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          </div>

          <div className="flex justify-center p-1 text-xl">
            <div className="custom-bg flex justify-center items-center w-fit rounded-2xl">
              <button className="custom-bg bg-white* px-7 py-2 flex justify-center items-center">
                back
              </button>
              <button className="custom-bg bg-white* px-7 py-2 flex justify-center items-center">
                1
              </button>
              <button className="custom-bg bg-white* px-7 py-2 flex justify-center items-center">
                2
              </button>
              <button className="custom-bg bg-white* px-7 py-2 flex justify-center items-center">
                3
              </button>
              <button className="custom-bg bg-white* px-7 py-2 flex justify-center items-center">
                next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Proposal;
