import { FeedType } from "./Feed";

export default function Tag({
  tag,
  setSelectedTag,
  setSelectedFeedType,
}: {
  tag: string;
  setSelectedTag: (tag: string) => void;
  setSelectedFeedType: (FeedType: FeedType) => void;
}) {
  return (
    <div
      className="tag-pill tag-default"
      style={{ cursor: "pointer" }}
      onClick={() => {
        setSelectedFeedType(FeedType.popular_tags);
        return setSelectedTag(tag);
      }}
    >
      {tag}
    </div>
  );
}
