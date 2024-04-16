"use client";
function TableOfContent() {
  return (
    <div className="bg-green-20 w-[8.27in] minh-[29.7cm] h-[29.7cm] bg-white">
      <div className="flex flex-col justify-center items-center h-[100%] bg-red-00 relative bg-red-10">
        <div className="flex w-full h-[40%] absolute top-0 overflow-hidden">
          <div className="w-[120%] h-[75%] rounded-br-[300%] rounded-bl-[80%] absolute top-[-30%] right-[-10%] z-[50] bg-[#00A2FF]"></div>
          <div className="w-[60%] h-[120%] rounded-[50%] top-[-70%] right-[-20%] z-[10] bg-[#ffd600] absolute"></div>
        </div>

        <div className="w-[80%] h-[68%] bg-green-10 z-[100] absolute bottom-[10%] flex flex-col justify-start items-center gap-10">
          <div className="bg-red-40 flex flex-col justify-center leading-none">
            <span className="text-[#00A2FF] text-center text-[56px] font-[700]">
              TABLE OF
            </span>
            <span className="text-[#ffd600] text-center text-[56px] font-[700]">
              CONTENT
            </span>
          </div>
          <div className="w-[80%] h-[80%] bg-red-40 flex flex-col justify-between items-center leading-none">
            <div className="w-[100%] h-[8%] rounded-xl bg-[rgb(239,239,240)] flex justify-between items-center px-10">
              <span className="text-[20px] font-[600]">Cover Letter</span>
              <span className="text-[20px] font-[600]">01</span>
            </div>
            <div className="w-[100%] h-[8%] rounded-xl bg-[rgb(0,162,255)] flex justify-between items-center px-10">
              <span className="text-[20px] font-[600]">About Us</span>
              <span className="text-[20px] font-[600]">02</span>
            </div>
            <div className="w-[100%] h-[8%] rounded-xl bg-[rgb(239,239,240)] flex justify-between items-center px-10">
              <span className="text-[20px] font-[600]">Project Objective</span>
              <span className="text-[20px] font-[600]">03</span>
            </div>
            <div className="w-[100%] h-[8%] rounded-xl bg-[rgb(0,162,255)] flex justify-between items-center px-10">
              <span className="text-[20px] font-[600]">
                Marketing Activities
              </span>
              <span className="text-[20px] font-[600]">04</span>
            </div>
            <div className="w-[100%] h-[8%] rounded-xl bg-[rgb(239,239,240)] flex justify-between items-center px-10">
              <span className="text-[20px] font-[600]">Our Valued Clients</span>
              <span className="text-[20px] font-[600]">05</span>
            </div>
            <div className="w-[100%] h-[8%] rounded-xl bg-[rgb(0,162,255)] flex justify-between items-center px-10">
              <span className="text-[20px] font-[600]">
                Social Media Advertisement Packages
              </span>
              <span className="text-[20px] font-[600]">06</span>
            </div>
            <div className="w-[100%] h-[8%] rounded-xl bg-[rgb(239,239,240)] flex justify-between items-center px-10">
              <span className="text-[20px] font-[600]">
                Social Media Post Design Packages
              </span>
              <span className="text-[20px] font-[600]">07</span>
            </div>
            <div className="w-[100%] h-[8%] rounded-xl bg-[rgb(0,162,255)] flex justify-between items-center px-10">
              <span className="text-[20px] font-[600]">
                Social Media Marketing Packages
              </span>
              <span className="text-[20px] font-[600]">08</span>
            </div>
            <div className="w-[100%] h-[8%] rounded-xl bg-[rgb(239,239,240)] flex justify-between items-center px-10">
              <span className="text-[20px] font-[600]">Invoice</span>
              <span className="text-[20px] font-[600]">09</span>
            </div>
            <div className="w-[100%] h-[8%] rounded-xl bg-[rgb(0,162,255)] flex justify-between items-center px-10">
              <span className="text-[20px] font-[600]">Terms & Conditions</span>
              <span className="text-[20px] font-[600]">10</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 h-[8%] w-full bg-green-30 overflow-hidden">
          <div className="flex justify-between items-center w-full px-16 h-full bg-blue-40 absolute top-0 left-0 z-[50]"></div>
          <div className="w-[200%] h-[350%] bg-blue-100 absolute top-[5%] right-[15%] rounded-[40%]"></div>
        </div>
      </div>
    </div>
  );
}
export default TableOfContent;
