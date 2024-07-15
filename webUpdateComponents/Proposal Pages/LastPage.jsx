// import svg1 from "@public/assets/LastPageImgs/last page-01.png";
import svg1 from "@public/assets/LastPageImgs/last page-01 1.png";
import svg2 from "@public/assets/LastPageImgs/last page-02.svg";
import svg3 from "@public/assets/LastPageImgs/last page-03.svg";
import svg4 from "@public/assets/LastPageImgs/icons8-website-symbol-50.png";
// import bgImg from "@public/assets/DB Web Development Proposal-12.svg";
import bgImg from "@public/assets/DB Web Development Proposal-12.png";
import logo from "@public/assets/DB Logo-15 copy.svg";

const LastPage = () => {
  return (
    <>
      <div className="offer flex w-[8.27in] h-[1122.6px] shadow-lg print:shadow-none bg-white p-0">
        <div className=" w-full relative">
          <div className="w-[100%] relative h-full overflow-hidden">
            <img
              className="w-[180px] absolute left-[40px] z-[10] top-[50px]"
              src={logo.src}
              alt=""
            />
            <img
              src={bgImg.src}
              alt=""
              className="w-[100% h-[1152.6px] translate-y-[-20px]  z-[0]"
            />

            <div className="w-fit">
              <img
                className="w-[110px] absolute bottom-[40px] right-[0%] mx-10 z-10"
                src={svg1.src}
                alt=""
              />
            </div>

            <div className=" mx-10  absolute bottom-[230px]">
              <h1
                className="font-[700]  text-[25pt] text-[#093A5B] leading-10"
                // style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                CONTACT US{" "}
              </h1>
              <div className=" w-[95px]  h-2 bg-[#03A0D7] "></div>
            </div>

            <div className="flex gap-x-4 absolute bottom-[90px] left-10 bg-red-40 flex-col w-[500px]">
              <div className="mt-3 flex flex-co items-start justify-start gap-2 w-fit">
                <div className="w-8 h-8 bg-[#093A5B] rounded-full flex items-center justify-center">
                  <img className="w-4" src={svg2.src} alt="" />
                </div>
                <p className="font-[500] text-[10pt] mt-2">+1-888-452-1505</p>
              </div>

              <div className="mt-3 flex flex-co items-start justify-start gap-2 w-fit">
                <div className="w-8 h-8 bg-[#093A5B] rounded-full flex items-center justify-center">
                  <img className="w-5" src={svg4.src} alt="" />
                </div>
                <p className="font-[500] text-[10pt] mt-2">
                  www.dentalbrando.com
                </p>
              </div>

              <div className="mt-3 flex flex-co items-start justify-start gap-2 w-fit">
                <div className="w-8 h-8 bg-[#093A5B] rounded-full flex items-center justify-center">
                  <img className="w-4" src={svg3.src} alt="" />
                </div>
                <p className="font-[500] text-[10pt] mt-2">
                  sales@dentalbrando.com
                </p>
              </div>
            </div>

            <div className="absolute w-full h-[300px] top-[43%] p ps-10">
              <h1
                className="font-[700]  text-[25pt] text-[#093A5B]"
                // style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Thank You
              </h1>
              <p
                className="font-[400] w-[47%] text-[16px] pt-3"
                // style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                We appreciate you taking the time to review our website
                development proposal. Please contact us if you have any
                questions or require further clarification on specific aspects
                of our proposal. We believe our partnership can elevate your
                practice. Contact us to explore how we can work together.{" "}
              </p>
            </div>

            <div className="mt-1 flex items-center justify-center w-[8.27in] bg-blue- gap-2 px-11 absolute text-center bottom-5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LastPage;
