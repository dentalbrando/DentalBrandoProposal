"use client";
import { useSelector } from "react-redux";
import logo from "@public/assets/DB Logo-15.png";
import Link from "next/link";

const Nav = (props) => {
  // const pageNo = useSelector((state) => state.pageUpdate.formId);
  return (
    
      <>
        <div className="flex justify-start items-center w-full h-[12vh] border-b-2 border-color custom-b relative">
          <div  className="w-[20vw] flex justify-end items-center z-[10]">
          <Link href={"/"} className="w-[220px] flex justify-end items-center z-[10]">
            <img src={logo.src} alt="" className="w-full" />
          </Link>
          </div>
          <h1
            className={`text-main-blue text-[30px] font-medium z-[0]
          ${props.main ? "w-full" : "w-[80vw]"}
          w-[78vw]
          flex justify-center absolute right-0`}
          >
            {props.navText ? props.navText : "Proposal Manager"}
          </h1>
        </div>
      </>
    
  );
};

export default Nav;
 