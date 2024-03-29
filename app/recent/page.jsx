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

function Proposal() {
  let router = useRouter();
  let dispatch = useDispatch();
  let [proposalData, setProposalData] = useState();
  let [loading, setLoading] = useState(true);
  const [isVerified, setIsVerified] = useState(undefined);

  useEffect(() => {
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

    async function verifyTokenApi() {
      try {
        await axios.get("/api/verifyToken");
        setIsVerified(true);
      } catch (err) {
        setIsVerified(false);
      }
    }
    verifyTokenApi();

    // verifyToken(setIsVerified);
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
        <div className="flex flex-col gap-9">
          <Nav />
          <div className="px-5 flex justify-center">
            <div className="w-[100%] border rounded-3xl custom-bg shadow-2xl">
              <h1 className="head_text p-2">Proposal Table</h1>
              <div style={{ overflow: "auto" }} className="custom-bg h-[80%]*">
                <table className="border-collapse border border-slate-500">
                  <thead>
                    <tr>
                      <th className="border border-slate-600 text-gray-900 text-lg custom-bg text-lg py-2">
                        No.
                      </th>
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
                        Issue Date
                      </th>
                      <th className="border border-slate-600 text-gray-900 text-lg custom-bg text-lg py-2">
                        Valid Date
                      </th>
                      <th className="border border-slate-600 text-gray-900 text-lg custom-bg text-lg py-2">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {proposalData
                      ? proposalData.map((item, key) => (
                          <tr key={key}>
                            <td className="border border-slate-600 text-gray-900 text-lg">
                              <div className="tdInnerDiv">{key}</div>
                            </td>
                            <td className="border border-slate-600 text-gray-900 text-lg">
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
                                <button>regenerate</button>
                              </div>
                            </td>
                          </tr>
                        ))
                      : null}
                  </tbody>
                </table>
              </div>

              {/* <div className="flex justify-center p-1 text-xl">
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
          </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Proposal;
