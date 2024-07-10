import svg1 from "@public/assets/LastPageImgs/last page-01.png";
import svg2 from "@public/assets/LastPageImgs/last page-02.svg";
import svg3 from "@public/assets/LastPageImgs/last page-03.svg";
import bgImg from "@public/assets/DB Web Development Proposal-12.svg";
import logo from "@public/assets/DB Logo-15.svg";

const LastPage = () => {
  return (
    <>
      <div class="offer flex w-[8.27in] h-[1122.6px] shadow-lg print:shadow-none bg-red-30 bg-white">
        <div class=" w-full bg-red-00 relative">
          <div class="w-[100%]  bg-yellow-00 relative">
            {/* <img
              class="w-[200px] absolute right-[50px] top-[50px]"
              src={logo.src}
              alt=""
            /> */}
            <img
              src={bgImg.src}
              alt=""
              className="w-[100%] relative top-0 z-[100]"
            />

            {/* <div class="w-fit">
              <img
                class="w-[110px] absolute bottom-[70px] mx-10 z-10"
                src={svg1.src}
                alt=""
              />
            </div> */}
            <div class="flex gap-16  absolute bottom-[150px] left-10">
              <div class="mt-3  flex flex-col items-center justify-center">
                <div class="w-8 h-8 bg-[#093A5B] rounded-full flex items-center justify-center">
                  <img class="w-4" src={svg2.src} alt="" />
                </div>
                <p class=" font-[500] text-[6pt] mt-2">+92 (340) 0084643</p>
              </div>

              <div class="mt-3 flex flex-col  items-center justify-center">
                <div class="w-8 h-8 bg-[#093A5B] rounded-full flex items-center justify-center">
                  <img class="w-4" src={svg3.src} alt="" />
                </div>

                <p class=" font-[500] text-[6pt] mt-2">
                  <span>Email: </span>
                  sales@dentalbrando.com
                </p>
              </div>
            </div>

            <div className="absolute w-full h-[300px] top-[43%] p ps-10">
              <h1
                class="font-[700]  text-[25pt] text-[#093A5B] leading-10"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Thank You
              </h1>
              <p
                class="font-[500] w-[47%] text-[13px]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                We thank you for reading our Website Development Proposal.
                Please contact us if you have any questions or require further
                clarification on specific aspects of our proposal. Thank you
                again for considering us. We hope that you now understand how
                Dental Brando can help dentists like you grow online.
              </p>
            </div>

            <div class=" mx-10  absolute bottom-[250px]">
              <h1
                class="font-[700]  text-[25pt] text-[#093A5B] leading-10"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                CONTACT US{" "}
              </h1>
              <div class=" w-[95px]  h-2 bg-[#03A0D7] "></div>
            </div>

            <div class="mt-1 flex items-center justify-center w-[8.27in] bg-blue- gap-2 px-11 absolute text-center bottom-5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LastPage;
