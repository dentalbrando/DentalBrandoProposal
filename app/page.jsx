"use client";
import { useEffect, useState } from "react";
import Nav from "@components/Nav";
import Registration from "@components/Registration/page";
import axios from "axios";
import Link from "next/link";
import Loader from "@components/Loader";
import layer3 from "@public/assets/Layer_1 (3).svg";
import layer2 from "@public/assets/Layer_1 (2).svg";
import layer1 from "@public/assets/Layer_1 (1).svg";
import frame1 from "@public/assets/Frame 4.svg";
import frame2 from "@public/assets/Frame 5.svg";
import frame3 from "@public/assets/Frame 6.svg";
import StoreProvider from "./store/StoreProvider";

const Home = () => {
  const [tokenVerifierTrigger, setTokenVerifierTrigger] = useState(0);
  const [userId, setUserId] = useState(null);
  const [isVerified, setIsVerified] = useState(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storeTokenToDb = async () => {
      async function postToken() {
        try {
          setLoading(true);
          let result = await axios.post(`/api/storeTokenToDb`, { userId });
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
  return (
    <StoreProvider>
      {loading || isVerified === undefined ? (
        <div className="w-fit m-auto py-24">
          <Loader />
        </div>
      ) : isVerified ? (
        <>
          <Nav main={true} />

          <div className="w-[95%] 2xl:w-[87%] h-full mx-auto pt-20 ">
            <div className="w-full h-full flex flex-col gap-2 md:gap-5 z-100">
              <div className="w-full h-full linkDiv rounded-[10px] flex flex-row justify-center items-center gap-2 md:gap-5 xl:gap-20 overflow-auto">
                <Link
                  href={"/development"}
                  className="w-[350px] h-[450px] bg-[rgb(251,251,251)] rounded-3xl overflow-hidden border-2 border-color"
                >
                  <div className="w-[100%] h-[100%] relative bg-yellow-00">
                    <div className="w-full h-full flex flex-col justify-between">
                      <div className="w-[100%] h-[50%] bg-green-40 flex items-end justify-center">
                        <div className="w-[170px] h-[170px] bg-blue-40">
                          <img src={frame3.src} className="w-[100%] h-[100%]" />
                        </div>
                      </div>
                      <div className="w-[100%] h-[40%] bg-red-40 flex items-end justify-center">
                        <h1 className="w-[70%] h-full bg-yellow-5 text-[35px] font-[600] text-main-blue text-center">
                          Proposal For Development
                        </h1>
                        <div className="h-fit w-[50%] absolute bottom-0 right-0">
                          <img src={layer1.src} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  href={"/seo"}
                  className="w-[350px] h-[450px] bg-[rgb(251,251,251)] rounded-3xl overflow-hidden border-2 border-color"
                >
                  <div className="w-[100%] h-[100%] relative bg-yellow-00">
                    <div className="w-full h-full flex flex-col justify-between">
                      <div className="w-[100%] h-[50%] bg-green-40 flex items-end justify-center">
                        <div className="w-[170px] h-[170px] bg-blue-40">
                          <img src={frame1.src} className="w-[100%] h-[100%]" />
                        </div>
                      </div>
                      <div className="w-[100%] h-[40%] bg-red-40 flex items-end justify-center">
                        <h1 className="w-[70%] h-full bg-yellow-5 text-[35px] font-[600] text-main-blue text-center">
                          Proposal For SEO
                        </h1>
                        <div className="h-fit w-[50%] absolute bottom-0 right-0">
                          <img src={layer3.src} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  href={"/social-media"}
                  className="w-[350px] h-[450px] bg-[rgb(251,251,251)] rounded-3xl overflow-hidden border-2 border-color"
                >
                  <div className="w-[100%] h-[100%] relative bg-yellow-00">
                    <div className="w-full h-full flex flex-col justify-between">
                      <div className="w-[100%] h-[50%] bg-green-40 flex items-end justify-center">
                        <div className="w-[170px] h-[170px] bg-blue-40">
                          <img src={frame2.src} className="w-[100%] h-[100%]" />
                        </div>
                      </div>
                      <div className="w-[100%] h-[40%] bg-red-40 flex items-end justify-center">
                        <h1 className="w-[70%] h-full bg-yellow-5 text-[35px] font-[600] text-main-blue text-center">
                          Proposal For Social Media
                        </h1>
                        <div className="h-fit w-[50%] absolute bottom-0 right-0">
                          <img src={layer2.src} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
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
