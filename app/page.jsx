"use client";
import { useEffect, useState } from "react";
import Nav from "@components/Nav";
import Registration from "@components/Registration/page";
import axios from "axios";
import Link from "next/link";
import Loader from "@components/Loader";
import layer3 from "@public/assets/Layer_1 (11).svg";
import layer2 from "@public/assets/Layer_1 (15).svg";
import layer1 from "@public/assets/Layer_1 (16).svg";
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

  return (
    <StoreProvider>
      {loading || isVerified === undefined ? (
        <div className="w-fit m-auto py-24">
          <Loader />
        </div>
      ) : isVerified ? (
        <>
          <Nav main={true} />

          <div className="w-[95%] 2xl:w-[87%] h-fit mx-auto pt-20 ">
            <div className="w-full h-[60vh] flex flex-col justify-center items-center bg-green-40  gap-2 md:gap-5 z-100 overflow-auto scroll-bar-none">
              <div className="w-full h-fit linkDi rounded-3xl flex mx-auto  items-center justify-between overflow-x-auto leading-10 bg-red-60">
                <Link
                  href={"/development"}
                  className="w-[23%] h-[300px] bg-[rgb(251,251,251)] rounded-3xl overflow-hidden border-2 border-color"
                >
                  <div className="w-[100%] h-[100%] relative bg-yellow-00">
                    <div className="w-full h-full flex flex-col justify-between">
                      <div className="w-[100%] h-[50%] bg-green-40 flex items-end justify-center">
                        <div className="w-[140px] h-[130px] bg-blue-40 z-[10]">
                          <img src={frame3.src} className="w-[100%] h-[100%]" />
                        </div>
                      </div>
                      <div className="w-[100%] h-[40%] bg-red-40 flex items-end justify-center">
                        <h1 className="w-[70%] h-full bg-yellow-5 text-[28px] leading-7 font-[600] text-main-blue text-center z-[10]">
                          Web Development (No Website)
                        </h1>
                        <div className="h-fit w-[40%] absolute bottom-0 right-0 z-[0]">
                          <img src={layer1.src} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  href={"/website-upgrading"}
                  className="w-[23%] h-[300px] bg-[rgb(251,251,251)] rounded-3xl overflow-hidden border-2 border-color"
                >
                  <div className="w-[100%] h-[100%] relative bg-yellow-00">
                    <div className="w-full h-full flex flex-col justify-between">
                      <div className="w-[100%] h-[50%] bg-green-40 flex items-end justify-center">
                        <div className="w-[140px] h-[130px] bg-blue-40 z-[10]">
                          <img src={frame3.src} className="w-[100%] h-[100%]" />
                        </div>
                      </div>
                      <div className="w-[100%] h-[40%] bg-red-40 flex items-end justify-center">
                        <h1 className="w-[70%] h-full bg-yellow-5 text-[28px] leading-7 font-[600] text-main-blue text-center z-[10]">
                          Web Development (Upgrading)
                        </h1>
                        <div className="h-fit w-[40%] absolute bottom-0 right-0 z-[0]">
                          <img src={layer1.src} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  href={"/seo"}
                  className="w-[23%] h-[300px] bg-[rgb(251,251,251)] rounded-3xl overflow-hidden border-2 border-color"
                >
                  <div className="w-[100%] h-[100%] relative bg-yellow-00">
                    <div className="w-full h-full flex flex-col justify-between">
                      <div className="w-[100%] h-[50%] bg-green-40 flex items-end justify-center">
                        <div className="w-[140px] h-[130px] bg-blue-40 z-[10]">
                          <img src={frame1.src} className="w-[100%] h-[100%]" />
                        </div>
                      </div>
                      <div className="w-[100%] h-[40%] bg-red-40 flex items-end justify-center">
                        <h1 className="w-[70%] h-full bg-yellow-5 text-[28px] leading-7 font-[600] text-main-blue text-center z-[10]">
                          Proposal For SEO
                        </h1>
                        <div className="h-fit w-[40%] absolute bottom-0 right-0 z-[0]">
                          <img src={layer3.src} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  href={"/social-media"}
                  className="w-[23%] h-[300px] bg-[rgb(251,251,251)] rounded-3xl overflow-hidden border-2 border-color"
                >
                  <div className="w-[100%] h-[100%] relative bg-yellow-00">
                    <div className="w-full h-full flex flex-col justify-between">
                      <div className="w-[100%] h-[50%] bg-green-40 flex items-end justify-center">
                        <div className="w-[140px] h-[130px] bg-blue-40 z-[10]">
                          <img src={frame2.src} className="w-[100%] h-[100%]" />
                        </div>
                      </div>
                      <div className="w-[100%] h-[40%] bg-red-40 flex items-end justify-center">
                        <h1 className="w-[70%] h-full bg-yellow-5 text-[28px] leading-7 font-[600] text-main-blue text-center z-[10]">
                          Proposal For Social Media
                        </h1>
                        <div className="h-fit w-[40%] absolute bottom-0 right-0 z-[0]">
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
