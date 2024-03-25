"use client";
import axios from "axios";
import { useEffect, useState } from "react";

function Proposal() {
  let [proposalData, setProposalData] = useState();
  useEffect(() => {
    async function getData() {
      let { data } = await axios.get("/api/proposal");
      setProposalData(data.proposalData);
    }
    getData();
  }, []);
  async function regenerate(key) {
    console.log(proposalData[key]);
  }
  
  return (
    <>
      {proposalData
        ? proposalData.map((item, key) => (
            <div key={key} className="m-5 p-5 bg-blue-200">
              <div className="flex justify-end">
                <button
                  className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-bold rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                  onClick={() => regenerate(key)}
                >
                  regenerate
                </button>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-blue-500">Date</h1>
                <h2 className="text-3xl font-medium text-blue-800">
                  {item.date}
                </h2>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-blue-500">
                  About your project
                </h1>
                <div>
                  <h2 className="text-3xl font-medium text-blue-800">
                    functionality
                  </h2>
                  <h3 className="text-2xl font-normal text-purple-900">
                    {item.aboutYourProject.functionality}
                  </h3>
                </div>
                <div>
                  <h2 className="text-3xl font-medium text-blue-800">
                    overview
                  </h2>
                  <h3 className="text-2xl font-normal text-purple-900">
                    {item.aboutYourProject.overview}
                  </h3>
                </div>
                <div>
                  <h2 className="text-3xl font-medium text-blue-800">
                    websiteCMS
                  </h2>
                  <h3 className="text-2xl font-normal text-purple-900">
                    {item.aboutYourProject.websiteCMS}
                  </h3>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-blue-500">budget</h1>
                <div>
                  <h2 className="text-3xl font-medium text-blue-800">
                    currency
                  </h2>
                  <h3 className="text-2xl font-normal text-purple-900">
                    {item.budget.currency}
                  </h3>
                </div>
                <div>
                  <h2 className="text-3xl font-medium text-blue-800">
                    discount
                  </h2>
                  <h3 className="text-2xl font-normal text-purple-900">
                    {item.budget.discount}
                  </h3>
                </div>
                <div>
                  <h2 className="text-3xl font-medium text-blue-800">
                    terms and conditions
                  </h2>
                  {item.budget.service
                    ? item.budget.service.map((item2, key) => (
                        <div key={key}>
                          <div>
                            <h3 className="text-2xl font-normal text-purple-900">
                              description
                            </h3>
                            <h4>{item2.description}</h4>
                          </div>
                          <div>
                            <h3 className="text-2xl font-normal text-purple-900">
                              charges
                            </h3>
                            <h4>{item2.charges}</h4>
                          </div>
                          <div>
                            <h3 className="text-2xl font-normal text-purple-900">
                              package Type
                            </h3>
                            <h4>{item2.packageType}</h4>
                          </div>
                        </div>
                      ))
                    : null}
                </div>
                <div>
                  <h2 className="text-3xl font-medium text-blue-800">
                    terms and conditions
                  </h2>
                  {item.budget.terms ? (
                    <div>
                      <ul>
                        {item.budget.terms.map((item2, key) => (
                          <li key={key}>{item2}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-blue-500">
                  Cover letter
                </h1>
                <div>
                  <h2 className="text-3xl font-medium text-blue-800">
                    clientName
                  </h2>
                  <h3 className="text-2xl font-normal text-purple-900">
                    {item.cover_letter.clientName}
                  </h3>
                </div>
                <div>
                  <h2 className="text-3xl font-medium text-blue-800">
                    letterText
                  </h2>
                  <h3 className="text-2xl font-normal text-purple-900">
                    {item.cover_letter.letterText}
                  </h3>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-blue-500">Cover Page</h1>
                <div>
                  <h2 className="text-3xl font-medium text-blue-800">
                    companyAddress
                  </h2>
                  <h3 className="text-2xl font-normal text-purple-900">
                    {item.cover_page.companyAddress}
                  </h3>
                </div>
                <div>
                  <h2 className="text-3xl font-medium text-blue-800">
                    companyLogo
                  </h2>
                  <h3 className="text-2xl font-normal text-purple-900">
                    {item.cover_page.companyLogo}
                  </h3>
                </div>
                <div>
                  <h2 className="text-3xl font-medium text-blue-800">
                    companyName
                  </h2>
                  <h3 className="text-2xl font-normal text-purple-900">
                    {item.cover_page.companyName}
                  </h3>
                </div>
                <div>
                  <h2 className="text-3xl font-medium text-blue-800">
                    companyPhoneNumber
                  </h2>
                  <h3 className="text-2xl font-normal text-purple-900">
                    {item.cover_page.companyPhoneNumber}
                  </h3>
                </div>
                <div>
                  <h2 className="text-3xl font-medium text-blue-800">
                    issueDate
                  </h2>
                  <h3 className="text-2xl font-normal text-purple-900">
                    {item.cover_page.issueDate}
                  </h3>
                </div>
                <div>
                  <h2 className="text-3xl font-medium text-blue-800">
                    projectTitle
                  </h2>
                  <h3 className="text-2xl font-normal text-purple-900">
                    {item.cover_page.projectTitle}
                  </h3>
                </div>
                <div>
                  <h2 className="text-3xl font-medium text-blue-800">
                    subHeading
                  </h2>
                  <h3 className="text-2xl font-normal text-purple-900">
                    {item.cover_page.subHeading}
                  </h3>
                </div>
                <div>
                  <h2 className="text-3xl font-medium text-blue-800">
                    validDate
                  </h2>
                  <h3 className="text-2xl font-normal text-purple-900">
                    {item.cover_page.validDate}
                  </h3>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-blue-500">
                  Page sequence
                </h1>
                <div>
                  <h2 className="text-3xl font-medium text-blue-800">
                    websiteCMS
                  </h2>
                  <ol>
                    {item.pageSequence
                      ? item.pageSequence.pageSequence.map((item2,key) =>
                          item2.checked ? (
                            <li key={key}>{item2.content}</li>
                          ) : null
                        )
                      : null}
                  </ol>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-blue-500">
                  proposed Sitemap
                </h1>
                <div>
                  <div>
                    <h2 className="text-3xl font-medium text-blue-800">
                      Root name
                    </h2>
                    <h3 className="text-2xl font-normal text-purple-900">
                      {item.proposedSitemap.rootName}
                    </h3>
                  </div>
                  <div>
                    <h2 className="text-3xl font-medium text-blue-800">
                      Site map
                    </h2>
                    <ol>
                      {item.proposedSitemap
                        ? item.proposedSitemap.sitemap.map((item2) => (
                            <li>{item2}</li>
                          ))
                        : null}
                    </ol>
                  </div>
                </div>
              </div>{" "}
              <div>
                <h1 className="text-4xl font-bold text-blue-500">
                  proposed Sitemap 2
                </h1>
                <div>
                  <div>
                    <h2 className="text-3xl font-medium text-blue-800">
                      Root name
                    </h2>
                    <h3 className="text-2xl font-normal text-purple-900">
                      {item.proposedSitemap2.rootName2}
                    </h3>
                  </div>
                  <div>
                    <h2 className="text-3xl font-medium text-blue-800">
                      Site map
                    </h2>
                    <ol>
                      {item.proposedSitemap2
                        ? item.proposedSitemap2.sitemap2.map((item2) => (
                            <li>{item2}</li>
                          ))
                        : null}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          ))
        : null}
    </>
  );
}
export default Proposal;
