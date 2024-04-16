"use client";
import strips from "@public/assets/socialMedia/pic3.png";
import sign from "@public/assets/socialMedia/sign.fcbecd86.jpg";
function CoverLetter() {
  return (
    <div className="bg-white w-[8.27in] h-[29.7cm]">
      <div className="flex flex-col justify-center items-center h-[100%] bg-red-20 relative">
        <div className="absolute top-0 left-[7%]">
          <img src={strips.src} className="w-[50px]" />
        </div>
        <div className="w-[87%] h-[72%] bg-red-70">
          <div className="flex flex-col justify-center w-full bg-red50 leading-none">
            <span className="text-[#00A2FF] text-[44px] font-[600]">Cover</span>
            <span className="text-[#00A2FF] text-[44px] font-[600]">
              Letter
            </span>
            <div className="w-[100px] h-[5px] bg-yellow-400 my-3"></div>
          </div>
          <div className="flex flex-col justify-center w-full b-red-100">
            <span className="text-[24px] font-[700] underline">
              Dear Client
            </span>
            <p className="text-[15px] font-[500] mt-1 leading-normal">
              We are writing to express our interest in your Social Media
              Marketing project. We are a team of professionals who are always
              busy making businesses successful through Social Media Marketing.
              We are confident that we can take your online presence and brand
              visibility to an elevated level with our esteemed Social Media
              Marketing services.
            </p>
            <p className="text-[15px] font-[500] mt-5 leading-normal">
              Soft Enterprise specializes in creating customized Social Media
              strategies tailored to the unique needs of our clients. Social
              Media acts as a bridge, not only among friends and family but also
              between businesses and their target. As the social network grew
              from its emergence, so did the idea to use divergent platforms as
              a means of advertising and reaching out to different cohorts of
              target audiences. We leverage Social Media to market the products
              and services of our clients in their niche by micro-targeting
              audiences with our expertise.
            </p>
            <p className="text-[15px] font-[500] mt-5 leading-normal">
              We will work closely with you to understand your Social Media
              Marketing goals. Then we will craft comprehensive strategies by
              ensuring that they align with your project goals, your brand
              identity, and how they provide value to your target audience. We
              do your complete brand reputation management to make your brand
              image consistent across all your social media platforms. We will
              update you on our Social Media Marketing efforts with clear and
              detailed performance reports from advanced analytical tools
              indicating Key Performance Indicators.
            </p>
            <p className="text-[15px] font-[500] mt-5 leading-normal">
              We fulfill your project goals with open project communication,
              scheduled meetings, and reporting sessions. We are committed to
              upholding the highest level of professionalism in our services. We
              value our project partnerships to maintain the exclusivity of your
              project.
            </p>
            <p className="text-[15px] font-[500] mt-5 leading-normal">
              Thank you for considering Soft Enterprise for your Social Media
              Marketing needs. We are excited at the prospect of working with
              you and creating a cohesive social media brand presence for your
              business to help you succeed in the era of Social Media Marketing.
              <br />
              Sincerely,
            </p>
          </div>
          <div className="flex flex-col justify-center w-full mt-1">
            <div className="w-[200px] bg-red-300 ms-[-13px]">
              <img src={sign.src} className="" />
            </div>
            <p className="text-[15px] font-[500]">Project Manager</p>
            <p className="text-[15px] font-[500]"> Soft Enterprise</p>
          </div>
        </div>
        <div className="absolute bottom-0 h-[8%] w-full bg-green-30 overflow-hidden">
          <div className="flex justify-between items-center w-full px-16 h-full bg-blue-40 absolute top-0 left-0 z-[50]">
            <span className="text-gray-700 text-[15px] font-[500]">
              Social Media Marketing Proposal
            </span>
            <span className="text-gray-700 text-[15px] font-[500]">
              Page 01
            </span>
          </div>
          <div className="w-[200%] h-[350%] bg-blue-100 absolute top-[5%] right-[15%] rounded-[40%]"></div>
        </div>
      </div>
    </div>
  );
}
export default CoverLetter;
