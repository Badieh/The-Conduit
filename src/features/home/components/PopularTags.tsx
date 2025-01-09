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
    <div className="col-md-3">
      <div className="sidebar">
        <p>Popular Tags</p>

        <div className="tag-list">
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
    </div>
  );
}
