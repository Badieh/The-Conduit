import { useState } from "react";
import FeedToggle from "./FeedToggle";
import GlobalFeedArticles from "./GlobalFeedArticles";
import YourFeedArticles from "./YourFeedArticles";

export default function Feed() {
  const [selectedFeedType, setSelectedFeed] = useState(FeedType.global); // value can be "global" or "your_feed"

  return (
    <div className="col-md-9">
      <FeedToggle
        selectedFeedType={selectedFeedType}
        setSelectedFeed={setSelectedFeed}
      />
      {selectedFeedType === FeedType.global && <GlobalFeedArticles />}
      {selectedFeedType === FeedType.your_feed && <YourFeedArticles />}
    </div>
  );
}

export enum FeedType {
  global = "global",
  your_feed = "your_feed",
}
