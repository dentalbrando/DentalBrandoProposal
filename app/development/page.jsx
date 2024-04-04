"use client";
import Sidebar from "@components/Sidebar";
import Form from "@components/Form";
import LivePreview from "@components/LivePreview";
import StoreProvider from "@app/store/StoreProvider";
import { useSelector } from "react-redux";
import FullProposal from "@components/FullProposal";
import Nav from "@components/Nav";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

function Development() {
  let router = useRouter();
  const pageNo = useSelector((state) => state.page.formId);
  let [isVerified, setIsVerified] = useState(true);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isVerified === false) {
      router.push("/");
    }
    async function verifyTokenApi() {
      try {
        await axios.get("/api/verifyToken");
        setIsVerified(true);
      } catch (err) {
          console.log(err);
        setIsVerified(false);
      }
    }
    verifyTokenApi();
  }, [isVerified]);

  return (
    <>
      {loading || isVerified === undefined ? (
        <div className="w-fit m-auto py-24">
          <Loader />
        </div>
      ) : pageNo != 100 ? (
        <>
          <Nav />
          <div className="flex justify-start items-start h-fit">
            <div className="flex justify-between flex-col">
              <Sidebar />
              {/* <RecentProposalLink /> */}
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
  );
}
export default Development;
