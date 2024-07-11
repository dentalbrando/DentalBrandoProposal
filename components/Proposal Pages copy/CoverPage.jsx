// import logo from "@public/assets/logo.jpg";
import logo from "@public/assets/DB Logo-15.svg";
import cover from "@public/assets/DB Web Development Proposal-13.png";
import { useSelector } from "react-redux";

const CoverPage = () => {
  const cover_page = useSelector((state) => state.cover_page);
  return (
    <>
      <div className=" flex justify-center items-center shadow-lg">
        <div
          className="relative w-[8.27in] h-[1122.6px] mx-auto bg-white"
          // style={{ fontFamily: "'Montserrat'" }}
        >
          <div className="mt-4 flex items-center">
            <div className="w-[80%] h-5 custom-shape1DB"></div>
            <div className="h-5 w-[20%] custom-shape2DB"></div>
          </div>
          <img className="w-[18rem] my-10 mx-auto" src={logo.src} alt="" />
        
          <h2
            className="text-[rgb(9,58,91)] font-[700] text-[16pt] w-[70%] mt-[-35px] mx-auto leading-[1.18] flex justify-center items-center text-justif bg-red-30 tracking-[0.5pt]"
            style={{ textAlign: "justify", textAlignLast: "center" }}
          >
            {cover_page.subHeading == ""
              ? "A Comprehensive Website Development Proposal to Enhance Your Dental Practice's Professionalism."
              : cover_page.subHeading}
          </h2>
          <div className="relative mt-5 h-fit flex items-center">
            <div className="bg-[rgb(9,58,91)] z-[1] w-[68%] h-[26rem] custom-shape3 flex items-center pl-14">
              <div className="flex flex-col justify-center">
                <span className="text-white w-[19rem] text-[24.85pt] leading-[2.5rem] font-[700] tracking-[0.5pt]">
                  {cover_page.projectTitle == ""
                    ? "{No Project title}"
                    : cover_page.projectTitle}
                </span>
                <div className="bg-[rgb(3,160,215)] h-2 w-24 mt-1"></div>
              </div>
            </div>
            <img
              className="absolute z-[0] h-[24rem] right-0"
              src={cover.src}
              alt="cover picture"
            />
          </div>
          <div
            className="ml-14 mt-11 text-[14pt] font-[700] w-[75%]"
            style={{ fontFamily: "'Open Sans'" }}
          >
            <p>Prepared for :</p>
            {
              cover_page.companyLogo ? (
                <div id="logo" className="mt-4 w-20 h-20">
                  <img
                    className="w-full h-full"
                    src={cover_page.companyLogo?.string}
                    alt="No company logo"
                  />
                </div>
              ) : null
              // <div className="w-full h-full bg-gray-100"></div>
            }
            <div className="flex relative items-end justify-between mt-8 bg-green-40">
              <div className="flex flex-col w-[50%]">
                <span
                  id="name"
                  // style={{ fontFamily: "'Montserrat'" }}
                  className="capitalize"
                >
                  {cover_page.companyName
                    ? cover_page.companyName
                    : "{No Company Name}"}
                </span>
                <span
                  id="address"
                  className="text-[11pt] font-[400] mt-2 bg-red-30 w-[]"
                >
                  {cover_page.companyAddress
                    ? cover_page.companyAddress
                    : "{No Company Address}"}
                </span>
                <span id="phone-no" className="text-[11pt] font-[400]">
                  {cover_page.companyPhoneNumber
                    ? cover_page.companyPhoneNumber
                    : "{No Company Phone Number}"}
                </span>
              </div>

              <div className="text-[11pt] font-[700]">
                <p>Proposal Issued:</p>
                <span id="issue-date">
                  {cover_page.issueDate
                    ? cover_page.issueDate
                    : "{No Issue Date}"}
                </span>
              </div>

              <div className="text-[11pt] font-[700]">
                <p>Proposal Valid to:</p>
                <span className="" id="valid-date">
                  {cover_page.validDate
                    ? cover_page.validDate
                    : "{No Valid Date}"}
                </span>
              </div>
            </div>
          </div>
          <div className="absolute w-full right-0 bottom-0 pb-4 flex items-center">
            <div className="h-5 w-[20%] bg-[rgb(3,160,215)] custom-shape4"></div>
            <div className="w-[80%] h-5 bg-[rgb(9,58,91)] custom-shape5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoverPage;
