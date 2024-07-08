import svg1 from "@public/assets/online presence.svg";
import svg2 from "@public/assets/we recommend.svg";
import svg3 from "@public/assets/website development.svg";
// import svg1 from "@public/assets/icons-01.svg";
// import svg2 from "@public/assets/icons-02.svg";
// import svg3 from "@public/assets/icons-03.svg";
// import svg4 from "@public/assets/icons-04.svg";
// import svg5 from "@public/assets/icons-05.svg";

const AboutUs = ({ pageNumber }) => {
  let webUpgrade = true;
  return (
    <>
      {webUpgrade ? (
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

                <div class=" text-center  mt-5 font-[400] text-[11pt] leading-5">
                  <div class="Part-one    text-justify ">
                    <p>
                      Welcome to Dental Brando, a leading IT company
                      specializing in website development for dental practices.
                      Our goal is to enhance the professionalism of your dental
                      practice by providing you with a comprehensive website
                      development proposal. We offer innovative web solutions to
                      elevate your dental practice, ensuring that your online
                      presence is both professional and effective.
                    </p>
                  </div>
                  <div class="part-two mt-5  text-justify">
                    <p>
                      At Dental Brando, we pride ourselves on offering custom
                      designs tailored to reflect your unique brand. We
                      understand the importance of a website that not only looks
                      great but also functions seamlessly. Our team of experts
                      will work closely with you to create a website that truly
                      represents your practice and meets your specific needs.
                    </p>
                  </div>
                  <div class="part-three mt-5 text-justify">
                    <p>
                      Our customized website design services ensure that your
                      site reflects the unique personality and branding of your
                      dental practice. We focus on enhancing patient engagement
                      through user-friendly web design, making it easy for
                      patients to navigate your site, find information, and
                      schedule appointments.
                    </p>
                  </div>
                  <div class="part-four mt-5 text-justify ">
                    <p>
                      We look forward to the opportunity to work with you and
                      help your dental practice thrive in the digital age.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-[#093A5B] h-full flex justify-center items-center px-[25px] w-[52%]">
              <div class="w-[100%] h-[80%] flex flex-col justify-start items-start">
                <div class="mt-8  flex justify-center items-start">
                  <div className="  w-[50px]">
                    <img className="w-full h-full" src={svg1.src} alt="" />
                  </div>
                  <div
                    class="mt-[45px ml-  ps-3 w-[310px]"
                    style={{ width: "" }}
                  >
                    <h6 class="text-[18.43pt] mt-[-5px] leading-7 text-white font-[400] ">
                      Establishing Your Online Presence
                    </h6>
                    <p
                      class="text-[10pt] text-white font-[400] text-justify leading-6 "
                      style={{ wordSpacing: "9px" }}
                    >
                      Create a professional and visually appealing website that
                      reflects the quality of your dental services. Increasing
                      Patient Engagement: Provide an easy-to-navigate platform
                      for patients to learn about your services, read
                      testimonials, and contact your practice. Enhancing
                      Accessibility: Ensure the website is mobile-friendly and
                      responsive for a seamless experience on all devices.
                      Improving SEO and Visibility: Optimize your website for
                      higher search engine rankings to attract potential
                      patients.
                    </p>
                  </div>
                </div>
                <div class="mt-8 flex justify-center items-start">
                  <div className="  w-[50px]">
                    <img className="w-full h-full" src={svg3.src} alt="" />
                  </div>
                  <div
                    class="mt-[45px ml-  ps-3 w-[310px]"
                    style={{ width: "" }}
                  >
                    <h6 class="text-[18.43pt] mt-[-5px] leading-7 text-white font-[400] ">
                      Our website development
                    </h6>
                    <p
                      class="text-[10pt] text-white font-[400] text-justify leading-6 "
                      style={{ wordSpacing: "9px" }}
                    >
                      Our website development services include custom design and
                      branding, detailed service pages, and before-and-after
                      galleries. We integrate appointment scheduling, patient
                      forms, and live chat functionality to enhance engagement.
                      The website will be responsive, mobile-friendly, and
                      SEO-optimized to attract local patients in Miami.
                    </p>
                  </div>
                </div>
                <div class="mt-8  flex justify-center items-start">
                  <div className="  w-[50px]">
                    <img className="w-full h-full" src={svg2.src} alt="" />
                  </div>
                  <div
                    class="mt-[45px ml-  ps-3 w-[310px]"
                    style={{ width: "" }}
                  >
                    <h6 class="text-[18.43pt] mt-[-5px] leading-7 text-white font-[400] ">
                      We recommend
                    </h6>
                    <p
                      class="text-[10pt] text-white font-[400] text-justify leading-6 "
                      style={{ wordSpacing: "9px" }}
                    >
                      We recommend WordPress as the CMS for its user-friendly
                      interface, customization options, built-in SEO tools,
                      scalability, and robust security. It allows for easy
                      content updates without technical expertise, making it
                      ideal for managing your website efficiently.
                    </p>
                  </div>
                </div>
                {/* <div class="flex ">
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
                  Our website development services for dentists include custom
                  design and branding to reflect your practice's unique
                  identity, detailed service pages with comprehensive
                  information, and before-and-after galleries to showcase your
                  work. We integrate tools such as appointment scheduling
                  systems, patient forms, and live chat functionality to enhance
                  patient engagement. The website will be fully responsive and
                  mobile-friendly, ensuring a seamless experience on all
                  devices, with SEO optimization to attract local patients in
                  the Miami area.
                </p>
              </div>
            </div> */}
                {/* <div class="flex ">
              <div className="">
                <img
                  style={{ height: "150px", width: "210px" }}
                  src={svg3.src}
                  alt=""
                />
              </div>
              <div class="mt-[35px] ml-3 ">
                <h6 class="text-[18.43pt] text-white font-[400] ">
                  Custom Dental Software{" "}
                </h6>
                <p
                  class="text-[10pt] text-white font-[400]  text-justify leading-6 "
                  style={{ wordSpacing: "5px" }}
                >
                  We recommend using WordPress as the content management system
                  (CMS) for your website due to its user-friendly interface,
                  extensive customization options, built-in SEO tools,
                  scalability, and robust security features. WordPress allows
                  for easy content updates without technical expertise, making
                  it an ideal platform for managing your website efficiently.
                </p>
              </div>
            </div> */}
              </div>
            </div>
          </div>
        </div>
      ) : (
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

                <div class=" text-center  mt-5 font-[400] text-[11pt] leading-5">
                  <div class="Part-one    text-justify ">
                    <p>
                      Welcome to Dental Brando, your partner in enhancing the
                      digital presence of dental practices. We provide tailored
                      digital solutions to help your practice stand out and
                      operate efficiently in today’s competitive market. With a
                      focus on the latest technologies and patient expectations,
                      we bring you innovative tools and strategies to elevate
                      your practice.{" "}
                    </p>
                  </div>
                  <div class="part-two mt-5  text-justify">
                    <p>
                      Understanding the unique challenges of the dental
                      industry, we offer a full suite of services for dental
                      professionals. Our web development services create
                      visually appealing, user-friendly websites to attract new
                      patients and engage existing ones. Our mobile app
                      development solutions enhance patient interaction and
                      convenience, allowing for easy appointment booking,
                      reminders, and access to educational content.
                    </p>
                  </div>
                  <div class="part-three mt-5 text-justify">
                    <p>
                      We also specialize in custom dental software to streamline
                      practice management and improve patient care. Our digital
                      marketing services are designed specifically for the
                      dental industry, increasing online visibility, driving
                      website traffic, and converting visitors into loyal
                      patients. Our graphic design services focus on creating a
                      strong brand identity, building trust and credibility with
                      your patients.
                    </p>
                  </div>
                  <div class="part-four mt-5 text-justify ">
                    <p>
                      At Dental Brando, we are committed to being your partner
                      in success. We work closely with you to understand your
                      goals and challenges, ensuring our solutions align with
                      your vision. Whether establishing a new online presence or
                      enhancing your existing digital footprint, we have the
                      expertise to help you achieve your objectives and thrive
                      in the digital age.
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
                      We create custom-designed, SEO-optimized, and
                      mobile-friendly websites that reflect the unique identity
                      of your dental practice, enhancing patient engagement and
                      streamlining operations.
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
                      Our custom mobile apps improve patient interaction and
                      convenience, offering features like appointment booking,
                      reminders, and educational content, directly accessible
                      from their smartphones.
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
                      Custom Dental Software{" "}
                    </h6>
                    <p
                      class="text-[10pt] text-white font-[400]  text-justify leading-6 "
                      style={{ wordSpacing: "5px" }}
                    >
                      {" "}
                      We develop tailored software solutions that integrate
                      seamlessly with your practice, improving efficiency in
                      patient record management, billing, and overall practice
                      operations.
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
                      Our targeted digital marketing strategies, including SEO,
                      social media marketing, and PPC advertising, boost your
                      online visibility, attract new patients, and build
                      long-term relationships.
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
                      We create professional, visually appealing graphics,
                      including custom logos and promotional materials, to build
                      a cohesive and trustworthy brand identity for your
                      practice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutUs;
