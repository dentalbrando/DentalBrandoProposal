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
import {
  setClientName,
  setLetterText,
  setLetterType,
} from "@app/store/coverLetterSlice";
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
import { setSiteMapOverview } from "@app/store/proposedSitemapOverview";
import { setSiteMap } from "@app/store/proposedSitemap";
import { setSiteMap2 } from "@app/store/proposedSitemap2";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { setPage, updatePage } from "@app/store/pageSclice";
import Loader from "@components/Loader";
import Nav from "@components/Nav";
import { FaSearch } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
function Proposal() {
  let router = useRouter();
  let dispatch = useDispatch();
  let [proposalData, setProposalData] = useState();
  let [loading, setLoading] = useState(true);
  let [isVerified, setIsVerified] = useState(undefined);
  let [multiplier, setMultiplier] = useState(0);
  let [multiplierForSearch, setMultiplierForSearch] = useState(0);
  let [buttonArray, setButtonArray] = useState();
  let [searchData, setSearchData] = useState();
  let [userData, setUserData] = useState();
  let [tableLoading, setTableLoading] = useState(true);

  let limit = 8;

  useEffect(() => {
    if (isVerified === false) {
      router.push("/");
    }
    async function getData() {
      try {
        setTableLoading(true);
        let { data } = await axios.get("/api/proposal");
        setProposalData(data.proposalData);
      } catch (er) {
        console.log(er);
      } finally {
        setTableLoading(false);
      }
    }
    async function getUserData() {
      try {
        setLoading(true);
        let { data } = await axios.get("/api/userData");
        setUserData(data.admin);
      } catch (er) {
        console.log(er);
      } finally {
        setLoading(false);
      }
    }

    if (isVerified !== false) {
      getUserData();
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

  function regenerate(key, inSearch) {
    if (inSearch) {
      dispatch(
        setFunctionalities(
          searchData[searchData.length - 1 - key].aboutYourProject.functionality
        )
      );
      dispatch(
        setOverviews(
          searchData[searchData.length - 1 - key].aboutYourProject.overview
        )
      );
      dispatch(
        setWebsiteCMSs(
          searchData[searchData.length - 1 - key].aboutYourProject.websiteCMS
        )
      );
      dispatch(
        setService(searchData[searchData.length - 1 - key].budget.service)
      );
      dispatch(
        setDiscount(searchData[searchData.length - 1 - key].budget.discount)
      );
      dispatch(
        setCurrency(searchData[searchData.length - 1 - key].budget.currency)
      );
      dispatch(setTerms(searchData[searchData.length - 1 - key].budget.terms));
      dispatch(
        setLetterText(
          searchData[searchData.length - 1 - key].cover_letter.letterText
        )
      );
      dispatch(
        setLetterType(
          searchData[searchData.length - 1 - key].cover_letter.letterType
        )
      );

      dispatch(
        setClientName(
          searchData[searchData.length - 1 - key].cover_letter.clientName
        )
      );
      dispatch(
        setSubHeading(
          searchData[searchData.length - 1 - key].cover_page.subHeading
        )
      );
      dispatch(
        setProjectTitle(
          searchData[searchData.length - 1 - key].cover_page.projectTitle
        )
      );
      dispatch(
        setCompanyPhoneNumber(
          searchData[searchData.length - 1 - key].cover_page.companyPhoneNumber
        )
      );
      dispatch(
        setCompanyAddress(
          searchData[searchData.length - 1 - key].cover_page.companyAddress
        )
      );
      dispatch(
        setCompanyName(
          searchData[searchData.length - 1 - key].cover_page.companyName
        )
      );
      dispatch(
        setIssueDate(
          searchData[searchData.length - 1 - key].cover_page.issueDate
        )
      );
      dispatch(
        setValidDate(
          searchData[searchData.length - 1 - key].cover_page.validDate
        )
      );
      dispatch(
        setCompanyLogo(
          searchData[searchData.length - 1 - key].cover_page.companyLogo
        )
      );
      dispatch(
        setSiteMapOverview(
          searchData[searchData.length - 1 - key].proposedSitemapOverview
            .overview
        )
      );
      dispatch(
        setSiteMap(
          searchData[searchData.length - 1 - key].proposedSitemap.sitemap
        )
      );
      dispatch(
        setSiteMap2(
          searchData[searchData.length - 1 - key].proposedSitemap2.sitemap2
        )
      );
    } else {
      dispatch(
        setFunctionalities(
          proposalData[proposalData.length - 1 - key].aboutYourProject
            .functionality
        )
      );
      dispatch(
        setOverviews(
          proposalData[proposalData.length - 1 - key].aboutYourProject.overview
        )
      );
      dispatch(
        setWebsiteCMSs(
          proposalData[proposalData.length - 1 - key].aboutYourProject
            .websiteCMS
        )
      );
      dispatch(
        setService(proposalData[proposalData.length - 1 - key].budget.service)
      );
      dispatch(
        setDiscount(proposalData[proposalData.length - 1 - key].budget.discount)
      );
      dispatch(
        setCurrency(proposalData[proposalData.length - 1 - key].budget.currency)
      );
      dispatch(
        setTerms(proposalData[proposalData.length - 1 - key].budget.terms)
      );
      dispatch(
        setLetterText(
          proposalData[proposalData.length - 1 - key].cover_letter.letterText
        )
      );
      dispatch(
        setLetterType(
          proposalData[proposalData.length - 1 - key].cover_letter.letterType
        )
      );

      dispatch(
        setClientName(
          proposalData[proposalData.length - 1 - key].cover_letter.clientName
        )
      );
      dispatch(
        setSubHeading(
          proposalData[proposalData.length - 1 - key].cover_page.subHeading
        )
      );
      dispatch(
        setProjectTitle(
          proposalData[proposalData.length - 1 - key].cover_page.projectTitle
        )
      );
      dispatch(
        setCompanyPhoneNumber(
          proposalData[proposalData.length - 1 - key].cover_page
            .companyPhoneNumber
        )
      );
      dispatch(
        setCompanyAddress(
          proposalData[proposalData.length - 1 - key].cover_page.companyAddress
        )
      );
      dispatch(
        setCompanyName(
          proposalData[proposalData.length - 1 - key].cover_page.companyName
        )
      );
      dispatch(
        setIssueDate(
          proposalData[proposalData.length - 1 - key].cover_page.issueDate
        )
      );
      dispatch(
        setValidDate(
          proposalData[proposalData.length - 1 - key].cover_page.validDate
        )
      );
      dispatch(
        setCompanyLogo(
          proposalData[proposalData.length - 1 - key].cover_page.companyLogo
        )
      );
      dispatch(
        setSiteMapOverview(
          proposalData[proposalData.length - 1 - key].proposedSitemapOverview
            .overview
        )
      );
      dispatch(
        setSiteMap(
          proposalData[proposalData.length - 1 - key].proposedSitemap.sitemap
        )
      );
      dispatch(
        setSiteMap2(
          proposalData[proposalData.length - 1 - key].proposedSitemap2.sitemap2
        )
      );
    }
    dispatch(updatePage(100));
    router.push("/development");
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
    } else {
      setSearchData(null);
    }
  }
  async function deleteProposal(_id, inSearch) {
    console.log(_id);
    let { data } = await axios.post("/api/deleteProposal", { _id: _id });
    let { acknowledged } = data;
    if (acknowledged) {
      if (inSearch) {
        let searchDeletedProposals = searchData.filter(
          (item) => !item._id.includes(_id)
        );
        setSearchData(searchDeletedProposals);

        let ProposalDeletedProposals = proposalData.filter(
          (item) => !item._id.includes(_id)
        );
        setProposalData(ProposalDeletedProposals);
      } else {
        let ProposalDeletedProposals = proposalData.filter(
          (item) => !item._id.includes(_id)
        );
        setProposalData(ProposalDeletedProposals);
      }
    }
  }


  return (
    <div className="recent-page-font">
      {loading || isVerified === undefined ? (
        <div className="w-fit m-auto py-24">
          <Loader />
        </div>
      ) : tableLoading ? (
        <div className="w-fit h-full mx-auto py-24">
          <Loader />
        </div>
      ) : (
        <div className="flex flex-col">
          <Nav navText={"Recent Proposal"} main={true} />
          <div className="px-10 py-4 relative max-h-fit min-h-[80vh]">
            <div className="flex flex-col items-between">
              <div className="flex justify-between items-end mb-4">
                <div className="flex gap-2 font-[500] text-[24px] text-main-blue">
                  <h1>Total Proposals:</h1>
                  <span>{proposalData ? proposalData.length : null}</span>
                </div>
                <div className="w-fit flex justify-end items-center py-5">
                  <input
                    className="w-full ps-4 pe-11 py-2 search-placehoder table-border rounded-md text-bold"
                    placeholder="Search..."
                    onChange={(e) => {
                      searchFunction(e);
                    }}
                  />
                  <FaSearch className="absolute me-5" />
                </div>
              </div>

              <div className="tableDiv h-fit">
                <table className="table-border mx-auto">
                  <thead className="w-full">
                    <tr className="">
                      <th className="th-border text-center text-lg text-lg py-2 w-[100px]">
                        No.
                      </th>
                      <th className="th-border text-center text-lg text-lg py-2 w-[185px">
                        Client Name
                      </th>
                      <th className="th-border text-center text-lg text-lg py-2 w-[205px">
                        Project Title
                      </th>
                      <th className="th-border text-center text-lg text-lg py-2 w-[225px">
                        Company Name
                      </th>
                      <th className="th-border text-center text-lg text-lg py-2 w-[175px">
                        Issue Date
                      </th>
                      <th className="th-border text-center text-lg text-lg py-2 w-[175px">
                        Valid Date
                      </th>
                      <th className="last-th-border text-center text-lg text-lg py-2 w-[205px]">
                        Action
                      </th>
                    </tr>
                  </thead>

                  {searchData ? (
                    <tbody className="w-full">
                      {searchData
                        ? searchData
                            .slice()
                            .reverse()
                            .map((item, key) => (
                              <tr key={key} className="tr-border w-full">
                                {key >= multiplierForSearch * limit &&
                                key < limit * (multiplierForSearch + 1) &&
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
                                    <td className="text-center text-lg px-0 w-[190px]">
                                      <div className="flex justify-evenly items-center w-full">
                                        {userData === true ? (
                                          <button
                                            onClick={() => {
                                              deleteProposal(item._id, true);
                                            }}
                                            className="text-red-400 leading-3 underline"
                                          >
                                            Delete
                                          </button>
                                        ) : null}
                                        <button
                                          onClick={() => {
                                            regenerate(key, true);
                                          }}
                                          className="text-main-blue leading-3 underline"
                                        >
                                          Regenerate
                                        </button>
                                      </div>
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
                        ? proposalData
                            .slice()
                            .reverse()
                            .map((item, key) => (
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
                                    <td className="text-center text-lg px-0 w-[190px]">
                                      <div className="flex justify-evenly items-center">
                                        {userData === true ? (
                                          <button
                                            onClick={() => {
                                              deleteProposal(item._id, false);
                                            }}
                                            className="text-red-400 leading-3 underline"
                                          >
                                            Delete
                                          </button>
                                        ) : null}
                                        <button
                                          onClick={() => {
                                            regenerate(key, false);
                                          }}
                                          className="text-main-blue leading-3 underline"
                                        >
                                          Regenerate
                                        </button>
                                      </div>
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
                <div className="flex-end py-2 absolute right-10 top-[100%]">
                  {searchData === undefined || searchData === null ? (
                    <div className="ms-5 flex gap-2 items-center ">
                      <button
                        className={`px-2 text-lg ${
                          multiplier <= 0 ? "text-gray-400" : "text-main-blue"
                        }`}
                        onClick={() => {
                          setMultiplier(multiplier - 1);
                        }}
                        disabled={multiplier <= 0 ? true : false}
                      >
                        <FaChevronLeft />
                      </button>

                      <div className="flex-between gap-2">
                        <span>
                          {multiplier * 8 + 1 <= 9 ? "0" : null}
                          <span>
                            {proposalData.length > 0 ? multiplier * 8 + 1 : 0}
                          </span>
                          -
                          <span>
                            {multiplier * 8 + 8 <= 9 ? "0" : null}
                            {multiplier * 8 + 8 >= proposalData.length
                              ? proposalData.length
                              : multiplier * 8 + 8}
                          </span>
                        </span>
                        <span> of </span>
                        <span>{proposalData.length}</span>
                      </div>

                      <button
                        className={`px-2 text-lg ${
                          multiplier * 8 + 8 >= proposalData.length
                            ? "text-gray-400"
                            : "text-main-blue"
                        }`}
                        onClick={() => {
                          setMultiplier(multiplier + 1);
                        }}
                        disabled={
                          multiplier * 8 + 8 >= proposalData.length
                            ? true
                            : false
                        }
                      >
                        <FaChevronRight />
                      </button>
                    </div>
                  ) : (
                    <div className="ms-5 flex gap-2 items-center ">
                      <button
                        className={`px-2 text-lg ${
                          multiplierForSearch <= 0
                            ? "text-gray-400"
                            : "text-main-blue"
                        }`}
                        onClick={() => {
                          setMultiplierForSearch(multiplierForSearch - 1);
                        }}
                        disabled={multiplierForSearch <= 0 ? true : false}
                      >
                        <FaChevronLeft />
                      </button>

                      <div className="flex-between gap-2">
                        <span>
                          {multiplierForSearch * 8 + 1 <= 9 ? "0" : null}
                          <span>
                            {searchData.length > 0
                              ? multiplierForSearch * 8 + 1
                              : 0}
                          </span>
                          -
                          <span>
                            {multiplierForSearch * 8 + 8 <= 9 ? "0" : null}
                            {multiplierForSearch * 8 + 8 >= searchData.length
                              ? searchData.length
                              : multiplierForSearch * 8 + 8}
                          </span>
                        </span>
                        <span> of </span>
                        <span>{searchData.length}</span>
                      </div>

                      <button
                        className={`px-2 text-lg ${
                          multiplierForSearch * 8 + 8 >= searchData.length
                            ? "text-gray-400"
                            : "text-main-blue"
                        }`}
                        onClick={() => {
                          setMultiplierForSearch(multiplierForSearch + 1);
                        }}
                        disabled={
                          multiplierForSearch * 8 + 8 >= searchData.length
                            ? true
                            : false
                        }
                      >
                        <FaChevronRight />
                      </button>
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Proposal;
