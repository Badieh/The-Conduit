import { useUserStore } from "@/stores/UserStore";
import { FeedType } from "./Feed";
import { FeedToggleItem } from "@/shared/components/FeedToggleItem";

export default function FeedToggle({
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
  const user = useUserStore((state) => state.user);
  return (
    <div className="border-b-gray-400 px-4">
      <ul className="flex items-center border-b-gray-400">
        {user && (
          <FeedToggleItem
            isSelected={selectedFeedType === FeedType.your_feed}
            children="Your Feed"
            onClick={() => {
              setSelectedTag?.(null);
              return setSelectedFeedType(FeedType.your_feed);
            }}
          />
        )}
        <FeedToggleItem
          isSelected={selectedFeedType === FeedType.global}
          children="Global Feed"
          onClick={() => {
            setSelectedTag?.(null);

            return setSelectedFeedType(FeedType.global);
          }}
        />

        {selectedFeedType === FeedType.popular_tags && selectedTag && (
          <FeedToggleItem
            isSelected={selectedFeedType === FeedType.popular_tags}
            onClick={() => {}}
          >
            <i className="ion-pound"></i>&nbsp;
            {selectedTag}
          </FeedToggleItem>
        )}
      </ul>
    </div>
  );
}
