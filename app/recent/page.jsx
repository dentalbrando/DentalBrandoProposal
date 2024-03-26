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
        // proposalData.map((item, key) => (
        //   <div key={key} className="p-5 m-5 custom-bg">
        //     <div className="flex justify-end">
        //       <button
        //         className="button py-3 px-5 rounded-3xl"
        //         onClick={() => regenerate(key)}
        //       >
        //         regenerate
        //       </button>
        //     </div>
        //     <div>
        //       <h1 className="text-4xl font-bold text-blue-500">Date</h1>
        //       <h2 className="text-3xl font-medium text-blue-800">
        //         {item.date}
        //       </h2>
        //     </div>
        //     <div>
        //       <h1 className="text-4xl font-bold text-blue-500">
        //         About your project
        //       </h1>
        //       <div>
        //         <h2 className="text-3xl font-medium text-blue-800">
        //           functionality
        //         </h2>
        //         <h3 className="text-2xl font-normal text-purple-900">
        //           {item.aboutYourProject.functionality}
        //         </h3>
        //       </div>
        //       <div>
        //         <h2 className="text-3xl font-medium text-blue-800">overview</h2>
        //         <h3 className="text-2xl font-normal text-purple-900">
        //           {item.aboutYourProject.overview}
        //         </h3>
        //       </div>
        //       <div>
        //         <h2 className="text-3xl font-medium text-blue-800">
        //           websiteCMS
        //         </h2>
        //         <h3 className="text-2xl font-normal text-purple-900">
        //           {item.aboutYourProject.websiteCMS}
        //         </h3>
        //       </div>
        //     </div>
        //     <div>
        //       <h1 className="text-4xl font-bold text-blue-500">budget</h1>
        //       <div>
        //         <h2 className="text-3xl font-medium text-blue-800">currency</h2>
        //         <h3 className="text-2xl font-normal text-purple-900">
        //           {item.budget.currency}
        //         </h3>
        //       </div>
        //       <div>
        //         <h2 className="text-3xl font-medium text-blue-800">discount</h2>
        //         <h3 className="text-2xl font-normal text-purple-900">
        //           {item.budget.discount}
        //         </h3>
        //       </div>
        //       <div>
        //         <h2 className="text-3xl font-medium text-blue-800">services</h2>
        //         {item.budget.service
        //           ? item.budget.service.map((item2, key) => (
        //               <div key={key}>
        //                 <div>
        //                   <h3 className="text-2xl font-normal text-purple-900">
        //                     description
        //                   </h3>
        //                   <h4>{item2.description}</h4>
        //                 </div>
        //                 <div>
        //                   <h3 className="text-2xl font-normal text-purple-900">
        //                     charges
        //                   </h3>
        //                   <h4>{item2.charges}</h4>
        //                 </div>
        //                 <div>
        //                   <h3 className="text-2xl font-normal text-purple-900">
        //                     package Type
        //                   </h3>
        //                   <h4>{item2.packageType}</h4>
        //                 </div>
        //               </div>
        //             ))
        //           : null}
        //       </div>
        //       <div>
        //         <h2 className="text-3xl font-medium text-blue-800">
        //           terms and conditions
        //         </h2>
        //         {item.budget.terms ? (
        //           <div>
        //             <ul>
        //               {item.budget.terms.map((item2, key) => (
        //                 <li key={key}>{item2}</li>
        //               ))}
        //             </ul>
        //           </div>
        //         ) : null}
        //       </div>
        //     </div>
        //     <div>
        //       <h1 className="text-4xl font-bold text-blue-500">Cover letter</h1>
        //       <div>
        //         <h2 className="text-3xl font-medium text-blue-800">
        //           clientName
        //         </h2>
        //         <h3 className="text-2xl font-normal text-purple-900">
        //           {item.cover_letter.clientName}
        //         </h3>
        //       </div>
        //       <div>
        //         <h2 className="text-3xl font-medium text-blue-800">
        //           letterText
        //         </h2>
        //         <h3 className="text-2xl font-normal text-purple-900">
        //           {item.cover_letter.letterText}
        //         </h3>
        //       </div>
        //     </div>
        //     <div>
        //       <h1 className="text-4xl font-bold text-blue-500">Cover Page</h1>
        //       <div>
        //         <h2 className="text-3xl font-medium text-blue-800">
        //           companyAddress
        //         </h2>
        //         <h3 className="text-2xl font-normal text-purple-900">
        //           {item.cover_page.companyAddress}
        //         </h3>
        //       </div>
        //       <div>
        //         <h2 className="text-3xl font-medium text-blue-800">
        //           companyLogo
        //         </h2>
        //         <h3 className="text-2xl font-normal text-purple-900">
        //           {item.cover_page.companyLogo}
        //         </h3>
        //       </div>
        //       <div>
        //         <h2 className="text-3xl font-medium text-blue-800">
        //           companyName
        //         </h2>
        //         <h3 className="text-2xl font-normal text-purple-900">
        //           {item.cover_page.companyName}
        //         </h3>
        //       </div>
        //       <div>
        //         <h2 className="text-3xl font-medium text-blue-800">
        //           companyPhoneNumber
        //         </h2>
        //         <h3 className="text-2xl font-normal text-purple-900">
        //           {item.cover_page.companyPhoneNumber}
        //         </h3>
        //       </div>
        //       <div>
        //         <h2 className="text-3xl font-medium text-blue-800">
        //           issueDate
        //         </h2>
        //         <h3 className="text-2xl font-normal text-purple-900">
        //           {item.cover_page.issueDate}
        //         </h3>
        //       </div>
        //       <div>
        //         <h2 className="text-3xl font-medium text-blue-800">
        //           projectTitle
        //         </h2>
        //         <h3 className="text-2xl font-normal text-purple-900">
        //           {item.cover_page.projectTitle}
        //         </h3>
        //       </div>
        //       <div>
        //         <h2 className="text-3xl font-medium text-blue-800">
        //           subHeading
        //         </h2>
        //         <h3 className="text-2xl font-normal text-purple-900">
        //           {item.cover_page.subHeading}
        //         </h3>
        //       </div>
        //       <div>
        //         <h2 className="text-3xl font-medium text-blue-800">
        //           validDate
        //         </h2>
        //         <h3 className="text-2xl font-normal text-purple-900">
        //           {item.cover_page.validDate}
        //         </h3>
        //       </div>
        //     </div>
        //     <div>
        //       <h1 className="text-4xl font-bold text-blue-500">
        //         Page sequence
        //       </h1>
        //       <div>
        //         <h2 className="text-3xl font-medium text-blue-800">
        //           websiteCMS
        //         </h2>
        //         <ol>
        //           {item.pageSequence
        //             ? item.pageSequence.pageSequence.map((item2, key) =>
        //                 item2.checked ? (
        //                   <li key={key}>{item2.content}</li>
        //                 ) : null
        //               )
        //             : null}
        //         </ol>
        //       </div>
        //     </div>
        //     <div>
        //       <h1 className="text-4xl font-bold text-blue-500">
        //         proposed Sitemap
        //       </h1>
        //       <div>
        //         <div>
        //           <h2 className="text-3xl font-medium text-blue-800">
        //             Root name
        //           </h2>
        //           <h3 className="text-2xl font-normal text-purple-900">
        //             {item.proposedSitemap.rootName}
        //           </h3>
        //         </div>
        //         <div>
        //           <h2 className="text-3xl font-medium text-blue-800">
        //             Site map
        //           </h2>
        //           <ol>
        //             {item.proposedSitemap
        //               ? item.proposedSitemap.sitemap.map((item2) => (
        //                   <li>{item2}</li>
        //                 ))
        //               : null}
        //           </ol>
        //         </div>
        //       </div>
        //     </div>{" "}
        //     <div>
        //       <h1 className="text-4xl font-bold text-blue-500">
        //         proposed Sitemap 2
        //       </h1>
        //       <div>
        //         <div>
        //           <h2 className="text-3xl font-medium text-blue-800">
        //             Root name
        //           </h2>
        //           <h3 className="text-2xl font-normal text-purple-900">
        //             {item.proposedSitemap2.rootName2}
        //           </h3>
        //         </div>
        //         <div>
        //           <h2 className="text-3xl font-medium text-blue-800">
        //             Site map
        //           </h2>
        //           <ol>
        //             {item.proposedSitemap2
        //               ? item.proposedSitemap2.sitemap2.map((item2) => (
        //                   <li>{item2}</li>
        //                 ))
        //               : null}
        //           </ol>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // )
        // )
        <div className="p-10 bg-green-100">
          <h1>Proposal Table</h1>
          <div style={{ overflow: "auto" }} className="bg-blue-100">
            <table className="border-collapse border border-slate-500">
              <thead>
                <tr>
                  <th className="border border-slate-600">Proposal ID</th>
                  <th className="border border-slate-600">Date</th>
                  <th className="border border-slate-600">Project Title</th>
                  <th className="border border-slate-600">Company Name</th>
                  <th className="border border-slate-600">Company Address</th>
                  <th className="border border-slate-600">Company Phone</th>
                  <th className="border border-slate-600">Issue Date</th>
                  <th className="border border-slate-600">Valid Date</th>
                  <th className="border border-slate-600">Subheading</th>
                  <th className="border border-slate-600">Cover Letter</th>
                  <th className="border border-slate-600">Overview</th>
                  <th className="border border-slate-600">Functionality</th>
                  <th className="border border-slate-600">Website CMS</th>
                  <th className="border border-slate-600">
                    Terms & Conditions
                  </th>
                  <th className="border border-slate-600">Page Sequence</th>
                </tr>
              </thead>
              <tbody>
                {proposalData
                  ? proposalData.map((item) => (
                      <tr key={item._id}>
                        <td className="border border-slate-600">
                          <div className="tdInnerDivX">{item._id}</div>
                        </td>
                        <td className="border border-slate-600">
                          <div className="tdInnerDivX">{item.date}</div>
                        </td>
                        <td className="border border-slate-600">
                          <div className="tdInnerDivX">
                            {item.cover_page.projectTitle}
                          </div>
                        </td>
                        <td className="border border-slate-600">
                          <div className="tdInnerDivX">
                            {item.cover_page.companyName}
                          </div>
                        </td>
                        <td className="border border-slate-600">
                          <div className="tdInnerDivX">
                            {item.cover_page.companyAddress}
                          </div>
                        </td>
                        <td className="border border-slate-600">
                          <div className="tdInnerDivX">
                            {item.cover_page.companyPhoneNumber}
                          </div>
                        </td>
                        <td className="border border-slate-600">
                          <div className="tdInnerDivX">
                            {item.cover_page.issueDate}
                          </div>
                        </td>
                        <td className="border border-slate-600">
                          <div className="tdInnerDivX">
                            {item.cover_page.validDate}
                          </div>
                        </td>
                        <td className="border border-slate-600">
                          <div className="tdInnerDivX">
                            {item.cover_page.subHeading}
                          </div>
                        </td>
                        <td className="border border-slate-600">
                          <div className="tdInnerDivX">
                            {item.cover_letter.letterText}
                          </div>
                        </td>
                        <td className="border border-slate-600">
                          <div className="tdInnerDivX">
                            {item.aboutYourProject.overview}
                          </div>
                        </td>
                        <td className="border border-slate-600">
                          <div className="tdInnerDivX">
                            {item.aboutYourProject.functionality}
                          </div>
                        </td>
                        <td className="border border-slate-600">
                          <div className="tdInnerDivX">
                            {item.aboutYourProject.websiteCMS}
                          </div>
                        </td>
                        <td className="border border-slate-600">
                          <div className="tdInnerDivX">
                            {item.budget &&
                              item.budget.terms.map((item2, key) => (
                                <li key={key}>{item2}</li>
                              ))}
                          </div>
                        </td>
                        <td className="border border-slate-600">
                          <div className="tdInnerDivX">
                            {item.pageSequence &&
                              item.pageSequence.pageSequence.map(
                                (item2, key) => (
                                  <li key={key}>{item2.content}</li>
                                )
                              )}
                          </div>
                        </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}
export default Proposal;
