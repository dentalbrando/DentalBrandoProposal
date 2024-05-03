"use client";
import seo4 from "@public/assets/socialMedia/seo4.png";

function ValuedClient(prop) {
  return (
    <div className="w-[8.27in] h-[1123px] bg-white shadow-lg">
      <div className="flex flex-col justify-center items-center h-[100%] bg-red-20 relative">
        <div className="flex w-full h-[47%] absolute top-0 overflow-hidden ">
          <div className="w-[120%] h-[95%] absolute top-[-15%] left-[-5%] rotate-[-7deg] z-[50] bg-[#00A2FF] flex justify-center items-center"></div>
          <div className="absolute w-[87%] right-[6.5%] top-[120px] z-[200]">
            <div className="flex flex-col justify-center w-full leading-[53px]">
              <span className="text-[white] text-[44px] font-[600]">
                Our Valued
              </span>
              <span className="text-[white] text-[44px] font-[600]">
                Clients
              </span>
              <div className="w-[70px] h-[5px] bg-yellow-400 my-3"></div>
            </div>
            <div className="flex flex-col justify-center w-full leading-snug">
              <span className="text-[white] text-[15px] font-[400]">
                We have received true recognition from our clients for
                delivering the projects through our exceptional Search Engine
                Optimization Services. Our client base spans a wide range of
                industries. Whatever industry you are coming from, we understand
                your unique needs with our commitment to excellence and
                innovation. Join our growing list of satisfied clients to drive
                your business forward.
              </span>
            </div>
          </div>
          <div className="flex items-end justify-center w-[35%] h-[100%] bottom-[-10px] right-[-5%] z-[0]  absolute">
            <img src={seo4.src} className="rotate-[-7deg] w-full" />
          </div>
        </div>
        <div className="absolute bottom-0 h-[110px] w-[100%] overflow-hidden bg-red-40">
          <div className="flex justify-between items-center w-full px-14 h-full absolute top-[18%] left-0 z-[50]">
            <span className="text-gray-700 text-[15px] font-[500]">
              Search Engine Optimization Proposal
            </span>
            <span className="text-gray-700 text-[15px] font-[500]">
              {prop.pageNumber < 10 ? "0" + prop.pageNumber : prop.pageNumber}
            </span>
          </div>
          <div className="w-[110%] h-[90%] bg-[rgb(255,246,203)] absolute left-[-5%] top-[55%] rotate-[7deg]"></div>
          <div className="w-[110%] h-[90%] bg-[rgb(204,236,255)] absolute left-[-5%] top-[60%] rotate-[7deg]"></div>
        </div>
      </div>
    </div>
  );
}
export default ValuedClient;
