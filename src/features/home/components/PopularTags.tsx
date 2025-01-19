import useAllTags from "../api/AllTagsApi";
import { FeedType } from "./Feed";
import Tag from "./Tag";

export default function PopularTags({
  setSelectedTag,
  setSelectedFeedType,
}: {
  setSelectedTag: (tag: string) => void;
  setSelectedFeedType: (FeedType: FeedType) => void;
}) {
  const { data } = useAllTags();
  const tags = data?.data.tags.slice(0, 50);

  return (
    <div className="m-4 flex flex-col gap-2 rounded-xl border border-gray-400 px-2 py-1 sm:mr-2 sm:mt-3 sm:py-2">
      <p className="font-semibold sm:text-lg">Popular Tags</p>
      <div className="flex flex-wrap gap-1">
        {tags?.map((tag: string) => (
          <Tag
            key={tag}
            tag={tag}
            setSelectedTag={setSelectedTag}
            setSelectedFeedType={setSelectedFeedType}
          />
        ))}
      </div>
    </div>
  );
}
