import Link from "next/link";
const RecentProposalLink = () => {
  return (
    <div className="w-[20vw] h-fit custom-bg shadow-lg top-[20vh] rounded-r-3xl py-3 my-5">
      <div className="flex p-3">
        <Link
          className="button border border-gray-200 p-3 rounded-3xl bg-white w-full text-center"
          href="/recent"
        >
          Recent proposals
        </Link>
      </div>
    </div>
  );
};

export default RecentProposalLink;
