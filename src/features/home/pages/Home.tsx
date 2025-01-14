import { useState } from "react";
import Banner from "../components/Banner";
import Feed, { FeedType } from "../components/Feed";
import PopularTags from "../components/PopularTags";

export default function Home() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedFeedType, setSelectedFeedType] = useState(FeedType.global);

  return (
    <main>
      <div className="home-page">
        <Banner />

        <div className="container page">
          <div className="row" style={{ justifyContent: "center" }}>
            <Feed
              selectedFeedType={selectedFeedType}
              setSelectedFeedType={setSelectedFeedType}
              selectedTag={selectedTag}
              setSelectedTag={setSelectedTag}
            />

            <PopularTags
              setSelectedTag={setSelectedTag}
              setSelectedFeedType={setSelectedFeedType}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
