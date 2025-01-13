import { ProfileFeedType } from "./ProfileFeed";

export default function ProfileArticleToggle({
  selectedFeedType,
  setSelectedFeedType,
}: {
  selectedFeedType: ProfileFeedType;
  setSelectedFeedType: (FeedType: ProfileFeedType) => void;
}) {
  return (
    <div className="articles-toggle">
      <ul className="nav nav-pills outline-active">
        <li
          className={`nav-item nav-link ${
            selectedFeedType === ProfileFeedType.my_articles ? "active" : ""
          }`}
          onClick={() => setSelectedFeedType(ProfileFeedType.my_articles)}
          style={{ cursor: "pointer" }}
        >
          My Articles
        </li>

        <li
          className={`nav-item nav-link ${
            selectedFeedType === ProfileFeedType.favourited_articles
              ? "active"
              : ""
          }`}
          style={{ cursor: "pointer" }}
          onClick={() =>
            setSelectedFeedType(ProfileFeedType.favourited_articles)
          }
        >
          Favourited Articles
        </li>
      </ul>
    </div>
  );
}
