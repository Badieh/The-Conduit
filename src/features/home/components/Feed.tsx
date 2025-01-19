import FeedToggle from "./FeedToggle";
import GlobalFeedArticles from "./GlobalFeedArticles";
import YourFeedArticles from "./YourFeedArticles";
import TagFeedArticles from "./TagFeedArticles";

export default function Feed({
  selectedFeedType,
  setSelectedFeedType,
  selectedTag,
  setSelectedTag,
}: {
  selectedFeedType: FeedType;
  setSelectedFeedType: (FeedType: FeedType) => void;
  selectedTag: string | null;
  setSelectedTag: (tag: string | null) => void;
}) {
  return (
    <div className="mt-4 flex flex-col gap-3 sm:gap-6">
      <FeedToggle
        selectedFeedType={selectedFeedType}
        setSelectedFeedType={setSelectedFeedType}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />
      {selectedFeedType === FeedType.global && <GlobalFeedArticles />}
      {selectedFeedType === FeedType.your_feed && <YourFeedArticles />}
      {selectedFeedType === FeedType.popular_tags && selectedTag && (
        <TagFeedArticles tag={selectedTag} />
      )}
    </div>
  );
}

export enum FeedType {
  global = "global",
  your_feed = "your_feed",
  popular_tags = "popular_tags",
}
