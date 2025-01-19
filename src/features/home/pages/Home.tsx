import { useState } from "react";
import Banner from "../components/Banner";
import Feed, { FeedType } from "../components/Feed";
import PopularTags from "../components/PopularTags";

export default function Home() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedFeedType, setSelectedFeedType] = useState(FeedType.global);

  return (
    <main>
      <div>
        <Banner />
        <div className="grid grid-cols-1 sm:grid-cols-3 md:px-20">
          <div className="sm:col-span-2">
            <Feed
              selectedFeedType={selectedFeedType}
              setSelectedFeedType={setSelectedFeedType}
              selectedTag={selectedTag}
              setSelectedTag={setSelectedTag}
            />
          </div>
          <div className="h-auto sm:col-span-1">
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
