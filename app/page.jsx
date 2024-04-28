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
import Loader from "@components/Loader";
import layer3 from "@public/assets/Layer_1 (1).png";
import layer2 from "@public/assets/Layer_1 (2).png";
import layer1 from "@public/assets/Layer_1.png";
import frame1 from "@public/assets/Frame 4.png";
import frame2 from "@public/assets/Frame 5.png";
import frame3 from "@public/assets/Frame 6.png";
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
          console.log("err", err);
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
    };
    storeTokenToDb();
  }, [tokenVerifierTrigger]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const value = localStorage.getItem("out");
      console.log(value);
      if (value === true) {
        setIsVerified(false)
      }
    }
  }, []);
  // useEffect(() => {
  //   async function logout() {
  //     await axios.get("/api/logOut");
  //   }
  //   logout();
  // }, []);

  return (
    <StoreProvider>
      {loading || isVerified === undefined ? (
        <div className="w-fit m-auto py-24">
          <Loader />
        </div>
      ) : isVerified ? (
        <>
          <Nav />
          <div className="flex gap-24 justify-center items-center h-[88vh] w-[100%]">
            <Link href={"/development"}>
              <div className="w-[100%] h-[100%] p5 relative">
                <div className="w-[100%] h-[100%]">
                  <img src={frame3.src} className="w-[100%] h-[100%]" />
                </div>
                <div className="w-fit h-[50%] absolute bottom-0 right-0">
                  <img src={layer3.src} />
                </div>
              </div>
            </Link>

            <Link href={"/seo"}>
              <div className="w-[100%] h-[100%] p5 relative">
                <div className="w-[100%] h-[100%]">
                  <img src={frame1.src} className="w-[100%] h-[100%]" />
                </div>
                <div className="w-fit h-[50%] absolute bottom-0 right-0">
                  <img src={layer1.src} />
                </div>
              </div>
            </Link>
            <Link href={"/social-media"}>
              <div className="w-[100%] h-[100%] p5 relative">
                <div className="w-[100%] h-[100%]">
                  <img src={frame2.src} className="w-[100%] h-[100%]" />
                </div>
                <div className="w-fit h-[50%] absolute bottom-0 right-0">
                  <img src={layer2.src} />
                </div>
              </div>
            </Link>
          </div>
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
