import sign from "@public/assets/sign.jpg";
import { useSelector } from "react-redux";
import tick from "@public/assets/TICK-01.svg";

const CoverLetter = ({ pageNumber }) => {
  const cover_letter = useSelector((state) => state.cover_letter_Update);
  if (cover_letter.letterType === "web_dev" && cover_letter.letterText === "") {
    var tempLetterText = `Welcome to Dental Brando, where we specialize in enhancing dental practices through cutting-edge website updates. As a leading IT company, we are dedicated to enhancing the online professionalism and patient engagement of your dental practice. Our tailored website update services are designed to transform your current online presence into a powerful tool for growth. We offer innovative solutions that ensure your website not only looks exceptional but also functions seamlessly to meet the evolving needs of your patients.
<p class = 'py-1'></p>
At Dental Brando, we understand the importance of a website that not only reflects your unique brand but also drives results. Our team of experts will collaborate closely with you to deliver a customized update that aligns perfectly with your practice's goals and values. We take the time to understand your specific needs and challenges, ensuring that our solutions are tailored to help you achieve your objectives.
<p class = 'py-1'></p>
From improved navigation to enhanced user experience, our updates will make it effortless for patients to connect with your practice, access information, and schedule appointments. We focus on creating a seamless experience that enhances patient satisfaction and engagement. Our goal is to make your website a central hub for patient interaction, where they can easily find the information they need and interact with your practice in a convenient manner.
<p class = 'py-1'></p>
Moreover, our dedication extends beyond the initial update. We provide ongoing support and maintenance to ensure your website remains secure, optimized, and aligned with your practice's growth objectives. This continuous improvement approach guarantees that your online presence evolves with the changing digital landscape, keeping your practice at the forefront of patient engagement and technological advancements.
<p class = 'py-1'></p>
We are excited about the opportunity to partner with you in enhancing your dental practice's online presence.`;
  } else {
    var tempLetterText = cover_letter.letterText;
  }
  let content = tempLetterText
    .split("<p class = 'py-1'></p>")
    .map((line) => {
      if (line.trim().startsWith(">")) {
        const ticked = `<div className="flex">
                    
                    <div className="flex items-center justify-center">

                        <img src="${tick.src}" alt="" width="10px" />
                    </div>
                    <div className="px-2" >
                        <p>
                            ${line.substring(line.indexOf(">") + 1)}
                        </p>
                    </div>
                </div>`;

        return ticked;
      }

      line = line + "<p class = 'py-1'></p>";
      return line;
    })
    .join("");
  return (
    <div className="offer flex w-[8.27in] h-[1122.6px] shadow-lg bg-white">
      <div className=" flex w-full relative bg-green-90">
        <div className="flex bg-orange-00 h-full w-full absolute left-0 top-0 z-0">
          <div className="ml-2 w-[3px] h-full bg-[#093A5B] "></div>
          <div className="line ml-1 mr-1 h-full w-[3px]  bg-[#03A0D7] "></div>
        </div>

        <div className=" w-[90%] mx-auto bg-green-00 relative">
          <div className="flex  print:h-[7.3rem] bg-green-40">
            <div className="mt-[50px] flex relative  pb-0">
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
              <h6 className="absolute ml-[1.4rem] top-5 text-[#03A0D7]  text-[12pt]">
                {pageNumber}
              </h6>
            </div>
            <div className="mt-[65px]">
              <h3 className="font-[700] text-[9pt] text-[#03A0D7]">
                Dental Brando
              </h3>

              <h3 className=" font-[700]  text-[9pt] text-[#03A0D7]">
                Business Proposal
              </h3>

              <div className=" mt-1  w-[6.5in] h-0.5 bg-[#093A5B] "></div>
            </div>
          </div>
          <div className="mt-[60px] ">
            <h1
              className="font-[700] text-[25pt] text-[#093A5B] leading-[36px]"
              // style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              COVER <br />
              LETTER{" "}
            </h1>
            <div className="bline w-[90px] h-2 bg-[#03A0D7] "></div>
          </div>
          <div className="name underline  mt-14 font-[700]  text-[17.5pt]">
            <p>
              Dear{" "}
              <span id="name" className="capitalize">
                {cover_letter.clientName}
              </span>
            </p>
          </div>

          <div className=" font-[400] text-[12pt] leading-5">
            <div
              className="Part-one font-[400] text-[12pt] leading-6 text-justify w-[100%] pt-2 bg-yellow-00"
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
            {/* <div className="Part-one font-[400] text-[12pt] leading-6 text-justify w-[100%] pt-2 bg-yellow-00">
              Welcome to Dental Brando, where we specialize in enhancing dental
              practices through cutting-edge website updates. As a leading IT
              company, we are dedicated to improving the online professionalism
              and patient engagement of your dental practice. Our mission is to
              provide you with a website that not only stands out but also
              serves as a vital tool for your practice's growth and success.
              <br />
              Our tailored website update services are designed to transform
              your current online presence into a powerful tool for growth. We
              offer innovative solutions that ensure your website not only looks
              exceptional but also functions seamlessly to meet the evolving
              needs of your patients. With a focus on both aesthetics and
              functionality, we create websites that leave a lasting impression
              on your visitors while enhancing their user experience.
              <br />
              At Dental Brando, we understand the importance of a website that
              not only reflects your unique brand but also drives results. Our
              team of experts will collaborate closely with you to deliver a
              customized update that aligns perfectly with your practice's goals
              and values. We take the time to understand your specific needs and
              preferences, ensuring that the final product is a true reflection
              of your practice and its mission.
              <br />
              From improved navigation to enhanced user experience, our updates
              will make it effortless for patients to connect with your
              practice, access information, and schedule appointments. We
              implement strategic features that simplify the user journey and
              make your website an efficient tool for patient engagement. Our
              goal is to make it easy for patients to find what they need and to
              take the next steps in their dental care journey with confidence.
              <br />
              We are excited to partner with you in enhancing your dental
              practice's online presence. Choosing Dental Brando means investing
              in a website that stands out in the digital landscape and drives
              success. Let us help you create an online presence that exceeds
              expectations, drives growth, and fosters a deeper connection with
              your patients.
              <br />
            </div> */}
            <div>
              <img
                className="h-[50px] w-[150px] mt-6 ml-[-11px]"
                src={sign.src}
                alt=""
              />
            </div>

            <div className="end mt-2 ;">
              <p>Project Manager</p>
              <p>Dental Brando</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLetter;
