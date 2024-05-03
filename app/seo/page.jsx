"use client";
import { useSelector } from "react-redux";
import FullProposalSeo from "./FullProposalSeo";
import Nav from "@components/Nav";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Loader from "@components/Loader";
import SidebarSeo from "./SidebarSeo";
import LivePreviewSeo from "./LivePreviewSeo";
import FormSeo from "./FormSeo";

function Development() {
  let router = useRouter();
  const pageNo = 100;
  // const pageNo = useSelector((state) => state.page.formId);
  let [isVerified, setIsVerified] = useState(undefined);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    async function verifyTokenApi() {
      try {
        setLoading(true);
        await axios.get("/api/verifyToken");
        setIsVerified(true);
      } catch (err) {
        router.push("/");
        setIsVerified(false);
      } finally {
        setLoading(false);
      }
    }
    verifyTokenApi();
  }, [isVerified]);

  return (
    <>
      {loading || isVerified === undefined || isVerified === false ? (
        <div className="w-fit m-auto py-24">
          <Loader />
        </div>
      ) : (
        <>
          {pageNo != 100 ? (
            <>
              <Nav />
              <div className="flex justify-start items-start h-fit">
                <div className="flex justify-between flex-col">
                  <SidebarSeo />
                </div>
                <div className="flex flex-col gap-5">
                  <FormSeo />
                  <LivePreviewSeo />
                </div>
              </div>
            </>
          ) : (
            <FullProposalSeo />
          )}
        </>
      )}
    </>
  );
}
export default Development;
