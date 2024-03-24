import { useSelector } from "react-redux";

export default function SaveProposaltoDb() {
  let page = useSelector((state) => state.page);
  let aboutYourProject = useSelector((state) => state.aboutYourProject);
  let budget = useSelector((state) => state.budget);
  let cover_letter = useSelector((state) => state.cover_letter);
  let cover_page = useSelector((state) => state.cover_page);
  let pageSequence = useSelector((state) => state.pageSequence);
  let popup = useSelector((state) => state.cover_page);
  let proposedSitemap = useSelector((state) => state.proposedSitemap);
  let proposedSitemap2 = useSelector((state) => state.proposedSitemap2);
  function submit() {
    console.log(
      "page: ",
      page,
      "aboutYourProject: ",
      aboutYourProject,
      "budget: ",
      budget,
      "cover_letter: ",
      cover_letter,
      "cover_page: ",
      cover_page,
      "pageSequence: ",
      pageSequence,
      "popup: ",
      popup,
      "proposedSitemap: ",
      proposedSitemap,
      "proposedSitemap2: ",
      proposedSitemap2
    );
  }
  return (
    <>
      <button onClick={submit}>submit</button>
    </>
  );
}
