"use client";
import { useSelector } from "react-redux";
import logo from "@public/assets/new-logo.png";

const Nav = (props) => {
  const pageNo = useSelector((state) => state.page.formId);
  return (
    pageNo != 100 && (
      <>
        <div className="flex justify-between items-center w-full h-[12vh] px-24 border-b-2 border-color custom-bg">
          <img src={logo.src} alt="" className="w-[18vw]" />
          <h1 className="text-main-blue text-[30px] p-5 font-medium">
            {props.navText ? props.navText : "Proposal Manager"}
          </h1>
        </div>
      </>
    )
  );
};

export default Nav;
