"use client";
import { useEffect, useState } from "react";
import Sidebar from "@components/Sidebar";
import Form from "@components/Form";
import LivePreview from "@components/LivePreview";
import StoreProvider from "./store/StoreProvider";
import Popup from "@components/Popup";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setPopup } from "./store/popup";
import FullProposal from "@components/FullProposal";
import MyFamilyTree from "@components/FamilyTree";
import Nav from "@components/Nav";
import Registration from "@components/Registration/page";
import { create, local } from "d3";
import axios from "axios";
import SaveProposaltoDb from "@components/saveProposaltoDb";
import Link from "next/link";
import RecentProposalLink from "@components/RecentProposalLink";
import Loader from "@components/Loader";

const familyData = {
  name: "John",
  spouse: "Jane",
  children: [
    {
      name: "Alice",
      spouse: "Bob",
      children: [
        {
          name: "Eve",
          spouse: "Charlie",
        },
        {
          name: "David",
        },
      ],
    },
    {
      name: "Carol",
      spouse: "Daniel",
    },
  ],
};

const Home = () => {
  const dispatch = useDispatch();
  const hidePopup = () => {
    dispatch(setPopup(null));
  };
  const message = useSelector((state) => state.popup);
  const pageNo = useSelector((state) => state.page.formId);
  const treeWidth = 800; // Set the desired width
  const [tokenVerifierTrigger, setTokenVerifierTrigger] = useState(0);
  const [userId, setUserId] = useState(null);
  const [isVerified, setIsVerified] = useState(undefined);
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(false);
  const defaultFamilyTreeData = [
    { key: "root", name: "Root", marriage: "Spouse" },
    { key: "father", name: "Father", parent: "root" },
    { key: "mother", name: "Mother", parent: "root" },
    { key: "child1", name: "Child 1", parent: "father" },
    { key: "child2", name: "Child 2", parent: "father" },
    { key: "spouse", name: "Spouse", marriage: "Root" },
    { key: "child3", name: "Child 3", parent: "mother" },
    { key: "child4", name: "Child 4", parent: "mother" },
  ];

  useEffect(() => {
    const storeTokenToDb = async () => {
      async function postToken() {
        try {
          setLoading(true);
          let result = await axios.post(`/api/storeTokenToDb`, { userId });
          setUserData(result.data.userData);
        } catch (err) {
          setLoading(false);
        } finally {
          setLoading(false);
        }
      }
      postToken();

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
    };
    storeTokenToDb();
  }, [tokenVerifierTrigger]);
  {
    /* {message && <Popup message={message.message} type={'success'} onHide={hidePopup} />} */
  }

  return (
    <StoreProvider>
      {loading || isVerified === undefined ? (
        <div className="w-fit m-auto py-24">
          <Loader />
        </div>
      ) : isVerified ? (
        <>
          {pageNo != 100 ? (
            <>
              <Nav />
              <div className="flex justify-between items-start pt-10 gap-8 h-fit mb-10 px-3">
                <div className="flex justify-between flex-col">
                  <Sidebar />
                  <RecentProposalLink />
                </div>
                <div className="flex flex-col gap-5">
                  <Form />
                  <LivePreview />
                </div>
              </div>
            </>
          ) : (
            <FullProposal />
          )}
        </>
      ) : (
        <Registration
          tokenVerifierTrigger={tokenVerifierTrigger}
          setTokenVerifierTrigger={setTokenVerifierTrigger}
          setUserId={setUserId}
        />
      )}
    </StoreProvider>
  );
};

export default Home;
