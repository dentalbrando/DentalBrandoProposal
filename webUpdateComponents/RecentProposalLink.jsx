import Link from "next/link";
const RecentProposalLink = () => {
  return (
    <div className="w-[20vw] h-fit border-r-2 border-b-2 border-t-2 border-color px-7 py-4 my-3">
      <div className="flex">
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
