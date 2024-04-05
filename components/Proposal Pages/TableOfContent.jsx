import img from "@public/assets/table of content's image.png";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const TableOfContent = () => {
  const pageSequence = useSelector((state) => state.pageSequence).pageSequence;
  let number = 0;

  // console.log(pageSequence);

  return ( 
    <>
      <div className="full-proposal flex justify-center items-center shadow-lg">
        <div
          style={{ fontFamily: "Open sans" }}
          className="flex justify-between w-[210mm] h-[297mm] mx-auto bg-white pl-14 "
        >
          <section className="w-[calc(100%-59px)]">
            <div className="text-[25pt] font-[700] text-[#00A2FF] mt-[131px] w-[305px] ">
              <div>
                <h1
                  style={{ lineHeight: "1", fontFamily: "Montserrat" }}
                  className="pl-1 "
                >
                  <p>TABLE OF CONTENT</p>
                </h1>
              </div>

              <div>
                <div className="w-[90px] bg-[#FED500] h-[6px]"></div>
              </div>
            </div>
            <div style={{ paddingRight: "44px" }} className="whitespace-nowrap">
              {pageSequence.map((page, index) => {
                const id = page.id;
                // if (id == "1") return;

                if (
                  page.checked &&
                  page.content !== "Cover Page" &&
                  page.content !== "Table of Contents"
                ) {
                  number++;
                } else {
                  return;
                }

                switch (id) {
                  case "1":
                    return (
                      page.checked &&
                      page.content !== "Cover Page" &&
                      page.content !== "Table of Contents" && (
                        <div
                          className={`${
                            index == "0" ? "mt-[55px]" : "mt-[17px]"
                          }`}
                        >
                          <div className="flex justify-between items-center text-[14pt] ">
                            <div className="w-[10rem] font-[400]">
                              <p>{page.content}</p>
                            </div>
                            <div
                              className="ml-[14px] text-gray-400"
                              style={{ fontFamily: "Open sans" }}
                            >
                              <p className="flex items-center justify-center">
                                ....................................................................................
                              </p>
                            </div>
                            <div
                              className="ml-[20px] flex items-center font-[400]"
                              style={{ fontFamily: "'Lato', sans-serif" }}
                            >
                              <p>{number < 10 ? "0" + number : number}</p>
                            </div>
                          </div>
                        </div>
                      )
                    );

                  case "2":
                    return (
                      page.checked &&
                      page.content !== "Cover Page" &&
                      page.content !== "Table of Contents" && (
                        <div
                          className={`${
                            index == "0" ? "mt-[55px]" : "mt-[17px]"
                          }`}
                          key={index}
                        >
                          <div className="flex justify-between items-center text-[14pt] ">
                            <div className="w-[10rem] font-[400]">
                              <p>{page.content}</p>
                            </div>
                            <div
                              className="ml-[14px] text-gray-400"
                              style={{ fontFamily: "Open sans" }}
                            >
                              <p className="flex items-center justify-center">
                                ....................................................................................
                              </p>
                            </div>
                            <div
                              className="ml-[20px] flex items-center font-[400]"
                              style={{ fontFamily: "'Lato', sans-serif" }}
                            >
                              <p>{number < 10 ? "0" + number : number}</p>
                            </div>
                          </div>
                        </div>
                      )
                    );
                  case "3":
                    return (
                      page.checked &&
                      page.content !== "Cover Page" &&
                      page.content !== "Table of Contents" && (
                        <div
                          className={`${
                            index == "0" ? "mt-[55px]" : "mt-[17px]"
                          }`}
                        >
                          <div className="flex justify-between items-center text-[14pt] ">
                            <div className="w-[10rem] font-[400]">
                              <p>{page.content}</p>
                            </div>
                            <div
                              className="ml-[14px] text-gray-400"
                              style={{ fontFamily: "Open sans" }}
                            >
                              <p className="flex items-center justify-center">
                                ....................................................................................
                              </p>
                            </div>
                            <div
                              className="ml-[20px] flex items-center font-[400]"
                              style={{ fontFamily: "'Lato', sans-serif" }}
                            >
                              <p>{number < 10 ? "0" + number : number}</p>
                            </div>
                          </div>
                        </div>
                      )
                    );
                  case "4":
                    return (
                      page.checked &&
                      page.content !== "Cover Page" &&
                      page.content !== "Table of Contents" && (
                        <div
                          className={`${
                            index == "0" ? "mt-[55px]" : "mt-[17px]"
                          }`}
                        >
                          <div className="flex justify-between items-center text-[14pt] ">
                            <div className="w-[10rem] font-[400]">
                              <p>{page.content}</p>
                            </div>
                            <div
                              className="ml-[14px] text-gray-400"
                              style={{ fontFamily: "Open sans" }}
                            >
                              <p className="flex items-center justify-center">
                                ....................................................................................
                              </p>
                            </div>
                            <div
                              className="ml-[20px] flex items-center font-[400]"
                              style={{ fontFamily: "'Lato', sans-serif" }}
                            >
                              <p>{number < 10 ? "0" + number : number}</p>
                            </div>
                          </div>
                        </div>
                      )
                    );
                  case "5":
                    return (
                      page.checked &&
                      page.content !== "Cover Page" &&
                      page.content !== "Table of Contents" && (
                        <div
                          className={`${
                            index == "0" ? "mt-[55px]" : "mt-[17px]"
                          }`}
                        >
                          <div className="flex justify-between items-center text-[14pt] ">
                            <div className="w-[10rem] font-[400]">
                              <p>{page.content}</p>
                            </div>
                            <div
                              className="ml-[14px] text-gray-400"
                              style={{ fontFamily: "Open sans" }}
                            >
                              <p className="flex items-center justify-center">
                                ....................................................................................
                              </p>
                            </div>
                            <div
                              className="ml-[20px] flex items-center font-[400]"
                              style={{ fontFamily: "'Lato', sans-serif" }}
                            >
                              <p>{number < 10 ? "0" + number : number}</p>
                            </div>
                          </div>
                        </div>
                      )
                    );
                  case "6":
                    return (
                      page.checked &&
                      page.content !== "Cover Page" &&
                      page.content !== "Table of Contents" && (
                        <div
                          className={`${
                            index == "0" ? "mt-[55px]" : "mt-[17px]"
                          }`}
                        >
                          <div className="flex justify-between items-center text-[14pt] ">
                            <div className="w-[10rem] font-[400]">
                              <p>{page.content}</p>
                            </div>
                            <div
                              className="ml-[14px] text-gray-400"
                              style={{ fontFamily: "Open sans" }}
                            >
                              <p className="flex items-center justify-center">
                                ....................................................................................
                              </p>
                            </div>
                            <div
                              className="ml-[20px] flex items-center font-[400]"
                              style={{ fontFamily: "'Lato', sans-serif" }}
                            >
                              <p>{number < 10 ? "0" + number : number}</p>
                            </div>
                          </div>
                        </div>
                      )
                    );
                  case "7":
                    return (
                      page.checked &&
                      page.content !== "Cover Page" &&
                      page.content !== "Table of Contents" && (
                        <div
                          className={`${
                            index == "0" ? "mt-[55px]" : "mt-[17px]"
                          }`}
                        >
                          <div className="flex justify-between items-center text-[14pt] ">
                            <div className="w-[10rem] font-[400]">
                              <p>{page.content}</p>
                            </div>
                            <div
                              className="ml-[14px] text-gray-400"
                              style={{ fontFamily: "Open sans" }}
                            >
                              <p className="flex items-center justify-center">
                                ....................................................................................
                              </p>
                            </div>
                            <div
                              className="ml-[20px] flex items-center font-[400]"
                              style={{ fontFamily: "'Lato', sans-serif" }}
                            >
                              <p>{number < 10 ? "0" + number : number}</p>
                            </div>
                          </div>
                        </div>
                      )
                    );
                  case "8":
                    return (
                      page.checked &&
                      page.content !== "Cover Page" &&
                      page.content !== "Table of Contents" && (
                        <div
                          className={`${
                            index == "0" ? "mt-[55px]" : "mt-[17px]"
                          }`}
                        >
                          <div className="flex justify-between items-center text-[14pt] ">
                            <div className="w-[10rem] font-[400]">
                              <p>{page.content}</p>
                            </div>
                            <div
                              className="ml-[14px] text-gray-400"
                              style={{ fontFamily: "Open sans" }}
                            >
                              <p className="flex items-center justify-center">
                                ....................................................................................
                              </p>
                            </div>
                            <div
                              className="ml-[20px] flex items-center font-[400]"
                              style={{ fontFamily: "'Lato', sans-serif" }}
                            >
                              <p>{number < 10 ? "0" + number : number}</p>
                            </div>
                          </div>
                        </div>
                      )
                    );
                  case "9":
                    return (
                      page.checked &&
                      page.content !== "Cover Page" &&
                      page.content !== "Table of Contents" && (
                        <div
                          className={`${
                            index == "0" ? "mt-[55px]" : "mt-[17px]"
                          }`}
                        >
                          <div className="flex justify-between items-center text-[14pt] ">
                            <div className="w-[10rem] font-[400]">
                              <p>{page.content}</p>
                            </div>
                            <div
                              className="ml-[14px] text-gray-400"
                              style={{ fontFamily: "Open sans" }}
                            >
                              <p className="flex items-center justify-center">
                                ....................................................................................
                              </p>
                            </div>
                            <div
                              className="ml-[20px] flex items-center font-[400]"
                              style={{ fontFamily: "'Lato', sans-serif" }}
                            >
                              <p>{number < 10 ? "0" + number : number}</p>
                            </div>
                          </div>
                        </div>
                      )
                    );
                  case "10":
                    return (
                      page.checked &&
                      page.content !== "Cover Page" &&
                      page.content !== "Table of Contents" && (
                        <div
                          className={`${
                            index == "0" ? "mt-[55px]" : "mt-[17px]"
                          }`}
                        >
                          <div className="flex justify-between items-center text-[14pt] ">
                            <div className="w-[10rem] font-[400]">
                              <p>{page.content}</p>
                            </div>
                            <div
                              className="ml-[14px] text-gray-400"
                              style={{ fontFamily: "Open sans" }}
                            >
                              <p className="flex items-center justify-center">
                                ....................................................................................
                              </p>
                            </div>
                            <div
                              className="ml-[20px] flex items-center font-[400]"
                              style={{ fontFamily: "'Lato', sans-serif" }}
                            >
                              <p>{number < 10 ? "0" + number : number}</p>
                            </div>
                          </div>
                        </div>
                      )
                    );
                  case "11":
                    return (
                      page.checked &&
                      page.content !== "Cover Page" &&
                      page.content !== "Table of Contents" && (
                        <div
                          className={`${
                            index == "0" ? "mt-[55px]" : "mt-[17px]"
                          }`}
                        >
                          <div className="flex justify-between items-center text-[14pt] ">
                            <div className="w-[10rem] font-[400]">
                              <p>{page.content}</p>
                            </div>
                            <div
                              className="ml-[14px] text-gray-400"
                              style={{ fontFamily: "Open sans" }}
                            >
                              <p className="flex items-center justify-center">
                                ....................................................................................
                              </p>
                            </div>
                            <div
                              className="ml-[20px] flex items-center font-[400]"
                              style={{ fontFamily: "'Lato', sans-serif" }}
                            >
                              <p>{number < 10 ? "0" + number : number}</p>
                            </div>
                          </div>
                        </div>
                      )
                    );
                }
              })}
            </div>

            <div className="mt-[3rem]">
              <div>
                <img src={img.src} alt="" width=" 674px" />
              </div>
            </div>
          </section>

          <section>
            <div className="flex flex-col justify-end items-end ">
              <div className="w-[59px] h-[297mm] bg-[#FED500]"></div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default TableOfContent;
