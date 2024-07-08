import svg1 from "@public/assets/icons-01.svg";
import svg2 from "@public/assets/icons-02.svg";
import svg3 from "@public/assets/icons-03.svg";
import svg4 from "@public/assets/icons-04.svg";
import svg5 from "@public/assets/icons-05.svg";
const AboutUs = ({ pageNumber }) => {
  return (
    <div class="offer flex w-[8.27in] h-[1122.6px] shadow-lg print:shadow-none bg-white g-red-200">
      <div class="flex w-100vw bg-red-20 items-end">
        <div class="w-[48%] bg-green-80 h-full">
          <div class="w-[80%] p-1 mx-auto">
            <div class="flex  print:h-[7.3rem] ">
              <div class="mt-[50px]  flex relative pb-0">
                <svg
                  class="transform rotate-90 relative ml-[-5px]  top-0 "
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
                <h6 class="absolute ml-[1.4rem] top-5 text-[#03A0D7]  text-[12pt]">
                  {pageNumber}
                </h6>
              </div>
              <div class="mt-[65px]">
                <h3 class="font-[700]   text-[9pt] text-[#03A0D7]">
                  Dental Brando
                </h3>

                <h3 class=" font-[700]  text-[9pt] text-[#03A0D7]">
                  Business Proposal
                </h3>

                <div class=" mt-1  w-[3in] h-0.5 bg-[#093A5B] "></div>
              </div>
            </div>

            <div class="mt-[25px] ">
              <h1
                class="font-[700]  text-[25pt] text-[#093A5B] leading-10"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                ABOUT
                <br />
                US{" "}
              </h1>
              <div class="bline mt-2 w-[90px] h-2 bg-[#03A0D7] "></div>
            </div>

            <div class=" text-center  mt-8 font-[400] text-[11pt] leading-5">
              <div class="Part-one    text-justify ">
                <p>
                  Welcome to Dental Brando, your one stop destination for your
                  all Web Development, Mobile APP Development, Software
                  Development & Digital Marketing needs. At Dental Brando, we
                  pride ourselves on being a leading provider of customized IT
                  solutions that cater to the unique requirements of our
                  clients. With our extensive experience in the industry and
                  expertise in a wide range of technologies, we have
                  successfully delivered numerous projects for clients across
                  various industries.
                </p>
              </div>
              <div class="part-two mt-5  text-justify">
                <p>
                  Our team of highly skilled professionals is dedicated to
                  providing you with innovative and cutting edge solutions that
                  are tailored to your specific needs. We understand that every
                  client has different requirements, and as such, we work
                  closely with you to develop a deep understanding of your
                  business and objectives to deliver solutions that meet and
                  exceed your expectations.
                </p>
              </div>
              <div class="part-three mt-5 text-justify">
                <p>
                  At Dental Brando, we value transparency, communication, and
                  collaboration, and we strive to build long-term relationships
                  with our clients. We believe that by working together, we can
                  achieve great things and help your business
                </p>
              </div>
              <div class="part-four mt-5 text-justify ">
                <p>
                  As we collaborate on projects together, we see ourselves not
                  just as a service provider but as an extension of your team.
                  Your success reflects our success, and we take immense pride
                  in contributing to your accomplishments. With a long-term
                  mindset, we seek to build lasting partnerships that go beyond
                  individual projects.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-[#093A5B] h-full flex justify-center items-center px-[30px] w-[52%]">
          <div class="w-[100%]">
            <div class="flex mt-8">
              <div className=" ">
                <img
                  style={{ height: "157px", width: "230px" }}
                  src={svg1.src}
                  alt=""
                />
              </div>
              <div class="mt-[45px] ml-3">
                <h6 class="text-[18.43pt] text-white font-[400] ">
                  Web Development{" "}
                </h6>
                <p
                  class="text-[10pt] text-white font-[400] text-justify leading-6"
                  style={{ wordSpacing: "9px" }}
                >
                  We specialize in creating dynamic, responsive, and
                  user-friendly websites by using latest technologies and tools
                  that are optimized for search engines and are easy to
                  navigate.
                </p>
              </div>
            </div>
            <div class="flex ">
              <div className=" ">
                <img
                  style={{ height: "143px", width: "220px" }}
                  src={svg2.src}
                  alt=""
                />
              </div>
              <div class=" mt-[35px] ml-3  ">
                <h6 class="text-[18.43pt] text-white font-[400] whitespace-nowrap ">
                  Mobile App Development{" "}
                </h6>
                <p
                  class="text-[10pt] text-white font-[400]  text-justify leading-6"
                  style={{ wordSpacing: "6px" }}
                >
                  We understand the importance of creating an app that is
                  intuitive, engaging, and user-friendly, we work closely with
                  you to identify your requirements to meet your user needs.
                </p>
              </div>
            </div>
            <div class="flex ">
              <div className="">
                <img
                  style={{ height: "150px", width: "210px" }}
                  src={svg3.src}
                  alt=""
                />
              </div>
              <div class="mt-[35px] ml-3 ">
                <h6 class="text-[18.43pt] text-white font-[400] ">
                  Software Development{" "}
                </h6>
                <p
                  class="text-[10pt] text-white font-[400]  text-justify leading-6 "
                  style={{ wordSpacing: "5px" }}
                >
                  {" "}
                  We provide services that are designed to streamline your
                  business operations and increase productivity. It also makes
                  it easier for you to manage your business efficiently.
                </p>
              </div>
            </div>
            <div class="flex  bg-red-90">
              <div className="">
                <img
                  style={{ height: "150px", width: "200px" }}
                  src={svg4.src}
                  alt=""
                />
              </div>
              <div class="mt-[35px] ml-3 ">
                <h6 class="text-[18.43pt] text-white font-[400] ">
                  Digital Marketing
                </h6>
                <p
                  class="text-[10pt] text-white font-[400]  text-justify leading-6 "
                  style={{ wordSpacing: "3px" }}
                >
                  We Provide tailored services to your business unique needs,
                  from SEO to social media marketing, our team will help you
                  establish a strong online presence that drives traffic.
                </p>
              </div>
            </div>
            <div class="flex ">
              <div className="">
                <img
                  style={{ height: "150px", width: "255px" }}
                  src={svg5.src}
                  alt=""
                />
              </div>
              <div class="mt-[35px] ml-3">
                <h6 class="text-[18.43pt] text-white font-[400] ">
                  Graphic Designing
                </h6>
                <p
                  class="text-[10pt] text-white font-[400]  text-justify leading-6 "
                  style={{ wordSpacing: "14px" }}
                >
                  We offer professional graphic designing services from logos to
                  marketing materials to help your brand stand out. Let us help
                  you make a lasting impression with our designs.
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
