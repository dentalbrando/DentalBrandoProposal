"use client";
import seo3 from "@public/assets/socialMedia/seo3.png";
import seo2 from "@public/assets/socialMedia/seo2.png";
import logo from "@public/assets/socialMedia/SE color logo-09.png";
import location from "@public/assets/socialMedia/Untitled-1-03.png";
import phone from "@public/assets/socialMedia/Untitled-1-04.png";
import web from "@public/assets/socialMedia/Untitled-1-02.png";
import mail from "@public/assets/socialMedia/Untitled-1-01.png";


function Contact(prop) {
  return (
    <div className="w-[8.27in] h-[1123px] bg-white shadow-lg">
      <div className="flex flex-col justify-center items-center h-[100%] bg-red-20 relative">
        <div className="flex-end w-full w-full h-[75%] absolute top-0 overflow-hidden ">
          <img src={seo2.src} className="h-full w-full" />
        </div>
        <div className="flex-start w-[100%] h-[25%] absolute top-0 overflow-hidden ps-24">
          <img src={logo.src} className="w-[25%]" />
        </div>
        <div className="flex justify-center w-full h-[35%] absolute bottom-0 overflow-hidden">
          <div className="w-[70%] h-[65%]">
            <div className="flex flex-col justify-center w-full leading-none">
              <span className="text-[#00A2FF] text-[44px] font-[600]">
                Contact Us
              </span>
              <div className="w-[70px] h-[5px] bg-yellow-400 my-3"></div>
            </div>
            <div className="flex flex-col gap-[15px]">
              <div className="flex flex-col w-full leading-tight">
                <div className="flex justify-start items-start gap-2">
                  <img src={phone.src} className="w-[5%] relative" />
                  <span className="text-[16px] font-[400]">
                    +92 333 7652182 <br />
                    +92 (42) 37815508
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center w-full leading-snug">
                <div className="flex justify-start items-start gap-2">
                  <img src={mail.src} className="w-[5%] relative" />
                  <span className="text-[16px] font-[400]">
                    info@soft-enterprise.com
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center w-full leading-snug">
                <div className="flex justify-start items-start gap-2">
                  <img src={web.src} className="w-[5%] relative" />
                  <span className="text-[16px] font-[400]">
                    www.soft-enterprise.com
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center w-full leading-snug">
                <div className="flex justify-start items-start gap-2">
                  <img src={location.src} className="w-[5%] relative" />
                  <span className="text-[16px] font-[400] w-[40%]">
                    53, Hamza Heights, Quaid Block Commercial, Bahria Town,
                    Lahore.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 h-[15%] w-[100%] overflow-hidden ">
          <img src={seo3.src} className="h-full rotate-180" />
        </div>
      </div>
    </div>
  );
}
export default Contact;
