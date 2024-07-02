"use client";
import backCover from "@public/assets/socialMedia/back cover-09.png";
import location from "@public/assets/socialMedia/Untitled-1-03.png";
import phone from "@public/assets/socialMedia/Untitled-1-04.png";
import web from "@public/assets/socialMedia/Untitled-1-02.png";
import mail from "@public/assets/socialMedia/Untitled-1-01.png";
import logo from "@public/assets/socialMedia/SE color logo-09.png";

function Contact(prop) {
  return (
    <div className="w-[8.27in] h-[1123px] bg-white shadow-lg">
      <div className="flex flex-col justify-center items-center h-[100%] relative bg-red-10">
        <div className="absolute top-[50px] left-[10%]">
          <img src={logo.src} className="w-[65%]" />
        </div>
        <div className="w-full absolute top-[0%]">
          <img src={backCover.src} />
        </div>
        <div className="flex justify-center w-full h-[40%] absolute bottom-0 overflow-hidden">
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
                    sales@dentalbrando.com
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center w-full leading-snug">
                <div className="flex justify-start items-start gap-2">
                  <img src={web.src} className="w-[5%] relative" />
                  <span className="text-[16px] font-[400]">
                    www.dentalbrando.com
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
        <div className="absolute bottom-0 h-[100px] w-[100%] overflow-hidden z-[200]">
          <div className="w-[80%] h-[100%] bg-[rgb(204,236,255)] absolute left-[0%] rounded-tr-[100%] top-[20%]"></div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
