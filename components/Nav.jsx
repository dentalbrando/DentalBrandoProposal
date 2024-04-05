"use client";
import { useSelector } from "react-redux";
import logo from "@public/assets/new-logo.png";
import Link from "next/link";

const Nav = (props) => {
  const pageNo = useSelector((state) => state.page.formId);
  return (
    pageNo != 100 && (
      <>
        <div className="flex justify-start items-center w-full h-[12vh] border-b-2 border-color custom-bg relative">
          <Link href={"/"} className="w-[20vw] ps-7">
            <img src={logo.src} alt="" className="w-[18vw]" />
          </Link>
          <h1 className="text-main-blue text-[30px] font-medium w-[78vw] flex justify-center">
            {props.navText ? props.navText : "Proposal Manager"}
          </h1>
        </div>
      </>
    )
  );
};

export default Nav;
