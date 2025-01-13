import { useState } from "react";
import ProfileArticleToggle from "./ProfileArticleToggle";
import AuthorFeedArticles from "./AuthorArticlesFeed";
import { Profile } from "../types/ProfileModel";
import FavouriteArticlesFeed from "./FavouriteArticlesFeed";

export default function ProfileFeed({ profile }: { profile: Profile }) {
  const [selectedFeedType, setSelectedFeedType] = useState(
    ProfileFeedType.my_articles
  );
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-10 offset-md-1">
          <ProfileArticleToggle
            selectedFeedType={selectedFeedType}
            setSelectedFeedType={setSelectedFeedType}
          />
          {selectedFeedType === ProfileFeedType.my_articles && (
            <AuthorFeedArticles username={profile?.username} />
          )}
          {selectedFeedType === ProfileFeedType.favourited_articles && (
            <FavouriteArticlesFeed username={profile?.username} />
          )}
        </div>
      </div>
    </div>
  );
}
export enum ProfileFeedType {
  my_articles = "my_articles",
  favourited_articles = "favourited_articles",
}
