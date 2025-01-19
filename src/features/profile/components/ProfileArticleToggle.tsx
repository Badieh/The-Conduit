import { FeedToggleItem } from "@/shared/components/FeedToggleItem";
import { ProfileFeedType } from "./ProfileFeed";

export default function ProfileArticleToggle({
  selectedFeedType,
  setSelectedFeedType,
}: {
  selectedFeedType: ProfileFeedType;
  setSelectedFeedType: (FeedType: ProfileFeedType) => void;
}) {
  return (
    <div className="border-b-gray-400 px-4">
      <ul className="flex items-center border-b-gray-400">
        <FeedToggleItem
          isSelected={selectedFeedType === ProfileFeedType.my_articles}
          onClick={() => setSelectedFeedType(ProfileFeedType.my_articles)}
          children="My Articles"
        />

        <FeedToggleItem
          isSelected={selectedFeedType === ProfileFeedType.favourited_articles}
          onClick={() =>
            setSelectedFeedType(ProfileFeedType.favourited_articles)
          }
          children="Favourited Articles"
        />
      </ul>
    </div>
  );
}
