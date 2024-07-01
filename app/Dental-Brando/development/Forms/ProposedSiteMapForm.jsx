import { setSiteMapBd } from "@app/store/proposedSitemapBd";
import { setSiteMapOverview } from "@app/store/proposedSitemapOverviewBd";

import { setSiteMap2 } from "@app/store/proposedSitemap2Bd";
import NestedList, { NestedListB } from "@components/NestedList";
import TextInput from "@components/TextInput";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ProposedSiteMapForm = () => {
  const sitemapDataoverview = useSelector(
    (state) => state.proposedSitemapOverviewBd
  );
  const dispatch = useDispatch();
  return (
    <div className="overflow-y-visible custom-scroll mt-5 h-fit custom-bg w-[900px] py-12 px-12 rounded-2xl border-2 border-color">
      <TextInput
        label="Overview"
        type="text"
        length="full"
        placeholder="Enter Project Name"
        value={sitemapDataoverview.overview}
        onChange={(event) => {
          dispatch(setSiteMapOverview(event.target.value));
        }}
      />
      <NestedList
        proposedSitemap={1}
        setSiteMap={setSiteMapBd}
        shortcutKey={"a"}
      />
      <NestedListB
        proposedSitemap={2}
        setSiteMap={setSiteMap2}
        shortcutKey={"b"}
      />
    </div>
  );
};

export default ProposedSiteMapForm;
