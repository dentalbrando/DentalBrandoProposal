import svg1 from "@public/assets/LastPageImgs/last page-01.svg";
import svg2 from "@public/assets/LastPageImgs/last page-02.svg";
import svg3 from "@public/assets/LastPageImgs/last page-03.svg";
import svg4 from "@public/assets/LastPageImgs/last page-04.svg";
import bgImg from "@public/assets/LastPageImgs/Untitled-3-01.png";
import logo from "@public/assets/LastPageImgs/logo.png";

const LastPageCopy = () => {
  return (
    <>
      <div class="flex w-[8.27in] h-[1122.6px] shadow-lg print:shadow-none bg-white ">
        <div class=" w-full">
          <div class="w-[100%]">
            <div class="bg-red-100 h-fi">
              <img class="w-[200px] ml-10 " src={logo.src} alt="" />
              <div className="w-full h-full bg-green-100 relative"></div>
              <img
                class="absolute top-[100px]"
                src={bgImg.src}
                alt=""
                className="w-[8.27in]"
              />
            </div>
            <div class=" mx-10 absolute bottom-[170px] ">
              <h1
                class="font-[700]  text-[25pt] text-[#00A2FF] leading-10"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                CONTACT <br />
                US{" "}
              </h1>
              <div class="mt-1 w-[95px]  h-2 bg-[#ffd600]"></div>
            </div>
            <div class="flex justify-between mx-10 ">
              <div class="w-fit absolute bottom-[50px]">
                <img class="w-[110px]" src={svg1.src} alt="" />
              </div>
              <div class="flex gap-16 absolute bottom-[50px] right-[400px]">
                <div class="  flex flex-col items-center justify-center">
                  <div class="w-8 h-8 bg-[#00A2FF] rounded-full flex items-center justify-center">
                    <img class="w-4" src={svg2.src} alt="" />
                  </div>
                  <p class=" font-[500] text-[6pt] mt-2">+92 (333) 765 2182</p>
                  <p class=" font-[500] text-[6pt] ">+92 (42) 3781 5508</p>
                </div>

                <div class="mt-3 flex flex-col  items-center justify-center">
                  <div class="w-8 h-8 bg-[#00A2FF] rounded-full flex items-center justify-center">
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
            </div>

            <div class="mt-1 flex items-center justify-center bg-blue-400 gap-2 px-11 w-full">
              <p class="w-fit font-[500] text-[8pt] pt-2 mx-auto  absolute bottom-[20px]">
                53 Hamza Heights, Quaid Block Near Eiﬀel Towel, Bahria Town,
                Lahore
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LastPageCopy;
