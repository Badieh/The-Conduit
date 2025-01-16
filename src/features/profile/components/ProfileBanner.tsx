import UserImage from "@/shared/components/UserImage";
import { Profile } from "../types/ProfileModel";
import { Link } from "react-router";
import { paths } from "@/routes/AppRouter";
import { useUserStore } from "@/stores/UserStore";

export default function ProfileBanner({ profile }: { profile: Profile }) {
  const user = useUserStore((state) => state.user);
  return (
    <div className="user-info">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <UserImage image={profile?.image} className="user-img" />

            <h4>{profile?.username}</h4>
            <p>{profile?.bio}</p>
            {user?.username !== profile?.username && (
              <button
                className={`btn btn-sm btn-outline-${
                  profile?.following ? "primary" : "secondary"
                } action-btn`}
              >
                <i className="ion-plus-round"></i>
                &nbsp; {profile?.following ? "Unfollow" : "Follow"}
              </button>
            )}
            {user?.username === profile?.username && (
              <Link to={paths.setting.getHref()}>
                <button className="btn btn-sm btn-outline-secondary action-btn">
                  <i className="ion-gear-a"></i>
                  &nbsp; Edit Profile Settings
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
