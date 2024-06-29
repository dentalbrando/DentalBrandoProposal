import svg1 from "@public/assets/LastPageImgs/last page-01.svg";
import svg2 from "@public/assets/LastPageImgs/last page-02.svg";
import svg3 from "@public/assets/LastPageImgs/last page-03.svg";
import bgImg from "@public/assets/DB Web Development Proposal-12.png";
import logo from "@public/assets/DB Logo-15.svg";

const LastPage = () => {
  return (
    <>
      <div class="offer flex w-[8.27in] h-[1122.6px] shadow-lg print:shadow-none bg-red-30 bg-white">
        <div class=" w-full bg-red-00 relative">
          <div class="w-[100%]  bg-yellow-00 relative">
            <img
              class="w-[200px] absolute right-[50px] top-[50px]"
              src={logo.src}
              alt=""
            />
            <img
              src={bgImg.src}
              alt=""
              className="w-[100%] relative top-0 z-[100]"
              // style={{ translate: "6% -10%", scale: "1.115" }}
            />
            {/* <div class="overflow-hidden relative bg-green-00">
            </div> */}
            <div class=" mx-10  absolute bottom-[200px]">
              <h1
                class="font-[700]  text-[25pt] text-[#093A5B] leading-10"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                CONTACT <br />
                US{" "}
              </h1>
              <div class=" w-[95px]  h-2 bg-[#03A0D7] "></div>
            </div>
            <div class="w-fit">
              <img
                class="w-[110px] absolute bottom-[70px] mx-10"
                src={svg1.src}
                alt=""
              />
            </div>
            <div class="flex gap-16  absolute bottom-[70px] right-10">
              <div class="  flex flex-col items-center justify-center">
                <div class="w-8 h-8 bg-[#093A5B] rounded-full flex items-center justify-center">
                  <img class="w-4" src={svg2.src} alt="" />
                </div>
                <p class=" font-[500] text-[6pt] mt-2">+92 (333) 765 2182</p>
                <p class=" font-[500] text-[6pt] ">+92 (42) 3781 5508</p>
              </div>

              <div class="mt-3 flex flex-col  items-center justify-center">
                <div class="w-8 h-8 bg-[#093A5B] rounded-full flex items-center justify-center">
                  <img class="w-4" src={svg3.src} alt="" />
                </div>

                <p class=" font-[500] text-[6pt] mt-2">
                  <span>General Email: </span>
                  info@soft-enterprise.com
                </p>
                <p class=" font-[500] text-[6pt] ">
                  <span>Project Email: </span>
                  project@soft-enterprise.com
                </p>
                <p class=" font-[500] text-[6pt] ">
                  <span>Finance Email: </span>
                  ﬁnance@soft-enterprise.com
                </p>
              </div>
            </div>
            {/* <div class="flex justify-between w-[90%] mx-auto relative bottom-[160px] ">
            </div> */}

            <div class="mt-1 flex items-center justify-center w-[8.27in] bg-blue- gap-2 px-11 absolute text-center bottom-5">
              <p class=" font-[500] text-[8pt] pt-2">
                53 Hamza Heights, Quaid Block Near Eiﬀel Tower, Bahria Town,
                Lahore
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LastPage;
