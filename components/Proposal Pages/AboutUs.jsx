import svg1 from "@public/assets/icons-01.svg";
import svg2 from "@public/assets/icons-02.svg";
import svg3 from "@public/assets/icons-03.svg";
import svg4 from "@public/assets/icons-04.svg";
import svg5 from "@public/assets/icons-05.svg";
const AboutUs = ({ pageNumber }) => {
  return (
    <div className="offer flex w-[8.27in] h-[1122.6px] shadow-lg print:shadow-none bg-white ">
      <div className="flex w-100vw bg-red-20 items-end">
        <div className="w-[48%] h-full">
          <div className="w-[79%] mx-auto">
            <div className="flex  print:h-[7.3rem] ">
              <div className="mt-[50px]  flex relative pb-0">
                <svg
                  className="transform rotate-90 relative ml-[-5px]  top-0 "
                  width="64"
                  height="64"
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#093A5B"
                    d="m221.76 69.66l-88-48.18a12 12 0 0 0-11.52 0l-88 48.18A12 12 0 0 0 28 80.18v95.64a12 12 0 0 0 6.24 10.52l88 48.18a11.95 11.95 0 0 0 11.52 0l88-48.18a12 12 0 0 0 6.24-10.52V80.18a12 12 0 0 0-6.24-10.52ZM220 175.82a4 4 0 0 1-2.08 3.5l-88 48.18a4 4 0 0 1-3.84 0l-88-48.18a4 4 0 0 1-2.08-3.5V80.18a4 4 0 0 1 2.08-3.5l88-48.18a3.94 3.94 0 0 1 3.84 0l88 48.18a4 4 0 0 1 2.08 3.5Z"
                  />
                </svg>
                <h6 className="absolute ml-[1.45rem] top-5 text-[#03A0D7]  text-[12pt]">
                  {pageNumber}
                </h6>
              </div>
              <div className="mt-[65px]">
                <h3 className="font-[700]   text-[9pt] text-[#03A0D7]">
                  Dental Brando
                </h3>

                <h3 className=" font-[700]  text-[9pt] text-[#03A0D7]">
                  Business Proposal
                </h3>

                <div className=" mt-1  w-[3in] h-0.5 bg-[#093A5B] "></div>
              </div>
            </div>

            <div className="mt-[34px] ">
              <h1
                className="font-[700]  text-[25pt] text-[#093A5B]  leading-[36px] uppercase"
                // style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                ABOUT
                <br />
                dental Brando
              </h1>
              <div className="bline w-[90px] h-2 bg-[#03A0D7] "></div>
            </div>

            <div className=" text-center  mt-5 font-[400] text-[11pt] leading-5">
              <div className="Part-one    text-justify ">
                <p>
                  Welcome to Dental Brando, your partner in enhancing the
                  digital presence of dental practices. Our mission is to
                  provide innovative, tailored digital solutions to ensure your
                  practice stands out and operates efficiently in today's
                  competitive landscape. We understand the ever-evolving dental
                  industry and offer the latest tools and strategies to enhance
                  your practice.
                </p>
              </div>
              <div className="part-two mt-5 text-justify">
                <p>
                  We provide a full suite of services to meet dental
                  professionals' specific needs. Our web development services
                  create visually appealing, user-friendly websites to attract
                  new patients and keep existing ones engaged. For practices
                  looking to improve patient interaction, our mobile app
                  development services offer custom solutions for easy
                  appointment booking, reminders, and educational content
                  access.
                </p>
              </div>
              <div className="part-three mt-5 text-justify">
                <p>
                  Additionally, we specialize in custom dental software to
                  streamline practice management, enhancing efficiency and
                  patient care. Our dental-specific digital marketing services
                  boost online visibility, drive website traffic, and convert
                  visitors into loyal patients. Our graphic design services help
                  build a strong brand identity, fostering trust and credibility
                  with your patients.
                </p>
              </div>
              <div className="part-four mt-5 text-justify ">
                <p>
                  At Dental Brando, we are partners in your success. We work
                  closely with you to understand your goals and challenges,
                  ensuring our solutions are effective and aligned with your
                  vision. Whether establishing a new online presence or
                  enhancing your digital footprint, we have the expertise and
                  dedication to help you achieve your objectives and thrive in
                  the digital age.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#093A5B] h-full flex justify-center items-center px-[30px] w-[52%] ">
          <div className="w-[100%]">
            <div className="flex mt-[30px] ">
              <div className=" ">
                <img
                  style={{ height: "157px", width: "230px" }}
                  src={svg1.src}
                  alt=""
                />
              </div>
              <div className="mt-[45px] ml-3">
                <h6 className="text-[18.43pt] text-white font-[400] ">
                  Web Development{" "}
                </h6>
                <p
                  className="text-[10pt] text-white w-[97%] font-[400] text-justify leading-6"
                  style={{ wordSpacing: "9px" }}
                >
                  We create custom-designed, SEO-optimized, and mobile-friendly
                  websites that reflect the unique identity of your dental
                  practice, enhancing patient engagement and streamlining
                  operations.
                </p>
              </div>
            </div>
            <div className="flex ">
              <div className=" ">
                <img
                  style={{ height: "143px", width: "220px" }}
                  src={svg2.src}
                  alt=""
                />
              </div>
              <div className=" mt-[30px] ml-3  ">
                <h6 className="text-[18.43pt] text-white font-[400] whitespace-nowrap ">
                  Mobile App Development{" "}
                </h6>
                <p
                  className="text-[10pt] text-white font-[400] w-[97%] text-justify leading-6"
                  style={{ wordSpacing: "6px" }}
                >
                  Our custom mobile apps improve patient interaction and
                  convenience, offering features like appointment booking,
                  reminders, and educational content, directly accessible from
                  their smartphones.{" "}
                </p>
              </div>
            </div>
            <div className="flex ">
              <div className="">
                <img
                  style={{ height: "150px", width: "210px" }}
                  src={svg3.src}
                  alt=""
                />
              </div>
              <div className="mt-[30px] ml-3 ">
                <h6 className="text-[18.43pt] text-white font-[400] ">
                  Custom Dental Software{" "}
                </h6>
                <p
                  className="text-[10pt] text-white font-[400]  w-[97%]  text-justify leading-6 "
                  style={{ wordSpacing: "5px" }}
                >
                  {" "}
                  We develop tailored software solutions that integrate
                  seamlessly with your practice, improving efficiency in patient
                  record management, billing, and overall practice operations.
                </p>
              </div>
            </div>
            <div className="flex  bg-red-90">
              <div className="">
                <img
                  style={{ height: "150px", width: "200px" }}
                  src={svg4.src}
                  alt=""
                />
              </div>
              <div className="mt-[30px] ml-3 ">
                <h6 className="text-[18.43pt] text-white font-[400] ">
                  Digital Marketing
                </h6>
                <p
                  className="text-[10pt] text-white font-[400]  w-[97%]  text-justify leading-6 "
                  style={{ wordSpacing: "3px" }}
                >
                  Our targeted digital marketing strategies, including SEO,
                  social media marketing, and PPC advertising, boost your online
                  visibility, attract new patients, and build long-term
                  relationships.
                </p>
              </div>
            </div>
            <div className="flex ">
              <div className="">
                <img
                  style={{ height: "150px", width: "255px" }}
                  src={svg5.src}
                  alt=""
                />
              </div>
              <div className="mt-[30px] ml-3">
                <h6 className="text-[18.43pt] text-white font-[400] ">
                  Graphic Designing
                </h6>
                <p
                  className="text-[10pt] text-white font-[400]  w-[97%]  text-justify leading-6 "
                  style={{ wordSpacing: "14px" }}
                >
                  We create professional, visually appealing graphics, including
                  custom logos and promotional materials, to build a cohesive
                  and trustworthy brand identity for your practice.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
