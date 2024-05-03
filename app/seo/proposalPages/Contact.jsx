"use client";
import seo3 from "@public/assets/socialMedia/seo3.png";
import seo2 from "@public/assets/socialMedia/seo2.png";
import logo from "@public/assets/socialMedia/SE color logo-09.png";

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
        <div className="absolute bottom-0 h-[15%] w-[100%] overflow-hidden ">
          <img src={seo3.src} className="h-full rotate-180" />
        </div>
      </div>
    </div>
  );
}
export default Contact;
