import { useGetProfile } from "../api/GetProfileApi";
import ProfileBanner from "../components/ProfileBanner";
import ProfileFeed from "../components/ProfileFeed";
import type { Profile } from "../types/ProfileModel";
import Loading from "@/shared/components/Loading";
import { useParams } from "react-router";

export default function Profile() {
  const params = useParams();
  const { data, isLoading } = useGetProfile(params.id!);
  const profile: Profile = data?.data?.profile;

  if (isLoading) return <Loading />;

  return (
    <div className="profile-page">
      <ProfileBanner profile={profile} />
      <ProfileFeed profile={profile} />
    </div>
  );
}
