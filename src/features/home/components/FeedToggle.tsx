import { useUserStore } from "@/stores/UserStore";
import { FeedType } from "./Feed";

export default function FeedToggle({
  selectedFeedType,
  setSelectedFeed,
}: {
  selectedFeedType: FeedType;
  setSelectedFeed: (FeedType: FeedType) => void;
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
            onClick={() => setSelectedFeed(FeedType.your_feed)}
            style={{ cursor: "pointer" }}
          >
            Your Feed
          </li>
        )}

        <li
          className={`nav-item nav-link ${
            selectedFeedType === FeedType.global ? "active" : ""
          }`}
          onClick={() => setSelectedFeed(FeedType.global)}
          style={{ cursor: "pointer" }}
        >
          Global Feed
        </li>
      </ul>
    </div>
  );
}
