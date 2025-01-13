import { useUserStore } from "@/stores/UserStore";
import { FeedType } from "./Feed";

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
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active">
        {user && (
          <li
            className={`nav-item nav-link ${
              selectedFeedType === FeedType.your_feed ? "active" : ""
            }`}
            onClick={() => {
              setSelectedTag?.(null);
              return setSelectedFeedType(FeedType.your_feed);
            }}
            style={{ cursor: "pointer" }}
          >
            Your Feed
          </li>
        )}

        <li
          className={`nav-item nav-link ${
            selectedFeedType === FeedType.global ? "active" : ""
          }`}
          onClick={() => {
            setSelectedTag?.(null);

            return setSelectedFeedType(FeedType.global);
          }}
          style={{ cursor: "pointer" }}
        >
          Global Feed
        </li>
        {selectedFeedType === FeedType.popular_tags && selectedTag && (
          <li
            className={`nav-item nav-link ${
              selectedFeedType === FeedType.popular_tags ? "active" : ""
            }`}
            style={{ cursor: "pointer" }}
          >
            <i className="ion-pound"></i>&nbsp;
            {selectedTag}
          </li>
        )}
      </ul>
    </div>
  );
}
