"use client";

import { useSelector } from "react-redux";

function Packages(prop) {
  let packages = useSelector((state) => state.package_seo);
  return (
    <div className="w-[8.27in] h-[1123px] bg-white shadow-lg">
      <h1 className="text-center text">{packages.basic}</h1>
      <h1 className="text-center text">{packages.standard}</h1>
      <h1 className="text-center text">{packages.premium}</h1>
    </div>
  );
}
export default Packages;
