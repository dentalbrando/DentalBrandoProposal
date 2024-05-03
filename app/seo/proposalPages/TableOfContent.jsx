"use client";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import seo3 from "@public/assets/socialMedia/seo3.png";
function TableOfContent() {
  const pageSequenceSeo = useSelector(
    (state) => state.pageSequenceSeo
  ).pageSequenceSeo;
  let number = 0;

  return (
    <div className="w-[8.27in] h-[1123px] bg-white shadow-lg">
      <div className="flex flex-col justify-center items-center h-[100%] relative">
        <div className="flex-end w-full h-[15%] absolute top-0 overflow-hidden ">
          <img src={seo3.src} className="h-full" />
        </div>

        <div className="w-[80%] z-[100] absolute top-[20%] flex flex-col justify-start items-center gap-10 ">
          <div className="bg-red-40 flex flex-col justify-center leading-none">
            <span className="text-[#00A2FF] text-center text-[56px] font-[700]">
              TABLE OF
            </span>
            <span className="text-[#ffd600] text-center text-[56px] font-[700]">
              CONTENT
            </span>
          </div>
          <div
            className={`w-[80%] h-[80%] bg-red-40 flex flex-col justify-betwee items-center leading-none`}
          >
            {pageSequenceSeo.map((page, index) => {
              const id = page.id;

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
                        className={`mt-[5px]  w-[100%] py-[10px] rounded-xl px-[10px]
                        ${
                          number % 2 === 0
                            ? "bg-[rgb(239,239,240)]"
                            : "bg-[rgb(0,162,255)] text-white"
                        }
                          `}
                      >
                        <div className="flex justify-between items-center text-[14pt] w-[100%] rounded-xl">
                          <div className=" font-[400]">
                            <p>{page.content}</p>
                          </div>
                          <div
                            className="ml-[14px]"
                            style={{ fontFamily: "Open sans" }}
                          ></div>
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
                        className={`mt-[5px]  w-[100%] py-[10px] rounded-xl px-[10px]                                                ${
                          number % 2 === 0
                            ? "bg-[rgb(239,239,240)]"
                            : "bg-[rgb(0,162,255)] text-white"
                        }
`}
                        key={index}
                      >
                        <div className="flex justify-between items-center text-[14pt] w-[100%]  rounded-xl">
                          <div className=" font-[400]">
                            <p>{page.content}</p>
                          </div>
                          <div
                            className="ml-[14px] text-gray-400"
                            style={{ fontFamily: "Open sans" }}
                          ></div>
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
                        className={`mt-[5px]  w-[100%] py-[10px] rounded-xl px-[10px]                                                ${
                          number % 2 === 0
                            ? "bg-[rgb(239,239,240)]"
                            : "bg-[rgb(0,162,255)] text-white"
                        }
`}
                      >
                        <div className="flex justify-between items-center text-[14pt] w-[100%]  rounded-xl">
                          <div className=" font-[400]">
                            <p>{page.content}</p>
                          </div>
                          <div
                            className="ml-[14px] text-gray-400"
                            style={{ fontFamily: "Open sans" }}
                          ></div>
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
                        className={`mt-[5px]  w-[100%] py-[10px] rounded-xl px-[10px]                                                ${
                          number % 2 === 0
                            ? "bg-[rgb(239,239,240)]"
                            : "bg-[rgb(0,162,255)] text-white"
                        }
`}
                      >
                        <div className="flex justify-between items-center text-[14pt] w-[100%]  rounded-xl">
                          <div className=" font-[400]">
                            <p>{page.content}</p>
                          </div>
                          <div
                            className="ml-[14px] text-gray-400"
                            style={{ fontFamily: "Open sans" }}
                          ></div>
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
                        className={`mt-[5px]  w-[100%] py-[10px] rounded-xl px-[10px]                                                ${
                          number % 2 === 0
                            ? "bg-[rgb(239,239,240)]"
                            : "bg-[rgb(0,162,255)] text-white"
                        }
`}
                      >
                        <div className="flex justify-between items-center text-[14pt] w-[100%]  rounded-xl">
                          <div className=" font-[400]">
                            <p>{page.content}</p>
                          </div>
                          <div
                            className="ml-[14px] text-gray-400"
                            style={{ fontFamily: "Open sans" }}
                          ></div>
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
                        className={`mt-[5px]  w-[100%] py-[10px] rounded-xl px-[10px]                                                ${
                          number % 2 === 0
                            ? "bg-[rgb(239,239,240)]"
                            : "bg-[rgb(0,162,255)] text-white"
                        }
`}
                      >
                        <div className="flex justify-between items-center text-[14pt] w-[100%]  rounded-xl">
                          <div className=" font-[400]">
                            <p>{page.content}</p>
                          </div>
                          <div
                            className="ml-[14px] text-gray-400"
                            style={{ fontFamily: "Open sans" }}
                          ></div>
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
                        className={`mt-[5px]  w-[100%] py-[10px] rounded-xl px-[10px]                                                ${
                          number % 2 === 0
                            ? "bg-[rgb(239,239,240)]"
                            : "bg-[rgb(0,162,255)] text-white"
                        }
`}
                      >
                        <div className="flex justify-between items-center text-[14pt] w-[100%]  rounded-xl">
                          <div className=" font-[400]">
                            <p>{page.content}</p>
                          </div>
                          <div
                            className="ml-[14px] text-gray-400"
                            style={{ fontFamily: "Open sans" }}
                          ></div>
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
                        className={`mt-[5px]  w-[100%] py-[10px] rounded-xl px-[10px]                                                ${
                          number % 2 === 0
                            ? "bg-[rgb(239,239,240)]"
                            : "bg-[rgb(0,162,255)] text-white"
                        }
`}
                      >
                        <div className="flex justify-between items-center text-[14pt] w-[100%]  rounded-xl">
                          <div className=" font-[400]">
                            <p>{page.content}</p>
                          </div>
                          <div
                            className="ml-[14px] text-gray-400"
                            style={{ fontFamily: "Open sans" }}
                          ></div>
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
                        className={`mt-[5px]  w-[100%] py-[10px] rounded-xl px-[10px]                                                ${
                          number % 2 === 0
                            ? "bg-[rgb(239,239,240)]"
                            : "bg-[rgb(0,162,255)] text-white"
                        }
`}
                      >
                        <div className="flex justify-between items-center text-[14pt] w-[100%]  rounded-xl">
                          <div className=" font-[400]">
                            <p>{page.content}</p>
                          </div>
                          <div
                            className="ml-[14px] text-gray-400"
                            style={{ fontFamily: "Open sans" }}
                          ></div>
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
                        className={`mt-[5px]  w-[100%] py-[10px] rounded-xl px-[10px]                                                ${
                          number % 2 === 0
                            ? "bg-[rgb(239,239,240)]"
                            : "bg-[rgb(0,162,255)] text-white"
                        }
`}
                      >
                        <div className="flex justify-between items-center text-[14pt] w-[100%]  rounded-xl">
                          <div className=" font-[400]">
                            <p>{page.content}</p>
                          </div>
                          <div
                            className="ml-[14px] text-gray-400"
                            style={{ fontFamily: "Open sans" }}
                          ></div>
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
                        className={`mt-[5px]  w-[100%] py-[10px] rounded-xl px-[10px]                                                ${
                          number % 2 === 0
                            ? "bg-[rgb(239,239,240)]"
                            : "bg-[rgb(0,162,255)] text-white"
                        }
`}
                      >
                        <div className="flex justify-between items-center text-[14pt] w-[100%]  rounded-xl">
                          <div className=" font-[400]">
                            <p>{page.content}</p>
                          </div>
                          <div
                            className="ml-[14px] text-gray-400"
                            style={{ fontFamily: "Open sans" }}
                          ></div>
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
                case "12":
                  return (
                    page.checked &&
                    page.content !== "Cover Page" &&
                    page.content !== "Table of Contents" && (
                      <div
                        className={`mt-[5px]  w-[100%] py-[10px] rounded-xl px-[10px]                                                ${
                          number % 2 === 0
                            ? "bg-[rgb(239,239,240)]"
                            : "bg-[rgb(0,162,255)] text-white"
                        }
`}
                      >
                        <div className="flex justify-between items-center text-[14pt] w-[100%]  rounded-xl">
                          <div className=" font-[400]">
                            <p>{page.content}</p>
                          </div>
                          <div
                            className="ml-[14px] text-gray-400"
                            style={{ fontFamily: "Open sans" }}
                          ></div>
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
                case "13":
                  return (
                    page.checked &&
                    page.content !== "Cover Page" &&
                    page.content !== "Table of Contents" && (
                      <div
                        className={`mt-[5px]  w-[100%] py-[10px] rounded-xl px-[10px]                                                ${
                          number % 2 === 0
                            ? "bg-[rgb(239,239,240)]"
                            : "bg-[rgb(0,162,255)] text-white"
                        }
`}
                      >
                        <div className="flex justify-between items-center text-[14pt] w-[100%]  rounded-xl">
                          <div className=" font-[400]">
                            <p>{page.content}</p>
                          </div>
                          <div
                            className="ml-[14px] text-gray-400"
                            style={{ fontFamily: "Open sans" }}
                          ></div>
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
                case "14":
                  return (
                    page.checked &&
                    page.content !== "Cover Page" &&
                    page.content !== "Table of Contents" && (
                      <div
                        className={`mt-[5px]  w-[100%] py-[10px] rounded-xl px-[10px]                                                ${
                          number % 2 === 0
                            ? "bg-[rgb(239,239,240)]"
                            : "bg-[rgb(0,162,255)] text-white"
                        }
`}
                      >
                        <div className="flex justify-between items-center text-[14pt] w-[100%]  rounded-xl">
                          <div className=" font-[400]">
                            <p>{page.content}</p>
                          </div>
                          <div
                            className="ml-[14px] text-gray-400"
                            style={{ fontFamily: "Open sans" }}
                          ></div>
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
                case "15":
                  return (
                    page.checked &&
                    page.content !== "Cover Page" &&
                    page.content !== "Table of Contents" && (
                      <div
                        className={`mt-[5px]  w-[100%] py-[10px] rounded-xl px-[10px]                                                ${
                          number % 2 === 0
                            ? "bg-[rgb(239,239,240)]"
                            : "bg-[rgb(0,162,255)] text-white"
                        }
`}
                      >
                        <div className="flex justify-between items-center text-[14pt] w-[100%]  rounded-xl">
                          <div className=" font-[400]">
                            <p>{page.content}</p>
                          </div>
                          <div
                            className="ml-[14px] text-gray-400"
                            style={{ fontFamily: "Open sans" }}
                          ></div>
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
                case "16":
                  return (
                    page.checked &&
                    page.content !== "Cover Page" &&
                    page.content !== "Table of Contents" && (
                      <div
                        className={`mt-[5px]  w-[100%] py-[10px] rounded-xl px-[10px]                                                ${
                          number % 2 === 0
                            ? "bg-[rgb(239,239,240)]"
                            : "bg-[rgb(0,162,255)] text-white"
                        }
`}
                      >
                        <div className="flex justify-between items-center text-[14pt] w-[100%]  rounded-xl">
                          <div className=" font-[400]">
                            <p>{page.content}</p>
                          </div>
                          <div
                            className="ml-[14px] text-gray-400"
                            style={{ fontFamily: "Open sans" }}
                          ></div>
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
        </div>

        <div className="absolute bottom-0 h-[15%] w-[100%] overflow-hidden ">
          <img src={seo3.src} className="h-full rotate-180" />
        </div>
      </div>
    </div>
  );
}
export default TableOfContent;
