import svg1 from "@public/assets/whySoftImgs/icons-01.svg";
import svg2 from "@public/assets/whySoftImgs/icons-02.svg";
import svg3 from "@public/assets/whySoftImgs/icons-03.svg";
import svg4 from "@public/assets/whySoftImgs/icons-04.svg";
import svg5 from "@public/assets/whySoftImgs/icons-05.svg";
import svg6 from "@public/assets/whySoftImgs/icons-06.svg";
import svg7 from "@public/assets/DbwhySoftImgs/icons-07.svg";
import svg8 from "@public/assets/DbwhySoftImgs/icons-08.svg";
import svg9 from "@public/assets/DbwhySoftImgs/icons-09.svg";
import svg10 from "@public/assets/DbwhySoftImgs/icons-10.svg";

const WhyUs = ({ pageNumber }) => {
  return (
    <>
      <div class="offer flex w-[8.27in] h-[1122.6px] bg-white shadow-lg print:shadow-none">
        <div class="flex w-full ">
          <div class="w-[90%]  mx-auto">
            <div class="flex print:h-[7.3rem] ">
              <div class="mt-[50px]  flex relative  ">
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

                <div class=" mt-1  w-[6.85in] h-0.5 bg-[#093A5B] "></div>
              </div>
            </div>

            <div class="mt-[34px] ">
              <h1
                class="font-[700]  text-[25pt] text-[#093A5B]  leading-[36px]"
                // style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                WHY <br />
                DENTAL BRANDO{" "}
              </h1>
              <div class=" w-[85px]  h-2 bg-[#03A0D7] "></div>
            </div>

            <div class="   mt-2 font-[400] text-[10pt] tracking-[-0.50pt]">
              <div class="Part-one mr-4    ">
                <p>
                  At Dental Brando, we are committed to delivering exceptional
                  IT services specifically tailored for dental practices. Our
                  comprehensive approach ensures that we meet all your digital
                  needs while exceeding your expectations. Here are the key
                  reasons why you should choose Dental Brando for your dental IT
                  services:
                </p>
              </div>
            </div>

            <div class="flex   mt-10 border border-[#093A5B]  w-[100%] h-[9%] mx-auto relative">
              <div class="w-fit h-fit flex items-center justify-center">
                <img
                  src={svg9.src}
                  alt="Top Left Image"
                  class=" top-0   w-[203px] transform rotate-180"
                />
                <p class="absolute text-[30pt] font-[800] text-white">01</p>
              </div>

              <div class="flex  justify-center">
                <p class=" w-[93%]   text-[10pt] font-[400] text-justify  mt-[25px] tracking-[-0.5pt]">
                  Our team at Dental Brando comprises seasoned professionals
                  with extensive experience in both the dental and IT
                  industries. We understand the unique challenges faced by
                  dental practices and use our deep industry knowledge to create
                  innovative, strategically aligned solutions.
                </p>
              </div>

              <div class=" w-fit flex items-center justify-center self-end ">
                <img
                  src={svg9.src}
                  alt="Bottom Right Image"
                  class="bottom-0 right-0 w-[200px] "
                />
                <img class="absolute w-12" src={svg1.src} alt="" />
              </div>

              <div class="absolute w-fit flex items-center justify-center top-[-18px] left-[80px]">
                <img
                  src={svg7.src}
                  alt="Top Left Image"
                  class="  h-[40px]  w-[230px] "
                />
                <p class="absolute text-white font-[600] text-[13pt] ">
                  Expertise
                </p>
              </div>
            </div>

            <div class="flex   mt-6 border border-[#03A0D7]  w-[100%] h-[9%] mx-auto relative">
              <div class="w-fit h-fit flex items-center justify-center">
                <img
                  src={svg10.src}
                  alt="Top Left Image"
                  class=" top-0   w-[192px] transform rotate-180"
                />
                <p class="absolute text-[30pt] font-[800] text-white">02</p>
              </div>

              <div class="flex  justify-center">
                <p class=" w-[93%]   text-[10pt] font-[400] text-justify  mt-[25px] tracking-[-0.5pt]">
                  We prioritize quality in all our projects, from web
                  development to mobile apps and digital marketing. Our
                  commitment ensures we deliver reliable, user-friendly, and
                  visually appealing solutions that enhance your practice’s
                  reputation and efficiency.
                </p>
              </div>

              <div class=" w-fit flex items-center justify-center self-end ">
                <img
                  src={svg10.src}
                  alt="Bottom Right Image"
                  class="bottom-0 right-0 w-[192px] "
                />
                <img class="absolute w-12" src={svg2.src} alt="" />
              </div>

              <div class="absolute w-fit flex items-center justify-center top-[-18px] left-[80px]">
                <img
                  src={svg8.src}
                  alt="Top Left Image"
                  class="  h-[40px]  w-[230px] "
                />
                <p class="absolute text-white font-[600] text-[13pt] ">
                  {" "}
                  Quality
                </p>
              </div>
            </div>

            <div class="flex   mt-6 border border-[#093A5B]  w-[100%] h-[9%] mx-auto relative">
              <div class="w-fit h-fit flex items-center justify-center">
                <img
                  src={svg9.src}
                  alt="Top Left Image"
                  class=" top-0   w-[200px] transform rotate-180"
                />
                <p class="absolute text-[30pt] font-[800] text-white">03</p>
              </div>

              <div class="flex  justify-center">
                <p class=" w-[93%]   text-[10pt] font-[400] text-justify  mt-[25px] tracking-[-0.5pt]">
                  Your satisfaction is our top priority. We work closely with
                  you to tailor our solutions to your specific needs, valuing
                  your input throughout the project. Our responsive customer
                  service guarantees a smooth and positive experience.
                </p>
              </div>

              <div class=" w-fit flex items-center justify-center self-end ">
                <img
                  src={svg9.src}
                  alt="Bottom Right Image"
                  class="bottom-0 right-0 w-[200px] "
                />
                <img class="absolute w-10" src={svg3.src} alt="" />
              </div>

              <div class="absolute w-fit flex items-center justify-center top-[-18px] left-[80px]">
                <img
                  src={svg7.src}
                  alt="Top Left Image"
                  class="  h-[40px]  w-[230px] "
                />
                <p class="absolute text-white font-[600] text-[13pt] ">
                  Customer Satisfaction
                </p>
              </div>
            </div>

            <div class="flex   mt-6 border border-[#03A0D7]  w-[100%] h-[9%] mx-auto relative">
              <div class="w-fit h-fit flex items-center justify-center">
                <img
                  src={svg10.src}
                  alt="Top Left Image"
                  class=" top-0   w-[200px] transform rotate-180"
                />
                <p class="absolute text-[30pt] font-[800] text-white">04</p>
              </div>

              <div class="flex  justify-center">
                <p class=" w-[93%]   text-[10pt] font-[400] text-justify  mt-[25px] tracking-[-0.5pt]">
                  We believe in making high-quality IT services accessible to
                  all dental practices, offering competitive pricing without
                  compromising on quality. Our transparent pricing model ensures
                  you receive the best value for your investment.
                </p>
              </div>

              <div class=" w-fit flex items-center justify-center self-end ">
                <img
                  src={svg10.src}
                  alt="Bottom Right Image"
                  class="bottom-0 right-0 w-[200px] "
                />
                <img class="absolute w-10" src={svg4.src} alt="" />
              </div>

              <div class="absolute w-fit flex items-center justify-center top-[-18px] left-[80px]">
                <img
                  src={svg8.src}
                  alt="Top Left Image"
                  class="  h-[40px]  w-[230px] "
                />
                <p class="absolute text-white font-[600] text-[13pt] ">
                  {" "}
                  Competitive Pricing
                </p>
              </div>
            </div>

            <div class="flex   mt-6 border border-[#093A5B]  w-[100%] h-[9%] mx-auto relative">
              <div class="w-fit h-fit flex items-center justify-center">
                <img
                  src={svg9.src}
                  alt="Top Left Image"
                  class=" top-0   w-[200px] transform rotate-180"
                />
                <p class="absolute text-[30pt] font-[800] text-white">05</p>
              </div>

              <div class="flex  justify-center">
                <p class=" w-[94%]   text-[10pt] font-[400] text-justify  mt-[25px] tracking-[-0.5pt]">
                  Timely delivery is crucial in dentistry, and our team is
                  dedicated to completing projects on schedule without
                  sacrificing quality. Efficient project management ensures your
                  digital solutions are ready when needed.
                </p>
              </div>

              <div class=" w-fit flex items-center justify-center self-end ">
                <img
                  src={svg9.src}
                  alt="Bottom Right Image"
                  class="bottom-0 right-0 w-[200px] "
                />
                <img class="absolute w-10" src={svg5.src} alt="" />
              </div>

              <div class="absolute w-fit flex items-center justify-center top-[-18px] left-[80px]">
                <img
                  src={svg7.src}
                  alt="Top Left Image"
                  class="  h-[40px]  w-[230px] "
                />
                <p class="absolute text-white font-[600] text-[13pt] ">
                  Timely Delivery
                </p>
              </div>
            </div>
            <div class="flex   mt-6 border border-[#093A5B]  w-[100%] h-[9%] mx-auto relative">
              <div class="w-fit h-fit flex items-center justify-center">
                <img
                  src={svg10.src}
                  alt="Top Left Image"
                  class=" top-0   w-[200px] transform rotate-180"
                />
                <p class="absolute text-[30pt] font-[800] text-white">06</p>
              </div>

              <div class="flex  justify-center">
                <p class=" w-[89%]   text-[10pt] font-[400] text-justify  mt-[25px] tracking-[-0.5pt]">
                  Our commitment to your success continues beyond project
                  delivery. We provide ongoing support and maintenance to ensure
                  your digital solutions perform optimally. We aim to build
                  long-term relationships, offering continuous support to help
                  you thrive in the digital landscape.
                </p>
              </div>

              <div class=" w-fit flex items-center justify-center self-end ">
                <img
                  src={svg10.src}
                  alt="Bottom Right Image"
                  class="bottom-0 right-0 w-[200px] "
                />
                <img class="absolute w-10" src={svg6.src} alt="" />
              </div>

              <div class="absolute w-fit flex items-center justify-center top-[-18px] left-[80px]">
                <img
                  src={svg8.src}
                  alt="Top Left Image"
                  class="  h-[40px]  w-[230px] "
                />
                <p class="absolute text-white font-[600] text-[13pt] ">
                  Ongoing Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
