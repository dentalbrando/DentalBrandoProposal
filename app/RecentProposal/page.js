"use client";
import axios from "axios";
import { useEffect, useState } from "react";

function Proposal() {
  let [proposalData, setProposalData] = useState();
  useEffect(() => {
    async function getData() {
      let { data } = await axios.get("/api/proposal");
      console.log(data.proposalData);
      setProposalData(data.proposalData);
    }
    getData();
  }, []);
  if (proposalData) console.log(proposalData[0]);
  return (
    <>
      {proposalData
        ? proposalData.map((item, key) => (
            <div key={key} className="m-5 p-5 bg-blue-200">
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
                    services
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
                              description
                            </h3>
                            <h4>{item2.description}</h4>
                          </div>
                        </div>
                      ))
                    : null}
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-blue-500">
                  cover_letter
                </h1>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-blue-500">cover_page</h1>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-blue-500">
                  pageSequence
                </h1>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-blue-500">popup</h1>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-blue-500">
                  proposedSitemap
                </h1>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-blue-500">
                  proposedSitemap2
                </h1>
              </div>
            </div>
          ))
        : null}
    </>
  );
}
export default Proposal;
