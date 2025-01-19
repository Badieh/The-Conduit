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
      className="cursor-pointer rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700"
      onClick={() => {
        setSelectedFeedType(FeedType.popular_tags);
        return setSelectedTag(tag);
      }}
    >
      {tag}
    </div>
  );
}
